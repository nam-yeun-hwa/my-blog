import Post from 'app/(layoutCase)/_component/Post';
import style from './page.module.css';
import BreadCrumb from 'app/_component/BreadCrumb';

export default function posts() {
  return (
    <>
      <BreadCrumb />
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
