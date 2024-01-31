import PageHeading from 'app/_component/common/PageHeading';
import style from './page.module.css';
import Link from 'next/link';

export default function archives() {
  return (
    <article>
      <PageHeading pageTitle="Tags" />
      <div className="content archives">
        <time className={style.year}>2019</time>
        <ul className={style.list_unstyled}>
          <li className={style.list_item}>
            <span className={style.day}>1 1</span>
            <span className={style.month}>Aug</span>
            <Link className={style.list_link} href="">
              Customize the Favicon
            </Link>
          </li>
          <li className={style.list_item}>
            <span className={style.day}>09</span>
            <span className={style.month}>Aug</span>
            <Link className={style.list_link} href="">
              Getting Started
            </Link>
          </li>
          <li className={style.list_item}>
            <span className={style.day}>08</span>
            <span className={style.month}>Aug</span>
            <Link className={style.list_link} href="">
              Text and Typography
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
