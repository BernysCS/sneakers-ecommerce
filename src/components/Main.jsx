import React from 'react'
import ProductInfo from './ProductInfo'
import ProductGallery from './ProductGallery'

const Main = () => {
  return (
    <main className='md:flex md:max-w-6xl md:mx-auto'>
      <ProductGallery/>
      <ProductInfo/>
    </main>
  )
}

export default Main
