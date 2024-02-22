import React from "react";
import {GoogleAuthProvider,getAuth,signInWithPopup} from 'firebase/auth';
import { app } from "../firebase.js";
const OAuth = () => {
    const handleGoogle=async()=>{
        try {
           const provider = new GoogleAuthProvider(); 
           const auth =getAuth(app);

           const result = await signInWithPopup(auth, provider);
        } catch (error) {
            console.log(error.message);
            console.log("could not signin with google")
        }
    }
  return (
    <>
      <button
      type="button"
      onClick={handleGoogle}
        className=" bg-red-500 px-2 py-2 rounded-lg text-white trasition ease-in-out hover:bg-red-600 duration-300"
      >
        Google
      </button>
    </>
  );
};

export default OAuth;
