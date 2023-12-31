import Post from 'app/(layoutCase)/_component/Post';
import style from './page.module.css';

export default function posts() {
  return (
    <>
      <header className={style.topbar_wrapper}>
        <div className={style.top_bar}>
          <nav className={style.breadcrumb}>
            <span>Home</span>
          </nav>
          <search className={style.search}>
            <i className={`fas fa-search fa-fw ${style.search_ico}`}></i>
            <input className={style.search_input} placeholder="Search..." autoComplete="off" />
          </search>
        </div>
      </header>
      <div className={style.contents}>
        <main className={style.main_wrapper}>
          <div className={style.post_list}>
            <Post />
          </div>
        </main>
        <aside className={style.panel_wrapper}>
          <div style={{ width: '100%' }}>flasjf akjf l</div>
        </aside>
      </div>
    </>
  );
}

//992px
//1200px
//일때 다르다
