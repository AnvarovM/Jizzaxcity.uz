/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react';

const Section2 = () => {
    return (
        <div className='container mx-auto mt-10 md:mt-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-0 items-center'>
            <div className='hidden md:block'>
                <h3 className='text-[#333333] text-3xl font-semibold mb-10'>Buy <br /> Properties in <br /> buildings under. <br /> 
                    <span className='text-purple-600'>Construction.</span>
                </h3>
                <a className='px-4 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 active:bg-purple-400 mt-10 ring-2 ring-purple-400 text-state-900 cursor-pointer text-white text-sm font-medium'>Biz haqimizda</a>
            </div>
            <div className='relative'>
                <img objectFit='cover' className='absolute inset-0 w-full h-full object-cover object-center rounded-3xl' src="https://www.scottcarver.com.au/assets/project/Regatta_Wentworth_Point.1200x1200_4.jpg" alt="about image" />
                <div className='absolute inset-0 h-full w-full bg-gradient-to-br from-black/60 rounded-3xl' />  
                <div className='relative h-64 md:h-96 p-5 md:p-8 lg:p-12 flex flex-col items-start'>
                     <div className='mt-auto mx-auto text-center'>
                         <p className='block md:hidden text-lg md:text-2xl font-medium text-white'>Destinations</p>
                         <h2 className='block md:hidden mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-white'>
                             Buy Properties in buildings under
                         </h2>
                    </div>
                    <a  onClick={() => router.push('project')} className='block md:hidden px-4 py-3 mt-4 mx-auto rounded-lg bg-white hover:bg-slate-100 active:bg-slate-300 ring-2 ring-gray-300 text-state-900 text-xs md:text-sm font-medium cursor-pointer'>Biz haqimizda</a>
                </div> 
                </div>
            </div>

            <div className='my-10 md:my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0'>
                <div className='grid grid-rows-2 gap-4'>
                    <div className='flex items-stretch border-2 hover:border-purple-600 cursor-pointer rounded-xl p-4 md:p-8 group'>   
                        <div className=''>
                           <p className='text-[#333333] text-2xl md:text-3xl font-semibold'>10 yil</p>
                           <p className='text-base md:text-xl text-[#333333] font-medium truncate'>2012-yildan buyon</p>
                        </div>
                        <div className='flex items-center self-end ml-auto'>
                            <a href="#" className='text-purple-600 whitespace-nowrap font-medium group-hover:text-[#333333] group-hover:pr-2 transition-all duration-200'>Biz haqimizda</a>
                            <span className='text-purple-600 group-hover:text-[#333] px-2 text-xl'>￫</span>
                        </div>
                    </div>
                    <div className='flex items-stretch border-2 hover:border-purple-600 cursor-pointer rounded-xl p-4 md:p-8 group'>   
                        <div className=''>
                           <p className='text-[#333333] text-2xl md:text-3xl font-semibold'>10 yil</p>
                           <p className='text-base md:text-xl text-[#333333] font-medium truncate'>2012-yildan buyon</p>
                        </div>
                        <div className='flex items-center self-end ml-auto'>
                            <a href="#" className='text-purple-600 whitespace-nowrap font-medium group-hover:text-[#333333] group-hover:pr-2 transition-all duration-200'>Biz haqimizda</a>
                            <span className='text-purple-600 group-hover:text-[#333] px-2 text-xl'>￫</span>
                        </div>
                    </div>
                </div>
                <div className='relative rounded-3xl cursor-pointer hidden lg:block'>
                    <img className='rounded-3xl cursor-pointer' src="https://i.pinimg.com/originals/9c/41/02/9c41022fcbf00452a1f8cb36351b380c.jpg" alt="" />
                    <div className='absolute inset-0 h-full w-full bg-gradient-to-br from-black/60 rounded-3xl' />  
                </div>
                <div className='grid grid-rows-2 gap-4'>
                    <div className='flex items-stretch border-2 hover:border-purple-600 cursor-pointer rounded-xl p-4 md:p-8 group'>   
                        <div className=''>
                           <p className='text-[#333333] text-2xl md:text-3xl font-semibold'>10 yil</p>
                           <p className='text-base md:text-xl text-[#333333] font-medium truncate'>2012-yildan buyon</p>
                        </div>
                        <div className='flex items-center self-end ml-auto'>
                            <a href="#" className='text-purple-600 whitespace-nowrap font-medium group-hover:text-[#333333] group-hover:pr-2 transition-all duration-200'>Biz haqimizda</a>
                            <span className='text-purple-600 group-hover:text-[#333] px-2 text-xl'>￫</span>
                        </div>
                    </div>
                    <div className='flex items-stretch border-2 hover:border-purple-600 cursor-pointer rounded-xl p-4 md:p-8 group'>   
                        <div className=''>
                           <p className='text-[#333333] text-2xl md:text-3xl font-semibold'>10 yil</p>
                           <p className='text-base md:text-xl text-[#333333] font-medium truncate'>2012-yildan buyon</p>
                        </div>
                        <div className='flex items-center self-end ml-auto'>
                            <a href="#" className='text-purple-600 whitespace-nowrap font-medium group-hover:text-[#333333] group-hover:pr-2 transition-all duration-200'>Biz haqimizda</a>
                            <span className='text-purple-600 group-hover:text-[#333] px-2 text-xl'>￫</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
