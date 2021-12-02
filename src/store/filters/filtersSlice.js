import { createSlice } from '@reduxjs/toolkit';

const SLICE_NAME = 'filtersSlice';

const initialState = {
  activeFilter: 'all',
};

const filtersSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const actions = filtersSlice.actions;

export default filtersSlice.reducer;
