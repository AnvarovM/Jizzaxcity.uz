/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { animated, useSpring } from "react-spring";

import { useScroll } from "react-use-gesture";

const project_images = [
    'https://jooinn.com/images/apartment-building-5.jpg',
    'https://jooinn.com/images/apartment-building-5.jpg',
    'https://jooinn.com/images/apartment-building-5.jpg',
    'https://jooinn.com/images/apartment-building-5.jpg',
    'https://jooinn.com/images/apartment-building-5.jpg',
]
const Section = () => {
    const [style, set] = useSpring(() => ({
        transform: "perspective(500px) rotateY(0deg)"
      }));
    
      const bind = useScroll(event => {
        set({
          transform: `perspective(500px) rotateY(${
            event.scrolling ? event.delta[0] : 0
          }deg)`
        });
      });
    

    const scroll_cards_data = [
        {
            title: 'Best trips to play with your best friends',
            img: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4e915376999711.5c7a83e98290c.jpg',
        },
        {
            title: 'Best trips to play with your best friends',
            img: 'https://cdn.vox-cdn.com/thumbor/O8KNsY3Vz2jGdgjaT7w9rFqOStQ=/0x0:1680x945/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/55398781/Zella_Apartments_01_.0.jpg',
        },
        {
            title: 'Best trips to play with your best friends',
            img: 'https://i0.wp.com/www.3dpower.in/images/apartment%20elevation%20design/architectural%203d%20rendering%20apartment.jpg',
        },
        {
            title: 'Best trips to play with your best friends',
            img: 'https://www.pbdarchitects.com.au/wp-content/uploads/2017/10/Mondello1.jpg',
        },
    ];
    return (
        <div>
            <div className=''>
                <div className=''>
                    <div className='container mx-auto mt-16'>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl text-[#333333] font-semibold tracking-tight text-center'>Jizzax city proyektlar</h1>
                        <div className='my-10 md:my-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-4 gap-1 md:px-0 cursor-pointer'>
                            {scroll_cards_data.map(item => (
                                <div className='relative' key={item}>
                                    <div>
                                        <img className='w-full h-96 md:h-[40rem] lg:h-screen object-cover rounded-3xl' src={item.img} alt="" />
                                    </div>
                                    <div className='absolute inset-0 h-full w-full bg-gradient-to-br from-black/60 rounded-3xl' />   
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section
