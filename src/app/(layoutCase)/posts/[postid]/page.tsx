import BreadCrumb from 'app/_component/BreadCrumb';
import style from './page.module.css';

export default function Post() {
  return (
    <>
      <BreadCrumb />
      <div className={style.contents}>
        <main className={style.main_content}>
          <article className={style.detail}>
            <header>
              <h1 className={style.h1}>Text and Typography</h1>
            </header>
          </article>
          <div className={style.post_meta}>
            <span>
              Posted
              <time>Aug 8, 2019</time>
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
