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
    <div className='flex justify-between px-4 pt-4'>
      <div>
        <h2 className='font-black text-gray-700 text-2xl'>Crypto Dashboard</h2>
      </div>
      <div className='flex'>
        <div className='pt-2'>
          <FaSearch size={20} />
        </div>
        <input className='pl-3' type='text' placeholder='Search here...' />
        <BsChatText onClick={showToast1} size={20} />
        <div className='pl-8'>
          <BsBell onClick={showToast} size={20} />
          <ToastContainer />
        </div>
        <div className='pl-8'>
          <Link href='/settings'>
            <IoSettingsOutline size={25} />
          </Link>
        </div>
        <div className='flex pl-8 pr-2'>
          <p className='text-purple-800 font-black italic'>Zaid</p>
        </div>
        <p className='pt-0.5'><CgProfile size={20} /></p>
      </div>
    </div>
  )
}

export default Header