export default function about() {
  return (
    <div>
      <h1>페이지 업데이트 내용</h1>
      <div className="row">
        <p>현재 추후 퍼블리싱 추가</p>
      </div>
      <b> 2023-12-14 </b> start
      <br />
      <br />
      <b> 2023-12-14 </b> 프로젝트 생성 <br />
      라우터그룹(layoutCase)에 페이지와 parallel 모달 내용 구성
      <br />
      <br />
      <b> 2023-12-18 </b> <br />
      sidebar, header 등 공통 레이아웃 구성 추가
      <br />
      <br />
      <b> 2023-12-21 </b> <br />
      side메뉴 링크페이지 연결 ,프로필사진 추가, 프로필 소개 내용 추가
      <br />
      <br />
      <b> 2023-12-26 </b> <br />
      포스트 페이지, post 공통 컴포넌트 추가
      <br />
      <br />
      <b> 2023-12-28 </b> <br />
      각 페이지 생성
      <br />
      <br />
      <b> 2023-12-31 </b> <br />
      breadcrumb 공통 컴포넌트 추가
      <br />
      <br />
      <b> 2024-01-04 </b> <br />
      breadcrumb search 컴포넌트 추가
      <br />
      <br />
      <b> 2023-01-06 </b> <br />
      포스트 상세페이지 시작
      <br />
      <br />
      <b>2023-01-06 </b> <br />
      구글 폰트 적용(IBM Plex Sans KR)
      <br />
      <br />
      <b> 2023-01-07 </b> <br />
      post 상세페이지 코드 공통 컴포넌트 생성
      <br />
      <br />
      <b> 2023-01-09 </b> <br />
      prompts 컴포넌트 추가
      <br />
      <br />
      <b> 2023-01-07 </b> <br />
      post 상세페이지 코드 공통 컴포넌트 생성
      <br />
      <br />
      <b> 2023-01-15 </b> <br />
      전역 상태 관리를 위해 Context API 추가
      <br />
      <br />
      <b> 2023-01-17 </b> <br />
      post 페이지 5개 게시물 단위로 무한 스크롤 기능 추가
      <br />
      react-intersection-observer 사용
      <br />
      <br />
      <b> 2023-01-19 </b> <br />
      패널 공톰 컴포넌트 생성
      <br />
      <br />
      <b> 2023-01-20 </b> <br />
      {`Context API를 reduct-toolkit으로 변경
      - 사유 : Link 컴포넌트 사용시 스크롤이 유지가 되지 않음
      context api에서 localStorage에 저장하여 데이터를 유지 시켜보았으나

      < 에러 발생 : s >
      Error: Hydration failed because the initial UI does not match what was rendered on the server.
      Warning: Expected server HTML to contain a matching <article> in <div>.
      See more info here: https://nextjs.org/docs/messages/react-hydration-error
      < 에러 발생 : e >
      
      그리하여 context api를 포기하고 redux-toolkit을 시도해 보았다.
      처음에는 Redux Persist를 같이 사용 하려고 시도 하였으나 실행 자체에서 에러가 발생하였고 
      Redux Persist를 포기하고 redux-toolkit만으로 구성하니 
      데이타 캐싱도 유지되고 포스트 리스트 스크롤도 유지가 되었다. 에러도 나지 않았다.`}
      <br />
      <br />
    </div>
  );
}
