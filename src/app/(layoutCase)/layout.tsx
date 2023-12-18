import Link from 'next/link';
import style from './layout.module.css';

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
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
