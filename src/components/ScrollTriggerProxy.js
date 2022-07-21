import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React,{useEffect} from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const ScrollTriggerProxy = () => {

    const scroll= useLocomotiveScroll()
    gsap.registerPlugin(ScrollTrigger)
    //1st get the instance of the LocomotiveScroll library
    useEffect(() => {
        if (scroll) {
            //locomotive scrolling elemnt, in our case it is app (main)
            const element = scroll?.el;
            scroll.on('scroll',ScrollTrigger.update); // on scroll of locomotive element, update ScrollTrigger

            //Lets use scroller proxy
            




        }

        return () => {

        }
      
    
      
    }, [])
    


  return null;
}

export default ScrollTriggerProxy