import React from "react";
import { data } from "@/components/data/data";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function orders() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-4">
        <h2>Orders</h2>
        <h2>WelCome Back, Clint</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-center cursor-pointer">
            <span>Order</span>
            <span className="sm:text-left text-right">Status</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key="id"
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-center items-start cursor-pointer"
              >
                <div className="flex">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <FaShoppingBag className="text-purple-800" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800 font-bold">
                      ${order.total.toLocaleString()}
                    </p>
                  </div>
                </div>
                <p>
                  <span
                    className={
                      order.status == "Processing"
                        ? "bg-green-200 p-2 rounded-lg"
                        : order.status == "Completed"
                        ? "bg-blue-200 p-2 rounded-lg"
                        : "bg-yellow-200 p-2 rounded-lg"
                    }
                  >
                    {order.status}
                  </span>
                </p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="sm:flex hidden justify-between items-center">
                  <p className="hidden sm:grid">{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
