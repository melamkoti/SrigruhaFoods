import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../components/CartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
