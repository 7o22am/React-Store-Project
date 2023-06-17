import Container from 'react-bootstrap/Container';
import React, { useContext } from "react";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { FaReact } from 'react-icons/fa';
import { productsContext } from '../context/cart';
function ColorSchemesExample() {
  const { cartCount } = useContext(productsContext);

  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="/"> <FaReact /> Store </Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">login</Nav.Link>
            <Nav.Link href="/students">Add Students</Nav.Link>
            <div>
              <Nav.Link href="">{cartCount}</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <br />

    </>
  );
}

export default ColorSchemesExample;