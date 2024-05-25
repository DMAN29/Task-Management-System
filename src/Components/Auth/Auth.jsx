import React, { useState } from "react";
import "./Auth.css";
import Signup from "./Signup";
import Signin from "./Signin";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const togglePanel = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="flex justify-center h-screen items-center overflow-hidden">
      <div className="box lg:max-w-4xl">
        <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
          <div className="front">
            <img
              src="https://wallpapers.com/images/featured/laptop-murjp1nk4lp1idlt.jpg"
              alt="Front Cover"
            />
            <div className="text">
              <span className="text-1">
                Success is built upon well-organized tasks
              </span>
              <span className="text-2 text-xs">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <img
              src="https://png.pngtree.com/thumb_back/fw800/background/20240416/pngtree-a-man-sitting-at-desk-in-front-of-computer-image_15715755.jpg"
              alt="Back Cover"
            />
          </div>
        </div>
        <div className="forms h-full">
          <div className="form-content h-full">
            <div className="login-form">
              <Signin togglePanel={togglePanel} />
            </div>
            <div className="signup-form">
              <Signup togglePanel={togglePanel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
