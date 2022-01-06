import React from "react";

import { useRouter } from "next/router";
import Image from "next/image";

import { FaTelegramPlane, FaFacebookF, FaInstagramSquare } from 'react-icons/fa'
import { CgInstagram } from 'react-icons/cg'

const Footer = () => {
    const router = useRouter()
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-48 md:h-64">
        <Image
          layout="fill"
          objectFit="cover"
          src="https://www.pbdarchitects.com.au/wp-content/uploads/2017/10/Mondello1.jpg"
          alt="about header image"
        />
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center opacity-90 bg-gradient-to-r from-[#0c0c0c] to-[#130f40]" />
      
      <div className="container mx-auto absolute top-1/2 right-0 left-0 transform -translate-y-1/2 flex text-white uppercase">
        <div onClick={() => router.push("/")} className="flex justify-items-end text-2xl leading-4 md:leading-6 font-semibold cursor-pointer mx-auto hover:text-gray-300 mb-10">
                <span>Jizzax</span> <br />
                city
        </div>

      </div>
        <div className="flex justify-center items-center space-y-0 absolute bottom-4 right-0 left-0 text-white border-t py-3">
            <p onClick={() => router.push("https://teamit.uz/")} className="cursor-pointer font-medium animate-pulse px-2">TeamIt coders.</p> <br />
            <p className="hidden sm:block">Barcha huquqlar himoyalangan.</p>
        </div>
    </div>
  );
};

export default Footer;
