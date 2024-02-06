import { totalPostlist } from 'data/post_db';
import style from './page.module.css';
import PageHeading from 'app/_component/common/PageHeading';
import Link from 'next/link';
import dayjs from 'dayjs';
require('dayjs/locale/en');

type Props = {
  params: { tagname: string };
};

export default function ListbyTag({ params }: Props) {
  return (
    <article>
      <PageHeading pageTitle={params.tagname} iconType />
      <ul className={style.ul_content}>
        {totalPostlist
          .filter((value) => {
            return value.tag?.includes(params.tagname);
          })
          .map((item) => {
            return (
              <li key={item.id} className={style.category_item_list}>
                <Link
                  href={`/categories/${params.tagname}/${item.id}`}
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
