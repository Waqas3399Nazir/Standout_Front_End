import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IproductSate } from "./product.type";
import axiosInstance from "@/config/axios";
import { SS_TOKEN } from "@/utils/constants";

const initialState: IproductSate = {
  pagesCount: 0,
  productsCount: 0,
  productId: 0,
  product: {
    backSpacing: "",
    boltPattern: "",
    brandId: 0,
    centerBore: "",
    color: "",
    cost: "",
    costOfSetOfFour: "",
    createdAt: "",
    diameter: "",
    exposedLugs: "",
    id: 0,
    loadRating: "",
    material: "",
    model: "",
    modelOther: "",
    name: "",
    numberOfSpokes: "",
    offset: "",
    photoUrl: "",
    price: "",
    priceOfSetOfFour: "",
    sku: "",
    structure: "",
    updatedAt: "",
    width: "",
    yearIntroduced: "",
  },
  products: [],
  error: {},
  isActivityInProgress: false,
};

//get all products
export const getAllProducts = createAsyncThunk(
  "getAll/products",
  async (productsDetails: any, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().get(
        "/product/get-products",
        productsDetails
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

//get Single Products Details
export const getSingleProduct = createAsyncThunk(
  "getSingle/product",
  async (productId: any, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().get(
        `/product/get-product/${productId}`
      );
      console.log(data);
      return data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "productSlcie",
  initialState: { ...initialState, name: "getProductSlcie" },
  reducers: {
    errorCleanUp: (state) => {
      state.error = {
        code: null,
        message: "",
        error: "",
      };
    },
    productId: (state, action) => {
      state.productId = action.payload;
    },
  },
  extraReducers: (builder) => {
    //get All Products
    builder.addCase(getAllProducts.pending, (state, action: any) => {
      state.isActivityInProgress = true;
    });
    builder.addCase(getAllProducts.rejected, (state, action: any) => {
      state.isActivityInProgress = false;
      //   state.error = {
      //     code: action.payload.status,
      //     message: action.payload.data.message,
      //   };
      console.log(state.error);
    });
    builder.addCase(getAllProducts.fulfilled, (state, action: any) => {
      state.isActivityInProgress = false;
      console.log(action.payload);
      state.pagesCount = action.payload.numberOfPages;
      state.productsCount = action.payload.products.count;
      state.products = action.payload.products.rows;
    });

    //get Single Products Details
    builder.addCase(getSingleProduct.pending, (state, action: any) => {
      state.isActivityInProgress = true;
    });

    builder.addCase(getSingleProduct.rejected, (state, action: any) => {
      state.isActivityInProgress = false;
      //   state.error = {
      //     code: action.payload.status,
      //     message: action.payload.data.message,
      //   };
      console.log(state.error);
    });

    builder.addCase(getSingleProduct.fulfilled, (state, action: any) => {
      state.isActivityInProgress = false;
      state.product = action.payload;
    });
  },
});

export const { errorCleanUp } = productSlice.actions;

export default productSlice.reducer;
