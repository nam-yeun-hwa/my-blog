import Link from 'next/link';
import style from './Post.module.css';

export default function Post() {
  return (
    <article className={(style.post_wrapper, style.post)}>
      <Link href="http:www.naver.com">
        <div>
          <h1>Getting Started</h1>
          <div>
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
