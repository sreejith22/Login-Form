import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const emailRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const emailResult = EMAIL_REGEX.test(email);
    setValidEmail(emailResult);
  }, [email]);

  useEffect(() => {
    const passwordResult = PWD_REGEX.test(password);
    setValidPassword(passwordResult);
  }, [password]);

  useEffect(() => {
    setErrors("");
  }, [email, password]);

  const authHandle = () => {
    const emailCheck = EMAIL_REGEX.test(email);
    const passwordCheck = PWD_REGEX.test(password);

    if (!emailCheck || !passwordCheck) {
      setErrors(
        "Invalid Email or Password (password must have atleast a capital letter,a number and custom symbols $,#,@ etc...)"
      );
      setSuccess("");
      return;
    } else {
      setSuccess("Successfully Logged In, Welcome");
      setErrors("");
      navigate("/home");
    }
  };
  return (
    <div className="form_auth">
      <form>
        <p ref={errorRef} className={errors ? "errors_active" : "hide_errors"}>
          {errors}
        </p>
        <p className={success ? "success_active" : "hide_success"}>{success}</p>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            autoComplete="off"
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            placeholder="Username or email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label className="sign_check">
            <input type="checkbox" name="checkbox" value="value" />
            Keep me signed in
          </label>
        </div>
        <div className="form-group">
          <button type="button" className="signin" onClick={authHandle}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
