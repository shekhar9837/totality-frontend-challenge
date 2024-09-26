'use client'

import Image from 'next/image';
import React from 'react';
import { AnimatedTooltipHomePage } from '../Tooltip/Tooltip';
import { MoveUpRight } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full h-screen px-6 py-12   gap-20 md:flex-row bg-zinc-200 bg-red-200 rounded-lg shadow-lg">
      {/* Left Side - Text and Input */}
      <div className="flex flex-col items-start   ">
        <h1 className="text-5xl  font-extrabold uppercase">Inspiring<br/> Locations <br/>to Lodge</h1>
        <p className="text-sm py-6">
          Create a memorable travel  <br/> moment by choosing a  designer  house  <br/>with a warm ambiance as your accommodation.
        </p>
        <div className='py-4'>

        <input
          type="text"
          placeholder="Find inspiring places"
          className="py-3 px-6 bg-white border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          </div>
        {/* <div className="my-4 flex gap-2">
        <AnimatedTooltipHomePage/>
        </div> */}
      </div>

      {/* Right Side - Image Gallery */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex relative ">
          <Image
            src="/images/photo7.avif"
            alt="Home"
            width={1920}
            height={1080}
            className="rounded-3xl w-[26rem] h-[16rem] object-cover shadow-lg"
          />
          <h2 className='bottom absolute text-white text-[1.6rem] font-semibold   leading-none p-4 capitalize'>exceptional properties located in stunning surroundings</h2>
          <div className='absolute bottom-0 p-4 flex'>
          <button className=' rounded-full px-6 py-2  flex items-center gap-2 bg-white '>
            show-Top-Rated Villas
            <MoveUpRight className='w-4 h-4' />
          </button>
          </div>
        
        </div>
        <div className="py-2 px-8 flex flex-row border items-center justify-between h-12 bg-zinc-900 rounded-full w-[26rem] my-4">
          <h1 className="text-white text-lg">2,000+ 
          </h1>
            <h1 className="text-white text-lg">Unique Places</h1>
        </div>
        <div className="flex gap-2">
          <div className='relative flex'>
          <Image
            src="/images/photo4.avif"
            alt="Home"
            width={1920}
            height={1080}
            className="rounded-3xl h-32 w-[13rem] object-cover"
            />
            <h2 className='bottom absolute text-white text-[1rem] font-semibold  leading-none p-4 capitalize'>Recommended places</h2>
            </div>

            <div className='relative flex'>

          <Image
            src="/images/photo10.avif"
            alt="Home"
            width={1920}
            height={1080}
            className="rounded-3xl h-32 w-[13rem] object-cover"
            />
<h2 className='bottom absolute text-white text-[1rem]  font-semibold  leading-none p-4 capitalize'>Private island <br/>rentals</h2>

            </div>
        </div>
      </div>
    </div>
  );
}
