'use client';

import style from './breadCrumb.module.css';
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';
import Link from 'next/link';
import { totalPostlist } from 'data/post_db';
import { algorithmPostlist } from 'data/algorithm_db';
import { IAlgorithmPost, IPost } from 'type/post';
import SearchBar from './SearchBar';

type PropsBreadCrumb = {
  moveToggle: () => void;
};

/**
 * @function BreadCrumb
 * @description BreadCrumb nav default 라우터, 페이지별 데이터 분기처리
 */
export default function BreadCrumb({ moveToggle }: PropsBreadCrumb) {
  const menuRouter = useSelectedLayoutSegment();

  return (
    <header className={style.topbar_wrapper}>
      <div className={style.top_bar}>
        <nav className={style.breadcrumb}>
          <span>
            <Link className={style.topbar_txt} href={`/`}>
              Home
            </Link>
            {menuRouter !== 'algorithm' ? (
              <RouteSwitch data={totalPostlist} />
            ) : (
              <RouteSwitch data={algorithmPostlist} />
            )}
          </span>
        </nav>
        <SearchBar />
      </div>
      <div className={style.mobile_topbar}>
        <button className={style.sidebar_trigger} onClick={() => moveToggle()}>
          <i className={`fas fa-bars fa-fw ${style.sidebar_trigger_ico}`}></i>
        </button>
        <div className={style.mobile_topbar_title}>be come 💡</div>
        <button className={style.search_trigger}>
          <i className={`fas fa-search fa-fw ${style.search_trigger_ico}`}></i>
        </button>
      </div>
    </header>
  );
}

/**
 * @function RouteSwitch
 * @description 상위 라우트에 따른 현재 페이지 데이터를 Props로 받는다.
 * allSegment의 마지막 값이 숫자일때와(1)와 숫자가 아닐때(2)
 * 1. 숫자일때는 post 상세페이지에서 postid 값이 아닌 게시물의 제목을 표시
 *  예) Home함수형 > 프로그래밍
 *
 * 2.숫자가 아닐때는 post list 경우로 전체 경로를 표시 해준다.
 *  예) Home > Tags > Token
 */
type Props = {
  data: Array<IPost> | Array<IAlgorithmPost>;
};

function RouteSwitch({ data }: Props) {
  const allSegment = useSelectedLayoutSegments();
  const lastSegmentValue = Number(allSegment[allSegment.length - 1]);
  // const { title } = data.find(
  //   (value) => value.id === lastSegmentValue,
  // ) as IPost;

  return (
    <>
      {!isNaN(lastSegmentValue) ? (
        <Link className={style.topbar_txt} href={``}>
          {data.find((value) => value.id === lastSegmentValue)?.title}
        </Link>
      ) : (
        <>
          {allSegment.map((linkName, idx) => {
            return (
              <Link
                key={idx}
                className={style.topbar_txt}
                href={`/${linkName}`}
              >
                <p className={style.upper_case}>{linkName}</p>
              </Link>
            );
          })}
        </>
      )}
    </>
  );
}

// Number(allSegment[allSegment.length - 1]) > 0 ? (
//   <Link className={style.topbar_txt} href={``}>
//     {
//       totalPostlist[Number(allSegment[allSegment.length - 1]) - 1]
//         .title
//     }
//   </Link>
// )

// allSegment.map((linkName, idx) => {
//   return (
//     <Link key={idx} className={style.topbar_txt} href={``}>
//       {linkName.charAt(0).toUpperCase() + linkName.slice(1)}
//     </Link>
//   );
// })

//  <search className={cx(style.search, isFocused && style.search_active)}>
//           <i className={`fas fa-search fa-fw ${style.search_ico}`}></i>
//           <input
//             id="search"
//             ref={inputRef}
//             className={cx(
//               style.search_input,
//               isFocused && style.search_input_active,
//             )}
//             onFocus={handleFocus}
//             onBlur={handleBlur}
//             placeholder="Search..."
//             autoComplete="off"
//           />
//         </search>

/* "Breadcrumb"은 길을 잃지 않도록 도와주는 나침반과 같은 역할을 하는 정보를 나타냅니다. 
  특히 웹 디자인 및 사용자 인터페이스에서 "breadcrumb"은 사용자가 현재 위치한 페이지의 경로를 
  시각적으로 표시하는 일련의 링크입니다. 이는 사용자가 웹 사이트 내에서 어디에 있는지 이해하고 
  쉽게 이동할 수 있도록 돕는 데 사용됩니다.
  
  예를 들어, 다음과 같은 Breadcrumb가 있다고 가정해 봅시다:
  Home > Products > Electronics > Smartphones */
