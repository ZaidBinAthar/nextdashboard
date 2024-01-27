'use client'
import React, { useState } from "react";
import Login from "./dashboard/page";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // You can implement actual authentication logic here
    // For simplicity, let's assume a hardcoded username and password
    if (username === "Zaid" && password === "123") {
      setLoggedIn(true);
    } else {
      console.log("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      {loggedIn ? (
        <main className="bg-white p-4 rounded shadow-md">
          <Login />
        </main>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md">
            <h1 className="text-3xl font-semibold mb-4">Login</h1>
            <label className="block mb-2">
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border border-gray-300 px-3 py-2 w-full rounded"
              />
            </label>
            <label className="block mb-4">
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 px-3 py-2 w-full rounded"
              />
            </label>
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;





