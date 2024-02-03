import PageHeading from 'app/_component/common/PageHeading';
import style from './page.module.css';
import Link from 'next/link';
import { totalPostlist } from 'data/db';
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

//년도별 데이터 날짜 오름차순 정렬
const sortedData = yearlyData.map((item) => {
  return item.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
});

export default function Archives() {
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
