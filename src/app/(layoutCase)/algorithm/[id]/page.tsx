'use client';

import BreadCrumb from 'app/_component/common/BreadCrumb';
import style from './page.module.css';
import Link from 'next/link';
import CodeComponentType from 'app/_component/detailPage/LanguageConsole';
import Prompts from 'app/_component/detailPage/Prompts';
import { ComponentType, IPost } from 'type/post';
import { algorithmPostlist } from 'data/db';
import Footer from 'app/_component/common/Footer';
import Panel from 'app/_component/common/Panel';
import Table from 'app/_component/detailPage/Table';
import StringDot from 'app/_component/detailPage/ListStyle';

type Props = {
  params: { id: string };
  detail: IPost;
};

export default function AlgoritmPage({ params, detail }: Props) {
  const { id, title, date, folder, post } =
    algorithmPostlist[parseInt(params.id) - 1];

  return (
    <>
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
        if (value.type === ComponentType.EMPHASIS)
          return <Prompts key={idx} type="warning" detail={value.value} />;
        if (value.type === ComponentType.CODE)
          return <CodeComponentType key={idx} code={value.value} />;
        if (value.type === ComponentType.TABLE)
          return <Table key={idx} table={value.value} />;
        if (value.type === ComponentType.STRINGLIST)
          return <StringDot key={idx} list={value.value} />;
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
    </>
  );
}
