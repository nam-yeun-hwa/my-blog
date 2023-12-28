import Post from 'app/(layoutCase)/_component/Post';
import style from './page.module.css';

export default function posts() {
  return (
    <>
      <header>
        <div className="top_bar">
          <nav>
            <span>HOME</span>
          </nav>
          <search>
            <i></i>
            <input />
          </search>
        </div>
      </header>
      <div className={style.contents}>
        <main className={style.main_wrapper}>
          <div className="post-list">
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
