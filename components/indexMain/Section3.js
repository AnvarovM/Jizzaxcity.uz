/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import Accordion from "../Accordion";

const Section3 = () => {
  const router = useRouter();

  const generalQuestion = [
    {
      id: 1,
      question: "How much yours apartment",
      answer: "We do not now about our apartment price.",
    },
    {
      id: 1,
      question: "How much yours apartment",
      answer: "We do not now about our apartment price.",
    },
    {
      id: 1,
      question: "How much yours apartment",
      answer: "We do not now about our apartment price.",
    },
    {
      id: 1,
      question: "How much yours apartment",
      answer: "We do not now about our apartment price.",
    },
    {
      id: 1,
      question: "How much yours apartment",
      answer: "We do not now about our apartment price.",
    },
  ];
  return (
    <div className="container mx-auto my-10 px-5">
      <div onClick={() => router.push("/contact")} className="relative my-10 flex-shrink-0 max-w-full overflow-hidden rounded-3xl cursor-pointer">
         <h1 classNam e='text-2xl md:text-3xl lg:text-5xl font-semibold tracking-tight text-center text-white'>Get away this summer</h1>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/4e915376999711.5c7a83e98290c.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt="project images"
        />
        <div className="absolute inset-0 h-full w-full opacity-60 bg-gradient-to-br from-black/75" />
        <div className="relative h-64 md:h-96 w-[768px] flex-shrink-0 px-5 pb-5 md:p-12 flex flex-col">
          <div className="text-white flex-grow">
            <p className="text-lg md:text-2xl font-semibold pb-2">Lets get connected</p>
            <p className="text-2xl md:text-3xl font-semibold">
              Do you have any other <br /> question?
            </p>
          </div>
          <div>
            <div className="hidden lg:inline-flex bg-white py-2 rounded-md">
              <input
                className="px-2 py-2 flex-grow outline-none w-72"
                type="text"
                placeholder="search something..."
              />
              <button className="hidden lg:block mx-2 bg-purple-600 hover:bg-purple-500 py-2 px-4 rounded-md active:bg-purple-500 text-white focus:ring-2 ring-purple-400">
                submit
              </button>
            </div>
          </div>
            <a  onClick={() => router.push('/contact')} className='block lg:hidden w-fit px-4 py-3 rounded-lg bg-white hover:bg-slate-100 active:bg-slate-300 ring-2 ring-gray-300 text-state-900 text-xs md:text-sm font-medium'>Lets connected</a>
        </div>
      </div>

       <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold tracking-tight text-center text-[#333333] mt-10 md:mt-16'>Tez-tez so&#39;raladigan savollar</h1>
      <div className="my-10">
        {generalQuestion.map(({ question, answer }, index) => (
          <div key={index}>
            <Accordion question={question} answer={answer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
