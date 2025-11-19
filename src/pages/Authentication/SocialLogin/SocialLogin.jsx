import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className="btn w-full">
        <FcGoogle />
        Login with google
      </button>
    </>
  );
};

export default SocialLogin;
