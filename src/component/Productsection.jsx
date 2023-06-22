/** @format */

import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  const products = useSelector((state) => state.products.arrWithCount);
  return (
    <>
      <div className="container py-5">
        <div className="row g-2 ">
          {products?.map((product) => (
            <div key={product.id} className="col-md-6 col-lg-4 ">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}