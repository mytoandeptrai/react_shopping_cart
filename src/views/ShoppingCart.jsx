import React, { useState } from "react";
import Cart from "../components/Cart/Cart";
import Filter from "../components/Filter/Filter";
import Products from "../components/Products/Products";
import data from "../data.json";
const ShoppingCart = () => {
  //   const productList = ;
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : []
  );

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

  const handleAddToCart = (product) => {
    const cartValues = cartItems.slice();
    console.log(cartValues);
    let alreadyCart = false;
    cartValues.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        console.log(item.count);
        alreadyCart = true;
      }
    });
    if (!alreadyCart) {
      cartValues.push({
        ...product,
        count: 1,
      });
    }
    setCartItems(cartValues);
    localStorage.setItem("cartItem", JSON.stringify(cartValues));
  };

  const handleRemoveFormCart = (product) => {
    console.log(product);
    const cartValues = cartItems.slice();
    setCartItems(cartValues.filter((x) => x._id !== product._id));
    localStorage.setItem(
      "cartItem",
      JSON.stringify(cartValues.filter((x) => x._id !== product._id))
    );
  };

  const handleCheckOutFormSubmit = order => {
    console.log(order);
    alert("Need to save order for" + order.name)
  }

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
            <Products products={products} handleAddToCart={handleAddToCart} />
          </div>
          <div className="sidebar">
            <Cart
              cartItems={cartItems}
              handleRemoveFormCart={handleRemoveFormCart}
              handleCheckOutFormSubmit={handleCheckOutFormSubmit}
            />
          </div>
        </div>
      </main>
      <footer>All right is reserved</footer>
    </div>
  );
};

export default ShoppingCart;
