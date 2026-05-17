import React, { useState } from "react";
import ProductInfo from "./ProductInfo";
import ProductGallery from "./ProductGallery";

const Main = ({addMinus, setAddMinus, setCarItems}) => {
  
  return (
    <main className='md:flex md:max-w-6xl md:mx-auto'>
      <ProductGallery/>
      <ProductInfo addMinus={addMinus} setAddMinus={setAddMinus} setCarItems={setCarItems} />
    </main>
  )
}

export default Main
