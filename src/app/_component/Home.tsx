import Post from 'app/(layoutCase)/_component/\bPost';
import BreadCrumb from './BreadCrumb';
import style from './Home.module.css';

export default function Home() {
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
