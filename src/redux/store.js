import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../components/User/userSlice';

const store = configureStore({
  reducer: {
    userSlice,
  },
});

export default store;