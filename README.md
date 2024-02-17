# my-blog
next.js 14버전을 이용하여 개인 블로그를 만들어 보도록 한다.

1. 컨셉 블로그 : https://chirpy.cotes.page/ 
2. 프론트엔드로만 구성
3. 사용된 라이브러리를 기록
4. 트러블슈팅을 기록
5. 전반적인 경험을 기록
  
# 배포 url
https://nam-yeun-hwa.github.io/ </br></br>
2024.2.14 v1.0.0-alpha.1


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


# Architecture 💡
(추후예정)

# Troubleshooting

## 이슈
```shell
src/app/page.tsx You cannot have two parallel pages that resolve to the same path. Please check /page and /(layoutCase)/page. Refer to the route group docs for more information: https://nextjs.org/docs/app/building-your-application/routing/route-groups   
```
라우터 그룹으로 폴더를 생성하면(layoutCase) app 폴더에 page가 동시에 있을 경우 에러가 나오는 것 같다.
app의 page를 삭제하고 라우터 그룹의 page를 유지 하였다.



# next.14 정적 배포하기
정적 파일로 빌드된 Next.js 애플리케이션은 빌드 시에 서버 사이드 렌더링(SSR)을 수행하여 HTML 파일에 렌더링된 컨텐츠를 포함한다. 따라서 클라이언트가 페이지를 요청할 때마다 서버가 필요하지 않고, 단순히 미리 렌더링된 HTML 파일을 제공하여 페이지를 서빙하며 이러한 방식으로 정적 파일로 빌드된 Next.js 애플리케이션은 SSR을 지원하면서도 서버가 없는 환경에서도 동작할 수 있다. 


📑 **next.config.js**
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
category  
  ├── [categoryname] 
  │      ├── [postid]  
  │      │      └── page.tsx 
  │      └── page.tsx 
  └── page.tsx

</pre>

</br>
</br>
처음에는 다른 페이지와 동일 하게 아래와 같이 generateStaticParams() 구성 하였다.


📑 [categoryname] > page.tsx
페이지의 categoryname 값을 슬러그로 받아 페이지를 표시 하는 페이지이다.
```
type Props = {
  params: { categoryname: string; };
};

export function generateStaticParams() {
  const categoryFolder = ['React', 'Javascript'];
  return categoryFolder.map((value) => ({ categoryname: value }));
}
```

📑 [categoryname] > [postid] > page.tsx
페이지의 id 값을 받아 페이지를 표시 할수 잇도록 id값을 슬러그로 받는 페이지이다.
```
type Props = {
  params: { postid: string };
};

export function generateStaticParams() {
  return totalPostlist.map((value) => ({ postid: value.id.toString() }));
}
```

그러나 똑같이 버그가 발생하였다. 고민을 여러차례 해본 후 generateStaticParams에 관련한 페이지를 자세히 보니 
`app/products/[category]/[product]/page.tsx` 의 경로와 같이 슬러그안에 슬러그 폴더가 있는 경우에는 (다른 슬러그에 포함된) page.tsx의 경우에는 상위 슬러그 값들을 generateStaticParams()에 같이 넣어주도록 되어 있는것 같았다.

 🔗 해당 내용 관련 next.js 이미지
<img width="673" alt="스크린샷 2024-02-12 오후 10 18 05" src="https://github.com/nam-yeun-hwa/list-filter-with-nextjs14/assets/138950568/baaca2d5-bb4d-4718-9e7a-caebe7ce4367">
https://nextjs.org/docs/app/api-reference/functions/generate-static-params

</br>

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

## 이슈 
## next/image 사용시 로컬에서는 잘보이던 이미지가 배포 후 보이지 않는 문제 

**img 태그를 사용하면 정적 배포 후에도 에러가 발생하지 않고 간단하게 화면에 표시 되었지만 next/image를 사용하면 아래와 같은 이점이 있어 next/image를 유지 하였다.** </br></br>
next/image는 이미지를 자동으로 적절한 크기로 조정하고, 필요한 경우에는 이미지를 **WebP 또는 AVIF 형식으로 변환**하여 **더 작은 용량으로 압축**할수 있으며 기본적으로 **레이지 로딩**을 지원하여 페이지의 성능을 향상시킨다. 이는 페이지 스크롤 시에 화면에 보이는 이미지만 로드되고, 나머지 이미지는 필요할 때까지 로드되지 않는다는 이점이 있다.

📑  **문제의 코드**

<img width="200" height="auto" alt="이미지 링크가 깨진 이미지" src="https://nyhya.cafe24.com/git_img/issu01/no-profileimg.png">

프로젝트의 pulbic 폴더 안에 image 폴더에 이미지 파일이 들어 있었고 아래와 같이 코딩 하였었었으나 배포 후 이미지가 깨지는 문제가 발생 했다.

```
<Image
  className={style.img}
  src={'/image/profile1.jpg'}
  alt="프로필 사진"
  width={112}
  height={112}
/>
```

## 해결 

📑 **수정한 코드**

아래와 같이 next/image에 loader를 추가해 주었다. </br>
loader 옵션은 아래와 같이 직접 코드상에서 지정할 수 있고 next.config.js의 images 섹션에서도 지정할 수 있다.
```
import Image, { ImageLoaderProps } from 'next/image';
import style from './imageLoader.module.css';

export default function ImageLoader() {
  const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${
      process.env.NEXT_PUBLIC_APP_API_BASE_URL
    }/image/${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <Image
      loader={myLoader}
      className={style.img}
      src={'profile1.jpg'}
      alt="프로필 사진"
      width={112}
      height={112}
    />
  );
}

```

📑 **next.config.js 파일에 Image 컴포넌트에 대한 옵션을 지정 하기** </br>
next.config.js 파일에서 images 설정을 사용하여 loader와 loaderFile 속성을 설정해 준다.

```
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './my/image/loader.js',
    path: 'https://s3.amazonaws.com/image',
    formats:['image/avif', 'image/webp']
  },
  Unoptimized: false,
};

module.exports = nextConfig;

```




- **loader** : 로더를 이용하면 컴포넌트에서는 상대 경로로 이미지 위치를 지정하지만, 빌드(build) 시에 절대 경로로 Next.js가 자동으로 변환해 준다.
- **loaderFile** : loaderFile 속성은 커스텀 이미지 로더가 정의된 파일의 경로를 지정해준다. 아래 my/image/loader.js 파일을 기본으로 한다.
- **domains** : 여기서 지정된 호스트네임만 허용되며 그외의 외부 링크에 경우 에러를 발생시켜 next.config.js에 등록 하도록 했다.
- **formats** : formats 속성은 이미지를 어떤 형식으로 변환할지를 설정할 수 있습니다. 주로 웹P(WebP) 형식이나 AVIF 형식 등을 지정하여 이미지를 더 작은 용량으로 제공하여 성능을 향상시킬 수 있습니다.
- **Unoptimized** : Unoptimized 속성은 Next.js에서 이미지 최적화를 비활성화하는 속성이다. 이를 사용하면 Next.js의 내장 이미지 최적화 기능을 비활성화하고, 원본 이미지를 그대로 사용할 수 있다. </br>
일반적으로 Next.js에서 제공하는 <Image/> 컴포넌트는 이미지 최적화를 자동으로 처리하여 페이지 성능을 향상시키고, 사용자 경험을 개선한다. </br>
하지만 때로는 원본 이미지를 사용하거나 외부 이미지 최적화 서비스를 사용하고 싶을 수 있고 그럴 때 Unoptimized 속성을 사용하면 된다.</br>

📑 **my/image/loader.js**
```
'use client'

export default function myImageLoader({ src, width, quality }) {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}
```
https://nextjs.org/docs/pages/api-reference/components/image

## font 적용

## 폰트가 적용되는 것을 확인한 방법 case 1
가장 상위 layout의 head에 구글폰트 stylesheet를 넣어주는 방법이다.

📄 layout.tsx
```
type Props = {
  children: React.ReactNode;
};


export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
<--- 적용한 내용 ---/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap"
          as="style"
        />
<--- 적용한 내용 ---/>
      </head>
      <title>be come 💡</title>
      {/* <title>Create Next Bejjangyi</title> */}
      <meta
        name="description"
        content="App for an Ant Who Wants to Become a Bejjangyi"
      />
      {/* <meta property="og:title" content="Become a Bejjangyi" /> */}
      {/* <meta property="og:type" content="website" /> */}
      {/* <meta property="og:url" content="공유시 이동 url" /> */}
      {/* <meta property="og:image" content="공유시 보여질 이미지 경로" /> */}
      <body>{children}</body>
    </html>
  );
}

```
다행히 폰트는 잘 적용 되었으나 **@next/font**가 적용되지 않아 최적화는 되지 않는다고 한다.




## 폰트가 적용되지 않았던 방법 : next/font 사용

**next/font 을 사용하는 이점** </br>
- next/font는 폰트를 자동으로 최적화하고 외부 네트워크 요청을 제거하여 개인 정보 보호와 성능을 향상시키며
- next/font에는 모든 글꼴 파일에 대한 내장된 자동 셀프 호스팅이 포함되어 있어 CSS size-adjust 속성을 사용하고 레이아웃 이동이 전혀 없이 웹 폰트를 최적으로 로드할 수 있게 해준다.
- 폰트 파일은 빌드 시 다운로드되어 정적 자산과 함께 자체 호스팅되어 브라우저에서 Google로 요청을 보내지 않는다. </br></br>

아래와 같이 최상위 layout에서 구글 폰트를 className={imb_plex_sans_kR.className} 으로 사용하여 적용해 보았다.</br>

📄 layout.tsx
```shell
import { Inter, IBM_Plex_Sans_KR } from 'next/font/google';

const imb_plex_sans_kR = IBM_Plex_Sans_KR({
  weight: ['400', '500', '600', '700'],
  variable: '--font-IBM_Plex_Sans_KR',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<--- 적용한 내용 ---/>
    <html lang="en" className={imb_plex_sans_kR.className}>
<--- 적용한 내용 ---/>
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

폰트가 적용이 되었지만 yarn dev 명령 후 프로젝트가 화면에 3초 이상 나타나지 않았고 터미널에 아래와 같은 문구가 수없이 나타났다.</br>
해당 내용을 검색해 보았는데 이슈가 있어서 내용을 공유해 본다.</br>
https://github.com/vercel/next.js/discussions/55734</br>
위 imb_plex_sans_kR에   preload: false 를 적용하여도 같은 문제가 발생 하였다.</br>

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

## 폰트가 적용되는 것을 확인한 방법 case 2
localFont와 @font-face를 사용해 보았으나 어쩐일인지 폰트가 적용되지 않아서 다음 시도는 tailwind.config.js에 font-family를 등록하여 사용하는 방법을 시도해 보았다.


📄 layout.tsx
```
import type { Metadata } from 'next';
import { Inter, IBM_Plex_Sans_KR } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import './style-reset.css';

type Props = {
  children: React.ReactNode;
};

const imb_plex_sans_kR = IBM_Plex_Sans_KR({
  weight: ['400', '500', '600', '700'],
  variable: '--font-IBM_Plex_Sans_KR',
  subsets: ['latin'],
  display: 'swap',
});

// const myFont = localFont({
//   src: './fonts/IBMPlexSansKR-Medium.woff',
//   display: 'swap',
// });

export default function RootLayout({ children }: Props) {
  return (
<--- 적용한 내용 ---/>
    <html lang="en" className={`${imb_plex_sans_kR.variable}`}>
<--- 적용한 내용 ---/>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          as="style"
        />
        {/*<link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
         <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR&display=swap"
          as="style"
        /> */}
      </head>

      <body>{children}</body>
    </html>
  );
}

```

프로젝트에서는 tailwind를 사용하지 않지만 tailwind.config.js을 생성해 주고 아래 내용을 입력해 주었다.

📄 tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-IBM_Plex_Sans_KR)'],
      },
    },
  },
  plugins: [],
};

```
폰트가 잘 적용되는 것을 확인 하였다.
</br>

## CSS
## 첫번째 문자를 대문자로 표시
변수 linkName의 첫번째 문자를 대문자로 표시하는 부분에서 처음 사용했던 방법은 자바스크립트를 사용 하였었다.
```
  <span className={style.upper_case}>
    {linkName.charAt(0).toUpperCase() + linkName.slice(1)}
  </span>
```

css에서 첫문자를 대문자로 변경 하였다.
유의점은 span태그에서는 적용되지 않았고 p태그에서만 적용 되었다.

## style.module.css
```
  <p className={style.upper_case}>{linkName}</p>
  
  .upper_case::first-letter {
    text-transform: uppercase; /* 첫 글자를 대문자로 변경합니다. */
  }
```
