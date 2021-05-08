import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../assets/Menu.scss"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
const Menu = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menu {
            name
            description
            vegan
          }
        }
      }
    }
  `)
  const menu = data.site.siteMetadata.menu
  return (
    <Layout>
      <SEO title="Menu" />
      <section className="menu" style={{ background: "#fcd8db" }}>
        <div className="menu__content">
          <h1 className="menu__heading">MENU</h1>
          <p>
            At Dasher and Crank, we pride ourselves on the uniqueness and
            freshness of our ice cream. Flavors rotate daily and are subject to
            change. Please contact the store for daily flavors at (305)
            640-8579. Below are a few of the over 400 flavors we have created!
          </p>
        </div>
        <div className="big__screen__seperator">
          {menu.map((ice, index) => {
            return (
              <section className="menu__item" key={index}>
                <h2 className="menu__item__heading">
                  {ice.name} {ice.vegan && <span>Ⓥ</span>}
                </h2>{" "}
                <p>{ice.description}</p>
              </section>
            )
          })}
        </div>

        <div className="explanation">
          <hr></hr>
          <p>Ⓥ - Vegan</p>
        </div>
      </section>
    </Layout>
  )
}

export default Menu
