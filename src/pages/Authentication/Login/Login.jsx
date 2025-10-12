import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card shrink-0 max-w-80 mx-auto mt-10">
      <div>
        <h1 className="font-bold text-4xl mb-1">Welcome Back</h1>
        <p className="font-semibold mb-3">Login with Profast</p>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn bg-[#CAEB66] mt-4">Login</button>
        </fieldset>
        <p className="text-gray-500 my-1">
          Don't have any account?{" "}
          <Link className="text-[#8FA748]" to="/register">
            Register
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn w-full">
          <FcGoogle />
          Login with google
        </button>
      </div>
    </div>
  );
};

export default Login;
