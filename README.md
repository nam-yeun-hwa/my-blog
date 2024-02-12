# my-blog
next.js 14버전을 이용하여 개인 블로그를 만들어 보도록 한다.

1. 컨셉 블로그 : https://chirpy.cotes.page/ 
2. 프론트엔드로만 구성
3. 사용된 라이브러리를 기록
4. 트러블슈팅을 기록
5. 전반적인 경험을 기록
  


# 기술 스택
- next.js 14.0.4
- typescript
- redux-toolkit 


# 폴더구조

<pre>
├── public
└── src
    └── app
         ├── _components --- 공통컴포넌트 
         └── (layoutCase) --- 레이아웃 그룹
               └── _components --- 공통컴포넌트 
                      ├── contexts --- 컨텐스트 API
                      ├── store --- redux-toolkit
               ├── @modal --- 모달
               ├── algorithm --- 페이지 카테고리
               ├── archives --- 페이지 카테고리
               ├── algorithm --- 페이지 카테고리
               ├── categories --- 페이지 카테고리
               ├── posts ---  페이지 카테고리 일반적 공통 구조 > [다이나믹라우팅 slug]에 따라 내부로 page.tsx가 더 들어 있는 정도로 차이가 있다.
               │    ├── [postid] 
               │    │      ├── page.module.css 
               │    │      ├── page.tsx 
               │    └── page.tsx 
               ├── tags --- 페이지
               └── update --- 페이지
</pre>
# Troubleshooting

## 이슈
```shell
src/app/page.tsx You cannot have two parallel pages that resolve to the same path. Please check /page and /(layoutCase)/page. Refer to the route group docs for more information: https://nextjs.org/docs/app/building-your-application/routing/route-groups   
```
라우터 그룹으로 폴더를 생성하면(layoutCase) app 폴더에 page가 동시에 있을 경우 에러가 나오는 것 같다.
app의 page를 삭제하고 라우터 그룹의 page를 유지 하였다.

## 이슈
yarn dev 명령 후 프로젝트가 화면에 3초 이상 나타지 않았다.
그리고 터미널에 아래와 같은 문구가 수없이 나타났다.

```shell
Retrying 1/3...
The user aborted a request.

Retrying 1/3...
The user aborted a request.

Retrying 1/3...
The user aborted a request.

Retrying 1/3...
The user aborted a request.
```
검색결과 해당 이슈에 관한 내용을 찾을 수 있었다. </br>
https://github.com/vercel/next.js/discussions/55734

아래와 같이 최상위 layout에서 구글 폰트를 className={imb_plex_sans_kR.variable} 으로 사용한것이 문제 같았고

 📄 layout.tsx
```shell
import type { Metadata } from 'next';
import { Inter, IBM_Plex_Sans_KR } from 'next/font/google';
import './globals.css';
import './style-reset.css';

const inter = Inter({ subsets: ['latin'] });

const imb_plex_sans_kR = IBM_Plex_Sans_KR({
  weight: ['400', '500', '600', '700'],
  variable: '--font-IBM_Plex_Sans_KR',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={imb_plex_sans_kR.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

```

구글 폰트에서 사용하고 있는 폰트를 다운로드 하여 웹폰트 woff로 변환후에 
global.css에서 @font-face를 사용하였더니 해결 되었다.


 📄 global.css
 ```shell
  @font-face {
    font-family: 'IBM Plex Sans KR';
    src: url('/fonts/IBMPlexSansKR-Medium.woff') format('woff');
  }
```

```shell
body {
  font-family: 'IBM Plex Sans KR', sans-serif;
}

```
</br>
</br>
</br>

# next.14 정적 배포하기

📑 next.config.js 
next.config.js파일에 `output: 'export'` 을 추가 해준다.
next13이후에 아래 키워드를 추가하도록 변경 되었다.

```
  const nextConfig = {
    output: 'export',
  };
  
  module.exports = nextConfig;
```
https://nextjs.org/docs/app/building-your-application/deploying/static-exports


## 정적 배포 이슈

## Error : Page[categoryname]/[postid] is missing "generateStaticParams()" so it cannot be used with "output: export" config.
정적으로 페이지를 빌드 할 경우 슬러그를 받는 page.tsx에 generateStaticParams()를 넣어줘야 하는 이슈 였다.

📑 페이지 카테고리 경로 (category)
해당 페이지는 두개의 슬러그를 다이나믹 param으로 받고 있었고 
- [categoryname] page.tsx 에서는 categoryname의 parms을 사용하고
- [postid] page.tsx 에서는 postid parms을 사용하고 있었다.

<pre>
category ---  
 │    ├── [categoryname] 
 │    │      └── [postid]  
 │    │            └── page.tsx 
 └──  └── page.tsx 
</pre>
    
처음에는 다른 페이지와 동일 하게 아래와 같이 generateStaticParams() 구성 하였다.

📑 [categoryname] > page.tsx
페이지의 categoryname 값을 슬러그로 받아 페이지를 표시 하는 페이지이다.
```
export function generateStaticParams() {
  const categoryFolder = ['React', 'Javascript'];
  return categoryFolder.map((value) => ({ categoryname: value }));
}
```

📑 [categoryname] > [postid] > page.tsx
페이지의 id 값을 받아 페이지를 표시 할수 잇도록 id값을 슬러그로 받는 페이지이다.
```
export function generateStaticParams() {
  return totalPostlist.map((value) => ({ postid: value.id.toString() }));
}
```

그러나 똑같이 버그가 발생하였다. 고민을 여러차례 해본 후 generateStaticParams에 관련한 페이지를 자세히 보니 
`app/products/[category]/[product]/page.tsx` 의 경로와 같은 경우에는 맨 마지막 page.tsx의 경우에는 상위 슬러그 값들을 generateStaticParams()에 같이 넣어주도록 되어 있는것 같았다.
<img width="677" alt="스크린샷 2024-02-12 오후 9 42 52" src="https://github.com/nam-yeun-hwa/list-filter-with-nextjs14/assets/138950568/cafa3350-d56d-4a7f-883d-c3ac3098ed44">

## 해결
📑 [postid] page.tsx
```
type Props = {
  params: { categoryname: string; postid: string };
};

export function generateStaticParams() {
  const categoryFolder = ['React', 'Javascript'];
  return categoryFolder
    .map((parent) => {
      return totalPostlist.map((value) => {
        return { categoryname: parent, postid: value.id.toString() };
      });
    })
    .flat();
}

```
postid의 값을 받는 page.tsx에서는 상위 슬러그 값인 categoryname의 값을 사용하지 않지만 위와 같이 generateStaticParams()의 값을 수정 한 후 yarn build로 빌드를 성공 할수 있었다.

https://nextjs.org/docs/app/api-reference/functions/generate-static-params



