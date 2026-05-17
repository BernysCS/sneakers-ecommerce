
const ProductInfo = ({addMinus, setAddMinus, setCarItems}) => {

  return (
    <section className="font-kumbh-sans p-6 md:w-1/2 md:flex md:flex-col md:justify-center md:pr-25">
      <div>
        <p className="text-very-dark-blue font-normal md:text-sm">SNEAKER COMPANY</p>
        <h1 className="text-black text-4xl font-bold mt-3 mb-6 md:text-4xl">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-dark-grayish-blue text-lg md:text-base">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer
        </p>
      </div>
      <div className="flex items-center justify-between my-8 md:flex-col md:items-start">
        <div className="flex gap-4">
          <p className="text-black font-bold text-4xl md:text-3xl">$125.00</p>
          <div className="flex items-center justify-center text-white bg-black px-3 font-bold rounded-xl text-xl md:text-sm">
            <p>50%</p>
          </div>
        </div>
        <p className="text-xl font-bold line-through text-dark-grayish-blue md:text-base">
          $250.00
        </p>
      </div>
      <div className="md:flex md:gap-4">
        <div className="flex justify-between p-5 bg-light-grayish-blue rounded-2xl mb-5 md:w-2/5 md:py-3">
          <button
            className="cursor-pointer relative overflow-hidden group rounded-md p-2"
            onClick={() => {
              setAddMinus((prev) => Math.max(0, prev - 1));
            }}
          >
            <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <img
              className="h-2 w-4"
              src="/images/icon-minus.svg"
              alt="icon minus"
            />
          </button>
          <p className="text-black font-bold text-xl md:text-lg"> {addMinus} </p>
          <button
            className="cursor-pointer relative overflow-hidden group rounded-md p-2"
            onClick={() => {
              setAddMinus((prev) => prev + 1);
            }}
          >
            <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <img
              className="h-4 w-4 cursor-pointer"
              src="/images/icon-plus.svg"
              alt="icon plus"
            />
          </button>
        </div>
        <div onClick={() => setCarItems(addMinus)} className="relative overflow-hidden group flex items-center p-5 bg-orange shadow-xl/30 mb-5 shadow-orange justify-center gap-4 rounded-2xl md:w-3/5 md:shadow-none md:p-3 cursor-pointer">
          <div className="absolute inset-0 bg-white/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          <img src="/images/icon-cart.svg " alt="cart" className="brightness-0 relative z-10 group-hover:opacity-70 transition-opacity duration-200" />
          <p className="font-bold text-xl text-black md:text-lg">Add to cart</p>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
