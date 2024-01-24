'use client';

import BreadCrumb from 'app/_component/common/BreadCrumb';
import style from './page.module.css';
import Link from 'next/link';
import CodeComponentType from 'app/_component/detailPage/LanguageConsole';
import Prompts from 'app/_component/detailPage/Prompts';
import { IPost } from 'type/post';
import { totalPostlist } from 'data/db';
import Footer from 'app/_component/common/Footer';
import Panel from 'app/_component/common/Panel';

type Props = {
  params: { postid: string };
  detail: IPost;
};

// 엔터 값 검색 정규 표현식
// var enterRegex = /^.*$/gm;

export default function Post({ params, detail }: Props) {
  const { id, title, date, folder, preview, post } =
    totalPostlist[parseInt(params.postid) - 1];

  return (
    <>
      <BreadCrumb />
      <div className={style.contents}>
        <main className={style.main_wrapper}>
          <article className={style.detail}>
            <header>
              <h1 className={style.h1}>{title}</h1>
            </header>
          </article>
          <div className={style.post_meta}>
            <span>
              Posted
              <time className={style.time}> Aug 8, 2019</time>
            </span>
            <span className={style.update}>
              Updated
              <time className={style.time}> Sep 23, 2023</time>
            </span>
          </div>
          <div>
            <span className={style.post_meta}>
              By{' '}
              <em>
                <Link
                  href="https://github.com/nam-yeun-hwa"
                  className={style.author}
                >
                  Carys Chung
                </Link>
              </em>
            </span>
          </div>

          {post.map((value, idx) => {
            if (value.type === 'emphasis')
              return <Prompts key={idx} type="warning" detail={value.value} />;
            if (value.type === 'code')
              return <CodeComponentType key={idx} code={value.value} />;
            return (
              <div
                key={idx}
                className={style.content}
                dangerouslySetInnerHTML={{ __html: value.value }}
              />
            );
          })}
          <div className="row">
            <nav className={style.post_navigation}>
              <Link
                className={style.post_navigation_pre}
                href=""
                aria-label="Older"
              >
                <p className={style.post_navigation_text}>이전 게시물</p>
              </Link>
              <Link
                className={style.post_navigation_next}
                href=""
                aria-label="Newer"
              >
                <p className={style.post_navigation_text}>다음 게시물</p>
              </Link>
            </nav>
          </div>
          <Footer />
        </main>
        <Panel />
      </div>
    </>
  );
}
