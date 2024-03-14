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
import { Link } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { MdOutlineDeleteSweep } from "react-icons/md";
// import Listing from "../../../api/models/list.model.js";

const Profile = () => {
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setupdateSuccess] = useState(false);
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);

  const dispatch = useDispatch();
  // console.log(userListings);
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
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // console.log("data", data);
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
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
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

  const handlesignout = async () => {
    try {
      dispatch(signoutStart());
      const res = await fetch(`/api/auth/signout`);
      const data = await res.json();
      if (data.success === false) {
        dispatch(signoutFailure(data.message));
        return;
      }
      dispatch(signoutSuccess(data));
    } catch (error) {
      console.log(error.message);
      dispatch(signoutFailure(error.message));
    }
  };

  const handleShowListings = async () => {
    try {
      setShowListingsError(false);
      const res = await fetch(`/api/user/listings/${currentUser._id}`);
      const data = await res.json();

      if (data.success === false) {
        setShowListingsError(true);
        return;
      }

      setUserListings(data);
    } catch (error) {
      setShowListingsError(true);
    }
  };

  const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(`/api/listing/delete/${listingId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (data.success === false) {
        console.log(error.message);
        return;
      }

      setUserListings((prev) => prev.filter((listing) => (listing._id !== listingId)));



    } catch (error) {
      console.log(error.message);
    }

  };

  return (
    <>
      <div className="p-3 max-w-xl mx-auto">
        <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
        <form className="flex flex-col sm:items-center sm:flex-row gap-3">
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
            className="rounded-full h-28 w-28 sm:h-56 sm:w-56 object-cover cursor-pointer self-center mt-2"
          />
          <div className=" w-full flex flex-col gap-3">
            <input
              id="username"
              type="text"
              defaultValue={currentUser.username}
              onChange={handleChange}
              placeholder="username"
              className="border-2 p-3 rounded-lg"
            />
            <input
              id="email"
              type="email"
              defaultValue={currentUser.email}
              onChange={handleChange}
              placeholder="Email"
              className="border-2 p-3 rounded-lg"
            />
            <input
              id="password"
              type="password"
              placeholder="Change password"
              onChange={handleChange}
              className="border-2 p-3 rounded-lg"
            />
          </div>
        </form>
        <p className="text-sm self-center mt-2">
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
        <button
          disabled={loading}
          onClick={handleSubmit}
          className="w-full mt-5 bg-blue-600 self-end text-white p-[1rem] rounded-lg uppercase text-center hover:opacity-50"
          type="submit"
        >
          {loading ? "loading..." : "Update"}
        </button>
        <button className="w-full mt-3 text-blue-600 p-3 rounded-lg uppercase text-center hover:opacity-95 border-solid border-2 border-blue-500">
          <Link
            to={"/create-listing"}
          >
            create Property
          </Link>
        </button>
        <button onClick={handleShowListings} className="w-full mt-3 text-blue-600 p-3 rounded-lg uppercase text-center hover:opacity-95 border-solid border-2 border-blue-500">
          My Property
        </button>

        <p className="text-red-700 mt-5">{error ? error : ""}</p>
        <p className="text-green-700 mt-5">
          {updateSuccess ? "Updated Successfully!" : ""}
        </p>
        <div className="flex justify-between mt-5">
          <span
            onClick={handleDeleteUser}
            className="flex gap-1 items-center text-white bg-red-700 p-2 rounded-lg  cursor-pointer"
          >
            <MdOutlineDeleteSweep />
            Delete Account
          </span>
          <span onClick={handlesignout} className="flex gap-1 items-center text-white bg-red-700 p-2 rounded-lg cursor-pointer ">
            sign out <GoSignOut />
          </span>
        </div>

        <p className="text-red-700 mt-5">
          {showListingsError ? "error showing listing" : ""}
        </p>
        {userListings && userListings.length > 0 && (
          <div className="flex flex-col gap-4">
            <h1 className="text-center mt-7 text-2xl font-semibold">
              Your Products
            </h1>
            {userListings.map((listing) => (
              <div
                key={listing._id}
                className="border rounded-lg p-3 flex justify-between items-center gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.1)]"
              >
                <Link to={`/listing/${listing._id}`}>
                  <img
                    src={listing.imageURL[0]}
                    alt="listing cover"
                    className="h-16 w-16 object-contain"
                  />
                </Link>
                <Link
                  className="text-slate-700 font-semibold  hover:underline truncate flex-1"
                  to={`/listing/${listing._id}`}
                >
                  <p>{listing.name}</p>
                </Link>

                <div className="flex flex-col item-center mr-8 gap-3">
                  <button
                    onClick={() => handleListingDelete(listing._id)}
                    className="text-white uppercase p-1 rounded-lg bg-red-700"

                  >
                    Delete
                  </button>
                  <Link to={`/update-listing/${listing._id}`}>
                    <button className="text-white uppercase bg-green-700 py-1 px-3 rounded-lg">Edit</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
