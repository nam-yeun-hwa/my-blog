'use client';

import PageHeading from 'app/_component/common/PageHeading';
import style from './page.module.css';
import Link from 'next/link';
import cx from 'classnames';
import CategoryItem from 'app/_component/CategoryItem';
import { totalPostlist } from 'data/post_db';
import { useState } from 'react';
import { Folder } from 'type/post';

const categoryFolder = Object.values(Folder);
const categoryCnt = categoryFolder.reduce((acc, category) => {
  let value = totalPostlist.some((item) => item.folder === category);
  return acc + (value ? 1 : 0);
}, 0);

export default function Categories() {
  const [toggle, setToggle] = useState(false);

  return (
    <article>
      <PageHeading pageTitle="Categories" />
      <div className={style.content}>
        <div className={cx(style.card_categories)}>
          <div
            className={cx(
              style.card_header,
              !toggle && style.card_categories_hide_border_bottom,
            )}
          >
            <span className={style.card_text}>
              <i
                className={`far fa-folder-open fa-fw ${style.ico_category}`}
              ></i>
              <Link className={style.categories_tit} href={``}>
                Blogging
              </Link>
              <span className={style.text_muted}>
                {`${categoryCnt} categories , ${totalPostlist.length} posts`}{' '}
              </span>
            </span>
            <button
              className={style.category_trigger}
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <i className={`fas fa-fw fa-angle-down ${style.ico_trigger}`}></i>
            </button>
          </div>
          <div
            style={{ height: `${categoryCnt * 45}px` }}
            className={cx(style.collapse, toggle && style.collapse_ani)}
          >
            <ul className={style.ul_list_group}>
              {/* {totalPostlist.map((value, idx) => {
                return (
                  <CategoryItem
                    key={idx}
                    category={value.folder}
                    count={
                      totalPostlist.filter(
                        (item) => item.folder === value.folder,
                      ).length
                    }
                  />
                );
              })} */}
              {categoryFolder.map((value, idx) => {
                let statusNum = totalPostlist.filter(
                  (item) => item.folder === value,
                ).length;
                return (
                  statusNum > 0 && (
                    <CategoryItem
                      key={idx}
                      category={value}
                      count={statusNum}
                    />
                  )
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
