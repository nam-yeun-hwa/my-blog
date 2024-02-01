import PostDetail from 'app/_component/common/PostDetail';
import { IPost } from 'type/post';

type Props = {
  params: { postid: string };
  detail: IPost;
};

export default function Post({ params }: Props) {
  return <PostDetail postid={params.postid} />;
}
