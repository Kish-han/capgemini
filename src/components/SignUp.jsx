import React from 'react'

const SignUp = () => {
  return (
    <div className="w-full">
      <div className="mt-6 w-full flex flex-col justify-center">
        
        <div className="usernameBox mt-1 rounded-md">
            <p>Username</p>
            <input className="w-full mt-2 outline-none rounded-md px-3 py-1 text-black" type="text"/>
        </div>
        <div className="emailBox mt-1 rounded-md">
            <p>Email</p>
            <input className="w-full mt-2 outline-none rounded-md  px-3 py-1 text-black" type="text" />
        </div>
        <div className="passwordBox mt-1 rounded-md">
            <p>Password</p>
            <input className="w-full mt-2 outline-none rounded-md px-3 py-1 text-black" type="text"/>
        </div>
        <div className="passwordBox mt-1 rounded-md">
            <p>Confirm Password</p>
            <input className="w-full mt-2 outline-none rounded-md px-3 py-1 text-black" type="text"/>
        </div>
       
        <div className="mt-4">
            <label className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                <svg className="w-5 h-5 mr-2 -ml-1 text-purple-500 group-hover:text-purple-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v4a1 1 0 102 0V4a1 1 0 00-1-1z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 12a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>Upload Profile Picture</span>
                <input type="file" className="sr-only" />
            </label>
         </div>
      </div>
      <div className="w-full text-center mt-6">
        <button className="bg-purple-600 w-full py-2 rounded-xl">
            Sign Up
        </button>
      </div>
    </div>
  )
}

export default SignUp
