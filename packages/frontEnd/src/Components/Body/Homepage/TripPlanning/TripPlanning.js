import React from 'react'
import './TripPlanning.css'

const TripPlanning = () => {

  return (
    <div className="trip-planning-container">
      <div className="recent-trip-container">
        <h1>Recently viewed and upcoming</h1>
        <a className="plan-new-trip-orange" href="/plan">+ Plan new trip</a>
      </div>
      <section className="recent-upcoming">
        <p>You haven't created anything yet. <a className='plan-new-trip-link' href="/plan">Plan a new trip</a>.</p>
      </section>
      <section className="visited-locations">
        <div className="map-image-placeholder"></div>
      </section>
      <section className="trips-guides">
        <div className="trip-guide-container">
          <div className="trip-guide-header">
            <h4>Your trips</h4>
            <a className="plan-new-trip-gray" href="/plan">+ Plan new trip</a>
          </div>
          <p>You don't have any trips yet. <a className='plan-new-trip-link ' href="/plan">Plan a new trip</a>.</p>
        </div>
        <div className="trip-guide-container">
          <div className="trip-guide-header">
            <h4>Your guides</h4>
            <a className="plan-new-trip-gray" href="/plan">+ Create new guide</a>
          </div>
          <p>You don't have any guides yet. <a className='plan-new-trip-link' href="/guide">Create a new guide</a>.</p>
        </div>
      </section>
    </div>
    )
}

export default TripPlanning;