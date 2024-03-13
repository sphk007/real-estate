{
  /* <script src="http://localhost:8097"></script> */
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import CreateListing from "./pages/CreateListing";
import React from "react";
import PrivateRoute from "./components/PrivateRoute";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
import Search from "./pages/Search";
import Wishlist from "./pages/Wishlist";
import Service from "./pages/Service";
import About from "./pages/About";
import Pano from "./components/Pano";
// import { Panorama } from "panolens";
import Panorama from "./pages/Panorama";
// import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/listing/:id" element={<Listing />} />
        <Route path="/search" element={<Search />} />
        <Route path="/panorama/:id" element={<Panorama />} />
        {/* <Route  path="/Pano" element={<Panorama />} /> */}
        <Route element={<PrivateRoute />}>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="create-listing" element={<CreateListing />}></Route>
          <Route path="update-listing/:id" element={<UpdateListing />}></Route>
          
        </Route>
      </Routes>
      {/* <Footer /> */}
      {/* <Pano /> */}
    </BrowserRouter>
  );
}
