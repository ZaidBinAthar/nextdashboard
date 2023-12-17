import React from 'react';
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { sales } from '@/components/data/sales';

const customers = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between p-4'>
        <h2>Today Sales</h2>
        <h2>Welcome Back, Clint</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className=' bg-gradient-to-tr from-teal-200 to-gray-600 my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center rounded-lg justify-between cursor-pointer'>
            <span>Product Name</span>
            <span className='sm:text-left text-right'>Qty</span>
            <span className='hidden md:grid'>Price</span>
            <span className='hidden sm:grid'>In Stock</span>
          </div>
          <ul>
            {sales.map((sale, id) => (
              <li key={id} className='bg-gray-200 hover:bg-slate-200 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <div className='flex items-center'>
                  <p className='pl-4'>{sale.id + " )"}</p>
                  <p className='pl-4'>{sale.name}</p>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>{sale.qty}</p>
                <p className='hidden md:flex'>{sale.price}$</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p>{sale.instock === true ? <TiTick size={25} /> : <ImCross size={15} />}</p>
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