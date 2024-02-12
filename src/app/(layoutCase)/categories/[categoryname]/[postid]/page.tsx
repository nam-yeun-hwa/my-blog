import PostDetail from 'app/_component/common/PostDetail';
import { totalPostlist } from 'data/post_db';

type Props = {
  params: { categoryname: string; postid: string };
};

export function generateStaticParams() {
  const categoryFolder = ['React', 'Javascript'];
  return categoryFolder
    .map((parent) => {
      return totalPostlist.map((value) => {
        return { categoryname: parent, postid: value.id.toString() };
      });
    })
    .flat();
}

export default function CategoryPage({ params }: Props) {
  return <PostDetail postid={params.postid} />;
}
