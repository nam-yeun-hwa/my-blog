import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAlgorithmPost } from 'type/post';
import { algorithmPostlist } from 'data/algorithm_db';

type algorithmType = {
  algorithmList: Array<IAlgorithmPost>;
  isFetching: boolean;
};

const initialValue = algorithmPostlist.slice(0, 10);

const algorithmStore = createSlice({
  name: 'algorithmStore',
  initialState: {
    algorithmList: initialValue,
    isFetching: false,
  } as algorithmType,
  reducers: {
    rdxSetAlgorithmData(state, action: PayloadAction<Array<IAlgorithmPost>>) {
      state.algorithmList = action.payload;
    },
    rdxSetFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
  },
});

export default algorithmStore;
export const { rdxSetAlgorithmData, rdxSetFetching } = algorithmStore.actions;
