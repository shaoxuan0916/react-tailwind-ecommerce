import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import { commerce } from './lib/commerce'

import Navbar from './components/Navbar'
import PhotoCarousel from './components/PhotoCarousel'
import Footer from './components/Footer'
import HeroBanner from './components/HeroBanner'
import Product from './components/Product'
import Services from './components/Services'
import Cart from './components/Cart'
import Review from './components/Review'
import Contact from './components/Contact'



const App = () => {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {

    const { data } = await commerce.products.list()
    setProducts(data)

  }

  const fetchCart = async () => {

    const cart = await commerce.cart.retrieve()
    setCart(cart)

  }

  // function add to cart
  const handleAddToCart = async (productId, quantity) => {

    const { cart } = await commerce.cart.add(productId, quantity)
    setCart(cart)

  }

  // function update cart (increase, decrease)
  const handleUpdateCartQty = async (productId, { quantity }) => {

    const { cart } = await commerce.cart.update(productId, { quantity })
    setCart(cart)

  }

  // function remove cart item
  const handleRemoveFromCart = async (productId) => {

    const { cart } = await commerce.cart.remove(productId)
    setCart(cart)

  }

  // function empty cart
  const handleEmptyCart = async () => {

    const { cart } = await commerce.cart.empty()
    setCart(cart)

  }


  useEffect(() => {

    fetchProducts()
    fetchCart()

  }, [])

  return (
    <Router>

      <Navbar totalItems={cart.total_items} />

      <Routes>

        {/* Home Page */}
        <Route exact path='/' element={
          <div>
            <HeroBanner />
            <PhotoCarousel />
            <Product products={products} handleAddToCart={handleAddToCart} />
            <Services />
            <Review />
            <Contact />
            <Footer />
          </div>}>
        </Route>

        {/* Cart Page */}
        <Route exact path='/cart' element={
          <Cart
            cart={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}

          />
        } />

      </Routes>

     

    </Router>
  )
}

export default App