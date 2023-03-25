import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { IuserState } from "./auth.types";

const selectDomain = (state: any) => state.authReducer;

export const user = createDraftSafeSelector(
  selectDomain,
  (user: IuserState) => user.user
);

export const message = createDraftSafeSelector(
  selectDomain,
  (user: IuserState) => user.message
);

export const activityInProgress = createDraftSafeSelector(
  selectDomain,
  (user: IuserState) => user.isActivityInProgress
);

export const error = createDraftSafeSelector(
  selectDomain,
  (user: IuserState) => user.error
);

export const email = createDraftSafeSelector(
  selectDomain,
  (user: IuserState) => user.email
);

export const isTokenValid = createDraftSafeSelector(
  selectDomain,
  (user: IuserState) => user.isTokenValid
);
