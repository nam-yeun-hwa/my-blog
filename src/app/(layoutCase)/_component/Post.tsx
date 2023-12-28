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
          <div></div>
        </div>
      </Link>
    </article>
  );
}
