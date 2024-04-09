import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from 'type/post';

type searchFilterType = {
  searchPostFilterList: Array<IPost>;
};

const searchFilterStore = createSlice({
  name: `searchFilterStore`,
  initialState: {
    searchPostFilterList: [],
  } as searchFilterType,
  reducers: {
    rdxSearchPostList(state, action: PayloadAction<Array<IPost>>) {
      state.searchPostFilterList = action.payload;
    },
  },
});

export default searchFilterStore;
export const { rdxSearchPostList } = searchFilterStore.actions;
