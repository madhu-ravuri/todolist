import React from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";

import Header from "../components/Header";
import Todo from "../components/Todo";

const Container = styled.div`
  margin: 15px 0;
  border: 2px #8fa6cb solid;
  border-radius: 6px;
  padding: 10px;
  display: inline-block;
  text-align: center;
  height: 100%;
`;

const Button = styled.button`
  margin: 10px 0 0 300px;
  color: white;
  background-color: #ccb7ae;
  border: none;
  border-radius: 4px;
  padding: 1px 10px;
  :hover {
    background-color: #faae7b;
  }
`;

export default () => {
  const logout = (e) => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <Button onClick={logout}>Logout</Button>
      <Header title="My Todo List" />
      <Container>
        <Todo />
      </Container>
    </div>
  );
};
