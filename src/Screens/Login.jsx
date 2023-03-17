import React, { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Login = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className=" h-screen flex bg-[#023047] text-white ">
      <div className="relative left w-1/2 h-full px-6 lg:px-52">
        <div className="logo absolute flex justify-center right-0 left-0 top-16">
          <img src="" alt="" />
          LOGO IMAGE
        </div>
        <div className="h-full px-7 mt-36 top-16">
          <div className="text-center">
            <p className="text-[30px]">Welcome</p>
            <p className="text-[10px]">Please enter your details</p>
          </div>
          <div className="w-full flex justify-around mt-5 bg-gray-600 py-2 rounded-lg t">
            <button onClick={()=>setSignIn(true)} className={`px-7 ${signIn ? "bg-purple-600" : "bg-transparent" } rounded-2xl py-1`}>Sign In</button>
            <button onClick={()=>setSignIn(false)} className={`px-7 ${!signIn ? "bg-purple-600" : "bg-transparent" } rounded-2xl py-1`}>Sign Up</button>
          </div>
          {signIn ? <SignIn /> : <SignUp />}
        </div>
      </div>
      <div className="right w-1/2 h-full">
        Right
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Login;
