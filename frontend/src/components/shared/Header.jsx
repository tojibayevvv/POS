import React from 'react'
import { FaSearch, FaUserCircle, FaBell } from "react-icons/fa";
import logo from "../../assets/logo.jpg"


export default function Header() {
  return (
    <header className='flex justify-between items-center py-4 px-8 bg-[#1a1a1a]'>
        <div className='flex items-center gap-2'>
            <img className='h-18 w-18 object-fit rounded-full' src={logo} alt="rst logo" />
            <h1 className='text-lg font-semibold text-[#f5f5f5]'>Resto</h1>
        </div>

        <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-3xl px-5 py-2 w-124.5px">
            <FaSearch className='text-[#f5f5f5]'/>
            <input type="text" placeholder='Search...' className='outline-none bg-transparent text-[#f5f5ff] px-2 py-1 rounded-md' />
        </div>

        <div className="flex justify-between items-center gap-5">
            <div className="bg-[#1f1f1f] rounded-[15px] cursor-pointer p-2">
                <FaBell className='text-[#f5f5f5] text-2xl'/>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
                <FaUserCircle className='text-[#f5f5f5] text-2xl'/>
                <div className="flex flex-col items-start">
                    <h3 className='text-md text-[#f5f5f5] font-semibold'>Abdulloh Tojibayev</h3>
                    <p className='text-xs text-[#ababab]'>Admin</p>
                </div>
            </div>
        </div>
    </header>
  )
}
