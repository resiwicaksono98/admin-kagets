/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import requestApi from "../utils/axiosInstance";

const initialState = {
   user: null,
   accessToken: null,
   refreshToken: null,
   isError: false,
   isSuccess: false,
   isLoading: false,
   message: "",
   error: null,
};

export const LoginUser = createAsyncThunk("user/LoginUser", async (user, thunkAPI) => {
   try {
      thunkAPI.dispatch(setIsLoading(true));
      const res = await requestApi.post("/login", {
         email: user.email,
         password: user.password,
      });
      thunkAPI.dispatch(setUser(res.data.user));
      thunkAPI.dispatch(setAccessToken(res.data.accessToken));
      thunkAPI.dispatch(setRefreshToken(res.data.refreshToken));
      thunkAPI.dispatch(setIsLoading(false));
   } catch (error) {
      thunkAPI.dispatch(setError(error));
      thunkAPI.dispatch(setIsLoading(false));
   }
});

export const getMe = createAsyncThunk("user/getMe", async (token, thunkAPI) => {
   try {
      const res = await requestApi.get("/users", {
         headers: {
            authorization: `Bearer ${token}`,
         },
      });
      thunkAPI.dispatch(setUser(res.data));
   } catch (error) {
      if (error.response) {
         const message = error.response.data.msg;
         return thunkAPI.rejectWithValue(message);
      }
   }
});

export const LogOut = createAsyncThunk("user/LogOut", async (_, thunkAPI) => {
   await requestApi.delete("/logout");
   thunkAPI.dispatch(setUser(null));
   thunkAPI.dispatch(setAccessToken(null));
   thunkAPI.dispatch(setRefreshToken(null));
});

export const refreshAccessToken = createAsyncThunk("user/refreshToken", async (user, thunkAPI) => {
   try {
      const res = await requestApi.get("/token");
      thunkAPI.dispatch(setAccessToken(res.data.accessToken));
   } catch (error) {
      thunkAPI.dispatch(setError(error));
   }
});

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      reset: (state) => initialState,
      setUser: (state, action) => {
         state.user = action.payload;
      },
      setAccessToken: (state, action) => {
         state.isLoading = true;
         state.accessToken = action.payload;
      },
      setRefreshToken: (state, action) => {
         state.isLoading = true;
         state.refreshToken = action.payload;
      },
      setIsLoading: (state, action) => {
         state.isLoading = true;
      },
      setError: (state, action) => {
         state.error = action.payload;
      },
   },

   extraReducers: (builder) => {
      builder.addCase(getMe.pending, (state) => {
         state.isLoading = true;
      });
      builder.addCase(getMe.rejected, (state) => {
         state.isLoading = true;
      });
      builder.addCase(getMe.fulfilled, (state) => {
         state.isLoading = false;
      });
   },
});

export const { reset, setUser, setAccessToken, setRefreshToken, setIsLoading, setError } = authSlice.actions;
export default authSlice.reducer;
