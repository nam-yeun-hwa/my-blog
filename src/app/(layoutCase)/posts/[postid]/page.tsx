import { IPost } from 'type/post';

import PostDetail from 'app/_component/common/PostDetail';

type Props = {
  params: { postid: string };
  detail: IPost;
};

export default function PostPage({ params }: Props) {
  return <PostDetail postid={params.postid} />;
}
