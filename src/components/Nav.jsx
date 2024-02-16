import React, { Component,useState } from 'react'
import { Link } from 'react-router-dom';
import { FaSearch,FaBars,FaTimes } from 'react-icons/fa'
const Nav = ()=> { 
     const [open, setOpen] = useState(false);
      const handleMenu =() => {
        setOpen((prev) => !prev);
      };
    return (
      <header className="shadow-md max-w-screen-2xl	">
        <nav  className="flex p-3 justify-between items-center max-w-6xl mx-auto ">
          <div>
          <h1>
                <span className="font-medium text-slate-600">LOGO</span>
            </h1>
          </div>
          <div>
          <form className="p-2 pl-4 bg-gray-200 rounded-full flex items-center justify-between ">
                <input className=" mx-1 bg-transparent focus:outline-none w-max sm:w-80" type="text" placeholder='search'/>
                <FaSearch className='text-slate-600 mr-2'/>
            </form>
          </div>
            
            <div>
            <ul className=' hidden sm:flex sm:gap-8  text-slate-600 transition-all duration-300 ease-in'>
                <li><Link path="">Home</Link></li>
                <li><Link path="">About</Link></li>
                <li><Link path="">Services</Link></li>
                <li><Link path="">Signup</Link>/<Link path="">Login</Link></li>

            </ul>
            </div>

            
            
        </nav>
        <div className='flex justify-end'>

        <div className='mr-2 flex sm:hidden  absolute right-4 top-4 '>
              <button  type="button" onClick={handleMenu} className='inline-block items-center justify-center rounded-md text-gray-600 hover:text-gray-600 focus:ring-2 focus:ring-offset-2 p-2 '>
                <span className='sr-only'>Menu</span>
                {open == true ? <FaTimes className=''/>:<FaBars className=''/>}
              </button>
            </div>
            {open ? (
              <div className='md:hidden flex p-4 '>
                <ul className='flex flex-col  gap-4 relative ml-10 text-slate-600 transition-all duration-300 ease-in'>
                <li><Link path="" >Home</Link></li>
                <li><Link path="">About</Link></li>
                <li><Link path="">Services</Link></li>
                <li><Link path="">Signup</Link>/<Link path="">Login</Link></li>

            </ul>
              </div>
            ) : null}
        </div>

      </header>
    ) 
  }

export default Nav