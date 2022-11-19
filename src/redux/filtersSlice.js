import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
