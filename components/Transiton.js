import React, {useRef, useEffect} from 'react'
import gsap, {Power4} from 'gsap'
function Transition() {
    const trans = useRef(null);
    const timeline = gsap.timeline()
    useEffect(() => {
        timeline.to(trans.current, {
            duration: 3,
            y: window.innherWidth,
            yPercent: -100,
            ease: Power4.easeOut
        });
    })
    return (
        <div className=''>
           <div className="absolute top-0 z-50 w-full h-screen bg-purple-500 bg-opacity-90" ref={trans}></div> 
        </div>
    )
}

export default Transition