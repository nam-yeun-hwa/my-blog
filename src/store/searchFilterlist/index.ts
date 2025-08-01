import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from 'type/post';
import {totalPostlist} from "../../data/post_db";

type searchFilterType = {
  searchPostFilterList: Array<IPost>;
  searchQuery:string;
};

const searchFilterStore = createSlice({
  name: `searchFilterStore`,
  initialState: {
    searchPostFilterList: [],
    searchQuery:''
  } as searchFilterType,
  reducers: {
    rdxSetQuary(state, action: PayloadAction<string>){
      state.searchQuery = action.payload;

      state.searchPostFilterList = totalPostlist.filter(postList =>
          postList.post.some(postValue => {
            return postValue.value
                .toLowerCase()
                .includes(action.payload.toLowerCase());
          }),
      );

      console.log('[파일] SearchBar.tsx');

      console.log(
          '검색한 문자열',
          '[',
          action.payload,
          ']',
          '찾은 포스트',
          state.searchPostFilterList,
      );
    },
    rdxSearchPostList(state, action: PayloadAction<Array<IPost>>) {
      state.searchPostFilterList = action.payload;
    },
    rdxResetSearchPost(state){
      state.searchPostFilterList = [];
      state.searchQuery = '';
    }
  },
});

export default searchFilterStore;
export const {rdxSetQuary,  rdxSearchPostList ,rdxResetSearchPost } = searchFilterStore.actions;
