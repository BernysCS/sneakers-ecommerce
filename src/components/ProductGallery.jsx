import React, { useState } from "react";
import Carouselpc from "./Carouselpc";

const ProductGallery = () => {
  const [number, setNumber] = useState(1);
  const [show, setShow] = useState(false);

  return (
    <section className="md:w-1/2 md:px-25 md:py-20">
      <div className="md:flex md:flex-col md:justify-center">
        {/* carousel */}
        <div
          className="relative cursor-pointer"
          onClick={() => {
            if (window.innerWidth >= 768) setShow(true);
          }}
        >
          <div className="absolute flex items-center justify-between h-full w-full p-5 md:hidden">
            <div className="bg-white rounded-full p-4">
              <img
                className="  h-4 w-4 object-cover"
                src="/images/icon-previous.svg"
                alt="previous"
                onClick={() => {
                  setNumber(number === 1 ? 4 : number - 1);
                }}
              />
            </div>
            <div className="bg-white rounded-full p-4">
              <img
                className="  h-4 w-4 object-cover"
                src="/images/icon-next.svg"
                alt="next"
                onClick={() => setNumber(number === 4 ? 1 : number + 1)}
              />
            </div>
          </div>

          <img
            className="h-96 w-full object-cover md:rounded-2xl md:mb-5"
            src={`/images/image-product-${number}.jpg`}
            alt={`product-${number}`}
          />
        </div>

        {/* Gallery */}
        <div className="hidden md:flex md:justify-between">
          <div
            className="relative rounded-2xl cursor-pointer"
            onClick={() => setNumber(1)}
          >
            <img
              className="rounded-2xl h-20 w-20"
              src="/images/image-product-1-thumbnail.jpg"
              alt="Product 1"
            />
            <div
              className={`absolute inset-0 rounded-2xl
              ${
                number === 1
                  ? "bg-white/65 border-2 border-orange"
                  : "hover:bg-white/40"
              }`}
            ></div>
          </div>

          <div
            className="relative rounded-2xl cursor-pointer"
            onClick={() => setNumber(2)}
          >
            <img
              className="rounded-2xl h-20 w-20"
              src="/images/image-product-2-thumbnail.jpg"
              alt="Product 2"
            />
            <div
              className={`absolute inset-0 rounded-2xl
              ${
                number === 2
                  ? "bg-white/65 border-2 border-orange"
                  : "hover:bg-white/40"
              }`}
            >

            </div>
          </div>

          <div
            className="relative rounded-2xl cursor-pointer"
            onClick={() => setNumber(3)}
          >
            <img
              className="rounded-2xl h-20 w-20"
              src="/images/image-product-3-thumbnail.jpg"
              alt="Product 3"
            />
            <div
              className={`absolute inset-0 rounded-2xl
              ${
                number === 3
                  ? "bg-white/65 border-2 border-orange"
                  : "hover:bg-white/40"
              }`}
            >

            </div>
          </div>

          <div
            className="relative rounded-2xl cursor-pointer"
            onClick={() => setNumber(4)}
          >
            <img
              className="rounded-2xl h-20 w-20"
              src="/images/image-product-4-thumbnail.jpg"
              alt="Product 4"
            />
            <div
              className={`absolute inset-0 rounded-2xl
              ${
                number === 4
                  ? "bg-white/65 border-2 border-orange"
                  : "hover:bg-white/40"
              }`}
            ></div>
          </div>
        </div>
      </div>

      {show && <Carouselpc setShow={setShow} initialNumber={number} />}
    </section>
  );
};

export default ProductGallery;
