import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Header.css'
import { faBed, faCalendar, faCamera, faCar, faHotel, faManatSign, faPerson, faPlaneDeparture, faTaxi } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div class="headerlist ">
          <div className='items'>
            <FontAwesomeIcon icon={faHotel} />
            <span className='span'>Stay</span>
          </div>
          <div className='items'>
            <FontAwesomeIcon icon={faPlaneDeparture} />
            <span className='span'>Flight</span>
          </div>
          <div className='items'>
            <FontAwesomeIcon icon={faTaxi} />
            <span className='span'>Taxi</span>
          </div>
          <div className='items'>
            <FontAwesomeIcon icon={faCamera} />
            <span className='span'>Attraction</span>
          </div>
          <div className='items'>
            <FontAwesomeIcon icon={faCar} />
            <span className='span'>Car Rentals</span>
          </div>
        </div>
        <div className="para">
          <h1 className='welcome'>Welcome to hotels!</h1>
          <p className='Un'>"Unlock Your Perfect Stay, Your Dream Getaway Awaits with Our Seamless Hotel Booking App!"</p>
          <br></br>
          <br></br>
          <div className="headerSearch">
            <div className="headerSearchItem col-md-4">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"/>
              <div/>
              </div>
            <div className="headerSearchItem col-md-4">
              <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
              <input
                type="text"
                placeholder="Whats the date?"
                className="headerSearchInput"/>
              <div/>
              </div>
            <div className="headerSearchItem col-md-3">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <input
                type="text"
                placeholder="How many?"
                className="headerSearchInput1"/>
              <div/>
              </div>
              <div className="headerSearchItem col-md-1">
              <button>search</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      )
}
