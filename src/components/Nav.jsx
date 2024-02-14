import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import { IoMenu } from "react-icons/io5";
class Nav extends Component {
    
  render() {
    const Nav=()=>{
        let[open,setOpen]=useState(false);
    }
    return (
      <header class="bg-slate-200">
        <nav  class="flex p-3 justify-between items-center max-w-6xl mx-auto ">
        <div  onclick={()=>setOpen(!open)} className='text-slate-600 text-3xl absolute right-7 cursor-pointer md:hidden'>
            <ion-icon name={open?'close':'menu'}></ion-icon>
        </div>
            <h1 class="">
                <span class="font-medium text-slate-600">LOGO</span>
            </h1>
            <form class="p-2 bg-slate-100 rounded-full flex items-center justify-between ">
                <input className=" mx-1 bg-transparent focus:outline-none w-20 sm:w-60" type="text" placeholder='search'/>
                <FaSearch onClick={()=>setOpen(!open)} className='text-slate-600'/>
            </form>
            
            <ul className='p-2 absolute bg-slate-200 md:z-auto z-[-1] md:static md:pb-auto md:flex md:items-center md:gap-10 text-slate-600 
            left-0 pl-4 md:pl-auto transition-all duration-300 ease-in'>
                <li><Link path="">Home</Link></li>
                <li><Link path="">About</Link></li>
                <li><Link path="">Signup</Link>/<Link path="">Login</Link></li>

            </ul>
            
        </nav>
       
      </header>
    ) 
  }
}

export default Nav