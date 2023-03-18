import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IbrandsState } from "./brands.types";
import axiosInstance from "@/config/axios";

const initialState: IbrandsState = {
  brandsCount: 0,
  totalBrands: [],
  isActivityInProgress: false,
  error: {},
};

//get all brands
export const getAllBrands = createAsyncThunk(
  "getAll/brands",
  async (brands, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().get("brand/get-brands");
      return data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

const brandsSlice = createSlice({
  name: "brandsSlice",
  initialState: { ...initialState, name: "getBrandsSlice" },
  reducers: {
    brandsErrorCleanUp: (state) => {
      state.error = {
        code: null,
        message: "",
        error: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBrands.pending, (state, action: any) => {
      state.isActivityInProgress = true;
    });

    builder.addCase(getAllBrands.rejected, (state, action: any) => {
      state.isActivityInProgress = false;
    });

    builder.addCase(getAllBrands.fulfilled, (state, action: any) => {
      state.isActivityInProgress = false;
      state.totalBrands = action.payload.rows;
    });
  },
});

export const { brandsErrorCleanUp } = brandsSlice.actions;

export default brandsSlice.reducer;
