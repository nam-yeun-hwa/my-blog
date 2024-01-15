'use client';

import { createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export const PostContext = createContext({
  postList: ['asdfjalksdf', 'asdfjalksdf', 'asdfjalksdf'],
  //   setPostList: (value: any) => {},
});

export default function PostContextProvider({ children }: Props) {
  const [postList, setPostList] = useState([]);

  return (
    <PostContext.Provider value={{ postList }}>{children}</PostContext.Provider>
  );
}
