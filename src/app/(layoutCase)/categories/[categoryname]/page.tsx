'use client';

import Link from 'next/link';
import style from './page.module.css';
import PageHeading from 'app/_component/common/PageHeading';
import dayjs from 'dayjs';
import { totalPostlist } from 'data/post_db';
require('dayjs/locale/en'); // 영어로 날짜 포맷을 사용하기 위해 영어 로케일을 추가

type Props = {
  params: { categoryname: string };
};

export default function ListbyCategory({ params }: Props) {
  return (
    <article>
      <PageHeading pageTitle={params.categoryname} iconType />
      <ul className={style.ul_content}>
        {totalPostlist
          .filter((val) => val.folder === params.categoryname)
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
          )
          .map((item) => {
            return (
              <li key={item.id} className={style.category_item_list}>
                <Link
                  href={`/categories/${params.categoryname}/${item.id}`}
                  className={style.tit}
                >
                  {item.title}
                </Link>
                <span className={style.dash}></span>
                <time className={style.text_muted}>
                  {dayjs(item.date).format('MMM D, YYYY')}
                </time>
              </li>
            );
          })}
      </ul>
    </article>
  );
}
