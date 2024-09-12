import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from './scoreSlice';

export const store = configureStore({
  reducer: {
    score: scoreReducer, // 리듀서 추가
  },
});

export default store;
