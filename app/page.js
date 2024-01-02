'use client'
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import RecentOrders from '../components/RecentOrders';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const passwordInputRef = useRef(null);
  const correctPassword = '5566ipro';

  useEffect(() => {
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }

    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(splashTimeout);
  }, []);

  const handleSubmit = () => {
    if (password === correctPassword) {
      setShowModal(false);
      setShowSplash(false);
    } else {
      setError('Incorrect password. Please try again.');
      passwordInputRef.current.select();
    }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {showSplash && (
        <div className='splash-screen'>
          <img src='https://source.unsplash.com/1200x1000/?cloud' alt='Your Image' />
        </div>
      )}

      <main className='bg-gray-100 min-h-screen'>
        <div className={`main-content ${showModal ? 'blurred' : ''}`}>

          {showModal && (
            <div className='password-modal'>
              <div className='modal-content'>
                <h2>Password Required</h2>
                <input
                  ref={passwordInputRef}
                  type='password'
                  placeholder='Enter password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                />
                {error && <div className='error-message'>{error}</div>}
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          )}

          <Header />
          <TopCards />
          <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
            <BarChart />
            <RecentOrders />
          </div>
        </div>
      </main>

      <style jsx>{`
        .splash-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .splash-screen h1 {
          font-size: 24px;
          color: #333;
        }

        .main-content {
          position: relative;
        }

        img {
          width: 100%;
          max-width: 400px; /* Adjust the max-width as needed */
          margin: 0 auto;
          display: block;
        }

        .password-modal {
          position: fixed;
          top: 7%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          text-align: center;
          z-index: 1000;
        }

        .modal-content {
          text-align: center;
        }

        input {
          margin: 10px 0;
          padding: 8px;
          transition: background 0.3s ease;
        }

        input:hover {
          background-color: #f0f0f0;
        }

        .error-message {
          color: #ff3333;
          margin: 10px 0;
        }

        button {
          padding: 8px 16px;
          background-color: #5566ipro;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .blurred {
          filter: blur(0px); // Apply the blur effect only to the content behind the password modal
        }

        /* Your existing styles go here */
      `}</style>
    </>
  );
}
