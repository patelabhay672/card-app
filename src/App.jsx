import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleItem = (item) => {
      setCart((prevCart) => {
       // Check if item is already in the cart
       // Initialize a flag variable to track whether the item is already in the cart
       let isPresent = false;
       // Iterate over each product in the prevCart array
       prevCart.forEach((product) => {
      // If the current product's ID matches the item's ID, set the flag to true
       if (product.id === item.id) {
         isPresent = true; // The item is already in the cart, so mark it as present
       }
      });
      if (isPresent) {
        // Remove item if it's already in the cart
        return prevCart.filter((product) => product.id !== item.id);
      } else {
        // Add item to the cart if it's not there
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

   // Function to update the quantity of an item
   const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) } // Ensure quantity doesn't go below 1
          : item
      )
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar cart={cart} />
          <Home handleItem={handleItem} />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar cart={cart} />
          <Login />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar cart={cart} />
          <About />
        </>
      ),
    },
    {
      path: "/shopingcart",
      element: (
        <>
          <Navbar cart={cart} />
          <ShoppingCart cart={cart} removeFromCart={removeFromCart}/>
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
