import React, { Component } from 'react'
import ProductCard from './ProductCard'

export default class Productsection extends Component {
  state = {
    products: []
  }


  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => this.setState({ products: json }))
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row g-2">
            {this.state.products.map((product) =>
              <div key={product.id} className="col -md-6 col -lg-4 ">
                <ProductCard
                 id={product.id}
                  image={product.image}
                  title={product.title}
                  desc={product.desc}
                  price={product.price} /></div>
            )}


          </div>
        </div>

      </>

    )
  }
}
