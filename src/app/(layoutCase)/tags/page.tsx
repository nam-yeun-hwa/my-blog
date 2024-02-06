'use client';

import PageHeading from 'app/_component/common/PageHeading';
import style from './page.module.css';
import Link from 'next/link';
import { totalPostlist } from 'data/post_db';
import { useEffect } from 'react';

//totalPostlist의 태그들 배열로 반환
const tagArray = new Map();

totalPostlist.forEach(({ tag }) => {
  tag?.forEach((item) => {
    if (tagArray.has(item)) {
      tagArray.set(item, tagArray.get(item) + 1);
    } else {
      tagArray.set(item, 1);
    }
  });
}, []);

export default function Tags() {
  return (
    <article>
      <PageHeading pageTitle="Tags" />
      <div className="content">
        <div className={style.tag_container}>
          {Array.from(tagArray).map(([value, count], idx) => {
            return (
              <div key={idx} className="tag_item">
                <Link className={style.tag_item_link} href="">
                  {value}
                  <span className={style.text_muted}>{count}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
