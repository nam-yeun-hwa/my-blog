# my-blog
next.js 14버전을 이용하여 개인 블로그를 만들어 보도록 한다.
- 사용된 라이브러리를 기록
- 트러블슈팅을 기록
- 전반적인 경험을 기록
  


# 기술 스택
- next.js 14.0.4
- typescript


# Troubleshooting

## 에러 발생
src/app/page.tsx You cannot have two parallel pages that resolve to the same path. Please check /page and /(layoutCase)/page. Refer to the route group docs for more information: https://nextjs.org/docs/app/building-your-application/routing/route-groups   

라우터 그룹으로 폴더를 생성하면(layoutCase) app 폴더에 page가 동시에 있을 경우 에러가 나온다.

app의 page를 삭제하고 라우터 그룹의 page를 유지 하였다.



