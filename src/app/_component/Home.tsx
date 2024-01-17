'use client';

import Post from 'app/(layoutCase)/_component/Post';
import BreadCrumb from './common/BreadCrumb';
import style from './Home.module.css';
import { useContext, useEffect } from 'react';
import { PostContext } from 'app/(layoutCase)/_component/contexts/PostContextProvider';
import { totalPostlist } from 'data/db';
import { InView, useInView } from 'react-intersection-observer';

export default function Home() {
  const { postList, setPostList } = useContext(PostContext);

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  // 전체 포스트 리스트 totalPostlist의 값과 현재 화면에 렌더링 된 postList의 값을
  // 비교하여 전체 리스트의 값을 넘지 않았을 경우에만 postList에 값을 추가 하도록 하며
  // 리스트를 추가 해줄때 현재 렌더링된 리스트의 마지막 id 값을 기준으로 5개씩 화면에 추가
  // 하도록 한다.
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
