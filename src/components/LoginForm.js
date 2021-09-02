import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import validator from "validator";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: #EAEAEA;
  }

  body, html, #root {
    height: 100%;
    font-family: 'Montserrat', sans-serif;;
  }
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  background-color: #4f6d7a;
  color: white;
  box-shadow: 1px 1px 4px #4a5759;
  border: 0px;
  border-radius: 2px;
  :hover {
    background-color: #c0d6df;
    color: #4f6d7a;
    font-weight: bold;
  }
`;

const Label = styled.label`
  margin: 0;
`;

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [validate, setValidate] = useState("");
  // const [errors, setErrors] = useState([]);
  const [response, setResponse] = useState("");

  const handleEmail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setValidate(true);
    } else {
      setValidate("invalid email");
    }
    setEmail(email);
  };

  const handlePass = (e) => {
    var password = e.target.value;
    if (password.length > 4 && password.length <= 16) {
      setPasswordVal(true);
    } else {
      setPasswordVal(false);
    }
    setPassword(password);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(password + " - " + email);

    if (validate && passwordVal) {
      axios
        .post(
          "http://dev.rapptrlabs.com/Tests/scripts/user-login.php",
          {},
          {
            params: {
              email,
              password,
            },
          }
        )
        .then((response) => {
          setResponse(response.data);
        });
      console.log(response);
      navigate("/list");
    } else {
      console.log("wrong submission");
    }
  };

  return (
    <div>
      <GlobalStyle />
      <Container>
        <form onSubmit={onSubmitHandler} className="align-items-center">
          <Label htmlFor="email-input">Email</Label>
          <div className="input-group">
            <span className="input-group-text" id="email-icon">
              @
            </span>
            <input
              type="text"
              placeholder="user@rapptrlabs.com"
              onChange={(e) => handleEmail(e)}
            />
          </div>
          <div className="col-2">
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {validate}
            </span>
          </div>
          <label>Password</label>
          <div className="input-group mb-3">
            <input
              type="password"
              placeholder="Must be at least 4 characters"
              onChange={(e) => handlePass(e)}
            />
          </div>
          <Button>Login</Button>
        </form>
      </Container>
    </div>
  );
};

export default LoginForm;
