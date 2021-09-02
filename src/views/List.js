import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Todo from "../components/Todo";

export default () => {
  const Button = styled.button`
    color: white;
  `;

  return (
    <div>
      {/* <Button style={{ backgroundColor: "black" }}>Logout</Button> */}
      <Header title="My Todo List" />
      <Todo />
    </div>
  );
};
