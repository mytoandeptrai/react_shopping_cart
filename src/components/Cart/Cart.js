import React, { Fragment, useState } from "react";
import formatCurrency from "../../util";

const Cart = ({
  cartItems,
  handleRemoveFormCart,
  handleCheckOutFormSubmit,
}) => {
  const [showCheckOut, setShowCheckOut] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputEmail = e  => {
    setEmail(e.target.value);
  }
  const handleInputAddress = e => {
    setAddress(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const orders = {
      email: email,
      name: name,
      address: address,
      cartItems: cartItems,
    };
    handleCheckOutFormSubmit(orders);
  };
  return (
    <Fragment>
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty!</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} in the cart{" "}
          </div>
        )}
        <div>
          <div className="cart">
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className="right">
                      {formatCurrency(item.price)} x {item.count}{" "}
                      <button onClick={() => handleRemoveFormCart(item)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="total">
                  <div>
                    Total:{" "}
                    {formatCurrency(
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    )}
                  </div>
                  <div
                    className="button primary"
                    onClick={() => setShowCheckOut(!showCheckOut)}
                  >
                    Proceed
                  </div>
                </div>
              </div>
              {showCheckOut && (
                <div className="cart">
                  <form onSubmit={handleSubmit}>
                    <ul className="form-container">
                      <li>
                        <label htmlFor="">Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          onChange={handleInputEmail}
                        />
                      </li>
                      <li>
                        <label htmlFor="">Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          onChange={handleInputName}
                        />
                      </li>
                      <li>
                        <label htmlFor="">Address</label>
                        <input
                          name="address"
                          type="text"
                          required
                          onChange={handleInputAddress}
                        />
                      </li>
                      <li>
                        <button className="button primary" type="submit">
                          Checkout
                        </button>
                      </li>
                    </ul>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
