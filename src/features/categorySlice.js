import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  category: `jewelery`,
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeCategory(state,action) {
      state.category = action.payload;
    },
  },
});
export const { changeCategory } = categorySlice.actions;
export default categorySlice.reducer;
