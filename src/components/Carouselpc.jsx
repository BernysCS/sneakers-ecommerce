import React, { useState } from "react";

const Carouselpc = ({ setShow, initialNumber = 1 }) => {
  const [number, setNumber] = useState(initialNumber);

  return (
    <div className="flex flex-col items-center justify-center h-screen fixed inset-0 bg-black/75 z-50">
      <div className="relative">
        <div className="absolute -top-5 right-0">
          <img
            onClick={() => setShow(false)}
            className="cursor-pointer"
            src="/images/icon-close-white.svg"
            alt="close"
          />
        </div>

        <div className="relative flex items-center gap-4">
            <button
              className="cursor-pointer bg-white rounded-full p-4 absolute -left-5"
              onClick={() => setNumber((n) => (n === 1 ? 4 : n - 1))}
            >
              <img
                src="/images/icon-previous.svg"
                alt="previous"
                className="h-3 w-3"
              />
            </button>

          <img
            className="h-112.5 w-112.5   object-cover rounded-2xl"
            src={`/images/image-product-${number}.jpg`}
            alt={`product-${number}`}
          />

          <button
            className="cursor-pointer bg-white rounded-full p-4 absolute -right-5"
            onClick={() => setNumber((n) => (n === 4 ? 1 : n + 1))}
          >
            <img src="/images/icon-next.svg" alt="next" className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div className="flex gap-4 mt-5">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="relative cursor-pointer"
            onClick={() => setNumber(i)}
          >
            <img
              className="rounded-2xl h-20 w-20"
              src={`/images/image-product-${i}-thumbnail.jpg`}
              alt={`Product ${i}`}
            />
            <div
              className={`absolute inset-0 rounded-2xl
              ${
                number === i
                  ? "bg-white/65 border-2 border-orange"
                  : "hover:bg-white/40"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carouselpc;
