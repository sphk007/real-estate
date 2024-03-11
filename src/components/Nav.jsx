import React, {  useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import {  useSelector } from "react-redux";

const Nav = () => {
const navigate=useNavigate();
const {currentUser}=useSelector((state)=> state.user);
const [searchTerm,setSearchTerm]=useState('');
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  useEffect(()=>{
    const urlParams=new URLSearchParams(window.location.search);
    const searchTermFormUrl=urlParams.get('searchTerm');
    if(searchTermFormUrl){
      setSearchTerm(searchTermFormUrl);
    }
  },[location.search]);
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm',searchTerm);
    const searchQuery=urlParams.toString();
    navigate(`/search?${searchQuery}`);

  }
  return (
    <header className="shadow-md max-w-screen-2xl	">
      <nav className="flex p-3 justify-between items-center max-w-6xl mx-auto ">
        <div>
          <h1>
            <span className="font-medium text-slate-600">LOGO</span>
          </h1>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="p-2 pl-4 bg-violet-200 rounded-full flex items-center justify-between ">
            <input
              className="mx-1 bg-transparent focus:outline-none w-max sm:w-80"
              type="text"
              placeholder="search"
              value={searchTerm}
              onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <button>
            <FaSearch className="text-violet-600 mr-2" />
            </button>
          </form>
        </div>

        <div>
          <ul className=" hidden sm:flex sm:gap-8 text-slate-600 transition-all duration-300 ease-in cursor-pointer ">
            <li className="hover:underline py-2">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline py-2">
              <Link to="">About</Link>
            </li>
            <li className="hover:underline py-2">
              <Link to="">Services</Link>
            </li>
            <li className="hover:underline py-2">
              <Link to="/Wishlist">My Wishlist</Link>
            </li>
            <li >
              <Link to='/Profile'>
                {currentUser ? (
                  <div className="flex gap-2 py-2"><img src={currentUser.avatar} alt="profile" className="rounded-full object-cover h-7 w-7" /><div>{currentUser.username}</div></div>
                ):(<div className="bg-violet-900 hover:bg-violet-700 text-white p-2 rounded-lg transition"><Link to="/Signup" className="hover:underline">Signup</Link>/<Link to="/SignIn" className="hover:underline">Login</Link></div>
)}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex justify-end">
        <div className="mr-2 flex sm:hidden  absolute right-4 top-4 ">
          <button
            type="button"
            onClick={handleMenu}
            className="inline-block items-center justify-center rounded-md text-gray-600 hover:text-gray-600 focus:ring-2 focus:ring-offset-2 p-2 "
          >
            <span className="sr-only">Menu</span>
            {open == true ? <FaTimes className="text-violet-600" /> : <FaBars className="text-violet-600" />}
          </button>
        </div>
        {open ? (
          <div className="md:hidden flex p-4 ">
            <ul className="flex flex-col  gap-4 relative ml-10 text-slate-600 transition-all duration-300 ease-in">
              <li>
                <Link to="/" className="hover:underline py-2">Home</Link>
              </li>
              <li>
                <Link to="" className="hover:underline py-2">About</Link>
              </li>
              <li>
                <Link to="" className="hover:underline py-2">Services</Link>
              </li>
              <li className="hover:underline py-2">
              <Link to="/Wishlist">My Wishlist</Link>
            </li>
              <li >
                {currentUser ? (
                  <div className="flex gap-2"><img src={currentUser.avatar} alt="profile" className="rounded-full object-cover h-7 w-7" /><Link to="/Profile"><div>{currentUser.username}</div></Link></div>
                ):(<div className="bg-violet-900 hover:bg-violet-700 text-white p-2 rounded-lg transition"><Link to="/Signup" className="hover:underline">Signup</Link>/<Link to="/SignIn" className="hover:underline">Login</Link></div>
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
