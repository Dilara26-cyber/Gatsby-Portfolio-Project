import React from "react"
import Product from "./Product"
import "../assets/Store.scss"
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    allContentfulProduct(sort: { order: DESC, fields: title }) {
      nodes {
        id
        title
        price
        productImage {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
    }
  }
`

const Store = props => {
  const {
    allContentfulProduct: { nodes: products },
  } = useStaticQuery(query)
  return (
    <section className="store" id="store">
      <h1>Store</h1>
      <Product products={products} />
    </section>
  )
}

export default Store
