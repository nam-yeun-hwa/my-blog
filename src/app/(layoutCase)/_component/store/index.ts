import { Action, combineReducers } from 'redux';

import postStore from './post';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { postStore: postStore.reducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
