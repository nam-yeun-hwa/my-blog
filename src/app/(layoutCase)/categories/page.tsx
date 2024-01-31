'use client';

import { useState } from 'react';
import PageHeading from 'app/_component/common/PageHeading';
import style from './page.module.css';
import Link from 'next/link';
import cx from 'classnames';

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
              toggle && style.card_categories_border,
              toggle && style.card_categories_hide_border_bottom,
            )}
          >
            <span className={style.card_text}>
              <i
                className={`far fa-folder-open fa-fw ${style.ico_category}`}
              ></i>
              <Link className={style.categories_tit} href={``}>
                Blogging
              </Link>
              <span className={style.text_muted}> 2 categories , 4 posts </span>
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
          <div className={cx(style.collapse, toggle && style.collapse_ani)}>
            <ul className={style.ul_list_group}>
              <li className={style.list_group_item}>
                <i className={`far fa-folder fa-fw ${style.ico_lsit}`}></i>
                <Link className={style.categories_tit} href={``}>
                  Demo
                </Link>
                <span className={style.text_muted}> 1 post </span>
              </li>
              <li className={style.list_group_item}>
                <i className={`far fa-folder fa-fw ${style.ico_lsit}`}></i>
                <Link className={style.categories_tit} href={``}>
                  Demo
                </Link>
                <span className={style.text_muted}> 1 post </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
