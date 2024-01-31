'use client';

import { useEffect, useState } from 'react';
import PageHeading from 'app/_component/common/PageHeading';
import style from './page.module.css';
import Link from 'next/link';
import cx from 'classnames';
import CategoryItem from 'app/_component/CategoryItem';
import { useSelector } from 'react-redux';
import { RootState } from '../_component/store';

export default function Categories() {
  const [toggle, setToggle] = useState(false);
  const [folderList, setFolderList] = useState<Array<string>>([]);

  const { postList } = useSelector((state: RootState) => state.postStore);

  useEffect(() => {
    //폴더리스트 가져오기
    const tempFolderList: Array<string> = Array.from(
      new Set<string>(postList.map((item) => item.folder)),
    );
    setFolderList(tempFolderList);
  }, [postList]);

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
                {`${folderList.length} categories , ${postList.length} posts`}{' '}
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
            style={{ height: `${folderList.length * 45}px` }}
            className={cx(style.collapse, toggle && style.collapse_ani)}
          >
            <ul className={style.ul_list_group}>
              {folderList.map((value, idx) => {
                return (
                  <CategoryItem
                    key={idx}
                    category={value}
                    count={
                      postList.filter((item) => item.folder === value).length
                    }
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
