import React, { useState, useEffect } from 'react';

const ShoppingCart = ({ cart, removeFromCart }) => {
 
  const [updatedCart, setUpdatedCart] = useState(cart);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const calculateTotal = () => {
    return updatedCart.reduce((total, item) => total + item.quantity * item.prize,0);
  };


  const handleIncrease = (id) => {
    setUpdatedCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  };


  // Sync Local State with Parent Cart: In the ShoppingCart 
  // component, we use the useEffect hook to update the updatedCart
  //  state whenever the cart prop changes. This ensures that the cart 
  //  is kept up to date with the parent’s state.
  useEffect(() => {
    setUpdatedCart(cart);  //// Sync the updatedCart state whenever the parent cart changes
  }, [cart]);
  

  const handleDecrease = (id) => {
    setUpdatedCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-gray-200 mb-8 text-center">Your Cart</h2>

      {updatedCart.length === 0 ? (
        <p className="text-xl text-emerald-50 text-center">Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
          {updatedCart.map((item) => (
            <li key={item.id} className="flex justify-between items-center p-4 border-b border-gray-200 rounded-lg">
              <div>
                <p className="text-lg font-semibold text-white">{item.name}</p>
                <p className="text-sm text-white">by {item.author}</p>
              </div>

              <div className="flex items-center">
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="px-4 py-2 text-white bg-gray-600 rounded-l-md hover:bg-gray-700 transition duration-200"
                >
                  -
                </button>
                <span className="px-4 text-white">{item.quantity}</span>

                <button
                  onClick={() => handleIncrease(item.id)}
                  className="px-4 py-2 text-white bg-gray-600 rounded-r-md hover:bg-gray-700 transition duration-200"
                >
                  +
                </button>
                <span className="px-4 text-white">Total Price - {item.quantity * item.prize}</span>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="ml-4 px-4 py-2 text-sm text-white font-semibold bg-red-500 rounded-md hover:bg-red-600 transition duration-200"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      
      {
        updatedCart.length > 0 && (
        <div className="mt-6 text-center text-white">
          <p className="text-xl font-semibold">Total: {calculateTotal()}</p>
        </div>
      )}

      <div className="mt-6 text-center">
        <button
          onClick={() => alert("Proceed to Checkout")}
          className="px-6 py-3 text-lg font-semibold text-white bg-red-300 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
  );
};

export default ShoppingCart;
