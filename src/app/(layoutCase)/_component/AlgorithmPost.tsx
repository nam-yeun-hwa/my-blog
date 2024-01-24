import Link from 'next/link';
import { IAlgorithmPost, IPost } from 'type/post';
import style from './algorithmPost.module.css';

type Props = {
  post: IAlgorithmPost;
};

export default function AlgorithmPost({ post }: Props) {
  return (
    <article className={style.post}>
      <Link href={`/algorithm/${post.id}`}>
        <div className={style.post_body}>
          <h1 className={style.post_title}>{post.title}</h1>
          <small className={style.part_title}>{post.part_title}</small>
          <div className={style.post_meta}>
            <div className={style.post_info}>
              <i className={`far fa-calendar fa-fw ${style.ico_calendar}`}></i>
              <time className={style.time}>{post.date}</time>
              <i className={`far fa-folder-open fa-fw ${style.ico_folder}`}></i>
              <span className={style.categories}> {post.folder} </span>
              <i className={`fa-solid fa-layer-group ${style.ico_folder}`}></i>
              <span className={style.categories}> {post.lv} </span>
              <i className={`fa-solid fa-sitemap ${style.ico_folder}`}></i>
              <span className={style.categories}> 프로그래머스 </span>
            </div>
            <div className={style.pin}>
              <i className={`fas fa-thumbtack fa-fw ${style.ico_pin}`}></i>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
