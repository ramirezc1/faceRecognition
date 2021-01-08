import React from "react";
import ProfileIcon from "../Profile/ProfileIcon";

const Navigation = ({ onRouteChange, isSignedIn, toggleModal }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black no-underline pa3 pointer grow shadow-5"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f3 link dim black no-underline pa3 pointer grow shadow-5"
        >
          Sign Up
        </p>
      </nav>
    );
  }
};

export default Navigation;
