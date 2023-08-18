import React from "react";
import Lottie from "lottie-react";
import arrow from "../images/arrow.json"

import ButtonComponent from "./Button.component";
import { useNavigate } from "react-router";
const LoginComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="px-32">
      <p className="flex mt-48 h-16 space-x-3 text-4xl px-80 text-blue-800 ">
        Sign In / Register
      </p>
      <div className="flex flex-col gap-4 px-4 p-4 ml-80 h-60 w-80 align-middle border-spacing-4 border-8 border-cyan-600">
        <div className="flex mt-4 space-x-3 text-1g text-blue-800 ">
          <label htmlFor="Username">Username</label>
          <input
            className="border-2"
            type="text"
            id="username"
            placeholder="Enter Your Username"
          />
        </div>
        <div className="flex  space-x-3 text-1g text-blue-800 ">
          <label htmlFor="Password">Password</label>
          <input
            className="border-2 "
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex flex-1 ">
          <div>
            <ButtonComponent
              label="Login"
              onClick={() => {
                navigate("/shop");
              }}
              className="border-x-2 rounded ml-20 w-12 h-6 text-xs bg-cyan-600"
            />
          </div>
          <div>
            <ButtonComponent
              label="Cancel"
              onClick={() => {
                navigate("/login");
              }}
              className="border-x-2  ml-4 rounded w-12 h-6 text-xs"
            />
          </div>
        </div>

        <div className="flex flex-row px-10">
          <div className="flex text-sm text-blue-800">
          <label htmlFor="newUser">New User</label>
            
            <div>
              <Lottie className="w-10 h-6" animationData={arrow} loop={true}></Lottie>
            </div>
          </div>
          <div>
            <ButtonComponent
              label="SignUp"
              onClick={() => {
                navigate("/register");
              }}
              className="border-x-2  ml-4 rounded w-12 h-6 text-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
