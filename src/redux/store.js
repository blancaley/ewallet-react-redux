import { configureStore } from '@reduxjs/toolkit';
import cardSlice from '../components/Card/cardSlice';

const store = configureStore({
  reducer: {
    card: cardSlice,
  },
});

export default store;