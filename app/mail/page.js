import React from 'react';
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { sales } from '@/components/data/sales';
import { SiGmail } from "react-icons/si";

const mail = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between p-4'>
        <h2 className='pl-5'><SiGmail size={50} /></h2>
        <h2>Welcome Back, Clint</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='bg-gradient-to-tr bg- my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center rounded-lg justify-between cursor-pointer'>
            <span className='pl-2'>From</span>
            <span className='sm:text-left text-right'>OTP</span>
            <span className='text-center hidden md:grid'>Description</span>
            <span className='text-center hidden sm:grid'>Read</span>
          </div>
          <ul>
            {sales.map((sale, id) => (
              <li key={id} className='bg-gray-200 hover:bg-slate-200 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                <div className='flex items-center'>
                  <p className='pl-4'>{sale.id + " )"}</p>
                  <p className='pl-4'>{sale.brand}</p>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>{sale.qty}</p>
                <p className='hidden md:flex'>{sale.description}</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p className='pl-52'>{sale.instock === true ? <TiTick size={25} /> : <ImCross size={15} />}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default mail;