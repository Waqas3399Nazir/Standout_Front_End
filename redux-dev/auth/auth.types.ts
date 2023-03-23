export interface IuserState {
  email: string;
  password: string;
  error?: any;
  user?: any;
  isActivityInProgress: boolean;
  message?: string;
  isTokenValid?: boolean;
}
