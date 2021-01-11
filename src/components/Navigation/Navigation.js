import React from "react";
import ProfileIcon from "../Profile/ProfileIcon";

const Navigation = ({ onRouteChange, isSignedIn, toggleModal, route }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
      </nav>
    );
  } else {
    console.log(route);
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        {route === "register" ? (
          <p
            onClick={() => onRouteChange("signin")}
            className="f3 link mt3 mr3 dim bg-white black no-underline pa2 pointer grow shadow-5"
          >
            Sign in
          </p>
        ) : (
          <p
            onClick={() => onRouteChange("register")}
            className="f3 mt3 mr3 link dim bg-white black no-underline pa2 pointer grow shadow-5"
          >
            Sign up
          </p>
        )}
      </nav>
    );
  }
};

export default Navigation;
