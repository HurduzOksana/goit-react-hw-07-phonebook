import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setContactFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setContactFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',

//   reducers: {
//     setContactFilter: (state, action) => action.payload,
//   },
// });

// export const { setContactFilter } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
