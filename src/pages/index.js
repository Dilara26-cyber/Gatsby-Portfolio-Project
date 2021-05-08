import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import About from "../components/About"
import HoursAndLocations from "./hourslocation"
import Menu from "../components/Menu"
import Catering from "../components/Catering"
import Store from "../components/Store"
import Contact from "../components/Contact"
import SEO from "../components/SEO"
import "normalize.css"
import { ImagesData } from "../components/ImagesData"

export default function Home() {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <main>
          <Hero slides={ImagesData} />
          <About />
          <HoursAndLocations />
          <Menu />
          <Catering />
          <Store />
          <Contact />
        </main>
      </Layout>
    </>
  )
}
