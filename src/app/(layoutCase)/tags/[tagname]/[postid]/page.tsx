import PostDetail from 'app/_component/common/PostDetail';
import { totalPostlist } from 'data/post_db';

type Props = {
  params: { postid: string; tagname: string };
};

export function generateStaticParams() {
  const uniqueTags = Array.from(
    new Set(totalPostlist.flatMap((value) => value.tag)),
  );
  return uniqueTags
    .map((parent) => {
      return totalPostlist.map((value) => {
        return { tagname: parent, postid: value.id.toString() };
      });
    })
    .flat();
}

export default function PostPage({ params }: Props) {
  return <PostDetail postid={params.postid} />;
}
