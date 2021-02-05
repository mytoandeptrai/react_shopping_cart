import React, { useState } from "react";
import Filter from "../components/Filter/Filter";
import Products from "../components/Products/Products";
import data from "../data.json";
const ShoppingCart = () => {
  //   const productList = ;
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  const handleFilterProducts = (event) => {
    if (event.target.value === "") {
      setSize(event.target.value);
      setProducts(products);
    } else {
      setSize(event.target.value);
      setProducts(
        data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        )
      );
    }
  };
  const handleSortProducts = (event) => {
    console.log(event.target.value);
    const sortValue = event.target.value;
    setSort(sortValue);
    setProducts(
      products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price < b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price > b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        )
    );
  };

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
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              handleFilterProducts={handleFilterProducts}
              handleSortProducts={handleSortProducts}
            />
            <Products products={products} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All right is reserved</footer>
    </div>
  );
};

export default ShoppingCart;
