export interface IcartState {
  message: string;
  deleteSuccessMessage?: string;
  totalAmount?: number;
  totalItemsSelected?: number;
  cartQty: number;
  cartProducts: [];
  error?: any;
  isActivityInProgress: boolean;
}
