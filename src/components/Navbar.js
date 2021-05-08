import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "./Layout"
import { Link } from "gatsby"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import "../assets/Navbar.scss"

const Navbar = props => {
  return (
    <div className="header">
      <header>
        <div className={props.scrolled ? "second__nav active" : "second__nav"}>
          <div className="logo">
            <Link to="/" rel="noopener">
              <img
                src="https://images.getbento.com/accounts/e25c1d072e1a95f6401248625dd0a650/media/images/logo-landing02.png?w=1000&fit=max&auto=compress,format&h=1000"
                alt="Company logo"
              />
            </Link>
          </div>
        </div>
        <div
          className={props.toggle ? "menu__btn open" : "menu__btn"}
          onClick={props.toToggle}
        >
          <div className="menu__btn__line"></div>
        </div>
        <nav className={props.toggle ? "nav active" : "nav"}>
          <ul>
            <li>
              <Link
                to="/"
                className="nav__link"
                rel="noopener"
                onClick={props.toToggle}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#about"
                className="nav__link"
                rel="noopener"
                onClick={props.toToggle}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/#hours"
                className="nav__link"
                rel="noopener"
                onClick={props.toToggle}
              >
                Hours &amp; Location
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="nav__link"
                rel="noreferrer"
                onClick={props.toToggle}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/catering"
                className="nav__link"
                rel="noreferrer"
                onClick={props.toToggle}
              >
                Catering
              </Link>
            </li>
            <li>
              <Link
                to="/#store"
                className="nav__link"
                rel="noreferrer"
                onClick={props.toToggle}
              >
                Store
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="nav__link"
                rel="noreferrer"
                onClick={props.toToggle}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="wavy-bg"></div>
          <div className="information">
            <div>
              <FaFacebookF className="nav__icons" />
              <FaInstagram className="nav__icons" />
            </div>
            <div className="location-information">
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
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
