import React from "react";
import {Link} from "react-router-dom";
import image from "../assets/img/signup.jpg";

const Signup = () => {
  return (
    <>
      <div className="min-h-screen py-20">
        <div className="mx-auto ">
          <div className="flex w-11/12 p-4 bg-white rounded-xl mx-auto shadow-2xl overflow-hidden">
            <div className="flex md:md-h-auto md:flex-row flex-col rounded-xl overflow-hidden">
              <div className="flex items-center justify-center md:w-1/2 ">
                <img src={image} className="md:min-h-full"></img>
              </div>
              <div className=" flex items-center flex-col justify-center md:w-1/2 py-10 px-10">
                <h1 className="text-sixe-xl p-3 pb-8">SignUp</h1>
                <form className="flex flex-col gap-6 w-10/12">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="border bg-gray-200 rounded-md py-2 px-2 focus:outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Enter pasword"
                    className="border bg-gray-200 rounded-md py-2 px-2 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className=" bg-gray-400 px-2 py-2 rounded-lg text-white trasition ease-in-out hover:bg-gray-500 duration-300"
                  >
                    SignUp
                  </button>
                  <div className="flex gap-1"><p>Have a account?</p><Link to="/SignIn"className="cursor-pointer hover:underline">SignIn</Link></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
