import PostDetail from 'app/_component/common/PostDetail';
import { sortedTotalPostlist, totalPostlist } from 'data/post_db';

type Props = {
  params: { postid: string };
};

export function generateStaticParams() {
  return sortedTotalPostlist.map((value) => ({ postid: value.id.toString() }));
}

export default function PostPage({ params }: Props) {
  return <PostDetail postid={params.postid} />;
}
