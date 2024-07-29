"use client";
import { configureStore } from "@reduxjs/toolkit";
import authReducer  from './features/auth/authSlice';



export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
  ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;



export default store;
