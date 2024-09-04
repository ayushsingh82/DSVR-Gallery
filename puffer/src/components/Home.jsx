import React from 'react';
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import { TypewriterEffectSmooth } from './ui/typewriter-effect';



const TypewriterEffectSmoothDemo = () => {
    const words = [
        {
            text: "Lets",
        },
        {
            text: "Hack",
        },
        {
            text: "with",
        },
        {
            text: "DSVR.",
            className: "text-purple-500 dark:text-purple-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[5rem] mt-[40px]">
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            </div>
        </div>
    );
}

function Home() {
    return (
        <div className='flex flex-col items-center bg-black scroller min-h-screen'>
            <div className='text-4xl'>
                <TypewriterEffectSmoothDemo />
            </div>
            <h3 className='mt-[20px] text-white text-xl'>
                Create and manage ad campaigns effortlessly. Our user-friendly platform allows you
                <br /> to design, launch, and monitor your ads seamlessly, ensuring maximum reach and
                <br /> engagement with minimal hassle.
            </h3>
            <button className='mt-[20px] border-2 border-purple-500 text-white px-[10px] py-[10px] font-medium text-xl bg-gradient-to-r from-purple-900 via-black to-black rounded-lg mx-auto'>
                Join the community
            </button>
            <div className='mt-[80px] flex flex-col gap-y-[80px] text-white mb-[30px]'>
               
             
                <div className='mt-[0px] bg-black h-[50px]'>
                </div>
            </div>
        </div>
    )
}

export default Home



// <div className='flex flex-col md:flex-row justify-between mx-auto md:gap-x-12 gap-y-12'>
// <div>
//     <motion.h1 className='text-center font-medium text-3xl text-purple-500'
//         initial={{ y: 100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 2 }}>
//         Earn from Viewer Engagement
//     </motion.h1>
//     <motion.p className='mt-[20px] text-lg'
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 4 }}>
//         Generate revenue when viewers interact with your ads. Our system rewards you
//         <br /> for each visit and click, turning viewer engagement into tangible
//         <br /> earnings for your campaigns.
//     </motion.p>
// </div>
// <motion.div className='h-[400px]'
//     initial={{ x: 100, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     transition={{ duration: 3 }}>
//     <img className='h-[400px] w-[400px]' src='https://i.pinimg.com/originals/12/66/07/126607145b0a3adf66144b7bd6b39635.jpg' alt='image' />
// </motion.div>
// </div>