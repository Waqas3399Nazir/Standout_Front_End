import { combineReducers } from "@reduxjs/toolkit";

//importing slices
import authSlice from "./auth/auth.slice";
import productSlice from "./products/product.slice";

export const rootReducer = combineReducers({
  authReducer: authSlice,
  productReducer: productSlice,
});
