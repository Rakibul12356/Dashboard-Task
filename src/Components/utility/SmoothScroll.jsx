import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";


const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,            
      duration: 1.5,       
      smoothWheel: true,   
      smoothTouch: false,  
      wheelMultiplier: 1,
      touchMultiplier: 2,
      orientation: "vertical",
      gestureDirection: "vertical",
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

 
  return <>{children}</>;
};

export default SmoothScroll;
