import BreadCrumb from 'app/_component/common/BreadCrumb';
import style from './page.module.css';
import Link from 'next/link';
import CodeComponentType from 'app/_component/detailContent/LanguageConsole';
import Prompts from 'app/_component/detailContent/Prompts';

export default function Post() {
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
          <div className={style.content}>
            <h2 className={style.h2}>
              리액트에서 불변성을 지켜야 하는 이유는?
            </h2>
            React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를
            직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까?{' '}
            <br />
            <br /> 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고
            해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고,
            새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.
            <CodeComponentType
              code={`const info={
  id:1,
  name:'John'
}
            
const nextInfo={
  ...info,
  name: 'Jane'
}
`}
            />
            컴포넌트의 렌더링 성능을 최적화 하기 위해서는 이전에 컴포넌트가 들고
            있던 Props와 새로 받아올 Props를 비교하는 과정이 필요합니다.
            <br />
            <h4 className={style.h4}>
              📄 같은 참조를 가지고 있는 값을 가리키고 있는 데이터
            </h4>
            <CodeComponentType
              code={`const data = { id:1, text:'안녕하세요'};
const sameData = data;
sameData.text = '안녕하세요';
console.log(sameData === data); // true
`}
            />
            sameData에 기존의 data를 대입하고 text 값을 수정 했습니다. 비록
            새로운 이름을 선언 하긴 했지만 sameData와 data는 똑같은 객체를
            가리키고 있습니다. <br />
            <br />
            따라서 sameData.text 값을 바꾸면 당연히 data.text 값 또한 바뀌게
            됩니다.
            <br />
            sameData와 data는 완전히 일치하는 객채이기 때문에 이를 비교하면
            결과는 true 입니다.
            <br /> <br />
            <Prompts
              type="warning"
              detail="객체의 특정 프로퍼티만 변경하는 작업을 수행하면 리액트에서는 변경이
            일어나지 않았다고 인식하여 리렌더링이 일어나지 않습니다."
            />
          </div>
        </main>
        <aside className={style.panel_wrapper}>
          <div style={{ width: '100%' }}>flasjf akjf l</div>
        </aside>
      </div>
    </>
  );
}
