import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { FaTrashAlt, FaPen } from "react-icons/fa";

const Todo = () => {
  const [create, showCreate] = useState(false); // toggle add new
  const [task, setTask] = useState(""); // add new task
  const [tasks, setTasks] = useState([]); // list of all tasks
  const [edit, setEdit] = useState(false); // tag which task is open to be edited
  const [currentTask, setCurrentTask] = useState({});

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

  const saveData = (tasks) => {
    localStorage.setItem("task", JSON.stringify(tasks));
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

  const assignEdit = (id, task) => {
    setEdit(id);
    setCurrentTask({ ...task });
  };

  const handleTaskEdit = (e) => {
    setCurrentTask(e.target.value);
    console.log(currentTask);
  };

  const editTask = (e, id) => {
    e.preventDefault();
    console.log(id);
    console.log("CURRENT: " + currentTask);

    updateTask(id, currentTask);

    // let changes = tasks.map((task) => {
    //   if (task.id === id) {
    //     setTask(taskChange);
    //   }
    //   return task;
    // });

    // console.log("CHANGED: " + task);
    // console.log(changes);
    // // setTasks(changes);
    // saveData(changes);
    // setEdit(false);
  };

  function updateTask(id, update) {
    console.log(update);
    console.log("update id: " + id);
    const changes = tasks.map((task) => {
      console.log(task + " " + task.id);
      return task.id === id ? update : task;
    });

    setEdit(false);
    setTasks(changes);
    console.log(changes);
  }

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
                  <form onSubmit={(e) => editTask(e, i, currentTask)}>
                    <input
                      type="text"
                      placeholder={task}
                      onChange={handleTaskEdit}
                    />
                    <Button type="submit" style={{ backgroundColor: "black" }}>
                      Save
                    </Button>
                  </form>
                </div>
              ) : (
                <div>
                  <span>{task}</span>
                  <FaPen onClick={(e) => assignEdit(i, task)} />
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
