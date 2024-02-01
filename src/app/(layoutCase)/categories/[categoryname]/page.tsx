'use client';

import Link from 'next/link';
import style from './page.module.css';

import PageHeading from 'app/_component/common/PageHeading';
import { Folder } from 'type/post';
import { useSelector } from 'react-redux';
import { RootState } from 'app/(layoutCase)/_component/store';
import { useEffect } from 'react';
import dayjs from 'dayjs';
require('dayjs/locale/en'); // 영어로 날짜 포맷을 사용하기 위해 영어 로케일을 추가

type Props = {
  params: { categoryname: string };
};

export default function ListbyCategory({ params }: Props) {
  const { postList } = useSelector((state: RootState) => state.postStore);
  const date = dayjs('2019-08-08');
  return (
    <article>
      <PageHeading pageTitle={params.categoryname} iconType />
      <ul className={style.ul_content}>
        {postList
          .filter((val) => val.folder === params.categoryname)
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          )
          .map((item, idx) => {
            return (
              <>
                <li className={style.category_item_list}>
                  <Link href={``} className={style.tit}>
                    {item.title}
                  </Link>
                  <span className={style.dash}></span>
                  <time className={style.text_muted}>
                    {dayjs(item.date).format('MMM D, YYYY')}
                  </time>
                </li>
              </>
            );
          })}
      </ul>
    </article>
  );
}
