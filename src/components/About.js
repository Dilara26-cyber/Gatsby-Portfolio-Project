import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/About.scss"
const About = () => {
  return (
    <section id="about">
      <div className="about__content">
        <h2>ABOUT</h2>
        <p>
          Dasher &amp; Crank is a craft ice cream shop located in the heart of
          Wynwood. All of our artisan flavors are made in-house from scratch
          using local and premium ingredients. Making everything in
          small-batches allows us to be creative and rotate our menu constantly.
          In our first year of operation, we have created over 425 flavors and
          release new flavors each week. Come by today to see what new and
          exciting flavors we are scooping this week!
        </p>
      </div>
      <img
        className="about__img"
        src="https://images.getbento.com/accounts/e25c1d072e1a95f6401248625dd0a650/media/images/98755DEFT_UNION_Dasher_and_Crank_042-HDR-Edit_FULL-RES-1.jpg?fit=max&w=1800&auto=format,compress"
        alt="Tables and lamps inside of the shop."
      />
    </section>
  )
}

export default About
