// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slice/appSlice';
const store = configureStore({
  reducer: {
    slice:appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
