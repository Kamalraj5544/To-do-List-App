import React, { createContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const TaskContextProvider = createContext();

const TaskContext = (props) => {
  const [task, settask] = useState([]);
  const [filtered, setfiltered] = useState([]);
  const [isPressed, setisPressed] = useState(false);

  const removeTask = (id) => {
    settask(task.filter((t) => t.Id !== id));
  };

  const addTask = (inputform) => {
    setisPressed(false);
    if (inputform === "") {
      return;
    } else {
      settask([
        ...task,
        {
          Title: inputform,
          Id: uuidv4(),
        },
      ]);
    }
  };

  const clearList = () => {
    settask([]);
    setfiltered([]);
  };

  const searchTask = (input) => {
    setisPressed(true);
    const newFilter = task.filter((obj) => {
      if (input === "") {
        return task;
      } else if (obj.Title.toLowerCase().includes(input.toLowerCase())) {
        return obj;
      }
    });
    setfiltered(newFilter);
  };

  return (
    <div>
      <TaskContextProvider.Provider
        value={{
          task,
          removeTask,
          addTask,
          clearList,
          searchTask,
          filtered,
          isPressed,
        }}
      >
        {props.children}
      </TaskContextProvider.Provider>
    </div>
  );
};

export default TaskContext;
