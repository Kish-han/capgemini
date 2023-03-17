import React from "react";

const SignIn = () => {
  return (
    <div className="w-full">
      <div className="mt-6 w-full flex flex-col justify-center">
        <div className="emailBox rounded-md">
            <p>Email</p>
            <input className="w-full mt-2 rounded-md outline-none px-3 py-1 text-black" type="text" />
        </div>
        <div className="passwordBox mt-4 rounded-md">
            <p>Password</p>
            <input className="w-full mt-2 outline-none rounded-md px-3 py-1 text-black" type="text"/>
        </div>
      </div>
      <div className="w-full text-center mt-10">
        <button className="bg-purple-600 w-full py-2 rounded-xl">
            Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
