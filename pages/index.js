import React, { useState, useRef, useEffect } from 'react'

// next js
import Head from "next/head";

// next js internalization
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

// installed packages
import { IoIosArrowDown } from 'react-icons/io'
import gsap, {timeline, Power3} from 'gsap';

// components
import Navbar from "../components/Navbar";
import ToTop from '../components/ToTop'
import Carousel from '../components/Carousel';
import Transition from "../components/Transition";
import Section1 from '../components/indexMain/Section1';
import Section3 from '../components/indexMain/Section3';
import Footer from '../components/Footer';
import Section2 from '../components/indexMain/Section2';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation();

  const headingRef = useRef(null);
  const scrollRef = useRef(null)

  const tl = gsap.timeline();

  useEffect(() => {
    tl.from(headingRef.current, {
      duration: 1,
      marginBottom: 50,
      opacity: 0,
      ease: Power3.easeInOut
    }, "+=1")
  // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [headingRef, tl]);

  return (
    <div ref={scrollRef}>
      <Head>
        <title>Jizzax city | asosiy</title>
        <meta name="Jizzax City" content="Jizzax City`s official website" />
        <link rel="icon" href="https://o.remove.bg/downloads/5d0620be-ce78-4c7a-9dc8-75ef7949a702/R-removebg-preview.png" />
      </Head>

      <Transition />
      
      <div className="relative w-full h-screen">
        <video
          className="w-full h-full object-cover"
          autoPlay={true}
          muted
          loop
        >
          <source src="/video/building_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center opacity-70 bg-gradient-to-r from-[#0c0c0c] to-[#130f40]"></div>
          
            <div className="max-w-screen-2xl mx-auto">
              <Carousel />
            </div>

          <a href='#section1' className="absolute bottom-10 md:bottom-14 right-0 left-0 text-center text-white cursor-pointer">
              <IoIosArrowDown className="mx-auto text-5xl md:text-6xl animate-bounce" />
          </a>
      </div>

      {/* components */}
      <Navbar />
      <ToTop />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />

    </div>
  );
}
