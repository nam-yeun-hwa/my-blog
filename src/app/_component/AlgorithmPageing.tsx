'use client';

import { useEffect } from 'react';
import { RootState, store } from 'app/(layoutCase)/_component/store/index';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import BreadCrumb from 'app/_component/common/BreadCrumb';
import { algorithmPostlist } from 'data/db';
import style from 'app/(layoutCase)/_component/post.module.css';
import Panel from 'app/_component/common/Panel';
import Post from 'app/(layoutCase)/_component/Post';
import {
  rdxSetAlgorithmData,
  rdxSetFetching,
} from 'app/(layoutCase)/_component/store/algorithm/index';

export default function Algorithm() {
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  const dispatch = useDispatch();
  const { postList, isFetching } = useSelector(
    (state: RootState) => state.postStore,
  );

  /**
   * @function delay
   * @param ms 초
   * @returns 무한스크롤 리스트 로드 delay
   */
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  /**
   * @function fetchData
   * @description 새 게시물 업데이트
   */
  const fetchData = async () => {
    const lastId = postList.length ? postList[postList.length - 1].id : 0;
    const total = algorithmPostlist.length;
    const nextPage = lastId + 5 < total ? lastId + 5 : lastId + 5 + (total % 5);

    let updateData = postList.concat(algorithmPostlist.slice(lastId, nextPage));
    dispatch(rdxSetAlgorithmData(updateData));
    await delay(500);
  };

  /**
   * @description inView에 따라 게시물을 업데이트 할수 있도록 로드 해준다.
   */
  useEffect(() => {
    let hasNextPage = postList.length < algorithmPostlist.length;
    if (inView && !isFetching && hasNextPage) {
      dispatch(rdxSetFetching(true));
      fetchData().then(() => {
        dispatch(rdxSetFetching(false));
      });
    }
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
        <Panel />
      </div>
    </>
  );
}

//992px
//1200px
//일때 다르다
