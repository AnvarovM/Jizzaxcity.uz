/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useRouter } from 'next/router'

const Section1 = () => {
    const router = useRouter();

    const scroll_cards_data = [
        {
            title: 'Best trips to play with your best friends',
            img: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4e915376999711.5c7a83e98290c.jpg',
        },
        {
            title: 'Best trips to play with your best friends',
            img: 'https://i.pinimg.com/originals/2f/71/a8/2f71a8f52d9c538011f68a5505e13299.jpg',
        },
        {
            title: 'Best trips to play with your best friends',
            img: 'https://cdn.vox-cdn.com/thumbor/O8KNsY3Vz2jGdgjaT7w9rFqOStQ=/0x0:1680x945/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/55398781/Zella_Apartments_01_.0.jpg',
        },
        {
            title: 'Best trips to play with your best friends',
            img: 'https://avatars.mds.yandex.net/i?id=a799ee9f10b59d455c07c3387acf5c63-5220417-images-thumbs&n=13',
        },
        {
            title: 'Best trips to play with your best friends',
            img: 'https://www.pbdarchitects.com.au/wp-content/uploads/2017/10/Mondello1.jpg',
        },
    ];

    const cards_data = [
        {
            title: 'Best trips to play with your best friends',
            img: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4e915376999711.5c7a83e98290c.jpg',
        },
        {
            title: 'Best trips to play with your best friends',
            img: 'https://i.pinimg.com/originals/2f/71/a8/2f71a8f52d9c538011f68a5505e13299.jpg',
        },
        {
            title: 'Best trips to play with your best friends',
            img: 'https://cdn.vox-cdn.com/thumbor/O8KNsY3Vz2jGdgjaT7w9rFqOStQ=/0x0:1680x945/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/55398781/Zella_Apartments_01_.0.jpg',
        },
        {
            title: 'Best trips to play with your best friends',
            img: 'https://avatars.mds.yandex.net/i?id=a799ee9f10b59d455c07c3387acf5c63-5220417-images-thumbs&n=13',
        },
        {
            title: 'Best trips to play with your best friends',
            img: 'https://www.pbdarchitects.com.au/wp-content/uploads/2017/10/Mondello1.jpg',
        },
    ];
    return (
        <div id='section1' className='mx-auto'>
            <div className='mt-10 md:mt-24 relative'>
                     <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold tracking-tight text-center text-white'>Get away this summer</h1>
                <ul className='mt-10 px-[50px] w-full flex overflow-x-scroll gap-8 snap-x'>
                {scroll_cards_data.map((item, index) => {
                return (
                    <li onClick={() => router.push('project')} key={index} className='snap-center'>
                        <div className='relative flex-shrink-0 max-w-[90vw] overflow-hidden rounded-3xl cursor-pointer'>
                        <img src={item.img} className='absolute inset-0 w-full h-full object-cover object-bottom' alt="project images" />
                        <div className='absolute inset-0 h-full w-full bg-gradient-to-br from-black/75' />     
                        <div className='relative h-64 md:h-96 w-[768px] p-5 md:p-8 lg:p-12 flex flex-col justify-between items-start'>
                            <div>
                                <p className='text-lg md:text-2xl font-medium text-white'>Destinations</p>
                                <h2 className='mt-3 w-2/3 text-2xl md:text-3xl font-semibold tracking-tight text-white'>
                                    {item.title}
                                </h2>
                            </div>
                            <a  onClick={() => router.push('project')} className='px-4 py-3 rounded-lg bg-white hover:bg-slate-100 active:bg-slate-300 ring-2 ring-gray-300 text-state-900 text-sm font-medium'>Hammasini ko'rish</a>
                        </div>                   
                    </div>
                    </li>
                )
            })}
                </ul>
            </div>
        </div>
    )
}

export default Section1
