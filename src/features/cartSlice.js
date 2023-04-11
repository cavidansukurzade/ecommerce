import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info("Incrased prouct quantity",{
          position:toast.POSITION.BOTTOM_LEFT
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("Product added to cart",{
          position:toast.POSITION.BOTTOM_LEFT
        });
      }
      state.cartTotalQuantity++
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      toast.error("Product removed from cart",{
        position: toast.POSITION.BOTTOM_LEFT
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info("Decreased prouct quantity",{
          position:toast.POSITION.BOTTOM_LEFT
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        toast.error("Product removed from cart",{
          position:toast.POSITION.BOTTOM_LEFT
        });
      }
    },
    increaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItems[itemIndex].cartQuantity += 1;
      toast.info("Inscreased prouct quantity",{
        position:toast.POSITION.BOTTOM_LEFT
      });
    },
    clearCart(state) {
      state.cartItems = [];
      toast.error("Cart cleared",{
        position:toast.POSITION.BOTTOM_LEFT
      });
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity=quantity;
      state.cartTotalAmount=total;
    },
  },
});
export const {
  getTotals,
  addToCart,
  removeFromCart,
  decreaseCart,
  increaseCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
