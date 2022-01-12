import { useRef, useEffect } from 'react';
import gsap, {Power4} from 'gsap'
function Transition() {
    const trans = useRef(null);
    const timeline = gsap.timeline();
    
    useEffect(() => {
        timeline.to(trans.current, {
            duration: 2,
            y: window.innherWidth,
            yPercent: -100,
            ease: Power4.easeInOut
        });
    }, [timeline])
    return (
        <div>
           <div ref={trans} className="absolute top-0 z-50 w-full h-screen bg-purple-500"></div> 
        </div>
    )
}

export default Transition;