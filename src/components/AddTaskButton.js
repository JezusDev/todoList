import React, { useState } from "react";

function AddTaskButton({ openInput, onOpenInput, onAddTask }) {
  const [taskInput, setTaskInput] = useState("");

  function handleInput(e) {
    setTaskInput(e.target.value);
  }

  function handleNewTask(e) {
    e.preventDefault();
    if (taskInput) {
      onAddTask(taskInput);
      setTaskInput("");
    }
  }

  return (
    <div className=" mb-8">
      <button className="add-new-task flex items-center" onClick={onOpenInput}>
        <svg
          className="w-7 h-7 fill-pink-500"
          fill=""
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="text-pink-500 font-bold text-2xl ml-2">
          Add New Task
        </span>
      </button>
      {openInput && (
        <div className="mt-2">
          <form>
            <input
              className="rounded-xl text-gray-500 font-bold"
              type="text"
              name=""
              id=""
              value={taskInput}
              onChange={handleInput}
            />
            <button
              className="ml-8 rounded-lg text-white bg-pink-500 px-4 py-2"
              onClick={handleNewTask}
            >
              Добавить
            </button>
            <button
              className="ml-8 rounded-lg text-white bg-pink-500 px-4 py-2"
              onClick={onOpenInput}
            >
              Закрыть
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddTaskButton;
