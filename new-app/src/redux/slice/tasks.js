import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk('tasks/fethTasks', async () => {
  const {data} = await axios.get('/task');

  return data;
});

export const fetchRemoveTask = createAsyncThunk('tasks/fetchRemoveTask', async (id) => 
  axios.delete(`/task/${id}`),
);


const initialState = { 
  tasks:{
   items: [],
  status: 'loading',
}
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.tasks.items = [];
        state.tasks.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks.items = action.payload;
        state.tasks.status = 'loaded';
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.tasks.items = [];
        state.tasks.status = 'error';
      })
      .addCase(fetchRemoveTask.pending, (state, action) => {
        state.tasks.items = state.tasks.items.filter(obj => obj._id === action.payload);
      });
  }
});

export const tasksReducer = tasksSlice.reducer;