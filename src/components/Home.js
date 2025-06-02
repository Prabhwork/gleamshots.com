import React from 'react'
import { NavBar } from './NavBar'
import { Banner } from './Banner'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { Footer } from './Footer'
import Aboutus from './Aboutus'

function Home() {
  return (
    <div>
      <NavBar/>
      <Banner />
      <Skills/>
      <Projects/>
      <Aboutus/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
