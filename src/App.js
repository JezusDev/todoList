import React, { useState } from "react";
import AddTaskButton from "./components/AddTaskButton";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import "./index.scss";

function App() {
  const [openInput, setOpenInput] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [isStarted, setIsStarted] = useState(false);

  function handleNewTask(text) {
    const task = {
      text: text,
      completed: false,
    };
    setTaskList((prev) => [...prev, task]);
  }

  function removeTask(text) {
    setTaskList((prev) => prev.filter((item) => item.text !== text));
  }

  function handleStart() {
    if (isStarted) {
      return "h-0";
    } else {
      return "";
    }
  }

  return (
    <div className="absolute w-full h-screen overflow-hidden transition-all">
      <div
        className={`text-gray-500 flex items-center justify-center w-full h-screen transition-all overflow-hidden ${handleStart()}`}
      >
        <div className="text-center items-center ">
          <h1 className="text-7xl font-bold">TaskDO</h1>
          <p className="text-2xl font-bold mb-8">
            Manage You Task Checklist Easily
          </p>
          <button
            onClick={() => setIsStarted(true)}
            className="rounded-2xl border-2 py-2 px-4 text-2xl text-white bg-pink-500 hover:bg-pink-400 transition-all"
          >
            Lets Start
          </button>
        </div>
      </div>

      <div className="w-full h-screen">
        <Header count={taskList.length} setIsStarted={setIsStarted} />
        <main className="todo-list w-3/4 mx-auto">
          <AddTaskButton
            openInput={openInput}
            onOpenInput={() => setOpenInput(!openInput)}
            onAddTask={handleNewTask}
          />
          <TaskList taskList={taskList} removeTask={removeTask} />
        </main>
      </div>
    </div>
  );
}

export default App;
