'use client';

import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

// Create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage when the component mounts (client-side only)
  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCartItems(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []);
  };

  // Add item to cart or update quantity
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if the exact same item is already in the cart (based on _id)
      const isItemInCart = prevItems.find((cartItem) => cartItem._id === item._id);

      let updatedCartItems;

      if (isItemInCart) {
        // If the item exists, increase the quantity
        updatedCartItems = prevItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If the item doesn't exist, add the new item with an initial quantity of 1
        updatedCartItems = [...prevItems, { ...item, quantity: 1 }];
      }

      // Update localStorage with the new cart items
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      return updatedCartItems; // Return the updated cart items to set the new state
    });
  };

  // Remove item from cart or reduce its quantity
  const removeFromCart = (item) => {
    setCartItems((prevItems) => {
      const isItemInCart = prevItems.find((cartItem) => cartItem._id === item._id);

      let updatedCartItems;

      if (isItemInCart) {
        if (isItemInCart.quantity === 1) {
          updatedCartItems = prevItems.filter((cartItem) => cartItem._id !== item._id);
        } else {
          updatedCartItems = prevItems.map((cartItem) =>
            cartItem._id === item._id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
        }

        // Update localStorage with the new cart items
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        return updatedCartItems;
      }

      return prevItems;
    });
  };

  // Clear an item from the cart
  const clearCart = (itemToRemove) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== itemToRemove._id);

    setCartItems(updatedCartItems);
    // Update localStorage after clearing an item
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    toast("Item removed from cart");

  };

  // Calculate total price of the cart
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
