import React, { useState, useEffect, useRef } from "react";

import styled from "styled-components";
import { FaTrashAlt, FaPen } from "react-icons/fa";

const Button = styled.button`
  color: white;
  border: 0px;
  border-radius: 2px;
`;

const NewButton = styled.button`
  background-color: #4f6d7a;
  font-size: small;
  font-weight: bold;
  color: white;
  padding: 0 10px;
  border: none;
  border-radius: 4px;
  :active {
    background-color: #c0d6df;
  }
`;

const SaveButton = styled.button`
  background-color: #c0d6df;
  font-size: small;
  font-weight: bold;
  color: #4f6d7a;
  padding: 0 10px;
  margin: 3px 0 0 8px;
  border: none;
  border-radius: 4px;
`;

const ListItem = styled.div`
  color: #495d63;
  margin: 4px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px #8fa6cb dashed;
  padding: 8px;
  font-weight: bold;
`;

const Icons = styled.div`
  color: #8fa6cb;
  width: 18%;
  display: flex;
  justify-content: space-between;
`;

const Todo = () => {
  const [create, showCreate] = useState(false); // toggle add new
  const [task, setTask] = useState(""); // add new task
  const [tasks, setTasks] = useState([]); // list of all tasks
  const [edit, setEdit] = useState(false); // tag which task is open to be edited
  const [currentTask, setCurrentTask] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  // const inputEl = useRef("");

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

    if (task.length > 1 && task.length <= 25) {
      const newTasks = [...tasks, task];
      setTasks(newTasks);
      saveData(newTasks);
    }

    setTask("");
  };

  const assignEdit = (id, task) => {
    setEdit(id);
    setCurrentTask(task);
  };

  const handleTaskEdit = (e) => {
    setCurrentTask(e.target.value);
  };

  function updateTask(id, update) {
    const changes = tasks.map((task, i) => {
      console.log(task + " " + i);
      if (i === id) {
      }
      return i === id ? update : task;
    });

    setEdit(false);
    setTasks(changes);
    saveData(changes);
  }

  const editTask = (e, id) => {
    e.preventDefault();
    updateTask(id, currentTask);
  };

  const getSearchTerm = (e) => {
    // setSearchTerm(inputEl.current.value);
    setSearchTerm(e.target.value);

    searchList(searchTerm);
  };

  function searchList(searchTerm) {
    if (searchTerm !== "") {
      const taskSearch = tasks.filter((task) => {
        return task.includes(searchTerm);
      });
      console.log("search results: " + taskSearch);
      // setResults(taskSearch);
      setTasks(taskSearch);
    } else {
      setTasks(tasks);
      console.log("all: " + tasks);
    }
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
      <div className="d-flex">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={getSearchTerm}
          className="form-control mr-2"
        />

        <NewButton onClick={toggle}>New</NewButton>
      </div>
      {create && (
        <form className="d-flex justify-content-center" onSubmit={addTask}>
          <input
            type="text"
            placeholder="add new task"
            className="form-control mt-1"
            onChange={newTask}
            value={task}
          />
          <SaveButton type="submit">Save</SaveButton>
        </form>
      )}

      <div>
        {tasks.map((task, i) => {
          return (
            <div key={i}>
              {edit === i ? (
                <ListItem>
                  <form
                    className="d-flex justify-content-center"
                    onSubmit={(e) => editTask(e, i, currentTask)}
                  >
                    <input
                      type="text"
                      placeholder={task}
                      className="form-control"
                      onChange={handleTaskEdit}
                    />
                    <SaveButton type="submit">Save</SaveButton>
                  </form>
                </ListItem>
              ) : (
                <ListItem>
                  <span>{task}</span>
                  <Icons>
                    <FaPen onClick={(e) => assignEdit(i, task)} />
                    <FaTrashAlt onClick={(e) => deleteTask(i)} />
                  </Icons>
                </ListItem>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
