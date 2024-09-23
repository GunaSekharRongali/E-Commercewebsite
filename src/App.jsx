import { useEffect, useState } from 'react'
import './App.css'
import Navbar from "./Navbar";
import Cart from "./Cart";
import Items from "./Items";

// const Api = 'https://fakestoreapi.com/products';


function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cart, setCart] = useState(false)
  const [cartLength,setCartLength]= useState(0);

  const fetchItems = async () => {
    try {
      let res = await fetch('https://fakestoreapi.com/products');
      let data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Failed to fetch items", error);
      // Display error message to the user
    }
  };
  
  useEffect(()=>{
    fetchItems()
  },[])

  useEffect(()=>{
    let value = cartItems.length;
    setCartLength(value);
  },[cartItems])

  const AddToCart = (item) => {
    const exists = cartItems.find(cartItem => cartItem.id === item.id);
    if (exists) {
      setCartItems(
        cartItems.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
    
  };
    
  

const addQuantity = (item)=>{
  const exists = cartItems.find(cartItem => cartItem.id === item.id);
  if (exists) {
    setCartItems(
      cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    )
  }
  else{
    setCartItems([...cartItems,{item}])
  }
}
  const removeQuantity = (item) => {
    const exists = cartItems.find(cartItem => cartItem.id === item.id);
    if (exists){
      setCartItems(
        cartItems.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1,0) } : cartItem
        )
      );
  };
}
  

const cartprice = () => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};
  
const cartHandle = () => {
  setCart(!cart)
}

  return (
    <>
    
    <Navbar cartHandle = {cartHandle} cartLength = {cartLength}/>

    { !cart && <Items items = {items} AddToCart = {AddToCart}/>}

    { cart && <Cart removeFromCart={removeFromCart} cartItems={cartItems} addQuantity={addQuantity} removeQuantity={removeQuantity} cartprice={cartprice} />}

    </>
  )
}



export default App





// import { useEffect, useState } from 'react'
// import './App.css'
// import Items from './Items'
// import Navbar from './Navbar'
// import Cart from './Cart'

// function App() {
//   const [items, setItems] = useState([])
//   const [cartItems,setCartItems] = useState([]);
//   const [showCart,setShowCart] = useState(true);
//   const [cartLength,setCartLength]= useState(0);

//   const cal = async ()=>{
//     try{
//       const res = await fetch('https://fakestoreapi.com/products');
//       const data =await res.json();
//       setItems(data.map((i)=>({...i, qaunt: 0})));
//       // console.log(data);
//     }
//     catch(error){
//       console.error(error);
//     }
//   }
  

//   useEffect(()=>{
//     cal()
//   },[])

//   useEffect(()=>{
//     let value = cartItems.length;
//     setCartLength(value);
//     console.log(value);
//   },[cartItems])

//   const AddToCart =(item)=>{

//   setCartItems((prevCartItems) =>
//     prevCartItems.map((cartItem) =>
//       cartItem.id === item.id ? { ...item, qaunt: cartItem.qaunt + 1 } : cartItem
//     )
//   );
  
//  }

//     const cartprice =()=>{
//       let totalvalue = cartItems.reduce((total,item)=>{
//       total = item.price * item.qaunt;
//       })
//     console.log()
      
//     }
  

//   const cartHandle =()=>{
//     setShowCart(!showCart)
//   }
//   const addQuantity = (item) => {
//     setCartItems((prevCartItems) =>
//       prevCartItems.map((cartItem) =>
//         cartItem.id === item.id ? { ...cartItem, qaunt: cartItem.qaunt + 1 } : cartItem
//       )
//     );
//   };

//   const removeQuantity = (item) => {
//     setCartItems((prevCartItems) =>
//       prevCartItems.map((cartItem) =>
//         cartItem.id === item.id ? { ...cartItem, qaunt: Math.max(cartItem.qaunt - 1, 0) } : cartItem
//       )
//     );
//   };


//   // const addQuantity=(item)=>{
//   //   let cart = cartItems.map((cartitm)=>{
//   //    return item.id===cartitm.id?{...cartitm, qaunt:cartitm.qaunt + 1}:item
//   //   })
//   //     setCartItems([...cart])
//   //  }
//   // const removeQuantity=(item)=>{
//   //   let cart = cartItems.map((cartitm)=>{
//   //   item.id===cartitm.id?{...cartitm, qaunt:Math.max(cartitm.qaunt - 1,0)}:item
//   //   })
//   //     setCartItems([...cart])
//   // } 

//   return (
//     <>
    
//     <div className='fixed w-full h-[60px] bg-white opacity-100 z-40 m-0'>
//       <Navbar cartLength={cartLength} cartHandle={cartHandle} />
      
//     </div>
//     {showCart && 
//     <div className='p-5 '>
//      <Items AddToCart={AddToCart} items={items}/>
//     </div>
//     }
//     {!showCart &&
//       <div className='w-full flex'>
//         <Cart removeQuantity={removeQuantity} cartprice={cartprice} addQuantity={addQuantity} cartItems={cartItems}/>
//       </div>
//     }
//     </>
//   )
// }


// export default App
