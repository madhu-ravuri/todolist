import React, { useState } from "react";

import styled from "styled-components";

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

  const newTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();

    const newTasks = [...tasks, task];
    // console.log("new: " + newTasks);
    setTasks(newTasks);
    // console.log(tasks);

    setTask("");
  };

  return (
    <div>
      <Button style={{ backgroundColor: "blue" }} onClick={toggle}>
        New
      </Button>
      {create && (
        <div>
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
          {tasks.map((task, i) => {
            return (
              <div>
                <span>{task}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Todo;
