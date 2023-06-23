import React from 'react'
import './Product.css'
import Puntuation from './Puntuation'
import Button from './Button'

const Product = () => {
  return (
    <div className='information-container'>
      <h2>Standard Cactus</h2>
      <h3>Succulent</h3>
      <span className='price'>$20.0</span>
      <Puntuation/>
      <Button/>
    </div>
  )
}

export default Product
