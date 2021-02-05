import React, { useState } from "react";
import Products from "../components/Products/Products";
import data from '../data.json';
const ShoppingCart = () => {

    const productList = data.products;
    const [products, setProducts] = useState(productList)
    const [size, setSize] = useState('');
    const [sort, setSort] = useState('');


  return (
    <div className="grid-container">
      <header>
        <a href="/" rel="noreferrer" target="_blank">
          React Shopping Cart
        </a>
      </header>
      <main>
          <div className="content">
              <div className="main">
                <Products products={products} />
              </div>
              <div className="sidebar">
                  Cart Items
              </div>
          </div>
      </main>
      <footer>All right is reserved</footer>
    </div>
  );
};

export default ShoppingCart;
