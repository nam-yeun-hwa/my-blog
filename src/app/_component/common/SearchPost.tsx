import Link from 'next/link';
import { IAlgorithmPost, IConImageType, IPost } from 'type/post';
import PostMeta from './atomic/PostMeta';

type Props = {
  post: IPost | IAlgorithmPost;
};

export default function SearchPost({ post }: Props) {
  return (
    <article>
      <header>
        <h2>
          <Link href={''}>찾는 문자열</Link>
          <PostMeta iconType={IConImageType.ICON_CATEGORY} />
        </h2>
        <p>
          The favicons of Chirpy are placed in the directory
          assets/img/favicons/. You may want to replace them with your own. The
          following sections will guide you to create and replace the default
          favicons...
        </p>
      </header>
    </article>
  );
}
