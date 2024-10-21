import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { checkValidation } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const navigate = useNavigate();

  const handleFormData = () => {
    //* validate form data
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    console.log(message);
    if (message) return;

    if (!isSignIn) {
      //*sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://instagram.fdel64-1.fna.fbcdn.net/v/t51.2885-19/337660801_774662850827927_6492734631785120196_n.jpg?_nc_ht=instagram.fdel64-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=0SmoLzYLpkUQ7kNvgFcTtTA&_nc_gid=f0b417bdf93f44d09946de9bd2374a27&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYCKkhWWFu3Be0Y4mjAkvUpquJD7fRQN8XhfnGreg-G5_A&oe=671C7375&_nc_sid=7a9f4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //*sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

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
      <form
        className="absolute p-12 bg-[rgba(0,0,0,0.80)] w-2/5 h-full my-auto top-24 bottom-0 mx-auto right-0 left-0 flex flex-col items-center rounded-md "
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-white mb-6 text-3xl font-bold w-4/5">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn ? (
          <input
            ref={name}
            type="text"
            placeholder="Username"
            className="p-2 m-2 bg-[#000438] text-white w-4/5 h-16 border border-white rounded-md opacity-60"
          />
        ) : null}
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
        <p className="text-red-600 font-medium text-xl">{errorMessage}</p>
        <button
          className="p-4 m-4 bg-red-600 text-white w-4/5 h-10 py-2 rounded-sm"
          onClick={handleFormData}
        >
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
