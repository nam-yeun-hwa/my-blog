import BreadCrumb from 'app/_component/BreadCrumb';
import style from './page.module.css';
import Link from 'next/link';

export default function Post() {
  return (
    <>
      <BreadCrumb />
      <div className={style.contents}>
        <main className={style.main_content}>
          <article className={style.detail}>
            <header>
              <h1 className={style.h1}>불변성</h1>
            </header>
          </article>
          <div className={style.post_meta}>
            <span>
              Posted
              <time className={style.time}> Aug 8, 2019</time>
            </span>
            <span className={style.update}>
              Updated
              <time className={style.time}> Sep 23, 2023</time>
            </span>
          </div>
          <div>
            <span className={style.post_meta}>
              By
              <em>
                <Link href="https://github.com/nam-yeun-hwa" className={style.time}>
                  nyh
                </Link>
              </em>
            </span>
          </div>
          <div className={style.content}>
            상세페이지상세페이지상세페이지상세페이지상세페이지상세페이지상세페이지상세페이지상세페이지상세페이지상세페이지상세페이지상세페이지상세페이지상세페이지상세페이지상세페이지
          </div>
        </main>
        <aside className={style.panel_wrapper}>
          <div style={{ width: '100%' }}>flasjf akjf l</div>
        </aside>
      </div>
    </>
  );
}
