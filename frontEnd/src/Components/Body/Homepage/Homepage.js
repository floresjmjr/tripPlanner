import React from 'react'
import './Homepage.css'
import TripPlanning from './TripPlanning/TripPlanning'
import Explore from './Explore/Explore'
import Footer from '../../Footers/MainFooter'
import Header from '../../Headers/MainHeader'

const Homepage = () => {
  return (
    <div>
      <Header/>
      <TripPlanning/>
      <Explore/>
      <Footer/>
    </div>
    )
}

export default Homepage;