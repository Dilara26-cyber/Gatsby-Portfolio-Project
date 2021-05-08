import React from "react"
import { Link } from "gatsby"
import "../assets/Catering.scss"
const Catering = () => {
  return (
    <div>
      <div className="only__bg"></div>
      <section className="catering">
        <h2>Catering</h2>
        <p>
          Have Your Next Party At Dasher &amp; Crank, Or Let Us Cater Your Next
          Event! Please Fill Out The Form Below And We'll Be In Touch Shortly.
        </p>
        <Link to="/catering" title="Inquire Now" className="catering__btn">
          Inquire Now
        </Link>
      </section>
    </div>
  )
}

export default Catering
