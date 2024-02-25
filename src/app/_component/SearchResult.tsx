import { IPost, IAlgorithmPost } from 'type/post';
import SearchPost from './common/SearchPost';

type Props = {
  searchData: IPost[] | IAlgorithmPost[];
};

export default function SearchResult({ searchData }: Props) {
  return (
    <>
      {searchData.map((post) => {
        return <SearchPost key={post.id} post={post} />;
      })}
    </>
  );
}
