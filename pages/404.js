import React from "react";
import Image from 'next/image'
import Navbar from '../components/Navbar'

const notFound = () => {
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-screen">
        <Image
          layout="fill"
          objectFit="cover"
          src="https://cdnassets.hw.net/e4/e2/c11d774f4f2db6f6b84f8b44e42e/crescent-music-row.jpg"
          alt="about header image"
        />
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center bg-black opacity-70 bg-gradient-to-r from-[#0c0c0c] to-[#130f40]"></div>
      <Navbar />
    </div>
  );
};

export default notFound;
