import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Cart from "../components/Cart"
import SEO from "../components/SEO"
import "../assets/Template.scss"
import { useState } from "react"
const ProductTemplate = ({ data }) => {
  const product = data.contentfulProduct
  const { title, price, measurable, productImage } = data.contentfulProduct
  const pathToImage = getImage(productImage)
  const [cartItems, setCartItems] = useState([])
  const [value, setValue] = useState("small")
  const addToCart = product => {
    const exist = cartItems.find(x => x.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
      console.log(cartItems)
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
      console.log(cartItems)
    }
  }

  const remove = product => {
    const exist = cartItems.find(x => x.id === product.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(x => x.id !== product.id))
    } else {
      setCartItems(
        cartItems.map(x =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }
  const handleSelect = e => {
    setValue(e.target.value)
  }
  console.log(value)
  return (
    <Layout>
      <SEO title={title} description={title} />
      <main className="template">
        <GatsbyImage image={pathToImage} alt={title} className="product__img" />
        <div className="product__details">
          <h1> {title}</h1>
          <p>${price}</p>{" "}
          {measurable && (
            <div className="size">
              <label htmlFor="size">Size</label>
              <select id="size" onChange={handleSelect}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </select>
            </div>
          )}
          <div className="buttons">
            <div className="value__change">
              <button onClick={() => addToCart(product)}>+</button>
              <button onClick={() => remove(product)}>-</button>
            </div>{" "}
            <button className="addToCart" onClick={() => addToCart(product)}>
              Add To Cart
            </button>
          </div>
        </div>
        <Cart
          title={title}
          price={price}
          cartItems={cartItems}
          remove={remove}
          product={product}
          size={value}
          measurable={measurable}
        />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query singleProduct($title: String) {
    contentfulProduct(title: { eq: $title }) {
      title
      price
      measurable
      id
      productImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
      }
    }
  }
`

export default ProductTemplate
