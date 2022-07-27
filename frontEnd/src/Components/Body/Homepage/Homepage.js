import React from 'react'
import './Homepage.css'
import TripPlanning from './TripPlanning/TripPlanning'
import Explore from './Explore/Explore'
import Footer from './Footer/Footer'

const Homepage = () => {
  return (
    <div>
      <TripPlanning/>
      <Explore/>
      <Footer/>
    </div>
    )
}

export default Homepage;