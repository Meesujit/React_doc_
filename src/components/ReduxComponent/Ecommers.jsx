import React from 'react'
import products from '../../../products.json'
import Cart from './Cart'
import Product from './Product'

const Ecommers = () => {
  return (
    <div className='Ecommers-main-component'>
        <Cart />
        <div className="products-details">
            {products.map((item) => (
                <Product {...item} />
            ))}
        </div>
    </div>
  )
}

export default Ecommers