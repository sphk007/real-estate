import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserFailure,
  deleteUserSuccess,
  signoutStart,
  signoutFailure,
  signoutSuccess,
} from "../redux/user/userSlice.js";
import { set } from "mongoose";

const Profile = () => {
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setupdateSuccess] = useState(false);
  const dispatch = useDispatch();
  // const user = currentUser.rest

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      // console.log(currentUser._id)
      const res = await fetch(
        `/api/user/update/${currentUser._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      console.log("data", data);
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setupdateSuccess(true);
      console.log("update success");
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(
        `/api/user/delete/${currentUser._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        setupdateSuccess(true);
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handlesignout= async()=>{
    try {
      dispatch(signoutStart());
      const res=await fetch('/api/auth/signout');
      const data=await res.json();
      if(data.success===false){
        dispatch(signoutFailure(data.message));
        return;
      }
      dispatch(signoutSuccess(data));
      
    } catch (error) {
      console.log(error.message);
      dispatch(signoutFailure(error.message));
    }
  }

  return (
    <>
      <div className="p-3 max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
          />

          <img
            src={formData.avatar || currentUser.avatar}
            onClick={() => fileRef.current.click()}
            className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          />
          <p className="text-sm self-center">
            {fileUploadError ? (
              <span className="text-red-700">
                Error Image upload (image must be less than 2 mb)
              </span>
            ) : filePerc > 0 && filePerc < 100 ? (
              <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
            ) : filePerc === 100 ? (
              <span className="text-green-700">
                Image successfully uploaded!
              </span>
            ) : (
              ""
            )}
          </p>
          <input
            id="username"
            type="text"
            defaultValue={currentUser.username}
            onChange={handleChange}
            placeholder="username"
            className="border p-3 rounded-lg"
          />
          <input
            id="email"
            type="email"
            defaultValue={currentUser.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-3 rounded-lg"
          />
          <input
            id="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
          <button
            disabled={loading}
            className="bg-slate-600 text-white p-3 rounded-lg uppercase text-center hover:opacity-50"
            type="submit"
          >
            {loading ? "loading..." : "Update"}
          </button>
        </form>
        <p className="text-red-700 mt-5">{error ? error : ""}</p>
        <p className="text-green-700 mt-5">
          {updateSuccess ? "Updated Successfully!" : ""}
        </p>
        <div className="flex justify-between mt-5">
          <span
            onClick={handleDeleteUser}
            className="text-red-700 cursor-pointer"
          >
            Delete Account
          </span>
          <span onClick={handlesignout} className="text-red-700 cursor-pointer">sign out</span>
        </div>
      </div>
    </>
  );
};

export default Profile;
