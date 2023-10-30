import Link from "next/link";
import React from "react";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { RiCalculatorLine } from "react-icons/ri";

export default function Sidebar({ children }) {
  return (
    <div className="flex">
      <div className="w-20 px-4 mt-4 border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col gap-3 items-center">
          <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
            <Link href="/">
              <div>
                <RxSketchLogo size={20} />
              </div>
            </Link>
          </div>
          <span className="border-b-[1px] border-gray-300 p-2 w-full"></span>
          <div className="bg-gray-100 hover:bg-gray-200 my-1 cursor-pointer p-3 rounded-lg inline-block">
            <Link href="/">
              <div>
                <RxDashboard size={20} />
              </div>
            </Link>
          </div>
          <div className="bg-gray-100 hover:bg-gray-200 my-1 cursor-pointer p-3 rounded-lg inline-block">
            <Link href="/customers">
              <div>
                <RxPerson size={20} />
              </div>
            </Link>
          </div>
          <div className="bg-gray-100 hover:bg-gray-200 my-1 cursor-pointer p-3 rounded-lg inline-block">
            <Link href="/orders">
              <div>
                <HiOutlineShoppingBag size={20} />
              </div>
            </Link>
          </div>
          <div className="bg-gray-100 hover:bg-gray-200 my-1 cursor-pointer p-3 rounded-lg inline-block">
            <Link href="/settings">
              <div>
                <FiSettings size={20} />
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-gray-100 hover:bg-gray-200 my-1 cursor-pointer p-3 rounded-lg inline-block">
          <RiCalculatorLine size={20} />
        </div>
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
}
