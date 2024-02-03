'use client';

import PageHeading from 'app/_component/common/PageHeading';
import style from './page.module.css';
import Link from 'next/link';
import { totalPostlist } from 'data/db';
import { useEffect } from 'react';
import dayjs from 'dayjs';

//데이타에서 사용된 년도
const year = new Set(
  totalPostlist.map((item) => new Date(item.date).getFullYear()),
);

//데이터를 년도별로 정리
const yearlyData = Array.from(year).map((year) => {
  return totalPostlist.filter((item) => {
    return new Date(item.date).getFullYear() === year;
  });
});

const sortedData = yearlyData.map((item) => {
  return item.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
});

export default function Archives() {
  // useEffect(() => {
  //   const yearArray = new Set(
  //     totalPostlist.map((item) => new Date(item.date).getFullYear()),
  //   );

  //   Array.from(yearArray).map((year) => {
  //     return totalPostlist.filter((item) => {
  //       return new Date(item.date).getFullYear() === year;
  //     });
  //   });
  // }, []);

  return (
    <article>
      <PageHeading pageTitle="Archives" />
      <div className={`${style.content} archives`}>
        {sortedData.map((array, idx) => {
          return (
            <>
              <time className={style.year}>{Array.from(year)[idx]}</time>
              <ul className={style.list_unstyled}>
                {array.map((item) => {
                  return (
                    <li key={item.id} className={style.list_item}>
                      <span className={style.day}>
                        {dayjs(item.date).format('DD')}
                      </span>
                      <span className={style.month}>
                        {dayjs(item.date).format('MMM')}
                      </span>
                      <Link className={style.list_link} href="">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          );
        })}
      </div>
    </article>
  );
}

{
  /* <li className={style.list_item}>
<span className={style.day}>1 1</span>
<span className={style.month}>Aug</span>
<Link className={style.list_link} href="">
  Customize the Favicon
</Link>
</li>
<li className={style.list_item}>
<span className={style.day}>09</span>
<span className={style.month}>Aug</span>
<Link className={style.list_link} href="">
  Getting Started
</Link>
</li>
<li className={style.list_item}>
<span className={style.day}>08</span>
<span className={style.month}>Aug</span>
<Link className={style.list_link} href="">
  Text and Typography
</Link>
</li> */
}
