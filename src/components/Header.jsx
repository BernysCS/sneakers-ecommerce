import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="bg-white flex justify-between items-center py-5 px-5 md:max-w-6xl md:mx-auto md:border-b-2 md:border-light-grayish-blue md:px-0">
        <div className="flex gap-5 items-center">
          <img
            src="/images/icon-menu.svg"
            alt="icon menu"
            className="md:hidden w-5 h-5"
            onClick={() => setMenuOpen(true)}
          />
          <img src="/images/logo.svg" alt="logo" className="w-44 md:mr-6" />
          <nav
            className={`fixed z-50 bg-white top-0 left-0 bottom-0 w-[70%] p-8 shadow-[0_0_0_100vmax_rgba(0,0,0,0.5)] md:relative md:shadow-none md:w-auto md:p-0 md:block ${menuOpen ? "block" : "hidden"}`}
          >
            <img
              src="/images/icon-close.svg"
              alt="icon-close.svg"
              className="md:hidden w-5 h-5 text-gray-500"
              onClick={() => setMenuOpen(false)}
            />
            <ul className="flex flex-col gap-4 font-kumbh-sans font-bold mt-12 text-lg text-very-dark-blue md:flex-row md:mt-0 md:font-normal md:text-base md:text-dark-grayish-blue">
              <li className="relative group">
                <a href="#" className="py-5 inline-block">
                  Collections
                </a>
                <span className="absolute left-0 right-0 bottom-0 h-0.75 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </li>
              <li className="relative group">
                <a href="#" className="py-5 inline-block">Men</a>
                <span className="absolute left-0 right-0 bottom-0 h-0.75 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </li>
              <li className="relative group">
                <a href="#" className="py-5 inline-block">Women</a>
                <span className="absolute left-0 right-0 bottom-0 h-0.75 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </li>
              <li className="relative group">
                <a href="#" className="py-5 inline-block">About</a>
                <span className="absolute left-0 right-0 bottom-0 h-0.75 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </li>
              <li className="relative group">
                <a href="#" className="py-5 inline-block">Contact</a>
                <span className="absolute left-0 right-0 bottom-0 h-0.75 bg-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-5 md:gap-10">
          <img
            src="/images/icon-cart.svg"
            alt="icon cart"
            className="w-7 h-7 md:w-5 md:h-5 "
          />
          <img
            src="/images/image-avatar.png"
            alt="avatar"
            className="w-8 h-8 md:w-12 md:h-12 hover:border-2 rounded-4xl border-orange"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
