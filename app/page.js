'use client'
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import RecentOrders from '../components/RecentOrders';

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const passwordInputRef = useRef(null);
  const correctPassword = 'ZAID BIN ATHER HUZAIFA BIN ATHER HAMZA BIN ATHER 5566IPRO';

  useEffect(() => {
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  }, []);

  const handleSubmit = () => {
    if (password === correctPassword) {
      setShowModal(false);
    } else {
      setError('Incorrect password. Please try again.');
      // Select the text in the password input when incorrect
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
      <div className={`overlay ${showModal ? 'overlay-active' : ''}`}></div>
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
      <main className={`bg-gray-100 min-h-screen ${showModal ? 'blurred' : ''}`}>
        <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentOrders />
        </div>
      </main>
      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          pointer-events: none;
          z-index: 999;
          transition: background 0.3s ease;
        }

        .overlay-active {
          background: rgba(0, 0, 0, 0.5);
          pointer-events: auto;
        }

        .password-modal {
          position: fixed;
          top: 50%;
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
          filter: blur(2px);
        }
      `}</style>
    </>
  );
}
