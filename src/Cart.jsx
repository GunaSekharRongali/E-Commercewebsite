import React from "react";


function Cart({removeFromCart, cartItems,addQuantity,removeQuantity,cartprice}) {
  return (
    <div className="w-full mt-[70px] flex flex-wrap">
      {
        cartItems.map((item,i)=>{
          return(
          <div key={i} className='hover:scale-105 hover:z-0 users rounded-3xl transition delay-150 ease-in-out bg-white
            ml-3 mb-5  w-[97%] sm:w-[80%] sm:ml-[60px] h-[150px] md:w-[50%] md:ml-0 
            lg:w-[30%] lg:ml-[30px] flex flex-row gap-[10px] justify-between items-center border border-black p-1'>
            <div className='rounded-3xl rounded-b-none flex justify-center  m-w-[70%] rounded-b-xl bg-slate-500'>
               <img className='mt-5 ml-2  rounded-full  w-[100%] h-[115px]  self-start' src={item.image} alt={item.image} />
            </div> 
            <div className="flex flex-col ml-0 h-[100%]">
            <div className='rounded-b-3xl p-2 h-[65%]'>
             <p className="text-black self-start"><span className="text-black text-[20px] -ml-20">${item.price}</span></p>
             <h1 className='text-black text-[15px] text-black  '>{item.title}</h1>
             {/* <p className='text-black text-sm text-black -ml-20'>Rating:{item.rating.rate}</p> */}
            </div>
            <div className="text-black w-[80%] h-[32%] flex flex-row justify-end items-center" >
              <button className="bg-[#9740E3] text-white mr-5 rounded-lg w-[70px] h-[28px] flex justify-center items-center" onClick={()=>removeFromCart(item)}>remove</button>
              <button className="bg-[#9740E3] rounded-l-md -mr-1 flex justify-center items-center
              w-[25px] h-[25px] text-white " onClick={()=>addQuantity(item)}>+</button><span className="inline-block bg-slate-200
              z-10 place-content-center w-[30px] h-[25px] ">{item.quantity}</span><button onClick={()=>removeQuantity(item)} className="bg-[#9740E3]
              rounded-r-md -ml-1 flex justify-center items-center w-[25px] h-[25px] text-white">-</button></div>
            </div>
           </div>
          )
        })
      }
      {cartItems.length>0 && <div className="ml-[60px] bg-white text-black w-[50%] h-[80px] flex flex-col justify-center items-center position-absolute bottom-0">
        <div className="bg-white text-black">
        Total Price: $ {cartprice()}
        
        <button className="block bg-[#9740E3] text-white rounded-lg p-2">Proceed To Buy</button>
      </div>
      </div>
      }   
    </div>
  )
}

export default Cart
