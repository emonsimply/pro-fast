import React from "react";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signInUser } = useAuth();

  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
    .then(result =>{
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    })
  };


  return (
    <div className="card shrink-0 max-w-80 mx-auto mt-10">
      <div>
        <h1 className="font-bold text-4xl mb-1">Welcome Back</h1>
        <p className="font-semibold mb-3">Login with Profast</p>
        <form onSubmit={handleSubmit(handleLogin)} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email")}
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password")}
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn bg-primary mt-4">Login</button>
        </form>
        <p className="text-gray-500 my-1">
          Don't have any account?{" "}
          <Link className="text-[#8FA748]" to="/register">
            Register
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
