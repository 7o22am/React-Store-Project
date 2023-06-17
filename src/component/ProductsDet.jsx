 import React, { useEffect } from 'react'
 import { useState } from 'react';
 import Card from 'react-bootstrap/Card';
 import { useLocation } from 'react-router-dom';
 export default function ProductsDet() {
    const [myItem, setMyItem] = useState();
    const location = useLocation();
   
    console.log(location.pathname);
    let url =location.pathname;
    let str=url.split('/');
    const id =str[str.length-1];
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => {
          setMyItem(data);
        })
        .catch(error => console.error(error));
    }, []);
  
    return (
      <div>
        {myItem && (
        <>
      <div className="card"   >
  <img className="card-img-top w-25" src={myItem.image}  alt="Card image cap"  />
  <div className="card-body">
    <p className="card-text"><b> category</b> : {myItem.category }</p>  
    <p className="card-text"> <b>title</b> : {myItem.title }</p>  
    <p className="card-text"><b>description</b> : {myItem.description }</p>
    <p className="card-text"><b>price</b> : {myItem.price } $</p>
    
  </div>
</div>
        </>
        )}
           {!myItem && (
        <>
     <div className='d-flex justify-content-center   '> <br /><br /><h3>Item not Found</h3><br /><br />  </div>
        </>
        )}
      </div>
    );
 }
 