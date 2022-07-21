import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";
import { motion } from "framer-motion";


const containerVariants = {

  hidden : {
    opacity: 0,
  },
  visible:{
    opacity: 1,

    transition : {
      delayChildren:2,
      staggerChildren:0.3,
    }
  },
  

}

const item = {

  hidden : {
    opacity: 0,
  },
  visible:{
    opacity: 1,
  },
  

}


const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const DarkOverLay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.text};

  div{
    display: flex;
    flex-direction: row;

  }

  h1 {
    font-family: Kaushan Script;
    //color: ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }

  h2 {
    font-family: Sirin Stencil;
    //color: ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverLay />

      <Title variants={containerVariants} initial="hidden" animate="visible"  >
        <div>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.10" data-scroll-speed="4" >W</motion.h1>{/* for speed textup going effect  */ }
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.09" data-scroll-speed="4" >i</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.06" data-scroll-speed="4" >b</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="4" >e</motion.h1>
        </div>

        <h2 data-scroll data-scroll-delay="0.04" data-scroll-speed="2">Inspire. Create. Belive</h2>
      </Title>

      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
