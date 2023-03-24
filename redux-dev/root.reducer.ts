import { combineReducers } from "@reduxjs/toolkit";

//importing slices
import authSlice from "./auth/auth.slice";

export const rootReducer = combineReducers({
  authReducer: authSlice,
});
