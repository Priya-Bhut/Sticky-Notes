import React from "react";
import "./Header.css";
export const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <img src="logo.jpg" height="70" width="70"></img>
      <h1>Sticky Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="bn632-hover bn21"
      >
        Change The Mode
      </button>
    </div>
  );
};
