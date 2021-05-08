import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
const Error = () => {
  return (
    <div>
      <Layout>
        <SEO title="Error" />
        <main
          className="store"
          style={{
            backgroundColor: "#fcd8db",
            margin: "0 auto",
            height: "100vh",
          }}
        >
          <h1>This Page Does Not Exist</h1>
        </main>
      </Layout>
    </div>
  )
}

export default Error
