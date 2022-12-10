import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import tutorialReducer from '../features/tutorials/tutorialSlice';
import assignTutorialReducer from '../features/assignTutorials/assignSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tutorials: tutorialReducer,
    assigntutorials: assignTutorialReducer,
  },
});
