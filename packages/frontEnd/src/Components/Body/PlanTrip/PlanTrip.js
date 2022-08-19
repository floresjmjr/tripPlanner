import React from 'react'
import './PlanTrip.css'
import Footer from '../../Footers/MainFooter'
import Header from '../../Headers/MainHeader'

const PlanTrip = ()=> {

  return(
    <div>
      <Header/>
      <div className="plan-trip-container">
        <div className="plan-trip-header">
          <h1>Plan a new trip</h1>
        </div>
        <form className="plan-trip-form" method="POST" action="http://localhost:8080/trip/plan">
          <div className="plan-location">
            <p>Where to?</p>
            <input name="location" type='text' placeholder="e.g. Paris, Hawaii, Japan"/>
          </div>
          <div className="plan-start-end">
            <input className="plan-start" name='startDate' type='date' placeholder="Start Date"/>
            <input className="plan-end" name='endDate' type='date' placeholder="End Date"/>
          </div>
          <div className="invites">
            <p>+ Invite tripmates</p>
            <select>
              <option>Friends</option>
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>
          <button type="click">Start Planning</button>
        </form>
        <a className="new-guide-link">Or write a new guide</a>
      </div>
      <Footer/>
    </div>
    )
}

export default PlanTrip;