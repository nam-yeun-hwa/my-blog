'use client';

import Post from 'app/(layoutCase)/_component/Post';
import BreadCrumb from './common/BreadCrumb';
import style from './Home.module.css';

import { useContext, useEffect } from 'react';
import { PostContext } from 'app/(layoutCase)/_component/contexts/PostContextProvider';
import { totalPostlist } from 'data/db';

import { InView, useInView } from 'react-intersection-observer';
import { Folder, IPost } from 'type/post';

export default function Home() {
  const { postList, setPostList } = useContext(PostContext);

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView && postList.length < totalPostlist.length) {
      setPostList(
        postList.concat(
          totalPostlist.slice(
            postList[postList.length - 1].id,
            totalPostlist.length - postList[postList.length - 1].id > 5
              ? postList[postList.length - 1].id + 5
              : postList[postList.length - 1].id +
                  (totalPostlist.length - postList.length),
          ),
        ),
      );
    } //inView

    console.log(postList);
  }, [inView, postList, setPostList]);

  return (
    <>
      <BreadCrumb />
      <div className={style.contents}>
        <main className={style.main_wrapper}>
          <div className={style.post_list}>
            {postList.map((value, idx) => {
              return <Post key={value.id} post={value} />;
            })}
            <div ref={ref} style={{ height: '10px' }}></div>
          </div>
        </main>
        <aside className={style.panel_wrapper}>
          <div style={{ width: '100%' }}>flasjf akjf l</div>
        </aside>
      </div>
    </>
  );
}
