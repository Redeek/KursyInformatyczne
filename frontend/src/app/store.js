import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import tutorialReducer from '../features/tutorials/tutorialSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tutorials: tutorialReducer,
  },
});
