import React, { useContext, useState } from "react";
import { TaskContextProvider } from "../Context/TaskContext";

const Task = ({ task }) => {
  const { removeTask } = useContext(TaskContextProvider);

  const [line, setline] = useState("textNone");
  const [ispressed, setispressed] = useState(false);

  const completedTask = () => {
    if (ispressed) {
      setline("text");
      setispressed(false);
    } else {
      setline("textLine");
      setispressed(true);
    }
  };
  return (
    <li>
      <span>&#10146;</span>
      <span className={line}>{task.Title}</span>
      <span className="listbtn">
        <button className="btn btn-success" onClick={() => completedTask()}>
          Completed
        </button>
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => removeTask(task.Id)}
        >
          Delete
        </button>
      </span>
    </li>
  );
};

export default Task;
