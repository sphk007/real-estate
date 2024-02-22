import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import image from "../assets/img/signup.jpg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInStart,signInSuccess,signInFailure } from "../redux/user/userSlice";

const signIn = () => {
  const dispatch = useDispatch();
  const{ loading,error}=useSelector((state)=>state.user)
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });

    console.log(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:4000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success == false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(data.message));
    }
  };
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
                <h1 className="text-sixe-xl p-3 pb-8">SignIn</h1>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 w-10/12"
                >
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="border bg-gray-200 rounded-md py-2 px-2 focus:outline-none"
                    id="email"
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    placeholder="Enter pasword"
                    className="border bg-gray-200 rounded-md py-2 px-2 focus:outline-none"
                    id="password"
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className=" bg-gray-400 px-2 py-2 rounded-lg text-white trasition ease-in-out hover:bg-gray-500 duration-300"
                  >
                    {loading ? "loading..." : "SignIn"}
                  </button>
                  <div className="flex gap-1">
                    <p>Dont have a account?</p>
                    <Link
                      to="/Signup"
                      className="cursor-pointer hover:underline"
                    >
                      SignUp
                    </Link>
                  </div>
                  <div>{error && <p className="text-red-500">{error}</p>}</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default signIn;
