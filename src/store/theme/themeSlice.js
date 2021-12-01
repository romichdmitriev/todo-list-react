import { createSlice } from '@reduxjs/toolkit';

const SLICE_NAME = 'themeSlice';

const initialState = {
  isLightTheme: true,
};

const themeSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isLightTheme = !state.isLightTheme;
    },
  },
});

export const actions = themeSlice.actions;

export default themeSlice.reducer;
