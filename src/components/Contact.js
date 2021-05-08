import React from "react"
import "../assets/Contact.scss"
const Contact = () => {
  return (
    <section className="store" id="contact">
      <h1>CONTACT</h1>
      <div className="contact__info">
        <p>Send us a message and we’ll get back to you as soon as possible. </p>
        <p>You can also reach us by </p>
        <p>
          {" "}
          phone at{" "}
          <a href="tel:3052131569" className="checkout">
            (305) 213-1569
          </a>
        </p>
        <p> Looking forward to hearing from you.</p>
      </div>
      <form
        action="https://formspree.io/f/xyylkazk"
        method="POST"
        className="form"
      >
        <div className="input__container">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="input__container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="input__container">
          <label htmlFor="number">Phone Number:</label>
          <input
            type="num"
            name="number"
            id="number"
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="input__container">
          <label htmlFor="intouch">Phone Number:</label>
          <select id="intouch" name="intouch" required>
            <option value="">What are you getting in touch about?</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Press Inquiry">Press Inquiry</option>
          </select>
        </div>
        <div className="input__container">
          <label htmlFor="message">Your message:</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            className="message"
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}

export default Contact
