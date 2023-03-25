import { combineReducers } from "@reduxjs/toolkit";

//importing slices
import authSlice from "./auth/auth.slice";
import productSlice from "./products/product.slice";
import brandsSlice from "./brands/brands.slice";
import cartSlice from "./cart/cart.slice";

export const rootReducer = combineReducers({
  authReducer: authSlice,
  productReducer: productSlice,
  brandsReducer: brandsSlice,
  cartReducer: cartSlice,
});
