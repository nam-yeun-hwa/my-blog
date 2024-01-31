'use client';
import Link from 'next/link';
import style from './layout.module.css';
import { useSelectedLayoutSegment } from 'next/navigation';
import Image from 'next/image';
import profileImg from '../../../public/profile1.jpg';
import cx from 'classnames';
import { ReactNode } from 'react';
import BreadCrumb from 'app/_component/common/BreadCrumb';
import Panel from 'app/_component/common/Panel';
import { Provider } from 'react-redux';
import { store } from 'app/(layoutCase)/_component/store/index';

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

function Layout({ children, modal }: Props) {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <aside id="sidebar" className={style.sidebar}>
        <header className={style.profile_wrapper}>
          <Link href={'/posts'}>
            <Image
              className={style.img}
              src={profileImg}
              alt="프로필 사진"
              width={112}
              height={112}
            />
          </Link>
          <h1 className={style.blog_name_txt}>my blog</h1>
          <p className={style.site_subtitle}>
            You can only earn as much as an ant does by working like an ant.
          </p>
        </header>
        <nav>
          <ul className={style.nav}>
            <li
              className={cx(
                style.nav_item,
                (segment === 'posts' || segment === null) && style.active,
              )}
            >
              <Link href={'/posts'} className={style.nav_link}>
                <i className={`fa-fw fas fa-home ${style.ico}`}></i>
                <span className={style.nav_txt}>HOME</span>
              </Link>
            </li>
            <li
              className={cx(
                style.nav_item,
                segment === 'categories' && style.active,
              )}
            >
              <Link className={style.nav_link} href={'/categories'}>
                <i className={`fa-fw fas fa-stream ${style.ico}`}></i>
                <span className={style.nav_txt}>CATEGORIES</span>
              </Link>
            </li>
            <li
              className={cx(style.nav_item, segment === 'tags' && style.active)}
            >
              <Link className={style.nav_link} href={'/tags'}>
                <i className={`fa-fw fas fa-tags ${style.ico}`}></i>
                <span className={style.nav_txt}>TAGS</span>
              </Link>
            </li>
            <li
              className={cx(
                style.nav_item,
                segment === 'archives' && style.active,
              )}
            >
              <Link className={style.nav_link} href={'/archives'}>
                <i className={`fa-fw fas fa-archive ${style.ico}`}></i>
                <span className={style.nav_txt}>ARCHIVES</span>
              </Link>
            </li>
            <li
              className={cx(
                style.nav_item,
                segment === 'algorithm' && style.active,
              )}
            >
              <Link className={style.nav_link} href={'/algorithm'}>
                <i className={`fa-solid fa-mug-saucer ${style.ico}`}></i>
                <span className={style.nav_txt}>CODING</span>
              </Link>
            </li>
            {/* <li
              className={cx(
                style.nav_item,
                segment === 'about' && style.active,
              )}
            >
              <Link className={style.nav_link} href={'/update'}>
                <i className={`fa-fw fas fa-info-circle ${style.ico}`}></i>
                <span className={style.nav_txt}>UPDATE</span>
              </Link>
            </li> */}
          </ul>
        </nav>
        <div className="sidebar-bottom"></div>
      </aside>
      <div className={style.main_wrapper}>
        <div className={style.container}>
          <BreadCrumb />
          <div className={style.contents}>
            <main className={style.inner_content}>
              <Provider store={store}>
                {children}
                {modal}
              </Provider>
            </main>
            <Panel />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
