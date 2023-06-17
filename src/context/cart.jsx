/** @format */

import { createContext, useState } from "react";

export const productsContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <productsContext.Provider value={{cartCount,setCartCount}}>{children}</productsContext.Provider>
  );
};