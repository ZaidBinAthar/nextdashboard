import React from "react";

export default function TopCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 m-2">
      <div className="rounded-lg lg:col-span-2 col-span-1 bg-white p-2 flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">$7,846</div>
          <div className="text-gray-600">Daily Revenue</div>
        </div>
        <div className="flex justify-center items-center bg-green-200 rounded-lg p-2">
          <span>+18%</span>
        </div>
      </div>
      <div className="rounded-lg lg:col-span-2 col-span-1 bg-white p-2 flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">$1,437,876</div>
          <div className="text-gray-600">YTD Revenue</div>
        </div>
        <div className="flex justify-center items-center bg-green-200 rounded-lg p-2">
          <span>+11%</span>
        </div>
      </div>
      <div className="rounded-lg lg:col-span-1 col-span-1 bg-white p-2 flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">11,437</div>
          <div className="text-gray-600">Customers</div>
        </div>
        <div className="flex justify-center items-center bg-green-200 rounded-lg p-2">
          <span>+17%</span>
        </div>
      </div>
    </div>
  );
}
