import React, { useState } from "react"
import { Link } from "gatsby"
import { FaShoppingCart } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"
const Cart = props => {
  const { cartItems, product, remove, title, price, size, measurable } = props
  const totalPrice = cartItems.reduce((a, b) => a + b.price * b.qty, 0)
  const [active, setActive] = useState(false)
  const openTheCart = () => {
    setActive(!active)
  }
  return (
    <div>
      {cartItems.map(product => {
        return (
          <div key={product.id}>
            <div className={active ? "separate" : "hidden"}>
              <p>QTY: {product.qty} </p>
              <p>TOTAL: ${totalPrice.toFixed(2)}</p>
            </div>
            <div className="quantity">
              <p>{product.qty}</p>
              <Link to="#cart">
                <FaShoppingCart onClick={openTheCart} />
              </Link>{" "}
            </div>
          </div>
        )
      })}
      {cartItems.length > 0 && (
        <section className={active ? "cart active" : "cart"} id="#cart">
          <h1>
            CART <AiOutlineClose onClick={openTheCart}></AiOutlineClose>
          </h1>{" "}
          <hr></hr>
          <div className="product__card">
            <div className="cart__details">
              <h2>{title}</h2>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            {measurable && <p>SIZE: {size.toUpperCase()}</p>}
            <p>${price.toFixed(2)}</p>
            <p>{product.qty}</p>
            <div className="cart__details">
              <button className="remove__btn" onClick={() => remove(product)}>
                Remove
              </button>
              <Link to="/#store" className="checkout">
                Back to Store
              </Link>
              <Link to="/#store" className="checkout">
                Checkout
              </Link>
            </div>
          </div>
          <hr></hr>
        </section>
      )}
    </div>
  )
}
export default Cart
