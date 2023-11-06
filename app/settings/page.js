import React from "react";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";

export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-4 pt-72 text-center font-bold">
        <div className=" bg-yellow-200 p-2 rounded-lg flex justify-center items-center">
          <h1>Oops</h1>
        </div>
        <p>You seem to be lost. Click the button below to go back home.</p>
        <div className="bg-gray-100 hover:bg-gray-200 my-1 cursor-pointer p-3 rounded-lg inline-block">
          <Link href="/">
            <div>
              <RxDashboard size={50} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}