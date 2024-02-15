import Link from 'next/link';
import style from './post.module.css';
import { IPost } from 'type/post';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

type Props = {
  post: IPost;
};

dayjs.locale('ko');
dayjs.extend(relativeTime);

// Aug 9, 2019
// Blogging, Tutorial

export default function Post({ post }: Props) {
  return (
    <article className={style.post}>
      <Link href={`/posts/${post.id}`}>
        <div className={style.post_body}>
          <h1 className={style.post_title}>{post.title}</h1>
          <div className={style.post_text}>
            <p className={style.preview}>{post.preview}</p>
          </div>
          <div className={style.post_meta}>
            <div className={style.post_info}>
              <i className={`far fa-calendar fa-fw ${style.ico_calendar}`}></i>
              <time className={style.time}>{dayjs(post.date).fromNow()}</time>
              <i className={`far fa-folder-open fa-fw ${style.ico_folder}`}></i>
              <span className={style.categories}> {post.folder} </span>
            </div>
            <div className={style.pin}>
              <i className={`fa-regular fa-heart  ${style.ico_pin}`}></i>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
