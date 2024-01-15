'use client';

import Post from 'app/(layoutCase)/_component/Post';
import BreadCrumb from './common/BreadCrumb';
import style from './Home.module.css';

import { useContext, useEffect } from 'react';
import { PostContext } from 'app/(layoutCase)/_component/contexts/PostContextProvider';

export default function Home() {
  const { postList } = useContext(PostContext);

  return (
    <>
      <BreadCrumb />
      <div className={style.contents}>
        <main className={style.main_wrapper}>
          <div className={style.post_list}>
            {postList.map((value, idx) => {
              return <Post key={idx} post_id={1} />;
            })}
          </div>
        </main>
        <aside className={style.panel_wrapper}>
          <div style={{ width: '100%' }}>flasjf akjf l</div>
        </aside>
      </div>
    </>
  );
}
