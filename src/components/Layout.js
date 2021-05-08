import React, { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"
const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false)
  const [toggle, setToggle] = useState(false)
  const toToggle = () => {
    setToggle(prev => !prev)
  }
  const setToScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", setToScroll)
  }
  return (
    <div className={toggle ? "fixed" : ""}>
      <Navbar toggle={toggle} toToggle={toToggle} scrolled={scrolled} />
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
