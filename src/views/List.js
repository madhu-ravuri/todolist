import React from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";

import Header from "../components/Header";
import Todo from "../components/Todo";

export default () => {
  const Button = styled.button`
    color: white;
  `;

  const logout = (e) => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <Button onClick={logout} style={{ backgroundColor: "black" }}>
        Logout
      </Button>
      <Header title="My Todo List" />
      <Todo />
    </div>
  );
};
