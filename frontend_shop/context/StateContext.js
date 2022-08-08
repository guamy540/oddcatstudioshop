import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

//initialize items from local storage, have to wait for window to load because this is nextjs/SSR
function getInitialItems(){
  if (typeof window !== 'undefined'){
  const localData = localStorage.getItem('cartItems');
  return localData ? JSON.parse(localData) : []
}}

function getInitialTotalPrice(){
  if (typeof window !== 'undefined'){
  const localData = localStorage.getItem('totalPrice');
  return localData ? JSON.parse(localData) : 0
}}

//seems to be causing a hydration error, must fix in the future
/*function getInitialTotalQuantities(){
  if (typeof window !== 'undefined'){
  const localData = localStorage.getItem('totalQuantities');
  return localData ? JSON.parse(localData) : 0
}}*/

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
 
  //handles the items in the cart
  const [cartItems, setCartItems] = useState(getInitialItems);
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])
 
  //handles total price of items in the cart
  const [totalPrice, setTotalPrice] = useState(getInitialTotalPrice);
  useEffect(() => {
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
  }, [totalPrice])
  
  //handles total quantities of items in the cart to display
  const [totalQuantities, setTotalQuantities] = useState(0);
  useEffect(() => {
    localStorage.setItem('totalQuantities', JSON.stringify(totalQuantities))
  }, [totalQuantities])
  
  const [qty, setQty] = useState(1);

  


  let foundProduct;
  let index;

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);
    
    
    if(checkProductInCart) {
     
      toast(`That item is already in the cart`);
     
    } else {
      product.quantity = quantity;
    
      
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
      
      setCartItems([...cartItems, { ...product }]);

      toast.success(`${qty} ${product.name} added to the cart.`);
    }

  } 

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  }

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id)
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id)

    if(value === 'inc') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
    });
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities 
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);