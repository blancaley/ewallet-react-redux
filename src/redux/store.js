import { configureStore } from '@reduxjs/toolkit';
import userSlice from './User/userSlice';

const store = configureStore({
  reducer: {
    userSlice,
  },
});

export default store;