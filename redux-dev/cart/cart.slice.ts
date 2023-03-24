import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IcartState } from "./cart.type";
import axiosInstance from "@/config/axios";

const initialState: IcartState = {
  message: "",
  deleteSuccessMessage: "",
  totalAmount: 0,
  totalItemsSelected: 0,
  cartQty: 0,
  cartProducts: [],
  isActivityInProgress: false,
  error: {
    code: 0,
    message: "",
  },
};

//add product to cart
export const addProductToCart = createAsyncThunk(
  "addProduct/cart",
  async (product: any, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().post(
        `/cart/create-cart/${product.productId}`,
        { quantity: product.quantity }
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  }
);

//get User Cart Products
export const getUserCartProducts = createAsyncThunk(
  "addUserCart/Products",
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().get("/cart/get-user-cart-product");
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  }
);

//update user product Qty in cart
export const updateUserProductQtyInCart = createAsyncThunk(
  "updateCart/Product",
  async (product: any, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().put(
        `/cart/update-cart-product/${product.productId}`,
        { quantity: product.quantity }
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  }
);

//delete a Product in Cart
export const deleteUserProductInCart = createAsyncThunk(
  "deleteCart/Product",
  async (productId: any, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().delete(
        `/cart/delete-cart-product/${productId}`
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  }
);

//delete all products
export const deleteAllProductsInCart = createAsyncThunk(
  "deleteAllCart/Product",
  async (product, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().delete(
        `/cart/delete-cart-products`
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  }
);

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: { ...initialState, name: "cartsSlice" },
  reducers: {
    cartErrorCleanUp: (state) => {
      state.error = {
        code: null,
        message: "",
        error: "",
      };
    },
    cartMessageCleanUp: (state) => {
      state.message = "";
    },
    setTotalAmount: (state, action) => {
      if (action.payload.condition) {
        state.totalItemsSelected =
          state.totalItemsSelected + action.payload.item;
        state.totalAmount = state.totalAmount + action.payload.price;
      } else if (
        !action.payload.condition &&
        state.totalAmount &&
        state.totalItemsSelected
      ) {
        state.totalAmount = state.totalAmount - action.payload.price;
        state.totalItemsSelected =
          state.totalItemsSelected - action.payload.item;
      }
    },
    deleteProductMessageCleanUp: (state) => {
      state.deleteSuccessMessage = "";
    },
    productQtyInCart: (state) => {
      state.cartQty = state.cartQty + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addProductToCart.pending, (state, action: any) => {
      state.isActivityInProgress = true;
    });
    builder.addCase(addProductToCart.rejected, (state, action: any) => {
      state.isActivityInProgress = false;
      state.error = {
        code: action.payload.status,
        message: action.payload.data.message,
      };
    });
    builder.addCase(addProductToCart.fulfilled, (state, action: any) => {
      state.isActivityInProgress = false;
      state.message = action.payload.message;
    });

    //get user cart products
    builder.addCase(getUserCartProducts.pending, (state, action: any) => {
      state.isActivityInProgress = true;
    });
    builder.addCase(getUserCartProducts.fulfilled, (state, action: any) => {
      state.isActivityInProgress = false;
      //what if count and cart product array's are zero
      state.cartQty = action.payload.cartProducts.count;
      state.cartProducts = action.payload.cartProducts.rows;
    });

    //update product Qty in Cart
    builder.addCase(
      updateUserProductQtyInCart.pending,
      (state, action: any) => {
        state.isActivityInProgress = true;
      }
    );

    builder.addCase(
      updateUserProductQtyInCart.rejected,
      (state, action: any) => {
        state.isActivityInProgress = false;
        state.error = {
          code: action.payload.status,
          message: action.payload.data.message,
        };
      }
    );

    builder.addCase(
      updateUserProductQtyInCart.fulfilled,
      (state, action: any) => {
        state.isActivityInProgress = false;
        state.message = action.payload.message;
      }
    );

    //delete product in cart
    builder.addCase(deleteUserProductInCart.pending, (state, action: any) => {
      state.isActivityInProgress = true;
    });

    builder.addCase(deleteUserProductInCart.rejected, (state, action: any) => {
      state.isActivityInProgress = false;
      state.error = {
        code: action.payload.status,
        message: action.payload.data.message,
      };
    });

    builder.addCase(deleteUserProductInCart.fulfilled, (state, action: any) => {
      state.isActivityInProgress = false;
      state.deleteSuccessMessage = action.payload.message;
    });

    //delete cart products
    builder.addCase(deleteAllProductsInCart.pending, (state, action: any) => {
      state.isActivityInProgress = true;
    });

    builder.addCase(deleteAllProductsInCart.rejected, (state, action: any) => {
      state.isActivityInProgress = false;
      state.error = {
        code: action.payload.status,
        message: action.payload.data.message,
      };
    });

    builder.addCase(deleteAllProductsInCart.fulfilled, (state, action: any) => {
      state.isActivityInProgress = false;
      state.message = action.payload.message;
    });
  },
});

export const {
  cartErrorCleanUp,
  cartMessageCleanUp,
  setTotalAmount,
  deleteProductMessageCleanUp,
  productQtyInCart,
} = cartSlice.actions;

export default cartSlice.reducer;
