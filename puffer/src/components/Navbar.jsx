import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {
    return (
      <nav className=''>
        <div className='flex flex-row mx-auto px-[40px] py-[25px] justify-between items-center mt-[0px] bg-black'>
          <div className='font-bold text-2xl text-purple-400'>
            <a href='/'>DSVR-Gallery</a>
          </div>
          <div className='flex justify-center flex-1 space-x-8 text-center'>
            <h1 className='font-medium text-xl text-white'>
              <a href='/live'>Live</a>
            </h1>
            <h1 className='font-medium text-xl text-white'>
              <a href='/upcoming'>Upcoming</a>
            </h1>
          </div>
          <div className='text-white'>
       Wallet
          </div>
        </div>
        <hr className='border-t-2 border-purple-600' />
      </nav>
    );
  }
  

export default Navbar