import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { logo, SUPPORTED_LANGUAGES, userAvatar } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";
import { Menu, X } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    setIsMenuOpen(false); // Close menu on action
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
    setIsMenuOpen(false); // Close menu on sign out
  };

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

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between items-center px-4 py-2 md:bg-transparent">
      {/* Logo */}
      <img
        className="h-24 w-36 md:h-36 md:w-52 mx-auto md:mx-[72px] -my-4 cursor-pointer"
        src={logo}
        alt="logo"
        onClick={showGptSearch ? handleGptSearchClick : () => {}}
      />

      {/* User Actions */}
      {user && (
        <div className="w-full md:w-auto flex items-center justify-between md:justify-end">
          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center gap-4">
            {showGptSearch && (
              <select
                className="cursor-pointer py-2 px-5 h-12 text-balance text-white bg-gray-900 bg-opacity-80 rounded-md"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <img className="h-11 w-11" src={userAvatar} alt="userIcon" />
            <button
              className="py-2 px-6 bg-yellow-500 rounded-lg text-white"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home" : "GPT Search"}
            </button>
            <button
              className="mr-4 bg-black bg-opacity-60 bg-gradient-to-br text-white px-2 py-1 border border-black rounded-md"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-gray-900 bg-opacity-95 flex flex-col items-center gap-4 py-4 z-20">
              {showGptSearch && (
                <select
                  className="cursor-pointer py-2 px-5 w-3/4 text-balance text-white bg-gray-800 rounded-md"
                  onChange={handleLanguageChange}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
              <img className="h-11 w-11" src={userAvatar} alt="userIcon" />
              <button
                className="py-2 px-6 w-3/4 bg-yellow-500 rounded-lg text-white"
                onClick={handleGptSearchClick}
              >
                {showGptSearch ? "Home" : "GPT Search"}
              </button>
              <button
                className="w-3/4 bg-black bg-opacity-60 bg-gradient-to-br text-white px-2 py-1 border border-black rounded-md"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;