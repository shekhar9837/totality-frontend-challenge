import Image from 'next/image'
import React from 'react'

export const HomePage = () => {
  return (
    <div className="flex items-start justify-center  w-[100%] h-screen px-12 my-6 gap-0">
    <div className=" flex   bg-red-  flex-col leading-none px-6">
      <div className="w-[28rem] h-[18rem] ">
        <h1 className="text-[4rem] font-bold">
          Inpiring locations
          <br /> to Lodge
        </h1>
        <p className="text-[1rem] py-8">
          create a memorable travel moment by choosing a designer house with a
          warm ambiance as yout accommodation.
        </p>
      </div>
      <input
        type="text"
        placeholder="Find inspiring places"
        className="py-4 px-12 bg-slate-50 rounded-full"
      />
      <div className="my-4 flex">
        <Image
        src='/images/test.jpeg'
        alt="person"
        width={1920}
        height={1080}
        className="rounded-full w-[6rem] h-[6rem]"

        />
        <Image
        src='/images/test.jpeg'
        alt="person"
        width={1920}
        height={1080}
        className="rounded-full w-[6rem] h-[6rem]"

        />
        <Image
        src='/images/test.jpeg'
        alt="person"
        width={1920}
        height={1080}
        className="rounded-full w-[6rem] h-[6rem]"

        />
      </div>
    </div>

    <div className="   flex items-center justify-center flex-row ">
      <div className="flex items-center flex-col">

      
      <div className=" flex ">
        <Image
          src="/images/test.jpeg"
          alt="Home"
          width={1920}
          height={1080}
          className="rounded-3xl w-[28rem] h-[18rem] "
          // objectFit="cover"
        />
       
      </div>

      <div className="py-6 px-12 flex  border items-center h-12 bg-zinc-900 rounded-full  w-[28rem] my-4">
        <h1>2,000+Unique places</h1>
      </div>

      <div className="flex   rounded-3xl">
        <Image
          src="/images/test.jpeg"
          alt="Home"
          width={1920}
          height={1080}
          className="rounded-3xl h-[10rem] w-[14rem] mr-2"
          //  objectFit="cover"
        />
        <Image
          src="/images/test.jpeg"
          alt="Home"
          width={1920}
          height={1080}
          className="rounded-3xl h-[10rem] w-[14rem] ml-2"
          //  objectFit="cover"
        />
      </div>
      </div>

      
    </div>
  </div>
  )
}
