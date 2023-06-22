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
    <div className="container py-5">
        <div className="row g-2 ">
            {cartItems.map((item) => (
        <div className=" col-md-6 col-lg-4  d-flex" >
       <ProductCard key={item.id} product={item}   />
        </div>
      
      ))}
        </div>
    
    </div>
  );
}