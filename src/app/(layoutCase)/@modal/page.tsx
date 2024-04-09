'use client';

import { useSelector } from 'react-redux';
import { RootState } from 'store';
import style from './layout.module.css';

export default function Page() {
  const { searchPostFilterList } = useSelector(
    (state: RootState) => state.searchFilterList,
  );
  return (
    <div className={style.contents}>
      {searchPostFilterList.length > 0 ? (
        <>
          {searchPostFilterList.map((value) => {
            return <>{value.preview}</>;
          })}
        </>
      ) : null}
    </div>
  );
}
