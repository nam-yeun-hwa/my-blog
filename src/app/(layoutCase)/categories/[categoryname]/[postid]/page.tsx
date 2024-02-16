import PostDetail from 'app/_component/common/PostDetail';
import { totalPostlist } from 'data/post_db';
import { Folder } from 'type/post';

type Props = {
  params: { categoryname: string; postid: string };
};

export function generateStaticParams() {
  const categoryFolder = Object.values(Folder);
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
