import style from './page.module.css';
import CodeComponentType from 'app/_component/detailPage/LanguageConsole';
import Prompts from 'app/_component/detailPage/Prompts';
import { ComponentType, IPost } from 'type/post';
import Footer from 'app/_component/common/Footer';
import Table from 'app/_component/detailPage/Table';
import StringDot from 'app/_component/detailPage/ListStyle';
import { algorithmPostlist } from 'data/algorithm_db';
import PostNavigation from 'app/_component/common/PostNavigation';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PostUserInfo from 'app/_component/common/PostUserInfo';

dayjs.locale('ko');
dayjs.extend(relativeTime);

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
      <PostUserInfo title={title} date={date} />

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
