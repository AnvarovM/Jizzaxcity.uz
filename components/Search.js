import React, { useEffect, useRef } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import gsap from 'gsap'
   
const Search = ({ searchInput, setSearchInput, searchOn, setSearchOn }) => {
    const router = useRouter();
    const search_data = [
        {
            id: '01',
            title: "biz haqimizda",
            path: "/about",
            description: "biz haqimizda"
        },
        {
            id: '02',
            title: "proyektlar",
            path: "/project",
            description: "Ishlarmizni ko`rish"
        },
        {
            id: '03',
            title: "contact",
            path: "/contact",
            description: "sotib olish"
        },
        {
            id: '01',
            title: "services",
            path: "/contact",
            description: "aloqaga chiqish"
        },
    ]
    return (
        <div className={searchOn ?  '': "hidden"}>
            <div className='group'>
                <div className='flex flex-col w-72 md:w-[500px]'>
                    <div className='flex flex-grow items-center bg-purple-600 hover:bg-purple-500 rounded-t-xl'>
                        <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='flex flex-grow px-4 rounded-t-xl bg-white text-[#333] py-3 focus:outline-none focus:ring focus:border-purple-900' type="text" placeholder='Search page...' />
                        <SearchIcon className='h-6 px-2 text-white cursor-pointer' />
                    </div>
                </div>
                   <div>
                        {searchInput ? (
                            <div className='bg-purple-600 rounded-b-xl'>
                                <h1 className='text-white text-center py-1'>qidirilmoqda...</h1>
                                <div className='py-2 '>
                                    {search_data.map((item, index) => {
                                        return (
                                            <ul key={index}>
                                                <li onClick={() => router.push(`${item.path}`)} className='py-1 px-4 text-white hover:bg-purple-500 cursor-pointer'>{item.description}</li>
                                            </ul>
                                        )
                                    })}
                                </div>
                            </div>
                        ) : (
                            <div className='bg-purple-600 rounded-b-xl'>
                                <p className='py-3 text-white text-center'>search</p>
                                {search_data.map((item, index) => {
                                        return (
                                            <ul key={index}>
                                                <li onClick={() => router.push(`${item.path}`)} className='py-1 px-4 text-white hover:bg-purple-500 cursor-pointer'>{item.title}</li>
                                            </ul>
                                        )
                                })}
                            </div>
                        )}
                   </div>
            </div>
        </div>
    )
}

export default Search;
