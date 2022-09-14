import "./App.css";
import React from "react";
import TaskList from "./Components/TaskList";
import TaskContext from "./Context/TaskContext";
import Header from "./Components/Header";
import TaskForm from "./Components/TaskForm";

function App() {
  return (
    <div>
      <TaskContext>
        <Header />
        <TaskForm />
        <TaskList />
      </TaskContext>
    </div>
  );
}

export default App;
