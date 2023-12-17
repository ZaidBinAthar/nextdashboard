// components/settings.js
'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const settings = () => {

  const [selectedColor, setSelectedColor] = useState('#3498db');
  const [volume, setVolume] = useState(50);

  const showToast = () => {
    toast.success('Settings Saved Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const colorClass = volume > 80 ? 'text-red-500' : volume > 50 ? 'text-cyan-600' : volume > 30 ? 'text-green-600' : 'text-yellow-500';

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="bg-white p-4 shadow-md rounded-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Change Password
          </label>
          <input
            className="border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your new password"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="bio">
            Bio
          </label>
          <textarea
            className="border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="bio"
            rows="3"
            placeholder="Tell us about yourself"
          ></textarea>
        </div>




        <div className="bg-white p-4 shadow-md rounded-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="selectedColor">
              Select Color
            </label>
            <input
              type="color"
              id="selectedColor"
              value={selectedColor}
              onChange={handleColorChange}
              className="border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="volume">
              Volume
            </label>
            <input
              type="range"
              id="volume"
              value={volume}
              min="0"
              max="100"
              onChange={handleVolumeChange}
              className="w-full"
            />
            <p className={`text-sm mt-2 ${colorClass}`}>Current Volume: {volume}%</p>
          </div>
        </div>




        <div className="mb-4">
          <label className="block text-gray-700 font-bold m-2" htmlFor="socialMedia">
            GitHub Links
          </label>
          <input
            className="border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline mb-2"
            id="socialMedia"
            type="text"
            placeholder="GitHub Profile URL"
          />
          <input
            className="border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="socialMedia"
            type="text"
            placeholder="Vercel Profile URL"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Language Preferences</label>
          <div>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span className="ml-2">English</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span className="ml-2">Urdu</span>
            </label>
            {/* Add more languages as needed */}
          </div>
        </div>
        <div className='flex'>
          <div className='pb-10'>
            <button onClick={showToast} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save Settings
            </button>
            <ToastContainer />
          </div>
          <div className='px-4'>
            <Link href='/'>
              <div className='text-gray-700 bg-green-400 hover:bg-green-500 font-black py-2 px-2 rounded-lg inline-block'>
                <h1>Go Back To Home</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default settings
