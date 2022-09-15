import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { TaskContextProvider } from "../Context/TaskContext";

function TaskForm() {
  const [input, setinput] = useState("");
  const { addTask, searchTask } = useContext(TaskContextProvider);

  const inputHandler = (e) => {
    let inputword = e.target.value;
    setinput(inputword);
  };

  return (
    <>
      <InputGroup
        className="mb-3"
        onChange={inputHandler}
        value={input}
        placeholder="Enter a task to add or search "
      >
        <Button variant="outline-secondary" onClick={() => addTask(input)}>
          Add Task
        </Button>
        <Button variant="outline-secondary" onClick={() => searchTask(input)}>
          Search Task
        </Button>
        <Form.Control aria-label="Example text with two button addons" />
      </InputGroup>
    </>
  );
}

export default TaskForm;
