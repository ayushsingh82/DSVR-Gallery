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
        <div>
          <p className="font-semibold text-white">Art Name</p>
          <p className="text-sm text-gray-400">by Owner</p>
        </div>
        <div className="absolute bottom-2 right-2">
          <p className="font-semibold text-white">0.5 Sol</p>
        </div>
      </div>
        </CardHeader>

      </Card>
    );
  }


const Live = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center text-white">
      <div className="flex flex-col items-center mt-[40px] text-center">
        <h1 className="text-4xl font-extrabold mb-4">Discover Unique Digital Art</h1>
        <p className="text-lg mb-6 max-w-xl">
          Explore and bid on one-of-a-kind digital artworks on the Sol blockchain.
        </p>
        <button className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
          Explore Auction
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
      <div className="flex-1 flex flex-col justify-between border border-white p-4">
        <div>
          <h1 className="text-2xl font-bold">Cosmic Bloom</h1>
          <p className="text-lg font-medium">by Jane Doe</p>
          <p className="text-base mt-4">
            Cosmic Bloom is a captivating digital artwork that explores the intersection of nature and technology. The piece features a vibrant, abstract floral motif that appears to be in a state of constant flux, with dynamic lines and shapes that evoke a sense of energy and movement.
          </p>
        </div>
        <div className="flex mt-[40px] justify-between items-center">
          <p className="text-xl font-semibold">0.2 SOL</p>
          <div className="flex gap-x-4 items-center">
            <input
              type="text"
              className="border border-purple-500 bg-white text-black p-2 rounded-md"
              placeholder="Enter your bid"
            />
            <button className="border-2 border-purple-500 rounded-lg px-4 py-2 font-bold text-xl text-white bg-black">
              Place Bid
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="space-y-6 border border-white rounded-lg mb-[50px] px-[60px] py-[20px]">
  <div className="space-y-2">
    <h2 className="text-2xl font-semibold tracking-tighter">Checkout</h2>
    <p className="text-muted-foreground">Review your order and complete the purchase.</p>
    <div></div>
  </div>
  

  
  <form className="space-y-4">
    <div className="grid gap-2">
      <label htmlFor="wallet" className="text-sm font-medium">Wallet Address</label>
      <input id="wallet" type="text" placeholder="Enter your wallet address" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-[10px] text-black" />
    </div>
    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700">
      Complete Purchase
    </button>
    <p className="text-muted-foreground mb-[50px]">Review the details of your purchase.</p>
  </form>
</div>


    </div>
  );
}

export default Live;
