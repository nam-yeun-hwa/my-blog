'use client';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import style from './searchBar.module.css';
import cx from 'classnames';
import { totalPostlist } from 'data/post_db';
import { useDispatch } from 'react-redux';
import { rdxSearchPostList } from 'store/searchFilterlist';

export default function SearchBar() {
  const [isFocused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('브라우저');
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const filteredItems = totalPostlist.filter((postList) =>
      postList.post.some((postValue) => {
        return postValue.value
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      }),
    );

    console.log(
      '검색한 문자열',
      '[',
      searchQuery,
      ']',
      '찾은 포스트',
      filteredItems,
    );

    dispatch(rdxSearchPostList(filteredItems));
  }, [searchQuery, dispatch]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
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
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        autoComplete="off"
      />
    </search>
  );
}
