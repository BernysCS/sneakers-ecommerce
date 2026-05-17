import React from "react";

const Car = ({ cartItems, setCarItems }) => {
  return (
    <div className="h-80 top-full inset-x-3 mt-3 bg-white absolute z-50 rounded-2xl flex flex-col md:w-90 md:ml-auto md:h-50 md:right-0 shadow-xl/20">
      <div className="p-7 border-b-2 border-light-grayish-blue text-very-dark-blue font-bold text-xl md:p-2 md:text-base">
        Cart
      </div>

      {cartItems === 0 ? (
        <div className="flex items-center justify-center flex-1 text-dark-grayish-blue font-bold text-xl md:text-base">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="p-4 flex flex-col flex-1 md:p-5">
          <div className="flex-6 mb-8 flex items-center justify-between md:mb-3">
            <div className="flex items-center gap-4 w-full">
              <img
              className="h-[70%] w-17 object-cover self-stretch rounded-sm md:h-full md:w-15 md:rounded-sm"
              src="/images/image-product-1-thumbnail.jpg"
              alt="image product"
              />

              <div className="flex-1">
                <p className="text-dark-grayish-blue text-base mb-2 top-0 md:text-base md:mb-0">
                  Fall Limited Edition Sneakers
                </p>
                <p className="text-dark-grayish-blue text-lg md:text-base">
                  $125.00 x {cartItems}{" "}
                  <span className="text-black md:text-base font-bold">${125 * cartItems}.00</span>
                </p>
              </div>
            </div>

            <img
              onClick={() => setCarItems(cartItems - 1)}
              className="h-5 w-4 cursor-pointer md:h-4 md:w-3"
              src="/images/icon-delete.svg"
              alt="Delete"
            />
          </div>

          <button className="flex-4 py-5 bg-orange rounded-xl text-very-dark-blue font-bold text-xl md:text-base md:py-0">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Car;
