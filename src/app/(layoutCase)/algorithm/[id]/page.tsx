import style from './page.module.css';
import Link from 'next/link';
import CodeComponentType from 'app/_component/detailPage/LanguageConsole';
import Prompts from 'app/_component/detailPage/Prompts';
import { ComponentType, IPost } from 'type/post';
import Footer from 'app/_component/common/Footer';
import Table from 'app/_component/detailPage/Table';
import StringDot from 'app/_component/detailPage/ListStyle';
import { algorithmPostlist } from 'data/algorithm_db';
import PostNavigation from 'app/_component/common/PostNavigation';

type Props = {
  params: { id: string };
};

export function generateStaticParams() {
  return algorithmPostlist.map((value) => ({ id: value.id.toString() }));
}

export default function AlgoritmPage({ params }: Props) {
  const currentPostId = parseInt(params.id);
  const prePostTitle = algorithmPostlist.find(
    (value) => value.id === currentPostId - 1,
  );
  const nextPostTile = algorithmPostlist.find(
    (value) => value.id === currentPostId + 1,
  );

  const { id, title, date, folder, post } =
    algorithmPostlist[currentPostId - 1];

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
      <PostNavigation
        postid={currentPostId}
        prePostTitle={prePostTitle}
        nextPostTile={nextPostTile}
        segment={'algorithm'}
      />
      <Footer />
    </>
  );
}
