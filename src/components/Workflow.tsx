import { Actions } from "../App";
import { Cards } from "./Cards";

export const Workflow = ({ workflow, dispatch }) => {
  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drop(ev) {
    ev.preventDefault();
    const jsonData = ev.dataTransfer.getData("task");
    const data = JSON.parse(jsonData);
    console.log(data, workflow.id);
    // ev.target.appendChild(document.getElementById(data));
    dispatch({
      type: Actions.MoveTask,
      payload: { ...data, destWorkflowId: workflow.id }
    });
  }

  return (
    <div className="workflow" onDrop={drop} onDragOver={allowDrop}>
      <div className="heading">{workflow.label}</div>
      <Cards tasks={workflow.tasks} workflowId={workflow.id} />
    </div>
  );
};
