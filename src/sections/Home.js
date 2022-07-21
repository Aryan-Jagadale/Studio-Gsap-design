import React from 'react'
import styled from 'styled-components'
import CoverVideo from '../components/CoverVideo'
import Logo from '../components/Logo'
import NavBar from '../components/NavBar'
import UsAbout from '../components/UsAbout'
import Shop from '../components/Shop'


const Section = styled.section`
     position: relative;
     min-height: 100vh;
     overflow: hidden;
     
`

const Home = () => {
  return (
    <Section data-scroll-section >
        <CoverVideo/>
        <Logo/>
        <NavBar/>
        <UsAbout />
        <Shop />

    </Section>
  )
}

export default Home