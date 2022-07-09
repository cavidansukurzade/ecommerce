import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer,{getTotals} from "./features/cartSlice";
import categoryReducer from "./features/categorySlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    category:categoryReducer,
  },
});
store.dispatch(getTotals())
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
