
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductDetails } from "../API/Prodects";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await getProductDetails(id);
      setProduct(data);
    })();
  }, []);
  return (
    <div>
      <img src={product?.image} alt="" />
      <p>{product?.title}</p>
      <p>{product?.description}</p>
    </div>
  );
}