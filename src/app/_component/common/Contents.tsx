import style from './contents.module.css';
import BreadCrumb from 'app/_component/common/BreadCrumb';
import Panel from 'app/_component/common/Panel';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import cx from 'classnames';

type Props = {
  children: ReactNode;
  modal: ReactNode;
  moveToggle: () => void;
};

export default function Contents({ children, modal, moveToggle }: Props) {
  const { searchPostFilterList } = useSelector(
    (state: RootState) => state.searchFilterList,
  );

  return (
    <div className={style.container}>
      <BreadCrumb moveToggle={moveToggle} />
      {searchPostFilterList.length > 0 && modal}
      <div
        className={cx(
          style.contents,
          searchPostFilterList.length > 0 && style.hidden,
        )}
      >
        <main className={style.inner_content}>{children}</main>
        <Panel />
      </div>
    </div>
  );
}
