import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type categoriesType = {
  categoriesList: Array<string>;
};

const categoriesStore = createSlice({
  name: `categoriesStore`,
  initialState: {} as categoriesType,
  reducers: {
    rdxSetCategories(state, action: PayloadAction<Array<string>>) {
      state.categoriesList = action.payload;
    },
  },
});

export default categoriesStore;
export const { rdxSetCategories } = categoriesStore.actions;
