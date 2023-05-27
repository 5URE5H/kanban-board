import { Workflow } from "./Workflow";

export const existingCards = [
  {
    id: "1",
    label: "one",
    workflowId: "1"
  },
  {
    id: "2",
    label: "one",
    workflowId: "1"
  },
  {
    id: "3",
    label: "one",
    workflowId: "3"
  },
  {
    id: "4",
    label: "one",
    workflowId: "4"
  }
];

export const Workflows = ({ workflows, dispatch }) => {
  return (
    <>
      <div className="workflow-container">
        {workflows.map((workflow) => {
          return (
            <Workflow
              key={workflow.id}
              workflow={workflow}
              dispatch={dispatch}
            />
          );
        })}
      </div>
    </>
  );
};
