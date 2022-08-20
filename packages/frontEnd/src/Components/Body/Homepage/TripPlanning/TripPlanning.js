import React from 'react'
import './TripPlanning.css'

const TripPlanning = () => {
  return (
    <div className="trip-planning-container">
      <div className="recent-trip-container">
        <h1>Recently viewed and upcoming</h1>
        <form className="plan-new-trip" action="/plan">
          <button type="click">+ Plan new trip</button>
        </form>
      </div>
      <section className="recent-upcoming">
        <p>You haven't created anything yet. <a href='/plan'>Plan a new trip</a>.</p>
      </section>
      <section className="visited-locations">
        <div className="map-image-placeholder"></div>
      </section>
      <section className="trips-guides">
        <div className="trip-guide-container">
          <div className="trip-guide-header">
            <h4>Your trips</h4>
            <form className="plan-new-trip" action="/plan">
              <button type="click">+ Plan new trip</button>
            </form>
          </div>
          <p>You don't have any trips yet. <a href="#">Plan a new trip</a>.</p>
        </div>
        <div className="trip-guide-container">
          <div className="trip-guide-header">
            <h4>Your guides</h4>
            <form className="plan-new-trip" action="/plan-guide">
              <button type="click">+ Create new guide</button>
            </form>
          </div>
          <p>You don't have any guides yet. <a href="#">Create a new guide</a>.</p>
        </div>
      </section>
    </div>
    )
}

export default TripPlanning;