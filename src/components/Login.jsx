import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { netflixBackground } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleFormData = async () => {
    // Validate form data
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    setIsLoading(true);
    try {
      if (!isSignIn) {
        // Sign up logic
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;
        await updateProfile(user, { displayName: name.current.value });

        const { uid, email: userEmail, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid,
            email: userEmail,
            displayName,
            photoURL,
          })
        );
      } else {
        // Sign in logic
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
      }
    } catch (error) {
      const { code, message } = error;
      setErrorMessage(`${code} - ${message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(null);
  };

  return (
    <div>
      <Header />
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src={netflixBackground} alt="bg-image" />
      </div>
      <form
        className="absolute p-4 sm:p-8 md:p-12 bg-[rgba(0,0,0,0.80)] w-11/12 sm:w-4/5 md:w-2/5 top-16 sm:top-20 md:top-24 mx-auto right-0 left-0 flex flex-col items-center rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-white mb-6 text-3xl font-bold w-4/5">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Username"
            className="p-2 m-2 bg-[#000438] text-white w-4/5 h-16 border border-white rounded-md opacity-60"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-2 m-2 bg-[#000438] text-white w-4/5 h-16 border border-white rounded-md opacity-60"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-[#000438] text-white w-4/5 h-16 border border-white rounded-md opacity-60"
        />

        {errorMessage && (
          <p className="text-red-600 font-medium text-xl">{errorMessage}</p>
        )}

        <button
          className="p-4 m-4 bg-red-600 text-white w-4/5 h-10 flex items-center justify-center space-x-2 rounded-sm disabled:opacity-50"
          onClick={handleFormData}
          disabled={isLoading}
        >
          {isLoading && (
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
          )}
          <span>
            {isLoading
              ? isSignIn
                ? "Signing In..."
                : "Signing Up..."
              : isSignIn
              ? "Sign In"
              : "Sign Up"}
          </span>
        </button>

        <span className="text-white text-lg">OR</span>
        <button className="p-4 mt-4 bg-transparent bg-gray-300 text-white w-4/5 h-10 py-2 rounded-sm bg-opacity-30">
          Use a sign-in code
        </button>
        <button className="p-4 m-4 bg-transparent text-white w-4/5 h-10 rounded-sm hover:underline">
          Forget password?
        </button>

        {isSignIn && (
          <div className="flex w-4/5 items-center justify-start gap-4">
            <input type="checkbox" className="h-5 w-5" />
            <div className="text founder-white text-lg text-white">Remember me</div>
          </div>
        )}

        <div className="flex gap-2 w-4/5 my-4">
          <div className="text-white ">
            {isSignIn ? "New to Netflix?" : "Already a user?"}
          </div>
          <div
            className="text-white font-semibold hover:underline cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignIn ? "Sign Up Now" : "Sign In"}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;