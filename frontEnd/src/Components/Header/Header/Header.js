import React from 'react'
import './Header.css'

const Header = () => {
  return (
  <header>
    <div className="left-nav">
      <div className="logo-link">
        <p><i class="fa-solid fa-plane"></i></p>
        <h2>Wanderbranch</h2>
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Travel guides</a>
      </div>
    </div>
    <div className="right-nav">
      <div className="search-notification-account">
        <div className="search-bar">Big empty Box</div>
        <div className="notifications-icon">BB</div>
        <div className="account-icon">Acc</div>
      </div>
    </div>
  </header>
  )
}

export default Header;