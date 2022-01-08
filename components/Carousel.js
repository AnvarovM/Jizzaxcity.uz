import { useRouter } from "next/router";
import React, { useState } from "react";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const router = useRouter()

  const nextSlides = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlides = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  const carousel_data = [
    {
      id: "01",
      heading: "Modern design of houses in europe \n tha is amazing",
      paragraph: "paragraph first",
      btn: "go contact",
    },
    {
      id: "02",
      heading: "That si amazing we build big building",
      paragraph: "paragraph second",
      btn: "go contact",
    },
    {
      id: "03",
      heading: "Our company have lot's of experience",
      paragraph: "paragraph third",
      btn: "go contact",
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
                            <button onClick={() => router.push('/contact')} className="text-xl font-medium hover:bg-white hover:bg-opacity-20 hover:backdrop-filter hover:backdrop-blur-md py-4 px-6 border tracking-wider">{slide.btn}</button>
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
