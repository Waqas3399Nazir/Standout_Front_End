import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { IuserState } from "../auth/auth.types";
import { IcartState } from "./cart.type";

const selectDomain = (state: any) => state.cartReducer;

export const message = createDraftSafeSelector(
  selectDomain,
  (cart: IcartState) => cart.message
);

export const deleteMessage = createDraftSafeSelector(
  selectDomain,
  (cart: IcartState) => cart.deleteSuccessMessage
);

export const totalAmount = createDraftSafeSelector(
  selectDomain,
  (cart: IcartState) => cart.totalAmount
);

export const totalItemsSelected = createDraftSafeSelector(
  selectDomain,
  (cart: IcartState) => cart.totalItemsSelected
);

export const cartQty = createDraftSafeSelector(
  selectDomain,
  (cart: IcartState) => cart.cartQty
);

export const cartProducts = createDraftSafeSelector(
  selectDomain,
  (cart: IcartState) => cart.cartProducts
);

export const cartError = createDraftSafeSelector(
  selectDomain,
  (cart: IcartState) => cart.error
);

export const activityInProgress = createDraftSafeSelector(
  selectDomain,
  (cart: IcartState) => cart.isActivityInProgress
);
