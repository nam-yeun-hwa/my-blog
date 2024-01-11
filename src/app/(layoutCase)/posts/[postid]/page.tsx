'use client';

import BreadCrumb from 'app/_component/common/BreadCrumb';
import style from './page.module.css';
import Link from 'next/link';
import CodeComponentType from 'app/_component/detailContent/LanguageConsole';
import Prompts from 'app/_component/detailContent/Prompts';
import { useRouter } from 'next/router';

type Props = {
  detail: string;
};

// 엔터 값 검색 정규 표현식
var enterRegex = /^.*$/gm;

const inputString =
  'sameData에 기존의 data를 대입하고 text 값을 수정 했습니다. 비록 새로운 이름을 선언 하긴 했지만 sameData와 data는 똑같은 객체를 가리키고 있습니다. <br /><br /> 따라서 sameData.text 값을 바꾸면 당연히 data.text 값 또한 바뀌게 됩니다.<br />sameData와 data는 완전히 일치하는 객채이기 때문에 이를 비교하면 결과는 true 입니다. <br /> <br />\n```Prompts ajdklfasjf lak ```\nsameData에 기존의 data를 대입하고 text 값을 수정 했습니다.';

const matches = inputString.match(enterRegex);

export default function Post({ detail }: Props) {
  // const { query } = useRouter();

  // 찾은 엔터 값들의 배열 결과 출력
  console.log(matches);

  return (
    <>
      <BreadCrumb />
      <div className={style.contents}>
        <main className={style.main_wrapper}>
          <article className={style.detail}>
            <header>
              <h1 className={style.h1}>불변성</h1>
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
                  nyh
                </Link>
              </em>
            </span>
          </div>
          {matches?.map((value, idx) => {
            if (value.indexOf('Prompts') > -1)
              return <Prompts key={idx} type="warning" detail="dndndn." />;
            if (value.indexOf('shell') > -1)
              return (
                <CodeComponentType
                  key={idx}
                  code={`const data = { id:1, text:'안녕하세요'};
const sameData = data;
sameData.text = '안녕하세요';
console.log(sameData === data); // true
`}
                />
              );
            return (
              <div
                key={idx}
                className={style.content}
                dangerouslySetInnerHTML={{ __html: value }}
              />
            );
          })}
          {/* <Prompts
            type="warning"
            detail="객체의 특정 프로퍼티만 변경하는 작업을 수행하면 리액트에서는 변경이
            일어나지 않았다고 인식하여 리렌더링이 일어나지 않습니다."
          /> */}
        </main>
        <aside className={style.panel_wrapper}>
          <div style={{ width: '100%' }}>flasjf akjf l</div>
        </aside>
      </div>
    </>
  );
}
