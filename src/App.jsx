
import Header from "./components/Header.jsx";
import useAuthStore from "./Store/store.js";
import { useState } from "react";

function App() {
  const {toggleMobileSidebar,setItemsInCart} = useAuthStore()
  const images = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];
  const [imageIndex,setImageIndex] = useState(0)
  const [count,setCount] = useState(0);
  

  const handleNextPicture = ()=>{
    if(imageIndex < images.length-1){
      setImageIndex(prev=> prev + 1);
      return
    }
  }
   const handlePrevPicture = () => {
     if (imageIndex > 0) {
       setImageIndex((prev) => prev -1);
       return;
     }
   };
  const handleIncrement = ()=>{
    setCount(prev=> prev + 1)
  }
  const handleDecreament = ()=>{
   if(count > 0){
     setCount((prev) => prev - 1);
    return
   }
  }

  const handleAddToCart = ()=>{
    if(count <= 0) return alert('Add a least one item');
    setItemsInCart(count);
    setCount(0)
  }

  return (
    <div className="flex  md:relative flex-col md:pt-6 md:items-center gap-4 h-screen  w-full  bg-white">
      <Header />
      <hr className="hidden md:inline mt-6 h-0.5 w-[80%] text-gray-400" />
      <div className="flex-1 w-full flex md:gap-16 md:flex-row md:justify-center flex-col md:mt-8">
        {/**image display section */}
        <div className="md:w-87.5 ">
          <div className="flex flex-col gap-4">
            <img
              src={images[imageIndex]}
              alt=""
              className="w-full  md:w-87.5 h-87.5 md:rounded-md"
            />
            <div className="hidden md:flex md:justify-between">
              {images.map((image) => (
                <img src={image} key={image} className="w-16 h-16 rounded-md" />
              ))}
            </div>
          </div>
          <div className="md:hidden flex justify-between w-full px-2 absolute z-9 top-84">
            <div className="flex justify-center items-center bg-white px-4 py-4 rounded-full">
              <img
                src="/images/icon-previous.svg"
                alt=""
                onClick={handlePrevPicture}
                className={`${toggleMobileSidebar ? 'hidden':'flex'}`}
              />
            </div>
            <div className="flex justify-center items-center bg-white px-4 py-4 rounded-full">
              <img
                src="/images/icon-next.svg"
                alt=""
                onClick={handleNextPicture}
              />
            </div>
          </div>
        </div>

        {/* text area*/}
        <div className="fex flex-col px-4 md:px-0 md:w-[39%] pt-4">
          <h3 className="mb-4 text-gray-500">SNEAKER COMPANY</h3>
          <div className="text-3xl md:text-4xl font-bold flex flex-col">
            <span>Fall Limited Edition</span>
            <span>Sneakers</span>
          </div>
          <div className="mt-4 mb-4 md:w-[65%] text-gray-600">
            <span>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather
            </span>
          </div>
          <div className="flex md:flex-col w-full md:w-auto justify-between">
            <span className="font-bold text-2xl">
              $125.00{" "}
              <span className="text-sm px-2 bg-black/75 rounded-lg text-white">
                50%
              </span>
            </span>
            <span className="mt-2 text-gray-500 line-through"> $250.00</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-4 md:gap-8 mb-4">
            <div className="flex bg-gray-100 w-[98%] md:w-32 md:px-2 rounded-md md:justify-between  items-center justify-around py-2 md:py-1.5">
              <img
                src="/images/icon-minus.svg"
                alt=""
                className="h-1 cursor-pointer"
                onClick={handleDecreament}
              />
              <span>{count}</span>
              <img
                src="/images/icon-plus.svg"
                alt=""
                className="h-2 cursor-pointer"
                onClick={handleIncrement}
              />
            </div>
            <div className="flex items-center  justify-center cursor-pointer px-12 rounded-md md:py-1.5 py-2 gap-4 bg-[hsl(26_100%_55%)]" onClick={handleAddToCart}>
              <img src="/images/icon-cart.svg" alt="" className="h-4 " />
              <button className="outline-none cursor-pointer">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
