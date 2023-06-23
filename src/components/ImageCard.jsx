import React from 'react'
import './ImageCard.css'
import Emoticon from './Emoticon'

const ImageCard = () => {
  return (
    <div className='image-container'>
      <img src='/static/image/cactus.jpg' alt='Cactus Image' />
      <Emoticon/>
    </div>
  )
}

export default ImageCard
