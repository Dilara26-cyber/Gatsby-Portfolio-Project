import React from "react"
import { Link } from "gatsby"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import "../assets/Footer.scss"
const Footer = () => {
  return (
    <>
      <div className="footer__desktop" id="footer">
        <div>
          <FaFacebookF className="footer__icon"></FaFacebookF>
          <FaInstagram className="footer__icon" />
        </div>
        <div className="footer__cta">
          <Link to="/" className="footer__link" rel="noreferrer">
            EMAIL SIGNUP
          </Link>
        </div>
      </div>
      <div className="footer__mobile">
        <div className="phone">
          <a
            href="tel:(305) 640-8579"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            CALL (305) 640-8579
          </a>
        </div>{" "}
        <div className="location">
          <a
            href="https://www.google.com/maps/search/2211%20NW%202nd%20Ave%2C%20Miami%2C%20FL%2033127"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            2211 NW 2nd Ave, Miami, FL 33127
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer
