import React from "react";

import { FaFacebookF, FaTelegramPlane, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';

const Section = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 my-10 md:my-16">
        <h1 className='text-2xl md:text-3xl lg:text-5xl text-[#333333] font-semibold tracking-tight text-center'>Hoziroq aloqaga chiqing</h1>
      <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4 my-10 md:my-16">
        <form>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Ism
              </label>
              <input
                className="appearance-none block w-ring-2g-gray-200 text-gray-700 border border-purple-500 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-nonering:purple-600"
                id="grid-first-name"
                type="text"
                placeholder="Pistonchi"
              />
              <p className="text-purple-500 text-xs">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Familiya
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 ring-2 border-gray-200 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:ring-purple-600"
                id="grid-last-name"
                type="text"
                placeholder="Palonchiyev"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email Manzil
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 ring-2 border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-purple-600"
                id="grid-email"
                type="email"
                placeholder="********@*****.***"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Xabaringiz
              </label>
              <textarea
                placeholder="Men bilan aloqaga chiqib yuboringlar."
                rows="5"
                className="appearance-none block w-full bg-gray-100 text-gray-700 ring-2 border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:ring-purple-600"
              />
            </div>
            <div className="flex justify-between w-full px-3">
              <div className="md:flex md:items-center">
                <label className="block text-purple-600 font-bold">
                  <input className="mr-2" type="checkbox" />
                  <span className="text-sm">Xabar haqida bizni ogohlantirsh!</span>
                </label>
              </div>
              <button
                className="shadow bg-purple-600 hover:bg-purple-500 active:text-purple-400 right-2 ring-purple-800 focus:shadow-outline focus:outline-none text-white text-sm md:text-lg whitespace-nowrap font-semibold py-2 px-6 rounded"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
        <div className="mx-auto">
            <h1 className='text-2xl lg:text-3xl text-[#333333] font-semibold tracking-tight'>Biz hozir onlinemiz</h1>
            <div className="flex space-x-5 my-4">
                <FaFacebookF className="p-2 md:p-4 border-2 border-purple-600 rounded-lg md:rounded-2xl cursor-pointer text-[#333] text-4xl md:text-6xl" />
                <FaTelegramPlane className="p-2 md:p-4 border-2 border-purple-600 rounded-lg md:rounded-2xl cursor-pointer text-[#333] text-4xl md:text-6xl" />
                <FaInstagram className="p-2 md:p-4 border-2 border-purple-600 rounded-lg md:rounded-2xl cursor-pointer text-[#333] text-4xl md:text-6xl" />
                <FaPhoneAlt className="p-2 md:p-4 border-2 border-purple-600 rounded-lg md:rounded-2xl cursor-pointer text-[#333] text-4xl md:text-6xl" />
            </div>
            <div className="md:my-10">
                <h1 className='text-2xl lg:text-3xl text-[#333333] font-semibold tracking-tight'>Aloqa uchun</h1>
                <div className="py-4 space-y-4">
                    <div className="flex items-center space-x-2">
                        <IoLocationOutline className="text-[#333] text-3xl" />
                        <p className="">MJ Developers 704 One By Omniyat Business Bay, Dubai, UAE</p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaPhoneAlt className="text-[#333] text-2xl" />
                        <p className="">+99899-777-12-12</p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <AiOutlineMail className="text-[#333] text-2xl" />
                        <p className="">example@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
