import { useForm } from "react-hook-form";

const CreateTask = ({ addTask }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    addTask(data);
  };
  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center sm:items-start">
        <input
          className="text-center border-indigo-500 border-2 rounded-md focus:outline-none p-3"
          type="text"
          placeholder="Add a new task"
          {...register("title", { required: true, maxLength: 119 })}
        />

        <button
          class="focus:outline-none my-3 bg-indigo-500 shadow-sm font-medium shadow-indigo-300 rounded-md text-white hover:bg-indigo-400 text-center p-3"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
