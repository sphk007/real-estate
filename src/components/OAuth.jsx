import React from "react";
import {GoogleAuthProvider,getAuth,signInWithPopup} from 'firebase/auth';
import { app } from "../firebase.js";
import {useDispatch} from 'react-redux';
import {signInSuccess} from '../redux/user/userSlice.js'
import { useNavigate } from "react-router-dom";
const OAuth = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const handleGoogle=async()=>{
        try {
           const provider = new GoogleAuthProvider(); 
           const auth =getAuth(app);

           const result = await signInWithPopup(auth, provider);

           const res=await fetch('/api/auth/google',{
            method: "POST",
            headers:{
              "Content-Type":"application/json",

            },
            body:JSON.stringify({
              name: result.user.displayName,
              email: result.user.email,
              photo: result.user.photoURL,
            }),
           })


           const data=await res.json();

           dispatch(signInSuccess(data));
           navigate('/');
        } catch (error) {
            console.log(error.message);
            console.log("could not signin with google")
        }
    };



    
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
