import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
 

export default function Cart() {
  const { arrWithCount } = useSelector((state) => state.products);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const data = arrWithCount.filter((item) => item.count);
    setCartItems(data);
  }, [arrWithCount]);
  return (
    <div>
      {cartItems.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}