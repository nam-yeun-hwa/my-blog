import BreadCrumb from 'app/_component/common/BreadCrumb';
import style from './page.module.css';
import Link from 'next/link';
import CodeComponentType from 'app/_component/detailContent/LanguageConsole';

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
                <Link href="https://github.com/nam-yeun-hwa" className={style.author}>
                  nyh
                </Link>
              </em>
            </span>
          </div>
          <div className={style.content}>
            <h2 className={style.h2}>리액트에서 불변성을 지켜야 하는 이유는?</h2>
            React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는
            말을 본 적이 있을 것이다. 왜 그런 걸까? <br />
            <br /> 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접
            수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을
            덮어씌워야 한다.
          </div>
          <CodeComponentType />
        </main>
        <aside className={style.panel_wrapper}>
          <div style={{ width: '100%' }}>flasjf akjf l</div>
        </aside>
      </div>
    </>
  );
}
