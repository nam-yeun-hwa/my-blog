'use client';
import Link from 'next/link';
import style from './layout.module.css';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <aside id="sidebar" className={style.sidebar}>
        <header></header>
        <nav>
          <ul className={style.nav}>
            <li className={style.nav_item}>
              <Link className={style.nav_link} href={'http://www.naver.com'}>
                <i className={`fa-fw fas fa-home ${style.ico}`}></i>
                <span className={style.nav_txt}>HOME</span>
              </Link>
            </li>
            <li className={style.nav_item}>
              <Link className={style.nav_link} href={'http://www.naver.com'}>
                <i className={`fa-fw fas fa-archive ${style.ico}`}></i>
                <span className={style.nav_txt}>ARCHIVES</span>
              </Link>
            </li>
            <li className={style.nav_item}>
              <Link className={style.nav_link} href={'http://www.naver.com'}>
                <i className={`fa-fw fas fa-info-circle ${style.ico}`}></i>
                <span className={style.nav_txt}>ABOUT</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sidebar-bottom"></div>
      </aside>
      <div className="main-wrapper">
        {children}
        {modal}
      </div>
    </>
  );
}
