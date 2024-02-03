import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./slice/tasks";
import { authReducer } from "./slice/auth";


const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
  }
})

export default store;