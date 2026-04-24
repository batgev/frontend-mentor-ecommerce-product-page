import React, { useState } from 'react'
import useAuthStore from '../Store/store';
const Header = () => {
    const {showSidebar,itemsInCart} = useAuthStore();
        const navigations = [
          { id: 1, text: "Collections" },
          { id: 2, text: "Men" },
          { id: 3, text: "Women" },
          { id: 4, text: "About" },
          { id: 5, text: "Contact" },
        ];
        const [toggleSidebar,setToggleSidebar] = useState(false)
        const [showCart,setShowCart] = useState(false)

        
 
  return (
    <div className="w-full md:w-[80%] px-2 md:px-0 flex justify-between items-center text-[16px] relative z-0">
      <div className="flex gap-4 items-center md:gap-8">
        <div className="md:hidden">
          <img
            src="/images/icon-menu.svg"
            alt=""
            onClick={() => {
              setToggleSidebar(true);
              showSidebar(true);
            }}
          />
        </div>
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>
        <ul className="md:flex gap-8 text-gray-500 hidden">
          {navigations.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center">
          <img
            src="/images/icon-cart.svg"
            alt=""
            className="h-4"
            onClick={() => setShowCart(!showCart)}
          />
          <sup
            className={`${itemsInCart > 0 ? "flex" : "hidden"}  bg-[hsl(26_100%_55%)] text-white mb-4 rounded-full p-2 py-2`}
          >
            {itemsInCart}
          </sup>
        </div>
        <img src="/images/image-avatar.png" alt="" width={50} />
      </div>

      {/**mobile sidebar toggle */}
      <div
        className={` ${toggleSidebar ? "flex flex-col gap-4" : "hidden"} md:hidden absolute bg-white  z-12 top-0 bottom-0 left-0 pl-4 pt-4  h-screen w-2/3`}
      >
        <div>
          <img
            src="/images/icon-close.svg"
            alt=""
            onClick={() => {
              setToggleSidebar(false);
              showSidebar(false);
            }}
          />
        </div>
        <ul className="flex flex-col gap-4  text-gray-900 cursor-pointer text-[18px] font-bold">
          {navigations.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
      {/**cart */}
      {showCart && (
        <div
          className={`flex flex-col gap-2 md:px-4 pb-4 md:w-80 md:h-auto h-64 absolute  top-18 rounded-md  md:right-20 md:top-10 w-[98%] shadow  right-1 bg-white z-8 `}
        >
          <span className='pl-4 md:pl-0 text-xl'>Cart</span>
          <hr className=" text-gray-300" />
          <div className="flex-1 w-full flex justify-center md:items-center text-gray-300">
            {itemsInCart > 0 ? (
              <div className="flex items-center gap-4">
                <img src="/images/image-product-1.jpg" alt="" className="h-16 md:h-8 rounded-md" />
                <div className="flex flex-col gap-1 text-2xl md:text-auto">
                  <h4>Fall Limited Edition Sneakers</h4>
                  <div className="flex gap-1">
                    <span>$125.00 x</span>
                    <span>{itemsInCart}</span>
                    <span className='text-black font-bold'>${itemsInCart * 125.0}.00</span>
                  </div>
                </div>
              </div>
            ) : (
              "Your cart is empty."
            )}
          </div>
          <div className='w-full flex justify-center'>
            <button className="bg-[hsl(26_100%_55%)] w-[80%] rounded-md py-4 md:py-2">Check out</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header
