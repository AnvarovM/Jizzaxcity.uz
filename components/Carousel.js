import React, { useState } from "react";

import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const router = useRouter();
  const { t } = useTranslation();

  const nextSlides = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlides = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  const carousel_data = [
    {
      id: "01",
      heading: `${t("home:header_carousel_heading_1")}`,
      paragraph: `${t("home:header_carousel_p_1")}`,
      btn: `${t("home:home_to_contact_btn")}`,
    },
    {
      id: "02",
      heading: `${t("home:header_carousel_heading_2")}`,
      paragraph: `${t("home:header_carousel_p_2")}`,
      btn: `${t("home:home_to_contact_btn")}`,
    },
    {
      id: "03",
      heading: `${t("home:header_carousel_heading_3")}`,
      paragraph: `${t("home:header_carousel_p_3")}`,
      btn: `${t("home:home_to_contact_btn")}`,
    },
  ];

  if(!Array.isArray(carousel_data) || carousel_data <= 0) {
    return null;
}

  const length = carousel_data.length;
  return (
    <div className="">
      <div className="">
        {carousel_data.map((slide, index) => {
            return (
            <div
                className="absolute top-0"
                key={slide.id}
            >
                <div className="h-screen w-full text-white flex items-center md:items-start md:text-left md:mt-96 px-4 lg:mt-80"> 
                    {index === current && (
                        <div className="space-y-4 md:space-y-6 max-w-screen-2xl md:max-w-screen-lg">
                            <p className="text-3xl font-semibold">{slide.paragraph}</p>
                            <h1 className="text-4xl md:text-6xl font-semibold">{slide.heading}</h1>
                            <button onClick={() => router.push('/contact')} className="text-md md:text-xl px-4 py-3 md:py-4 md:px-6 font-medium hover:bg-white hover:bg-opacity-20 hover:backdrop-filter hover:backdrop-blur-md border tracking-wider">{slide.btn}</button>
                            <div className="flex justify-center w-fit space-x-2 md:space-x-4">
                                <p onClick={prevSlides} className="arrows">↼</p>
                                <p onClick={nextSlides} className="arrows">⇁</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            );
        })}
      </div>
    </div>
  );
};

export default Carousel;
