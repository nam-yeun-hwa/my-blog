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
         ├── @modal --- 모달
         ├── algorithm --- 페이지
         ├── archives --- 페이지
         ├── algorithm --- 페이지
         ├── categories --- 페이지
         ├── posts - 페이지
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



