import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { data } from './data/data';

const OrderItem = ({ total, name: { first }, date }) => (
  <div className='flex items-center justify-between bg-gradient-to-tr from-purple-300 to-teal-300 text-white rounded-lg p-3 shadow-md mb-3'>
    <div className='flex items-center space-x-2'>
      <div className='bg-white rounded-full p-1'>
        <FaShoppingBag className='text-blue-500 text-lg' />
      </div>
      <div>
        <p className='text-white font-bold text-sm'>${total}</p>
        <p className='text-white text-xs'>{first}</p>
      </div>
    </div>
    <p className='text-white text-xs'>{date}</p>
  </div>
);

const RecentOrders = () => (
  <div className='w-full col-span-3 mx-auto p-3'>
    <h1 className='text-xl font-bold mb-3 text-center text-gray-800'>Recent Orders</h1>
    <div>
      {data.map(({ total, name, date }, id) => (
        <OrderItem key={id} total={total} name={name} date={date} />
      ))}
    </div>
  </div>
);

export default RecentOrders;
