'use client';
import Link from 'next/link';
import style from './layout.module.css';
import { useSelectedLayoutSegment } from 'next/navigation';
import Image from 'next/image';
import profileImg from '../../../public/profile.jpeg';
import cx from 'classnames';

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
        <header className={style.profile_wrapper}>
          <Link href={'/posts'}>
            <Image
              className={style.img}
              src={profileImg}
              alt="프로필 사진"
              width={112}
              height={112}
              layout="cover"
            />
          </Link>
          <h1 className={style.blog_name_txt}>my blog</h1>
          <p className={style.site_subtitle}>A text-focused hellow theme</p>
        </header>
        <nav>
          <ul className={style.nav}>
            <li className={cx(style.nav_item, segment === 'posts' && style.active)}>
              <Link className={style.nav_link} href={'/posts'}>
                <i className={`fa-fw fas fa-home ${style.ico}`}></i>
                <span className={style.nav_txt}>HOME</span>
              </Link>
            </li>
            <li className={cx(style.nav_item, segment === 'categories' && style.active)}>
              <Link className={style.nav_link} href={'/categories'}>
                <i className={`fa-fw fas fa-stream ${style.ico}`}></i>
                <span className={style.nav_txt}>CATEGORIES</span>
              </Link>
            </li>
            <li className={cx(style.nav_item, segment === 'tags' && style.active)}>
              <Link className={style.nav_link} href={'/tags'}>
                <i className={`fa-fw fas fa-tags ${style.ico}`}></i>
                <span className={style.nav_txt}>TAGS</span>
              </Link>
            </li>
            <li className={cx(style.nav_item, segment === 'archives' && style.active)}>
              <Link className={style.nav_link} href={'/archives'}>
                <i className={`fa-fw fas fa-archive ${style.ico}`}></i>
                <span className={style.nav_txt}>ARCHIVES</span>
              </Link>
            </li>
            <li className={cx(style.nav_item, segment === 'about' && style.active)}>
              <Link className={style.nav_link} href={'/about'}>
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
