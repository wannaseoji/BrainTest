import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  score: 0,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    incrementScore: (state, action) => {
      state.score += action.payload;
    },
    resetScore: (state) => {
      state.score = 0;
    },
  },
});

export const { incrementScore, resetScore } = scoreSlice.actions;
export default scoreSlice.reducer;
