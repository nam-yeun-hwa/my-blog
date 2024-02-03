import { IPost } from 'type/post';

import PostDetail from 'app/_component/common/PostDetail';

type Props = {
  params: { postid: string };
  detail: IPost;
};

// 엔터 값 검색 정규 표현식
// var enterRegex = /^.*$/gm;

export default function PostPage({ params }: Props) {
  return <PostDetail postid={params.postid} />;
}
