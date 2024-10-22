import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { logo, userAvatar } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //* unsubscribe onAuthStateChanged when components unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="h-36 w-52 mx-[72px] -my-4" src={logo} alt="logo" />
      {user && (
        <div className="flex items-center gap-4">
          <img className="h-11 w-11" src={userAvatar} alt="userIcon" />
          <button
            className="mr-4 bg-black bg-opacity-60 bg-gradient-to-br text-white px-2 py-1 border border-black rounded-md"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
