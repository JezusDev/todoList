import React from "react";

function Task({ text, removeTask }) {
  return (
    <div className="task flex items-center">
      <button onClick={() => removeTask(text)}>
        <svg
          className="w-6 h-6 fill-slate-600"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <label className="ml-4">
        <input
          className="rounded
        border-indigo-600
        text-indigo-600
        shadow-sm w-5 h-5
        focus:border-indigo-300
        focus:ring
        focus:ring-offset-0
        focus:ring-indigo-200
        focus:ring-opacity-50"
          type="checkbox"
          name=""
          id=""
        />
      </label>
      <p className="ml-4 text-2xl">{text}</p>
    </div>
  );
}

export default Task;
