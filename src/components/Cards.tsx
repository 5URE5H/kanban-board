import { Card } from "./Card";

export const Cards = ({ tasks, workflowId }) => {
  return (
    <div className="card-container">
      {tasks.map((task) => {
        return <Card key={task.id} task={task} srcWorkflowId={workflowId} />;
      })}
    </div>
  );
};
