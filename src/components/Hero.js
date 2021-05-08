import React, { useState } from "react"
import { ImagesData } from "./ImagesData"
import { StaticImage } from "gatsby-plugin-image"
import { VscChevronRight } from "react-icons/vsc"
import { VscChevronLeft } from "react-icons/vsc"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import "../assets/Hero.scss"

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const nextFunction = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const previousFunction = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  return (
    <div>
      <section>
        <section className="hero__logo">
          <h1>LIFE IS SHORT, EAT ICE CREAM</h1>
          <img
            src="https://images.getbento.com/accounts/e25c1d072e1a95f6401248625dd0a650/media/images/logo-landing02.png?w=1000&fit=max&auto=compress,format&h=1000"
            alt="Company logo, curvy letters saying Dasher Crank"
          />
        </section>
        <div className="hero__info">
          <div className="info">
            <a
              href="https://www.google.com/maps/search/2211%20NW%202nd%20Ave%2C%20Miami%2C%20FL%2033127"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              2211 NW 2nd Ave, Miami, FL 33127
            </a>
            <a
              href="tel:(305) 640-8579"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              CALL (305) 640-8579
            </a>
          </div>
          <div className="hero__info__icons">
            <FaFacebookF className="hero__icon"></FaFacebookF>
            <FaInstagram className="hero__icon" />
          </div>
        </div>
        <div className="image__slider">
          {ImagesData.map((img, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {" "}
                {index === current && <img src={img.url} alt={img.alt} />}
              </div>
            )
          })}
        </div>
        <button onClick={previousFunction} className="hero__btn prev">
          <VscChevronLeft />
        </button>
        <button onClick={nextFunction} className="hero__btn next">
          <VscChevronRight />
        </button>
      </section>
      <section className="welcome__section">
        <h1>WELCOME TO DASHER &amp; CRANK!</h1>
      </section>
    </div>
  )
}

export default Hero
