
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductDetails } from "../API/Prodects";
import { Col, Container, Image, Row } from "react-bootstrap";

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
    // <div>
    //   <img src={product?.image} alt="" />
    //   <p>{product?.title}</p>
    //   <p>{product?.description}</p>
    // </div>
    <Container>
    <Row>
      <Col md={6}>
        <Image src={product?.image}  fluid style={{ maxHeight: '400px' }} />
      </Col>
      <Col md={6}>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <p>Price: {product?.price}</p>
      </Col>
    </Row>
  </Container>
);
 
}