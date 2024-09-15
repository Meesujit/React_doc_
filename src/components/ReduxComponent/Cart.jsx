import React from 'react'
import { useSelector } from 'react-redux'
import {getItemSelector} from '../../redux/slices/CartSlice'
const Cart = () => {
  const items = useSelector(getItemSelector);
  const total = items.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className='cart-details'>
        <h2 className='cart-item'>
            Total items: {items.length}
        </h2>
        <h3 className='item-amout'>
            Total amount: {total}
        </h3>
    </div>
  )
}

export default Cart