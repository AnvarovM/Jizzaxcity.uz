/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useEffect } from "react";

// next js
import Image from "next/image";

// components
import Navbar from "../components/Navbar";
import Transition from "../components/Transiton";

// next-i18next
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';

// installed packages
import { IoIosArrowDown } from 'react-icons/io'
import gsap, {timeline, Power3} from 'gsap'
import Footer from "../components/Footer";

// global static Props
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

const about = () => {
  const { t } = useTranslation();

  const headingRef = useRef(null);
  const tl = gsap.timeline()

  useEffect(() => {
    tl.from(headingRef.current, {
      duration: 1,
      marginBottom: 50,
      opacity: 0,
      ease: Power3.easeInOut
    }, "+=1")
  }, [])
  return (
    <div>
      <div className="relative w-full h-full">
        <div className="w-full h-screen">
          <Image
            layout="fill"
            objectFit="cover"
            src="https://www.kosiceprojekty.com/obrazky/rezidencne/veza-euphoria/vizualizacia03.jpg"
            alt="about header image"
          />
        </div>
        <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center opacity-70 bg-gradient-to-r from-[#0c0c0c] to-[#130f40]" />

        <div className="absolute top-1/2 right-0 left-0 transform -translate-y-1/2 text-center text-white uppercase">
          <h1 ref={headingRef} className="text-4xl font-medium md:text-5xl lg:text-7xl md:font-semibold tracking-wider md:hover:tracking-widest select-none transition-all duration-200 hover:text-purple-600"> {t("home:nav_contact")} </h1>
        </div>
        <span className="absolute bottom-14 right-0 left-0 text-center text-white">
            <IoIosArrowDown className="mx-auto text-5xl md:text-6xl animate-bounce" />
        </span>

        {/* components */}
        <Transition />
        <Navbar />
      </div>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <Footer />
    </div>
  );
};

export default about;
