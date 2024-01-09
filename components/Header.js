'use client'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { BsChatText, BsBell } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

  const showToast = () => {
    toast.success('Thanks To Like!', {
      position: 'top-center',
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const showToast1 = () => {
    toast.warning('There are no Comments!', {
      position: 'top-center',
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className='flex flex-col lg:flex-row justify-between px-4 pt-4'>
      <div className='mb-4 lg:mb-0'>
        <h2 className='font-black text-gray-700 text-2xl'>Crypto Dashboard</h2>
      </div>
      <div className='flex items-center'>
        <div className='pt-2 mr-2'>
          <FaSearch size={20} />
        </div>
        <input className='pl-3 py-1 rounded-md focus:outline-none' type='text' placeholder='Search here...' />
        <BsChatText onClick={showToast1} size={20} className='ml-2 cursor-pointer' />
        <div className='ml-2'>
          <BsBell onClick={showToast} size={20} className='cursor-pointer' />
          <ToastContainer />
        </div>
        <div className='ml-2'>
          <Link href='/settings'>
            <IoSettingsOutline size={25} className='cursor-pointer' />
          </Link>
        </div>
        <div className='flex items-center ml-2'>
          <p className='text-purple-800 font-black italic mr-1'>Zaid</p>
          <CgProfile size={20} />
        </div>
      </div>
    </div>
  )
}

export default Header;
