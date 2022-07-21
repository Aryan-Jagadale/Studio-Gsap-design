import React,{useState} from "react";
import styled from "styled-components";
import {motion} from 'framer-motion'

const NavContainer = styled(motion.div)`
  width: 100vw;
  z-index: 6;
  position: absolute;
  top: 0;
  //background-color: aquamarine;
  top: ${props => props.click ?'0' :'-5rem' };

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

const MenuBtn = styled.li`
  background-color: rgba(255, 255, 255, 0.7);
  list-style-type: none;
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  clip-path: polygon(
    0 0,
    100% 0,
    89% 100%,
    10% 100%
  ); //Chek read me for resources

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: 5rem;
  background-color: rgba(32, 32, 32, 0.7);
  color: white;
  list-style-type: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 10rem;
`;

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
`;

const NavBar = () => {
    const [click,setClick] =  useState(false)
  return (
    <NavContainer click={click} 
        initial={{
            y:'-100%'
        }}
        animate={{
            y:0
        }}
        transition={{
            duration:2,
            delay:2,

        }}

    >
      <MenuItems 
        drag="y"
        dragConstraints={{
            top: 0,
            bottom: 70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuBtn onClick={()=> setClick(!click)} >Menu</MenuBtn>
        <MenuItem
            whileHover={{scale: 1.1,y:-5}}
            whileTap={{scale: 0.9 , Y:0 }}        
        >Home</MenuItem>
        <MenuItem
            whileHover={{scale: 1.1,y:-5}}
            whileTap={{scale: 0.9 , Y:0 }}        
        >About</MenuItem>
        <MenuItem
            whileHover={{scale: 1.1,y:-5}}
            whileTap={{scale: 0.9 , Y:0 }}        
        >Shop</MenuItem>
        <MenuItem
            whileHover={{scale: 1.1,y:-5}}
            whileTap={{scale: 0.9 , Y:0 }}        
        >New Arrival</MenuItem>
      </MenuItems>
    </NavContainer>
  );
};

export default NavBar;
