import React from "react";
import Image from 'next/image'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// components
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";

// global static props
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

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
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 text-center space-y-4">
          <h1 className="text-white text-2xl md:text-4xl font-semibold">404</h1>
          <h1 className="text-white text-2xl md:text-4xl font-semibold">Bunday sahifa topiladi.</h1>
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center bg-black opacity-70 bg-gradient-to-r from-[#0c0c0c] to-[#130f40]"></div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default notFound;
