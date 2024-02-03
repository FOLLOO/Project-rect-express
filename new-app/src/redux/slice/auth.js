import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAuth = createAsyncThunk('/auth/fetchAuth', async (params) => {
  const {data} = await axios.post('/auth/login', params);
  return data;
})

export const fechRegister = createAsyncThunk('/auth/fechRegister', async (params) => {
  const {data} = await axios.post('/auth/register', params);
  return data;
})

export const fetchAuthMe = createAsyncThunk('/auth/fetchAuthMe', async (params) => {
  const {data} = await axios.get('/auth/me');
  return data;
})



const initialState = { 
  data: null,
  status: 'loading',

}



const authSlince = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAuth.pending, (state) => {
      state.status = 'loading';
      state.data = null
    })
    .addCase(fetchAuth.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    })
    .addCase(fetchAuth.rejected, (state) => {
      state.status = 'error';
      state.data = null
    })
    .addCase(fetchAuthMe.pending, (state) => {
      state.status = 'loading';
      state.data = null
    })
    .addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    })
    .addCase(fetchAuthMe.rejected, (state) => {
      state.status = 'error';
      state.data = null
    })
    .addCase(fechRegister.pending, (state) => {
      state.status = 'loading';
      state.data = null
    })
    .addCase(fechRegister.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    })
    .addCase(fechRegister.rejected, (state) => {
      state.status = 'error';
      state.data = null
    })
    
  }
})

export const SelectIsAuth = state => Boolean(state.auth.data); 

export const authReducer = authSlince.reducer;

export const { logout } = authSlince.actions