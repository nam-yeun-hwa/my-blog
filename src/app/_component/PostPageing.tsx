'use client';

import Post from 'app/_component/Post';
import style from './postPageing.module.css';
import { useEffect } from 'react';

import { sortedTotalPostlist, totalPostlist } from 'data/post_db';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import {
  rdxSetPostData,
  rdxSetFetching,
} from 'app/(layoutCase)/_component/store/post';
import { RootState } from 'app/(layoutCase)/_component/store';

export default function PostPageing() {
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
    const lastId = postList.length ? postList.length : 0;
    const total = sortedTotalPostlist.length;
    const nextPage = lastId + 5 < total ? lastId + 5 : lastId + 5 + (total % 5);

    let updateData = postList.concat(
      sortedTotalPostlist.slice(lastId, nextPage),
    );
    dispatch(rdxSetPostData(updateData));
    await delay(500);
  };

  /**
   * @description inView에 따라 게시물을 업데이트 할수 있도록 로드 해준다.
   */
  useEffect(() => {
    let hasNextPage = postList.length < sortedTotalPostlist.length;
    if (inView && !isFetching && hasNextPage) {
      dispatch(rdxSetFetching(true));
      fetchData().then(() => {
        dispatch(rdxSetFetching(false));
      });
    }
  }, [inView, postList, isFetching]);

  return (
    <>
      <div className={style.post_list}>
        {postList.map((value, idx) => {
          return <Post key={value.id} post={value} />;
        })}
        <div ref={ref} style={{ height: '10px' }}></div>
      </div>
    </>
  );
}
