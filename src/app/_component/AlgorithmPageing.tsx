'use client';

import { useEffect } from 'react';
import { RootState, store } from 'app/(layoutCase)/_component/store/index';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import BreadCrumb from 'app/_component/common/BreadCrumb';
import { algorithmPostlist } from 'data/db';
import style from './postPageing.module.css';
import Panel from 'app/_component/common/Panel';
import Post from 'app/_component/Post';
import {
  rdxSetAlgorithmData,
  rdxSetFetching,
} from 'app/(layoutCase)/_component/store/algorithm/index';
import AlgorithmPost from 'app/_component/AlgorithmPost';

export default function AlgorithmPageing() {
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  const dispatch = useDispatch();
  const { algorithmList, isFetching } = useSelector(
    (state: RootState) => state.algorithmStore,
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
    const lastId = algorithmList.length
      ? algorithmList[algorithmList.length - 1].id
      : 0;
    const total = algorithmPostlist.length;
    const nextPage =
      lastId + 10 < total ? lastId + 10 : lastId + 10 + (total % 10);

    let updateData = algorithmList.concat(
      algorithmPostlist.slice(lastId, nextPage),
    );
    dispatch(rdxSetAlgorithmData(updateData));
    await delay(500);
  };

  /**
   * @description inView에 따라 게시물을 업데이트 할수 있도록 로드 해준다.
   */
  useEffect(() => {
    let hasNextPage = algorithmList.length < algorithmPostlist.length;
    if (inView && !isFetching && hasNextPage) {
      dispatch(rdxSetFetching(true));
      fetchData().then(() => {
        dispatch(rdxSetFetching(false));
      });
    }
  }, [inView, algorithmList, isFetching]);
  return (
    <>
      <div className={style.post_list}>
        {algorithmList.map((value, idx) => {
          return <AlgorithmPost key={value.id} post={value} />;
        })}
        <div ref={ref} style={{ height: '10px' }}></div>
      </div>
    </>
  );
}

//992px
//1200px
//일때 다르다
