import React from 'react'
import Myslider from '../component/Myslider';
import { Container, Row, Col, Button } from 'react-bootstrap';
 
 
export default function home() {
  return (
    <>
    <Myslider/>
    <br /><br /><br />
    <Container>
      <Row>
        <Col>
        
            <h1>Welcome to my React App!</h1>
            <p>
              This is a simple home page for my React application. You can add more content and components as needed.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
      
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Latest News</h2>
          <p>Here are some of the latest news and updates from our blog.</p>
          {/* Add news components here */}
        </Col>
        <Col>
          <h2>Featured Products</h2>
          <p>Check out our featured products and special deals.</p>
          {/* Add product components here */}
        </Col>
      </Row>
    </Container>
    <br /><br /><br />

    </>
  )
}
 