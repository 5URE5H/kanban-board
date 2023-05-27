import { useReducer, useState } from "react";
import { Workflows } from "./components/Workflows";
import "./styles.css";

export interface Workflow {
  id: string;
  label: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
}

export enum Actions {
  AddWorkflow = "ADD_WORKFLOW",
  AddTask = "ADD_TASK",
  MoveTask = "MOVE_TASK"
}

const existingWorkflows: Workflow[] = [
  {
    id: "1",
    label: "Todo",
    tasks: [
      {
        id: "1",
        title: "task 1",
        description: "lorem ipsumasdas lkajsdf lkasjdfs"
      }
    ]
  },
  {
    id: "2",
    label: "Inprogress",
    tasks: []
  },
  {
    id: "3",
    label: "In QA",
    tasks: []
  },
  {
    id: "4",
    label: "Done",
    tasks: [
      {
        id: "2",
        title: "task 3",
        description: "lorem ipsumasdas lkajsdf lkasjdfs"
      }
    ]
  }
];

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.MoveTask: {
      const { task, srcWorkflowId, destWorkflowId } = action.payload;
      console.log({ state, srcWorkflowId, destWorkflowId });
      return state.map((workflow) => {
        if (workflow.id === srcWorkflowId) {
          workflow.tasks = workflow.tasks.filter((t) => task.id !== t.id);
        }
        if (workflow.id === destWorkflowId) {
          if (!workflow.tasks.some((t) => t.id === task.id))
            workflow.tasks = [...workflow.tasks, task];
        }
        return workflow;
      });
    }
    default:
      return state;
  }
};

export default function App() {
  // const [workflows, setWorkflows] = useState<Workflow[]>(existingWorkflows);
  const [workflows, dispatch] = useReducer(reducer, existingWorkflows);

  return (
    <div className="container">
      <Workflows workflows={workflows} dispatch={dispatch} />
    </div>
  );
}
