const TaskCount = ({ tasks }) => {
  return (
    <div className="text-indigo-500">
      {tasks.length > 1 ? (
        <p>{tasks.length} tasks</p>
      ) : (
        <p>{tasks.length} task</p>
      )}
    </div>
  );
};

export default TaskCount;
