import { FaTrash } from "react-icons/fa";

const DeleteButton = ({ task, deleteTask }) => {
  return (
    <button onClick={(e) => deleteTask(task.id)}>
      <FaTrash className="hover:text-red-500" />
    </button>
  );
};

export default DeleteButton;
