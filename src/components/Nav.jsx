import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdRealEstateAgent } from "react-icons/md";

const Nav = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFormUrl = urlParams.get("searchTerm");
    if (searchTermFormUrl) {
      setSearchTerm(searchTermFormUrl);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  return (
    <header className="shadow-md max-w-screen-2xl	">
      <nav className="flex p-3 justify-between items-center max-w-6xl mx-auto ">
        <div >
          <h1 className="flex gap-2 items-center">
          <MdRealEstateAgent className="text-blue-600 text-lg sm:text-3xl" />
            <span className="text-sm sm:text-lg font-semibold text-blue-600 ">HOMESPHERE</span>
          </h1>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="p-2 pl-4 bg-gray-200 rounded-full flex items-center justify-between "
          >
            <input
              className=" bg-transparent focus:outline-none w-[7rem] sm:w-80"
              type="text"
              placeholder="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>
              <FaSearch className="text-blue-600 mr-2" />
            </button>
          </form>
        </div>

        <div>
          <ul className=" hidden sm:flex sm:gap-8 text-slate-600 transition-all duration-300 ease-in cursor-pointer ">
            <li className="hover:underline py-2">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline py-2">
              <Link to="/About">About</Link>
            </li>
            <li className="hover:underline py-2">
              <Link to="/Service">Services</Link>
            </li>

            <li>
              <Link to="/Profile">
                {currentUser ? (
                  <div className="flex gap-6 py-2 align-baseline">
                   <div>
                   <li className="hover:underline  self-baseline">
                      <Link to="/Wishlist">My Wishlist</Link>
                    </li>
                   </div>
                    <div className="flex gap-2">
                    <img
                      src={currentUser.avatar}
                      alt="profile"
                      className="rounded-full object-cover h-7 w-7"
                    />
                    <div className="hover:underline">{currentUser.username}</div>

                    </div>
                  </div>
                ) : (
                  <div className="bg-blue-600 hover:bg-blue-600 text-white p-2 rounded-lg transition">
                    <Link to="/Signup" className="hover:underline">
                      Signup
                    </Link>
                    /
                    <Link to="/SignIn" className="hover:underline">
                      Login
                    </Link>
                  </div>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex justify-end">
        <div className="mr-2 flex sm:hidden  absolute  top-4 ">
          <button
            type="button"
            onClick={handleMenu}
            className="inline-block items-center justify-center rounded-md text-gray-600 hover:text-gray-600 focus:ring-2 focus:ring-offset-2 p-2 "
          >
            <span className="sr-only">Menu</span>
            {open == true ? (
              <FaTimes className="text-blue-600" />
            ) : (
              <FaBars className="text-blue-600" />
            )}
          </button>
        </div>
        {open ? (
          <div className="md:hidden flex p-4 ">
            <ul className="flex flex-col  gap-4 relative ml-10 text-slate-600 transition-all duration-300 ease-in">
              <li>
                <Link to="/" className="hover:underline py-2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="hover:underline py-2">
                  About
                </Link>
              </li>
              <li>
                <Link to="/Service" className="hover:underline py-2">
                  Services
                </Link>
              </li>

              <li>
                {currentUser ? (
                   <div className="flex flex-col gap-4  align-baseline">
                   <div>
                   <li className="hover:underline  self-baseline">
                      <Link to="/Wishlist">My Wishlist</Link>
                    </li>
                   </div>
                    <div className="flex gap-2">
                    <img
                      src={currentUser.avatar}
                      alt="profile"
                      className="rounded-full object-cover h-7 w-7"
                    />
                    <div  className="hover:underline">{currentUser.username}</div>

                    </div>
                  </div>
                ) : (
                  <div className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition">
                    <Link to="/Signup" className="hover:underline">
                      Signup
                    </Link>
                    /
                    <Link to="/SignIn" className="hover:underline">
                      Login
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Nav;
