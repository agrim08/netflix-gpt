import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_small.jpg"
          alt="bg-image"
        />
      </div>
      <form className="absolute p-12 bg-[rgba(0,0,0,0.80)] w-2/5 h-full my-auto top-24 bottom-0 mx-auto right-0 left-0 flex flex-col items-center rounded-md ">
        <h1 className="text-white mb-6 text-3xl font-bold w-4/5">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {isSignIn ? (
          <input
            type="text"
            placeholder="Username"
            className="p-2 m-2 bg-[#000438] text-white w-4/5 h-16 border border-white rounded-md opacity-60"
          />
        ) : null}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-2 m-2 bg-[#000438] text-white w-4/5 h-16 border border-white rounded-md opacity-60"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-[#000438] text-white w-4/5 h-16 border border-white rounded-md opacity-60"
        />
        <button className="p-4 m-4 bg-red-600 text-white w-4/5 h-10 py-2 rounded-sm">
          {isSignIn ? "Sign In" : "Sign up"}
        </button>
        <span className="text-white text-lg">OR</span>
        <button className="p-4 mt-4 bg-transparent bg-gray-300 text-white w-4/5 h-10 py-2 rounded-sm bg-opacity-30">
          Use a sign-in code
        </button>
        <button className="p-4 m-4 bg-transparent text-white w-4/5 h-10 rounded-sm hover:underline">
          Forget password?
        </button>
        {isSignIn ? (
          <div className="flex w-4/5 items-center justify-start gap-4">
            <input type="checkbox" className="h-5 w-5" />
            <div className="text-white text-lg">Remember me</div>
          </div>
        ) : null}
        <div className="flex gap-2 w-4/5 my-4">
          <div className="text-white ">
            {isSignIn ? "New to Netflix?." : "Already a user?."}
          </div>
          <div
            className="text-white font-semibold hover:underline cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignIn ? "Sign up now" : "Sign In"}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
