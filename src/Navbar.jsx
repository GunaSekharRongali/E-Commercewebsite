import React from "react";
import { FaShoppingCart, FaSearch } from 'react-icons/fa';


function Navbar({cartHandle,cartLength}) {
  return (
    <div className="flex mt-0 z-10 justify-center bg-white positon-relative top-0 sticky">
      <div className="w-[20%]"></div>  
      <div className="w-[60%] xl:w-[50%] rounded-l-full bg-white flex justify-center items-center ">
        <input type="text" placeholder="...search items" className="rounded-l-full p-2 w-[70%] h-[40px] bg-white  border-[2px] focus:border- text-black" />
        <div className="z-3 w-[20%] h-[80%] xl:w-[15%] flex items-center justify-center bg-slate-300 rounded-r-md">
        <FaSearch className="text-gray-700 cursor-pointer"/>
        </div>
      </div>
      <div className="w-[20%]  flex justify-end items-center mr-5 cursor-pointer">
      <FaShoppingCart onClick={()=>cartHandle()} className="w-[50px] h-[50px] text-[#9740E3]" />
        {cartLength>0 && <span className="h-4 w-4 self-start rounded-full bg-[#facc15] -ml-2 place-content-center text-black text-[12px]">{cartLength}</span>}
      </div>
    </div>
  )
}

export default Navbar
