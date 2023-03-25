import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { IbrandsState } from "./brands.types";

const selectDomain = (state: any) => state.brandsReducer;

export const brandsCount = createDraftSafeSelector(
  selectDomain,
  (brands: IbrandsState) => brands.brandsCount
);

export const brands = createDraftSafeSelector(
  selectDomain,
  (brands: IbrandsState) => brands.totalBrands
);

export const activityInProgress = createDraftSafeSelector(
  selectDomain,
  (brands: IbrandsState) => brands.isActivityInProgress
);

export const error = createDraftSafeSelector(
  selectDomain,
  (brands: IbrandsState) => brands.error
);
