import { configureStore } from '@reduxjs/toolkit';
import authReduceer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReduceer,
  },
});
