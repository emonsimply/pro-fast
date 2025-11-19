import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useAuth();

  const handleRegistration = (data) => {
    console.log(data);

    createUser(data.email, data.password)
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
        <h1 className="font-bold text-4xl mb-1">Create an Account</h1>
        <p className="font-semibold mb-3">Register with Profast</p>
        <form onSubmit={handleSubmit(handleRegistration)} className="fieldset">

        <label className="label">Photo</label>
        <input type="file"  {...register("photo")} className="file-input" />


          <label className="label">Name</label>
          <input
            type="name"
            {...register("name")}
            className="input"
            placeholder="Name"
          />
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
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <span className="text-red-500">Password is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-red-500 text-sm">
              Password must be 6 characters
            </span>
          )}

          <button className="btn bg-primary mt-4">Register</button>
        </form>
        <p className="text-gray-500 my-1">
          Already have an account?{" "}
          <Link className="text-[#8FA748]" to="/login">
            Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
