'use client';

import Link from 'next/link';
import style from './page.module.css';

import PageHeading from 'app/_component/common/PageHeading';
import { Folder } from 'type/post';

type Props = {
  params: { categoryname: string };
};

export default function categoryname({ params }: Props) {
  return (
    <article>
      <PageHeading pageTitle={params.categoryname} iconType={true} />
      <ul className={style.ul_content}>
        <li className={style.category_item_list}>
          <Link href={``} className={style.tit}>
            Text and Typography
          </Link>
          <span className={style.dash}></span>
          <time className={style.text_muted}>Aug 8, 2019</time>
        </li>
      </ul>
    </article>
  );
}
