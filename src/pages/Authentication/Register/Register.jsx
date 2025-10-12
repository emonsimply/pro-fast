import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Register = () => {
  return (
    <div className="card shrink-0 max-w-80 mx-auto mt-10">
      <div>
        <h1 className="font-bold text-4xl mb-1">Create an Account</h1>
        <p className="font-semibold mb-3">Register with Profast</p>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="name" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          
          <button className="btn bg-[#CAEB66] mt-4">Register</button>
        </fieldset>
        <p className="text-gray-500 my-1">
          Already have an account? {" "}
          <Link className="text-[#8FA748]" to="/login">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn w-full">
          <FcGoogle />
          Register with google
        </button>
      </div>
    </div>
  );
};

export default Register;