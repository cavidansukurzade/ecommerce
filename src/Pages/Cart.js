import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTotals,
  clearCart,
  increaseCart,
  decreaseCart,
  removeFromCart,
} from "../features/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotals());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);
  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
    window.scrollTo(0,document.getElementById("cart-container").offsetTop)
  };
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncreaseCart = (cartItem) => {
    dispatch(increaseCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
    window.scrollTo(0,0)
  };
  return (
    <div className="cart-section">
      <div id="cart-container" className="container">
        <h2>Shopping Cart</h2>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <span>Your Cart is Empty-Do shopping</span>{" "}
            <i className="fas fa-shopping-cart fa-4x"></i>
          </div>
        ) : (
          <div>
            <div className="titles">
              <h3>Product</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems?.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.title}</h3>
                      <button className="remover" onClick={() => handleRemoveFromCart(cartItem)}>
                       Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-price"><span>Price:</span>{cartItem.price.toFixed(2)}$</div>
                  <div className="cart-quantity">
                    <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <span>{cartItem.cartQuantity}</span>
                    <button onClick={() => handleIncreaseCart(cartItem)}>
                      +
                    </button>
                  </div>
                  <div className="cart-total">
                    <span>Total price:</span>{(cartItem.price * cartItem.cartQuantity.toFixed(2)).toFixed(2)}$
                  </div>
                </div>
              ))}
            </div>
            <div className="footer">
              <div className="clear">
                <button onClick={() => handleClearCart()}>Clear</button>
              </div>
              <div className="subtotal">
                Subtotal:{cart.cartTotalAmount.toFixed(2)}$
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
