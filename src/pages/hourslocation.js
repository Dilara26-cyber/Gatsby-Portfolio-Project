import React from "react"
import "../assets/Hours.scss"
import Map from "../components/Map"
const HoursAndLocations = () => {
  return (
    <section id="hours">
      <div className="hours__content">
        <h2>Hours &amp; Location</h2>
        <a
          href="https://www.google.com/maps/search/2211%20NW%202nd%20Ave%2C%20Miami%2C%20FL%2033127"
          target="_blank"
          rel="noreferrer"
        >
          2211 NW 2nd Ave, Miami, FL 33127
        </a>
        <a href="tel:(305) 640-8579" target="_blank" rel="noreferrer">
          (305) 640-8579
        </a>
        <a
          href="https://www.google.com/maps/search/2211%20NW%202nd%20Ave%2C%20Miami%2C%20FL%2033127"
          target="_blank"
          rel="noreferrer"
          id="get__location"
        >
          Get Directions
        </a>
        <div className="open__hours">
          <p>10 AM to 11 PM Sunday - Thursday</p>
          <p>10 AM to 12 AM Saturday &amp; Friday</p>
        </div>
      </div>
      <div className="map">
        <Map />
      </div>
    </section>
  )
}

export default HoursAndLocations
