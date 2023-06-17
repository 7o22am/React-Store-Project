import React, {useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { productsContext } from '../context/cart';
 
 

export default function ProductCard(props) {
  const [count, setCount] = useState(0);
  const { cartCount, setCartCount } = useContext(productsContext);


  const handleInc = () => {
    setCount(count + 1);
    setCartCount(cartCount + 1);
  };

  const handleDec = () => {
    setCount(count - 1);
    setCartCount(cartCount - 1);
 
  };

  return (
    <Card className="h-100 w-100">
      <Link to={`/store/${props.id}`} style={{ textDecoration: 'none' }}>
        <Card.Img src={props.image} />
      </Link>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="h-100">
          title:{' '}
          {props.title.split(' ', 5).join(' ') + '....'}
        </Card.Title>
        <Card.Text>price: {props.price}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button
            onClick={handleInc}
            className="btn btn-success"
            style={{ width: count ? '' : '100%' }}
          >
            add
          </Button>
          {count ? (
            <React.Fragment>
              <span>{count}</span>
              <Button onClick={handleDec} className="btn btn-danger">
                remove
              </Button>
            </React.Fragment>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
}