import React from "react";
import { useContext } from "react";
import { TaskContextProvider } from "../Context/TaskContext";
import Task from "./Task";
import "./Task.css";

const TaskList = () => {
  const { task, clearList, filtered, isPressed } =
    useContext(TaskContextProvider);
  return (
    <div className="container">
      <br></br>
      <div>
        {isPressed ? (
          filtered.length ? (
            <ul>
              {filtered.map((t) => {
                return <Task task={t} />;
              })}
            </ul>
          ) : (
            <div>Task does not Found👀</div>
          )
        ) : task.length ? (
          <ul>
            {task.map((t) => {
              return <Task task={t} />;
            })}
          </ul>
        ) : (
          <div>No Tasks😓💔</div>
        )}

        <br></br>

        <button className="btn btn-dark" onClick={() => clearList()}>
          Clear List
        </button>
      </div>
    </div>
  );
};

export default TaskList;
