import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import { newData } from '@/components/data/newData';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillSignal } from 'react-icons/ai';

const customers = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between p-4'>
        <h2>New Customers</h2>
        <h2>Welcome Back, Clint</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between'>
            <input className='bg-gray-200 rounded-full p-3 my-3 w-96' placeholder=' Name' />
            <input className='bg-gray-200 rounded-full p-3 my-3 w-96 sm:text-left text-right' placeholder=' Email' />
            <input className='bg-gray-200 rounded-full p-3 my-3 w-96 hidden md:grid' placeholder=' Last Order' />
            <div class="inline-flex">
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold p-3 w-40 rounded-full">
                Next
              </button>

              <div className='pl-52 flex'>
                <label className='cursor-pointer'><AiOutlineGithub size={40} /></label>
                <label className='cursor-pointer'><AiFillSignal size={40} /></label>
              </div>
            </div>
          </div>
          <ul>
            {newData.map((order, id) => (
              <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <div className='flex items-center'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <BsPersonFill className='text-purple-800' />
                  </div>
                  <p className='pl-4'>{order.name.first + ' ' + order.name.last}</p>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>{order.name.first}@gmail.com</p>
                <p className='hidden md:flex'>{order.date}</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default customers;