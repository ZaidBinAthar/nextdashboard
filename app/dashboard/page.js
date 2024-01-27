"use client";
import Head from "next/head";
import Header from "@/components/Header";
import TopCards from "@/components/TopCards";
import BarChart from "@/components/BarChart";
import RecentOrders from "@/components/RecentOrders";

export default function dashboard() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 min-h-screen">
        <main className="bg-white p-4 rounded shadow-md">
          <Header />
          <TopCards />
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <BarChart />
            <RecentOrders />
          </div>
        </main>
      </main>

      <style jsx>{`
        .main-content {
          position: relative;
        }

        input {
          margin: 10px 0;
          padding: 8px;
          transition: background 0.3s ease;
        }

        input:hover {
          background-color: #f0f0f0;
        }

        button {
          padding: 8px 16px;
          background-color: #5566ipro;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
