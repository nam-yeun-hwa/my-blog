'use client';

import { useEffect, useRef, useState } from 'react';
import style from './BreadCrumb.module.css';
import cx from 'classnames';

// type Props = {
//     searchParams: { q: string, f?: string, pf?: string };
//   }

export default function BreadCrumb() {
  const [isFocused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <header className={style.topbar_wrapper}>
      <div className={style.top_bar}>
        <nav className={style.breadcrumb}>
          <span>Home</span>
        </nav>
        <search className={cx(style.search, isFocused && style.search_active)}>
          <i className={`fas fa-search fa-fw ${style.search_ico}`}></i>
          <input
            ref={inputRef}
            className={cx(style.search_input, isFocused && style.search_input_active)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Search..."
            autoComplete="off"
          />
        </search>
      </div>
    </header>
  );
}
