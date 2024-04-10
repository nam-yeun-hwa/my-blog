'use client';
import Link from 'next/link';
import style from './layout.module.css';
import { useSelectedLayoutSegment } from 'next/navigation';
import cx from 'classnames';
import { ReactNode, useEffect, useState } from 'react';
import BreadCrumb from 'app/_component/common/BreadCrumb';
import Panel from 'app/_component/common/Panel';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from 'store/index';
import ImageLoader from 'app/_component/common/ImageLoader';
import { MOBILE_WIDTH } from 'app/_component/constant/constant';
import useWindowSize from 'hook/useWindowSize';
import SideMenu from 'app/_component/common/SideMenu';

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

function Layout({ children, modal }: Props) {
  const [onToggle, setOnToggle] = useState(false);
  const windowSize = useWindowSize();

  /**
   * @function moveToggle
   * @description 모바일사이즈일때 sideMenu 안으로 숨기기
   */
  const moveToggle = () => {
    if (
      windowSize.width &&
      windowSize.width <= MOBILE_WIDTH.MOBILE_APPLY_SIZE
    ) {
      setOnToggle(!onToggle);
    }
  };

  return (
    <>
      <SideMenu onToggle={onToggle} moveToggle={moveToggle} />

      <Provider store={store}>
        <div className={cx(style.main_wrapper, onToggle && style.main_move)}>
          <div className={style.container}>
            <BreadCrumb moveToggle={moveToggle} />
            {modal}
            <div className={style.contents}>
              <main className={style.inner_content}>{children}</main>
              <Panel />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default Layout;
