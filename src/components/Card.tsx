export const Card = ({ task, srcWorkflowId }) => {
  function drag(event) {
    console.log(event);
    event.dataTransfer.setData(
      "task",
      JSON.stringify({
        task,
        srcWorkflowId
      })
    );
  }

  return (
    <div className="card" draggable="true" onDragStart={(e) => drag(e)}>
      <div>{task.title}</div>
      <div>{task.description}</div>
    </div>
  );
};
