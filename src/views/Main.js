import React from "react";

import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  height: 100%;
  width: 100%;
`;

export default () => {
  return (
    <div>
      <Header title="Rapptr Labs" />
      <Container>
        <LoginForm />
      </Container>
    </div>
  );
};
