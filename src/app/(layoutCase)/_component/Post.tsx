import Link from 'next/link';
import style from './Post.module.css';

export default function Post() {
  return (
    <article className={style.post}>
      <Link href="http:www.naver.com">
        <div className={style.post_body}>
          <h1 className={style.post_title}>Getting Started</h1>
          <div className={style.post_text}>
            <p>
              Prerequisites Follow the instructions in the Jekyll Docs to complete the installation
              of the basic environment. Git also needs to be installed. Installation Creating a New
              Site There are two wa
            </p>
          </div>
          <div className={style.post_meta}>
            <div className={style.post_info}>
              <i className={`far fa-calendar fa-fw ${style.ico_calendar}`}></i>
              <time className={style.time}>Aug 9, 2019</time>
              <i className={`far fa-folder-open fa-fw ${style.ico_folder}`}></i>
              <span className={style.categories}> Blogging, Tutorial </span>
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
