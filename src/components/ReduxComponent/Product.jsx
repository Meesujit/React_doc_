import React from 'react'
import {useDispatch} from 'react-redux'
import {addItem} from '../../redux/slices/CartSlice'

const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <div className='card'>
        <img src={props.image} alt={props.productName} />
        <div className="card-body">
            <h5 className='card-title'>
                {props.productName}
            </h5>
            <p className='card-text'>
               Rs. {props.price}
            </p>
            <button 
            className='card-button' 
            onClick={e => dispatch(addItem({
              name: props.productName,
              price: props.price
            }))}
            >
              Add to cart
            </button>
        </div>
    </div>
  )
}

export default Product