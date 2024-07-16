import style from './postDetail.module.css';
import CodeComponentType from 'app/_component/detailPage/LanguageConsole';
import Prompts from 'app/_component/detailPage/Prompts';
import { ComponentType, IPost } from 'type/post';
import { sortedTotalPostlist } from 'data/post_db';
import Footer from 'app/_component/common/Footer';
import Table from 'app/_component/detailPage/Table';
import StringDot from 'app/_component/detailPage/ListStyle';
import HeadingString from 'app/_component/detailPage/Heading';
import PostNavigation from './PostNavigation';

import PostUserInfo from './PostUserInfo';
import KeywordWord from '../detailPage/Keyword';

type Props = {
  postid: string;
};

export default function PostDetail({ postid }: Props) {
  const currentPostId = parseInt(postid);
  const prePostTitle = sortedTotalPostlist.find((value) => {
    return value.id === currentPostId - 1;
  }) as IPost;
  const nextPostTile = sortedTotalPostlist.find((value) => {
    return value.id === currentPostId + 1;
  }) as IPost;
  const { title, post, date } = sortedTotalPostlist.find((value) => {
    return value.id === currentPostId;
  }) as IPost;
  // createdAt
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
        if(value.type === ComponentType.KEYWORD){
          return <KeywordWord key={idx} keyword={value.value}/>
        }
        if (
          value.type === ComponentType.H2 ||
          value.type === ComponentType.H3 ||
          value.type === ComponentType.H4
        ) {
          return (
            <HeadingString
              key={idx}
              headingType={value.type}
              headingValue={value.value}
            />
          );
        }
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
        prePostTitle={nextPostTile}
        nextPostTile={prePostTitle}
        segment={'posts'}
      />
      <Footer />
    </>
  );
}
