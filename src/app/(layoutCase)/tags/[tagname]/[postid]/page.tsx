import PostDetail from 'app/_component/common/PostDetail';

type Props = {
  params: { postid: string };
};

export default function PostPage({ params }: Props) {
  return <PostDetail postid={params.postid} />;
}
