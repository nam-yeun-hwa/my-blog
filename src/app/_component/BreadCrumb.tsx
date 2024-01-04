'use client';

import { useRef, useState } from 'react';
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

/* "Breadcrumb"은 길을 잃지 않도록 도와주는 나침반과 같은 역할을 하는 정보를 나타냅니다. 
  특히 웹 디자인 및 사용자 인터페이스에서 "breadcrumb"은 사용자가 현재 위치한 페이지의 경로를 
  시각적으로 표시하는 일련의 링크입니다. 이는 사용자가 웹 사이트 내에서 어디에 있는지 이해하고 
  쉽게 이동할 수 있도록 돕는 데 사용됩니다.
  
  예를 들어, 다음과 같은 Breadcrumb가 있다고 가정해 봅시다:
  Home > Products > Electronics > Smartphones */
