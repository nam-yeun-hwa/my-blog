import Link from 'next/link';
import { IAlgorithmPost, IConImageType, IPost } from 'type/post';
import PostMeta from './atomic/PostMeta';
import style from './searchPost.module.css';

type Props = {
  post: IPost;
};

export default function SearchPost({ post }: Props) {
  return (
    <article className={style.searchBox}>
      <header>
        <h2 className={style.hidden}>
          <Link className={style.title} href={''}>
            {post.title}
          </Link>
          <PostMeta iconType={IConImageType.ICON_CATEGORY} />
        </h2>
        <p className={style.preview}>{post.preview}</p>
      </header>
    </article>
  );
}
