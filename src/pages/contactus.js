import React from "react"
import Layout from "../components/Layout"
import Contact from "../components/Contact"
import SEO from "../components/SEO"
const ContactUs = () => {
  return (
    <div>
      <Layout>
        <SEO title="Contact" />
        <main>
          <Contact />
        </main>
      </Layout>
    </div>
  )
}

export default ContactUs
