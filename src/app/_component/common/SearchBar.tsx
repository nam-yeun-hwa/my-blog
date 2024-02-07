'use client';
import { useRef, useState } from 'react';
import style from './searchBar.module.css';
import cx from 'classnames';

export default function SearchBar() {
  const [isFocused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };
  return (
    <search className={cx(style.search, isFocused && style.search_active)}>
      <i className={`fas fa-search fa-fw ${style.search_ico}`}></i>
      <input
        id="search"
        ref={inputRef}
        className={cx(
          style.search_input,
          isFocused && style.search_input_active,
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Search..."
        autoComplete="off"
      />
    </search>
  );
}
