import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { FaTrashAlt, FaPen } from "react-icons/fa";

const Todo = () => {
  const [create, showCreate] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const Button = styled.button`
    color: white;
    border: 0px;
    border-radius: 2px;
  `;

  function toggle() {
    showCreate((wasOpened) => !wasOpened);
  }

  const saveData = (tasks) => {
    localStorage.setItem("task", JSON.stringify(tasks));
  };

  const newTask = (e) => {
    setTask(e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("task")) {
      setTasks(JSON.parse(localStorage.getItem("task")));
    }
  }, []);

  const addTask = (e) => {
    e.preventDefault();

    const newTasks = [...tasks, task];
    // console.log("new: " + newTasks);
    setTasks(newTasks);
    // console.log(tasks);
    saveData(tasks);

    setTask("");
  };

  const deleteTask = (delIndex) => {
    const newTasks = tasks.filter((task, i) => {
      return i !== delIndex;
    });
    setTasks(newTasks);
    saveData(tasks);
  };

  //   {create && (

  //     )}

  return (
    <div>
      <Button style={{ backgroundColor: "blue" }} onClick={toggle}>
        New
      </Button>
      {create && (
        <form onSubmit={addTask}>
          <input
            type="text"
            placeholder="add new task"
            onChange={newTask}
            value={task}
          />
          <Button type="submit" style={{ backgroundColor: "black" }}>
            Save
          </Button>
        </form>
      )}

      <div>
        {tasks.map((task, i) => {
          return (
            <div key={i}>
              <span>{task}</span>
              <FaPen />
              <FaTrashAlt onClick={(e) => deleteTask(i)} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
