import React from 'react'
// import { productsList } from './store/productsList'
import Product from './component/Product'
import './App.css'
import { useSelector } from 'react-redux'
export default function App() {
  const productsList= useSelector((state)=> state.products)
  return (
    <div className='products-container'>
      {
        productsList.map(({id,title, rating, price,image}) => (
          <Product

            key={id}
            title={title}
            rating={rating.rate}
            price={price}
            imageUrl={image}
          
          ></Product>
        ))
      }
    </div>

  )
}
