import PostDetail from 'app/_component/common/PostDetail';
import { totalPostlist } from 'data/post_db';

type Props = {
  params: { postid: string };
};

export function generateStaticParams() {
  return totalPostlist.map((value) => ({ postid: value.id.toString() }));
}

export default function ArchivePage({ params }: Props) {
  return <PostDetail postid={params.postid} />;
}
