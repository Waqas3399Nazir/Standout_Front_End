import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { IproductSate } from "./product.type";

const selectDomain = (state: any) => state.productReducer;

export const pageCount = createDraftSafeSelector(
  selectDomain,
  (product: IproductSate) => product.pagesCount
);

export const productsCount = createDraftSafeSelector(
  selectDomain,
  (product: IproductSate) => product.productsCount
);

export const productId = createDraftSafeSelector(
  selectDomain,
  (product: IproductSate) => product.productId
);

export const product = createDraftSafeSelector(
  selectDomain,
  (product: IproductSate) => product.product
);

export const products = createDraftSafeSelector(
  selectDomain,
  (product: IproductSate) => product.products
);

export const error = createDraftSafeSelector(
  selectDomain,
  (product: IproductSate) => product.error
);

export const activityInProgress = createDraftSafeSelector(
  selectDomain,
  (product: IproductSate) => product.isActivityInProgress
);
