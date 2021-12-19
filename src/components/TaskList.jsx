import SingleTask from "./SingleTask";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul className="flex flex-col-reverse">
      {tasks.map((task) => {
        return <SingleTask task={task} key={task.id} deleteTask={deleteTask} />;
      })}
    </ul>
  );
};

export default TaskList;
