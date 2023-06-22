import React, {useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { productsContext } from '../context/cart';
import { useDispatch } from 'react-redux';
 
import { decCartCount, incCartCount } from '../Redux/Slices/cartCounterSlice';
import { decProductCount, incProductCount } from '../Redux/Slices/productsSlice';

 

export default function ProductCard({
  product: { image, id, price, title, count },
}) {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleInc = (id) => {
    dispatch(incCartCount());
    dispatch(incProductCount(id));
  };

  const handleDec = () => {
    dispatch(decCartCount());
    dispatch(decProductCount(id));
 
  };
  const navigateToDetails = (id) => {
    navigate(`${id}`);
  };

  return (
    <Card className="h-100 w-100">
      <Link to={`/store/${id}`} style={{ textDecoration: 'none' }}>
        <Card.Img src={image}     onClick={() => navigateToDetails(id)} />
      </Link>
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="h-100">
          title:{' '}
          {title.split(' ', 5).join(' ') + '....'}
        </Card.Title>
        <Card.Text>price: {price}</Card.Text>
        <div className="d-flex justify-content-between">
          <Button
            onClick={()=>handleInc(id)}
            className="btn btn-success"
            style={{ width: count ? '' : '100%' }}
          >
            add
          </Button>
          {count ? (
            <React.Fragment>
              <span>{count}</span>
              <Button onClick={()=>handleDec(id)} className="btn btn-danger">
                remove
              </Button>
            </React.Fragment>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
}