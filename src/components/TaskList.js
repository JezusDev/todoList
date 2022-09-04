import React from "react";
import Task from "./Task";

function TaskList({ taskList, removeTask }) {
  return (
    <>
      {!taskList.length && (
        <p className="text-2xl font-bold text-gray-500">Tasks is not defined</p>
      )}
      <div className="task-list">
        {taskList.map((item) => {
          return (
            <Task text={item.text} removeTask={removeTask} key={item.text} />
          );
        })}
      </div>
    </>
  );
}

export default TaskList;
