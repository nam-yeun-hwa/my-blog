import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from 'type/post';
import { sortedTotalPostlist, totalPostlist } from 'data/post_db';

type postType = {
  postList: Array<IPost>;
  isFetching: boolean;
};

const initialValue = sortedTotalPostlist.slice(0, 5);

const postStore = createSlice({
  name: 'postStore',
  initialState: {
    postList: initialValue,
    isFetching: false,
  } as postType,
  reducers: {
    rdxSetPostData(state, action: PayloadAction<Array<IPost>>) {
      state.postList = action.payload;
    },
    rdxSetFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
  },
});

export default postStore;
export const { rdxSetPostData, rdxSetFetching } = postStore.actions;
