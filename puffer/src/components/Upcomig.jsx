import React from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";

function NextCard() {
    return (
      <Card className="py-4 bg-black text-white border-purple-500 border">
        <CardBody className="overflow-visible py-2">
          <img
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://nextui.org/images/hero-card-complete.jpeg"
            width={270}
          />
        </CardBody>
        
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="px-4 pt-2 flex justify-between items-center">
        <div className="text-white space-y-2">
        <p className="font-bold text-xl">Chromatic Fusion</p>
        <p className="text-sm text-gray-400">Upcoming Auction: 2023-06-15 12:00 PM UTC</p>
        <p className="text-sm text-gray-400">Current Bid: 1.2 SOL</p>
        <p className="text-sm text-gray-400">Time Remaining: 3 days 12 hours</p>
      </div>
      
      </div>
        </CardHeader>

      </Card>
    );
  }


const Upcoming = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center text-white">
      <div className="flex flex-col items-center mt-[40px] text-center">
        <h1 className="text-4xl font-extrabold mb-4">Discover Unique  Arts on Solana Blockchain</h1>
        <p className="text-lg mb-6 max-w-xl">
          Explore and bid on one-of-a-kind digital artworks on the Sol blockchain.
        </p>
        <button className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
          Explore Upcomig Auction
        </button>
      </div>

      <div className="flex gap-x-6 justify-center mt-[40px]">
        <NextCard />
        <NextCard />
        <NextCard />
      </div>

      <div className="flex mt-[100px] mb-[120px] gap-x-12 justify-center items-stretch mx-auto max-w-screen-lg">
      <div className="flex-1 flex items-center justify-center">
        <img
          alt="Card background"
          className="object-cover rounded-xl h-full w-auto"
          src="https://nextui.org/images/hero-card-complete.jpeg"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between border border-white p-4 rounded-lg">
        <div>
          <h1 className="text-2xl font-bold">Chromatic Fusion</h1>
          <p className="text-base mt-4">
            Cosmic Bloom is a captivating digital artwork that explores the intersection of nature and technology. The piece features a vibrant, abstract floral motif that appears to be in a state of constant flux, with dynamic lines and shapes that evoke a sense of energy and movement.
          </p>
        </div>
        <div className="flex mt-[40px] justify-between items-center ">
        <div className='flex-col flex'>
        <p className="text-lg font-large text-gray-300">current bid</p>
          <p className="text-xl font-semibold">0.2 SOL</p>
          </div>
          <div className="flex gap-x-4 items-center flex-col">
          <p className="text-lg font-large text-gray-300">Time remaining</p>
          <p className="text-xl font-semibold">3Days 12hours</p>
          </div>
        </div>
        <div>
        <p className='mt-[20px] font-semibold text-lg text-gray-300'>Bid History</p>
        <div className='border border-white mt-[10px] rounded-md bg-gray-600 '>
        <div className='flex justify-between ml-[10px] mr-[10px] mt-[10px]'>
        <p>2023-06-10 12:34 PM</p>
        <p>1.2 SOL</p>
        </div>
        <div className='flex justify-between ml-[10px] mr-[10px] mt-[10px]'>
        <p>2023-06-09 10:22 AM</p>
        <p>1.1 SOL</p>
        </div>
        <div className='flex justify-between ml-[10px] mr-[10px] mt-[10px]'>
        <p>2023-06-08 3:45 PM</p>
        <p>1.0 SOL</p>
        </div>
        </div>
        </div>
        <div className="flex justify-center">
        <button className="mt-[20px] w-2/3 rounded-lg border border-2 bg-purple-600 text-xl font-bold">
          Place Bid
        </button>
      </div>
      
      </div>
    </div>
    

    </div>
  );
}

export default Upcoming;
