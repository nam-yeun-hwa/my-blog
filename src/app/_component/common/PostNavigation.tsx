'use client';

import Link from 'next/link';
import cx from 'classnames';
import style from './postNavigation.module.css';
import { useSelectedLayoutSegments } from 'next/navigation';
import { totalPostlist } from 'data/post_db';
import { useEffect, useState } from 'react';

type Props = {
  postid: string;
};

export default function PostNavigation({ postid }: Props) {
  const [preActive, setPreActive] = useState(false);
  const [nextActive, setNextActive] = useState(false);
  const segment = useSelectedLayoutSegments();

  const currentPostid = parseInt(postid);
  const hasPreValue = totalPostlist.find(
    (value) => value.id === currentPostid - 1,
  );
  const hasNextValue = totalPostlist.find(
    (value) => value.id === currentPostid + 1,
  );

  return (
    <div className="row">
      <nav className={style.post_navigation}>
        <Link
          className={cx(
            style.post_navgation_common,
            style.post_navigation_pre,
            !hasPreValue && style.post_not_cursor,
          )}
          href={`/posts/${currentPostid - 1}`}
          aria-label="Older"
          onMouseEnter={() => setPreActive(true)}
          onMouseLeave={() => setPreActive(false)}
        >
          <p
            className={cx(
              style.post_navigation_text,
              hasPreValue && preActive && style.active_txt,
            )}
          >
            {hasPreValue?.title ?? '-'}
          </p>
        </Link>
        <Link
          className={cx(
            style.post_navgation_common,
            style.post_navigation_next,
            !hasNextValue && style.post_not_cursor,
          )}
          href={`/posts/${currentPostid + 1}`}
          aria-label="Newer"
          onMouseEnter={() => setNextActive(true)}
          onMouseLeave={() => setNextActive(false)}
        >
          <p
            className={cx(
              style.post_navigation_text,
              hasNextValue && nextActive && style.active_txt,
            )}
          >
            {hasNextValue?.title ?? '-'}
          </p>
        </Link>
      </nav>
    </div>
  );
}
