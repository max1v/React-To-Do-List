import DeleteButton from "./DeleteButton";

const SingleTask = ({ task, deleteTask }) => {
  return (
    <li className="mb-5 p-5 sm:flex-row flex flex-col w-full bg-indigo-500 rounded-md shadow-sm shadow-indigo-300 text-white">
      <div className="w-11/12 h-auto pb-2">
        <h2 className="text-2xl">{task.title}</h2>
        <p className="text-gray-400 text-xs">{task.date}</p>
      </div>
      <div className="w-1/12 flex-col pb-2 space-y-4 content-end text-2xl">
        <DeleteButton deleteTask={deleteTask} task={task} />
      </div>
    </li>
  );
};

export default SingleTask;
