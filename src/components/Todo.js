import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { FaTrashAlt, FaPen } from "react-icons/fa";

const Todo = () => {
  const [create, showCreate] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState("");

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
    saveData(newTasks);

    setTask("");
  };

  const handleEdit = (id) => {
    console.log(id);
    setEdit(id);
  };

  const editTask = (e, id, input) => {
    e.preventDefault();

    let changes = tasks.map((task) => {
      if (task.id === id) {
        setTask(input);
      }
      return task;
    });
    console.log(id);
    console.log(task.id);
    console.log(changes);
    // setTasks(changes);
    // setEdit(false);
  };

  const deleteTask = (delIndex) => {
    const newTasks = tasks.filter((task, i) => {
      return i !== delIndex;
    });
    setTasks(newTasks);
    saveData(newTasks);
  };

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
              {edit === i ? (
                <div>
                  <form onSubmit={(e) => editTask(e, i, input)}>
                    <input
                      type="text"
                      placeholder={task}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <Button type="submit" style={{ backgroundColor: "black" }}>
                      Save
                    </Button>
                  </form>
                </div>
              ) : (
                <div>
                  <span>{task}</span>
                  <FaPen onClick={(e) => handleEdit(i)} />
                  <FaTrashAlt onClick={(e) => deleteTask(i)} />
                </div>
              )}
              {/* <span>{task}</span>
              <FaPen onClick={(e) => handleEdit(i)} />
              <FaTrashAlt onClick={(e) => deleteTask(i)} /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
