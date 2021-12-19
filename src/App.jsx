import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";
import TaskCount from "./components/TaskCount";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = (data) => {
    const newTask = {
      id: uuidv4(),
      title: data.title,
      date: new Date().toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App w-2/3 mx-auto">
      <h1 className="text-center sm:text-left text-5xl text-indigo-500 my-5 font-bold">
        To do list
      </h1>
      <CreateTask addTask={addTask} />
      {tasks.length > 0 ? (
        <TaskCount tasks={tasks} />
      ) : (
        <p className="text-indigo-500">Empty</p>
      )}
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
