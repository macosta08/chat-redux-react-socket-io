import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    dispatch(startLoginEmailPassword(data.passwork, data.name));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          ref={register({
            required: true,
          })}
        />
        {errors.name && <p>Name invalid o requerida</p>}
        <br />
        <input
          type="password"
          name="passwork"
          placeholder="Password"
          ref={register({
            required: true,
          })}
        />
        {errors.passwork && <p>Password invalid o requerida</p>}
        <br />
        <button type="submit" disabled={loading}>
          Login
        </button>
        <br />
        <button onClick={handleGoogleLogin}>GOOGLE REGISTER</button>
        <br />
        <Link to="/auth/register">Create new account</Link>
      </form>
    </div>
  );
};
