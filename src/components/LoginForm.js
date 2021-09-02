import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import validator from "validator";

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
      <form onSubmit={onSubmitHandler} className="align-items-center">
        <div className="input-group">
          <label for="email-input">Email</label>
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
        <div className="input-group mb-3">
          <label>Password</label>
          <input
            type="password"
            placeholder="Must be at least 4 characters"
            onChange={(e) => handlePass(e)}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginForm;
