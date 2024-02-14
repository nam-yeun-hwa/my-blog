'use client';

import Link from 'next/link';
import cx from 'classnames';
import style from './postNavigation.module.css';

import { IAlgorithmPost, IPost } from 'type/post';
import { useEffect, useState } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';

type Props = {
  postid: number;
  prePostTitle: IPost | IAlgorithmPost | undefined;
  nextPostTile: IPost | IAlgorithmPost | undefined;
  segment: string;
};

export default function PostNavigation({
  postid,
  prePostTitle,
  nextPostTile,
  segment,
}: Props) {
  const [preActive, setPreActive] = useState(false);
  const [nextActive, setNextActive] = useState(false);

  return (
    <div className="row">
      <nav className={style.post_navigation}>
        <Link
          className={cx(
            style.post_navgation_common,
            style.post_navigation_pre,
            !prePostTitle && style.post_not_cursor,
          )}
          href={`/${segment}/${postid - 1}`}
          aria-label="Older"
          onMouseEnter={() => setPreActive(true)}
          onMouseLeave={() => setPreActive(false)}
        >
          <p
            className={cx(
              style.post_navigation_text,
              prePostTitle && preActive && style.active_txt,
            )}
          >
            {prePostTitle?.title ?? '-'}
          </p>
        </Link>
        <Link
          className={cx(
            style.post_navgation_common,
            style.post_navigation_next,
            !nextPostTile && style.post_not_cursor,
          )}
          href={`/${segment}/${postid + 1}`}
          aria-label="Newer"
          onMouseEnter={() => setNextActive(true)}
          onMouseLeave={() => setNextActive(false)}
        >
          <p
            className={cx(
              style.post_navigation_text,
              nextPostTile && nextActive && style.active_txt,
            )}
          >
            {nextPostTile?.title ?? '-'}
          </p>
        </Link>
      </nav>
    </div>
  );
}
