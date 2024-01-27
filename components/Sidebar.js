import React from 'react';
import Link from 'next/link';
import { FiMail } from 'react-icons/fi';
import { RxPerson } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BsPersonAdd } from 'react-icons/bs';
import { GiSpeedometer } from 'react-icons/gi';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineHome } from 'react-icons/ai';
import './main.css';
import { FaRegAddressCard } from 'react-icons/fa';
import { FaRegKeyboard } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="sidecolor fixed w-20 text-2xl h-screen p-4 border-r-[1px] flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="text-gray-700 font-black p-3 rounded-lg inline-block">
              <h1>Frize.</h1>
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

          <Link href="/dashboard">
            <div className="sidecolor hover:bg-blue-100 cursor-pointer my-3 p-3 rounded-lg inline-block">
              <AiOutlineHome size={20} />
            </div>
          </Link>

          <Link href="/market">
            <div className="sidecolor hover:bg-blue-100 cursor-pointer my-3 p-3 rounded-lg inline-block">
              <GiSpeedometer size={20} />
            </div>
          </Link>

          <Link href="/mail">
            <div className="sidecolor hover:bg-blue-100 cursor-pointer my-3 p-3 rounded-lg inline-block">
              <FiMail size={20} />
            </div>
          </Link>

          <Link href="/customers">
            <div className="sidecolor hover:bg-blue-100 cursor-pointer my-3 p-3 rounded-lg inline-block">
              <RxPerson size={20} />
            </div>
          </Link>

          <Link href="/orders">
            <div className="sidecolor hover:bg-blue-100 cursor-pointer my-3 p-3 rounded-lg inline-block">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>

          <Link href="/newper">
            <div className="sidecolor hover:bg-blue-100 cursor-pointer my-3 p-3 rounded-lg inline-block">
              <BsPersonAdd size={25} />
            </div>
          </Link>

          <Link href="/todos">
            <div className="sidecolor hover:bg-blue-100 cursor-pointer my-3 p-3 rounded-lg inline-block">
              <FaRegAddressCard size={25} />
            </div>
          </Link>

          <Link href="/settings">
            <div className="sidecolor hover:bg-blue-100 cursor-pointer my-3 p-3 rounded-lg inline-block">
              <IoSettingsOutline size={25} />
            </div>
          </Link>

          <Link href="/typing">
            <div className="sidecolor hover:bg-blue-100 cursor-pointer my-3 p-3 rounded-lg inline-block">
              <FaRegKeyboard size={25} />
            </div>
          </Link>

          <Link href="/">
            <div className="sidecolor hover:bg-blue-100 cursor-pointer my-3 p-3 rounded-lg inline-block">
              <CiLogout size={25} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
