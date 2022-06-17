import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import EmptyCart from "../assets/empty_cart.svg";

const Cart = ({ cart, changeQuantity, removeItem }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let price = 0;
    cart.forEach((item) => {
      price += +(
        item.quantity * (item.salePrice || item.originalPrice)
      ).toFixed(2);
    });
    setTotal(price);
  }, [cart]);

  const cartItems = cart.map((book) => (
    <div className="cart__item" key={book.id}>
      <div className="cart__book">
        <img src={book.url} alt={book.title} className="cart__book--img" />
        <div className="cart__book--info">
          <span className="cart__book--title">{book.title}</span>
          <span className="cart__book--price">
            ${(book.salePrice || book.originalPrice).toFixed(2)}
          </span>
          <button
            className="cart__book--remove"
            onClick={() => removeItem(book)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="cart__quantity">
        <input
          type="number"
          onChange={(e) => changeQuantity(book, e.target.value)}
          min={1}
          max={20}
          value={book.quantity}
          className="cart__input"
        />
      </div>
      <div className="cart__total">
        ${(book.quantity * (book.salePrice || book.originalPrice)).toFixed(2)}
      </div>
    </div>
  ));

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              {cart && <div className="cart__body">{cartItems}</div>}
              {cart.length === 0 && (
                <div className="cart__empty">
                  <img
                    src={EmptyCart}
                    alt="Empty Cart"
                    className="cart__empty--img"
                  />
                  <h2>You don't have any book in your cart!</h2>
                  <Link to="/books">
                    <button className="btn">Browse books</button>
                  </Link>
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${(total * 1.1).toFixed(2)}</span>
                </div>
                <button
                  onClick={() => alert("Sorry, This is not a real page🙅🏽‍♂️")}
                  className="btn btn__checkout no-cursor"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
