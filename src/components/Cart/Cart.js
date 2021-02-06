import React, { Fragment } from "react";
import formatCurrency from "../../util";

const Cart = ({ cartItems, handleRemoveFormCart }) => {
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
            <div className="cart">
              <div className="total">
                <div>
                  Total:{" "}
                  {formatCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
                <div className="button primary">Proceed</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
