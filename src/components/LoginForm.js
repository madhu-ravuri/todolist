import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import validator from "validator";

import styled from "styled-components";
import { FaUser, FaLock } from "react-icons/fa";

const Button = styled.button`
  width: 100%;
  margin: 15px 0;
  background-color: #4f6d7a;
  color: white;
  box-shadow: 1px 1px 4px #4a5759;
  border: 0px;
  border-radius: 2px;
  :disabled {
    opacity: 0.5;
  }
`;

const Label = styled.label`
  margin: 0 1px;
  font-weight: bold;
`;

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [validate, setValidate] = useState("");
  const [styleError, setStyleError] = useState("");
  const [response, setResponse] = useState("");

  const handleEmail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setValidate(true);
    } else {
      setValidate("Not a valid email");
      setStyleError("style={{ border:'1px red' }}");
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
      <form onSubmit={onSubmitHandler} className="align-items-center">
        <Label>Email</Label>
        <div className="input-group">
          <span className="input-group-text" id="email-icon">
            <FaUser />
          </span>
          <input
            type="text"
            className="form-control"
            style={{ styleError }}
            placeholder="user@rapptrlabs.com"
            onChange={(e) => handleEmail(e)}
          />
        </div>
        <div className="col">
          <p className="error">{validate}</p>
        </div>
        <Label>Password</Label>
        <div className="input-group">
          <span className="input-group-text" id="email-icon">
            <FaLock />
          </span>
          <input
            type="password"
            className="form-control"
            placeholder="Must be at least 4 characters"
            onChange={(e) => handlePass(e)}
          />
        </div>
        <Button disabled={!validate || validate.length > 4}>Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
