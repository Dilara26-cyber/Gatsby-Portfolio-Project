import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import slugify from "slugify"
import "../assets/Store.scss"
const Product = ({ products = [] }) => {
  return (
    <div className="product">
      {products.map((product, index) => {
        const { id, title, price, productImage } = product
        const slug = slugify(title, { lower: true })
        return (
          <div key={id}>
            <Link key={id} to={`/${slug}`} title={title}>
              <GatsbyImage
                className="product__img"
                image={productImage.gatsbyImageData}
                alt={title}
              />
            </Link>
            <div className="product__details" key={index}>
              <h2>{title}</h2>
              <p>${price.toFixed(2)}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Product
