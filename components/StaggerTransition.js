import React, {useRef, useEffect} from 'react'
import gsap, {Power4} from 'gsap'
function Transition() {
    const trans = useRef(null);
    const trans2 = useRef(null);
    const trans3 = useRef(null);
    const timeline = gsap.timeline()
    useEffect(() => {
        timeline.to(trans.current, {
            duration: 0.5,
            y: window.innherWidth,
            yPercent: -100,
            ease: Power4.easeInOut
        })
        timeline.to(trans2.current, {
            duration: 0.6,
            y: window.innherWidth,
            yPercent: -100,
            ease: Power4.easeInOut
        },)
        timeline.to(trans3.current, {
            duration: 0.7,
            y: window.innherWidth,
            yPercent: -100,
            ease: Power4.easeInOut
        })
    })
    return (
        <div className=''>
           <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-3">
                <div ref={trans} className='h-screen bg-purple-600'></div>   
                <div ref={trans2} className='h-screen bg-purple-700'></div>   
                <div ref={trans3} className='h-screen bg-purple-500'></div>   
            </div> 
        </div>
    )
}

export default Transition