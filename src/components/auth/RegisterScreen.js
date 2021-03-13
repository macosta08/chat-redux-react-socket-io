import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data.name, data.email, data.password, data.password2);

    if (isFormValid(data.name, data.email, data.password, data.password2)) {
      dispatch(
        startRegisterWithEmailPasswordName(data.email, data.password, data.name)
      );
    }
  };

  const isFormValid = (name, email, password, password2) => {
    console.log(name, email, password, password2);
    if (name.length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== password2 || password.length < 6) {
      dispatch(setError("Invalid password must be greater than 6 digits"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {msgError && <div>{msgError}</div>}
        <input type="text" name="name" placeholder="Name" ref={register} />

        <br />
        <input type="email" name="email" placeholder="Email" ref={register} />

        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={register}
        />

        <br />
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          ref={register}
        />
        <br />
        <button type="submit">Register</button>
        <br />
        <Link to="/auth/login">Already registered?</Link>
      </form>
    </div>
  );
};
