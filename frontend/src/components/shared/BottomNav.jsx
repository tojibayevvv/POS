import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";


export default function BottomNav() {
    return (
        <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-12 flex justify-around'>
            <button className='flex justify-center items-center cursor-pointer text-[#abbaaa] bg-[#343434] w-50px rounded-[20px] p-2'>
                <FaHome className='inline mr-4' size={25} />
                <p>Home</p>
            </button>
            <button className='flex justify-center items-center cursor-pointer text-[#abbaaa] bg-[#343434] w-50px rounded-[20px] p-2'>
                <MdOutlineReorder className='inline mr-4' size={25} />
                <p>Orders</p>
            </button>
            <button className='flex justify-center items-center cursor-pointer text-[#abbaaa] bg-[#343434] w-50px rounded-[20px] p-2'>
                <MdTableBar className='inline mr-4' size={25} />
                <p>Tables</p>
            </button>
            <button className='flex justify-center items-center cursor-pointer text-[#abbaaa] bg-[#343434] w-50px rounded-[20px] p-2'>
                <CiCircleMore className='inline mr-4' size={25} />
                <p>More</p>
            </button>

            <button className='absolute bg-[#f6b100] text-[#f5f5f5] rounded-full p-3 bottom-4.5'>
                <BiSolidDish size={30} />
            </button>
        </div>
    )
}
