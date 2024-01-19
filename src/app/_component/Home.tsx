'use client';

import Post from 'app/(layoutCase)/_component/Post';
import BreadCrumb from './common/BreadCrumb';
import style from './Home.module.css';
import { useContext, useEffect } from 'react';
import { PostContext } from 'app/(layoutCase)/_component/contexts/PostContextProvider';
import { totalPostlist } from 'data/db';
import { InView, useInView } from 'react-intersection-observer';
import RecentlyUpdated from './common/Panel';

export default function Home() {
  const { postList, setPostList, isFetching, setIsFetching } =
    useContext(PostContext);

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const fetchData = async () => {
    const lastId = postList.length ? postList[postList.length - 1].id : 0;
    const total = totalPostlist.length;
    const nextPage = lastId + 5 < total ? lastId + 5 : lastId + 5 + (total % 5);

    setPostList(postList.concat(totalPostlist.slice(lastId, nextPage)));

    await delay(500);
  };

  useEffect(() => {
    let hasNextPage = postList.length < totalPostlist.length;
    if (inView && !isFetching && hasNextPage) {
      setIsFetching(true);
      fetchData().then(() => {
        setIsFetching(false);
      });
    }
    // dataFetching();
  }, [inView, postList, isFetching]);

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
          <RecentlyUpdated />
        </aside>
      </div>
    </>
  );
}

// 참고 > 이전 useEffect
// useEffect(() => {
//   let lastId = postList[postList.length - 1].id;
//   let total = totalPostlist.length;
//   let hasNextPage = postList.length < totalPostlist.length;

//   if (inView && !isFetching && hasNextPage) {
//     setIsFetching(true);
//     setPostList(
//       postList.concat(
//         totalPostlist.slice(
//           lastId,
//           total - lastId > 5 ? lastId + 5 : lastId + 5 + (total % 5),
//         ),
//       ),
//     );
//     setTimeout(() => {
//       setIsFetching(false);
//     }, 1000);
//   } //inView
// }, [inView, postList, setPostList, isFetching, setIsFetching]);

// 참고 > 이전 useEffect
// useEffect(() => {
//   // 전체 포스트 리스트 totalPostlist의 값과 현재 화면에 렌더링 된 postList의 값을
//   // 비교하여 전체 리스트의 값을 넘지 않았을 경우에만 postList에 값을 추가 하도록 하며
//   // 리스트를 추가 해줄때 현재 렌더링된 리스트의 마지막 id 값을 기준으로 5개씩 화면에 추가
//   // 하도록 한다.
//   let hasNextPage = postList.length < totalPostlist.length;
//   if (inView && !isFetching && hasNextPage) dataFetching();
// }, [inView, postList, isFetching]);

// 참고 > 이전 dataFetching
// const dataFetching = async () => {
//   let lastId = postList[postList.length - 1].id || 0;
//   let total = totalPostlist.length;

//   setIsFetching(true);
//   setPostList(
//     postList.concat(
//       totalPostlist.slice(
//         lastId,
//         total - lastId > 5 ? lastId + 5 : lastId + 5 + (total % 5),
//       ),
//     ),
//   );

//   const result = await delay(500);
//   setIsFetching(false);
// };
