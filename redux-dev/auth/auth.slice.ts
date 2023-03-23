import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IuserState } from "./auth.types";
import axiosInstance from "@/config/axios";
import { SS_TOKEN } from "@/utils/constants";

const initialState: IuserState = {
  email: "",
  password: "",
  error: {},
  isActivityInProgress: false,
  message: "",
  user: {},
  isTokenValid: false,
};

//register user
export const registerUser = createAsyncThunk(
  "register/user",
  async (userDetails: any, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().post("/auth/signUp", userDetails);
      console.log(data.message);
      return data.message;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response);
    }
  }
);

//login user
export const loginUser = createAsyncThunk(
  "login/user",
  async (userCredentials: any, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().post(
        "/auth/signIn",
        userCredentials
      );
      localStorage.setItem(SS_TOKEN, data.token);
      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response);
    }
  }
);

//user logged in...verifying token
export const verifyToken = createAsyncThunk(
  "loggedIn/user",
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().get("/auth/getAuthState");
      return data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response);
    }
  }
);

//forgot password API
export const forgotPassword = createAsyncThunk(
  "forgot/password",
  async (email: any, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().post(
        "auth/forget-password",
        email
      );
      console.log(data);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  }
);

//update password
export const updatePassword = createAsyncThunk(
  "update/password",
  async (user: any, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance().post("auth/update-password", user);
      console.log(data);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response);
    }
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState: { ...initialState, name: "userAuthSlice" },
  reducers: {
    errorCleanUp: (state) => {
      state.error = {
        code: null,
        message: "",
        error: "",
      };
    },
    messageCleanUp: (state) => {
      state.message = "";
      state.isTokenValid = false;
    },
  },
  extraReducers: (builder) => {
    //user registration
    builder.addCase(registerUser.pending, (state, action: any) => {
      state.isActivityInProgress = true;
    });

    builder.addCase(registerUser.rejected, (state, action: any) => {
      state.isActivityInProgress = false;
      state.error = {
        code: action.payload.status,
        message: action.payload.data.message,
      };
    });

    builder.addCase(registerUser.fulfilled, (state, action: any) => {
      state.isActivityInProgress = false;
      state.message = action.payload;
    });

    //login user
    builder.addCase(loginUser.pending, (state, action: any) => {
      state.isActivityInProgress = true;
    });

    builder.addCase(loginUser.rejected, (state, action: any) => {
      state.isActivityInProgress = false;
      state.error = {
        code: action.payload.status,
        message: action.payload.data.message,
      };
    });

    builder.addCase(loginUser.fulfilled, (state, action: any) => {
      state.isActivityInProgress = false;
      state.message = action.payload.message;
    });

    //getting user data from front end and verifying token
    builder.addCase(verifyToken.pending, (state, action: any) => {
      state.isActivityInProgress = true;
    });

    builder.addCase(verifyToken.rejected, (state, action: any) => {
      state.isActivityInProgress = false;
      state.isTokenValid = action.payload.data.isValid;
      state.error = {
        code: action.payload.status,
        message: action.payload.data.message,
      };
    });

    builder.addCase(verifyToken.fulfilled, (state, action: any) => {
      state.isActivityInProgress = false;
      state.isTokenValid = action.payload.isValid;
      state.message = action.payload.message;
    });

    //forgot password API
    builder.addCase(forgotPassword.pending, (state, action: any) => {
      state.isActivityInProgress = true;
    });

    builder.addCase(forgotPassword.rejected, (state, action: any) => {
      state.isActivityInProgress = false;
      state.error = {
        code: action.payload.status,
        message: action.payload.data.message,
      };
    });

    builder.addCase(forgotPassword.fulfilled, (state, action: any) => {
      state.isActivityInProgress = false;
      state.message = action.payload.message;
    });

    //updatePassword
    //forgot password API
    builder.addCase(updatePassword.pending, (state, action: any) => {
      state.isActivityInProgress = true;
    });

    builder.addCase(updatePassword.rejected, (state, action: any) => {
      state.isActivityInProgress = false;
      state.error = {
        code: action.payload.status,
        message: action.payload.data.message,
      };
    });

    builder.addCase(updatePassword.fulfilled, (state, action: any) => {
      state.isActivityInProgress = false;
      state.message = action.payload.message;
    });
  },
});

export const { errorCleanUp, messageCleanUp } = authSlice.actions;

export default authSlice.reducer;
