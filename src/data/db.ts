import { Folder, LEVEL } from 'type/post';
import style from 'app/(layoutCase)/posts/[postid]/page.module.css';

/**
 * @constant totalPostlist
 * @description post 데이타
 */
export const totalPostlist = [
  {
    id: 1,
    title: '리액트와 불변성',
    date: '2024-01-15',
    folder: Folder.React,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'h2',
        value: `<h2 class=${style.h2}>리액트에서 불변성을 지켜야 하는 이유는?</h2>`,
      },
      {
        type: 'normal',
        value: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까?`,
      },
      {
        type: 'normal',
        value: `리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
      },
      {
        type: 'code',
        value: `const info={
id:1,
  name:'John'
}
      
const nextInfo={
  ...info,
  name: 'Jane'
}`,
      },
      {
        type: 'normal',
        value: `리액트는 컴포넌트에 변화가 필요한지 필요하지 않은지 Props의 변화 통해 알 수 있는데`,
      },
      {
        type: 'normal',
        value: `컴포넌트의 렌더링 성능을 최적화 하기 위해서는 이전에 컴포넌트가 들고 있던 Props와 새로 받아올 Props를 비교하는 과정이 필요하며 불변성을 유지시켜 주어야 한다.`,
      },
      {
        type: 'h4',
        value: `<h4 class=${style.h4}>📝 불변성이 유지되지 않은 같은 참조를 가리키고 있는 데이터</h4>`,
      },
      {
        type: 'code',
        value: `const data = { id:1, text:'안녕하세요'};
    
const sameData = data;
sameData.text = '안녕하세요';
      
console.log(sameData === data); // true`,
      },
      {
        type: 'normal',
        value: `sameData에 기존의 data를 대입하고 text 값을 수정 했다. 비록 새로운 이름을 선언 하긴 했지만 sameData와 data는 똑같은 객체를 가리키고 있다.`,
      },
      {
        type: 'normal',
        value: `따라서 sameData.text 값을 바꾸면 당연히 data.text 값 또한 바뀌게 된다. sameData와 data는 완전히 일치하는 객채이기 때문에 이를 비교하면 결과는 true 이다.`,
      },
      {
        type: 'emphasis',
        value: `객체의 특정 프로퍼티만 변경하는 작업을 수행하면 리액트에서는 변경이 일어나지 않았다고 인식하여 리렌더링이 일어나지 않는다. <b>불변성을 지켜주면서 값을 전달해 주어야 한다.</b>`,
      },
      {
        type: 'h2',
        value: `<h2 class=${style.h2}>불변성을 유지하면서 상태를 업데이트하는 방법</h2>`,
      },
      {
        type: 'code',
        value: `const data = { id:1, text:'안녕하세요'};
const nextData = { ...data, text: '사요나라'};
      
console.log(nextData === data) // false`,
      },
      {
        type: 'normal',
        value: `위 코드는 data 변수를 참조가 끊어진 새로운 값으로 생성 한다. 이번에 선언한 nextData는 완전히 새로운 객체 이다.`,
      },
      {
        type: 'normal',
        value: `리액트는 상태가 변경되었는지 여부를 판단할 때 이전 상태와 현재 상태를 비교하여`,
      },
      {
        type: 'normal',
        value: `기본적으로 부모로 부터 내려받는 Props나 내부 상태인 State가 변경되었을 때 컴포넌트를 다시 렌더링 하는 리렌더링 과정이 일어난다.<br/>`,
      },
      {
        type: 'emphasis',
        value: `React는 <b>Props</b>와 <b>State</b>의 변경을 불변성을 이용해서 감지한다.`,
      },
      {
        type: 'normal',
        value: `객체의 참조를 복사한다는 점을 이용해 단순히 참조만 비교하는 얕은 비교를 이용해서 변경이 일어났는지 확인한다.`,
      },

      {
        type: 'normal',
        value: `자바스크립트에서 참조 타입의 데이터인 경우 메모리 힙 영역에 저장이 되어 내부 프로퍼티를 변경해도 같은 참조를 갖고 있다.`,
      },

      {
        type: 'normal',
        value: `따라서 객체의 특정 프로퍼티만 변경하는 작업을 수행하면 리액트에서는 변경이 일어나지 않았다고 인식하여 리렌더링이 일어나지 않는다. 따라서 리렌더링을 일으키려면 리액트에 이전의 참조와 다른 참조로 변경되었음을 알려야 한다.`,
      },

      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 2,
    title: '함수형 프로그래밍',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `데이터를 함수를 이용해 새로운 데이터로 만들어 나가는 데이터 파이프 라인의 형태로 프로그래밍이 작동 하며 함수형 프로그래밍은 거의 모든 것을 순수 함수로 나누어 문제를 해결하는 기법으로, 작은 문제를 해결하기 위한 함수를 작성하여 가독성을 높이고 유지보수를 용이하게 해준다. (클로저, 하스켈, 리스프)`,
    post: [
      {
        type: 'normal',
        value: `데이터를 함수를 이용해 새로운 데이터로 만들어 나가는 데이터 파이프 라인의 형태로 프로그래밍이 작동 하며 함수형 프로그래밍은 거의 모든 것을 순수 함수로 나누어 문제를 해결하는 기법으로, 작은 문제를 해결하기 위한 함수를 작성하여 가독성을 높이고 유지보수를 용이하게 해준다. (클로저, 하스켈, 리스프)`,
      },
      {
        type: 'normal',
        value: `객체지향 추상화의 최소단위가 객체인것 처럼 함수형은 함수가 최소 단위이다.
        함수 단위로 나누어지므로 재사용성이 높다.
        불변성을 지향하기에 동작을 예측하기 쉽고 부수효과(Side Effect)방지한다.
        부수효과(Side Effect)를 방지 한다는 것은 동시성 문제도 해결된다는 의미이다.
        객체지향은 제어흐름의 간접적인 전환에 부과되는 규율 함수형은 변수 할당에 부과되는 규율`,
      },
      {
        type: 'h2',
        value: `<h2 class=${style.h2}>함수형 vs. 절차형</h2>`,
      },
      {
        type: 'normal',
        value: `아래의 코드는 N개의 숫자가 공백 없이 쓰여있다. </br> 이 숫자를 모두합해서 출력하는 프로그램을 작성하시오.`,
      },
      {
        type: 'code',
        value: `예) "12345" -> 15`,
      },
      {
        type: 'h4',
        value: `<h4 class=${style.h4}>📝 절차형 프로그래밍</h4>`,
      },
      {
        type: 'normal',
        value: `절차형 프로그래밍은 프로그램을 일련의 절차나 명령어로 구성하는 방식입니다. 절차형 언어는 상태를 중심으로 프로그램을 작성하며, 명령어의 순서가 중요한 역할을 합니다. 프로시저(절차)를 작성하고 호출하여 문제를 해결하는 방식이 특징입니다.`,
      },
      {
        type: 'code',
        value: `const stringNumber = "12345";
let sum = 0;
for(let i=0; i < stringNumber.length; i+=1){
  sum += stringNumber[i] - "0";
}`,
      },
      {
        type: 'h4',
        value: `<h4 class=${style.h4}>📝 함수형 프로그래밍</h4>`,
      },
      {
        type: 'normal',
        value: `함수형 프로그래밍은 함수를 주요 구성 요소로 삼는 프로그래밍 패러다임입니다. 함수형 언어는 상태 변경을 피하고, 불변성을 강조하며, 함수 조합성에 중점을 둡니다. 함수형 프로그래밍은 입력과 출력 간의 관계를 정의하는 함수들을 조합하여 프로그램을 작성하며, 부작용을 최소화하려는 경향이 있습니다.`,
      },
      {
        type: 'code',
        value: `const stringNumber = "12345";
let result = stringNumber.split(" ")
    .map((num) => parseInt(num))
    .reduce((acc, value) => acc + value, 0);`,
      },
      {
        type: 'h2',
        value: `<h2 class=${style.h2}>선언형 vs. 명령형</h2>`,
      },
      {
        type: 'h4',
        value: `<h4 class=${style.h4}>📝 명령형</h4>`,
      },
      {
        type: 'normal',
        value: `명령형 프로그래밍은 프로그램이 어떻게 수행되는지를 명시적으로 나타내는 스타일입니다. 대부분의 절차형 언어가 명령형 패러다임을 따릅니다. 프로그래머는 상태와 명령어의 순서에 중점을 두어 프로그램을 작성합니다.`,
      },
      {
        type: 'h4',
        value: `<h3 class=${style.h3}>control Flow</h3>`,
      },
      {
        type: 'normal',
        value: `Goto
        if/Then/Else
        Switch/Case
        For/While`,
      },
      {
        type: 'code',
        value: `const stringNumber = "12345";
let result = stringNumber.split(" ")
    .map((num) => parseInt(num))
    .reduce((acc, value) => acc + value, 0);`,
      },
      {
        type: 'h4',
        value: `<h4 class=${style.h4}>📝 선언형</h4>`,
      },
      {
        type: 'normal',
        value: `선언형 프로그래밍은 원하는 결과를 설명하고, 시스템이 그 결과를 어떻게 달성할지에 대한 구체적인 단계나 순서를 명시하지 않는 스타일이다. 선언형 프로그래밍의 예로 SQL, HTML, CSS 등이 있다. 프로그래머는 "무엇(What)"을 명시하고, 해결방법은 컴퓨터에게 위임하는 방법 이다.`,
      },
      {
        type: 'h4',
        value: `<h3 class=${style.h3}>control Flow</h3>`,
      },
      {
        type: 'data Flow',
        value: `Stateless
        Recursion
        pipe`,
      },
      {
        type: 'code',
        value: `[1,2,3,4,5].filter(v => v% === 0)
  .forEach(v => console.log(v));`,
      },
      {
        type: 'h2',
        value: `<h2 class=${style.h2}>함수형 프로그래밍의 장점</h2>`,
      },
      {
        type: 'normal',
        value: `함수형 프로그래밍은 다양한 장점을 가지고 있어서 많은 프로그래머들이 이를 선호하는 이유가 있습니다. 몇 가지 주요 장점은 다음과 같습니다.`,
      },
      {
        type: 'normal',
        value: `불변성 (Immutability): 함수형 프로그래밍에서는 데이터를 변경할 수 없는 불변의 구조로 다룹니다. 이로써 부작용이 감소하고, 코드의 예측 가능성과 안정성이 높아집니다. 또한, 병렬 처리와 캐싱 등의 최적화가 쉬워집니다.

        순수 함수 (Pure Functions): 함수형 프로그래밍에서는 순수 함수를 강조합니다. 순수 함수는 입력 값에만 의존하며, 같은 입력에 대해서는 항상 같은 출력을 반환합니다. 이로써 코드의 테스트, 디버깅, 이해가 용이해지며, 예측 가능한 동작을 보장합니다.
        
        부작용 최소화 (Minimizing Side Effects): 부작용(side effect)을 최소화하여 코드의 안정성을 높입니다. 부작용은 함수 호출로 인해 발생하는 외부 상태 변경을 의미하며, 이를 최소화함으로써 코드를 이해하기 쉽고 디버깅이 쉬워집니다.
        
        고차 함수 (Higher-order Functions): 함수를 값으로 다룰 수 있는 고차 함수 개념이 풍부합니다. 함수를 매개변수로 전달하거나 함수를 반환할 수 있기 때문에 코드의 모듈화와 재사용성이 높아집니다.
        
        코드 간결성과 가독성: 함수형 프로그래밍은 작은 함수들을 조합하여 더 큰 기능을 만들기 때문에 코드가 간결하고 가독성이 높습니다. 이로써 유지보수가 쉬워지고 버그를 찾기 쉬워집니다.
        
        병렬 및 분산 처리 용이성: 불변성과 부작용 최소화로 인해 함수형 프로그래밍은 병렬 및 분산 처리를 더 쉽게 수행할 수 있습니다. 여러 스레드 또는 프로세스에서 안전하게 동작할 수 있어서 성능을 향상시키는 데 도움이 됩니다.
        
        테스트 용이성: 순수 함수와 불변성은 코드의 테스트 용이성을 증가시킵니다. 각 함수는 독립적으로 테스트할 수 있고, 예측 가능한 결과를 가지기 때문에 테스트 작성이 쉬워집니다.`,
      },
    ],
  },
  {
    id: 3,
    title: '프론트 서버',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `브라우저 작동원리에 대해 공부하던 중 의문점이 발생했다.

    <b>"브라우저 주소창에 URL을 입력하면 브라우저는 HTTP GET 요청을 URL 프론트 서버로 전송한다.
    보통 프론트 엔드가 있는 웹 서비스의 경우 HTML 파일을 결과로 반환한다."</b>
    
    라는 부분인데 프론트 서버의 존재가 정확히 어떤 일을 하는 것인지 궁금해 졌다.`,
    post: [
      {
        type: 'normal',
        value: `브라우저 작동원리에 대해 공부하던 중 의문점이 발생했다.

        <b>"브라우저 주소창에 URL을 입력하면 브라우저는 HTTP GET 요청을 URL 프론트 서버로 전송한다.
        보통 프론트 엔드가 있는 웹 서비스의 경우 HTML 파일을 결과로 반환한다."</b>
        
        라는 부분인데 프론트 서버의 존재가 정확히 어떤 일을 하는 것인지 궁금해 졌다.`,
      },
      {
        type: 'normal',
        value: `프론트 서버는 어떤 주소에 대한 요청을 보냈을 때, Markup Language (HTML,CSS, Javascript)를 응답해서 사용자에게 GUI 환경을 제공해준다.`,
      },
      {
        type: 'normal',
        value: `→ react, next, styled-components, redux 등
        `,
      },
      {
        type: 'normal',
        value: `<img href="https://velog.velcdn.com/images/bunny/post/f81790cf-1b26-4a2e-88a5-c6bc23fe7955/image.jpg"/>`,
      },
      {
        type: 'normal',
        value: `프론트엔드 개발자가 React 라이브러리를 활용하여 클라이언트(브라우저)에게 제공할 Javascript 파일들을 ES6 + JSX 문법으로 작성하게 되면, Babel 등의 컴파일러가 모든 브라우저에서 호환 가능한 문법으로 변환해준다.`,
      },
      {
        type: 'normal',
        value: `또한 Webpack 등의 모듈 번들러가 HTML, CSS, Javascript 파일들을 효율적인 방식으로 적절히 번들링하여 준비해둔다.`,
      },
      {
        type: 'normal',
        value: `클라이언트가 요청을 보낼 때마다 프론트 서버는 미리 준비해둔 HTML, CSS, Javascript 파일들을 클라이언트에게 제공한다. 그러면 클라이언트(브라우저)는 전달받은 Javascript를 실행해 페이지에 렌더링을 시작한다. 즉, React 라이브러리를 활용했던 Javascript 코드는 동적으로 DOM에 렌더링 해준다.`,
      },
      {
        type: 'h2',
        value: `<h2 class=${style.h2}>브라우저의 전체 흐름</h2>`,
      },
      {
        type: 'h4',
        value: `<h4 class=${style.h4}>SSR</h4>`,
      },
      {
        type: 'normal',
        value: `SSR 전통적인 웹사이트에서는 브라우저에서는 프론트 서버로 GET 요청을 하고 프론트 서버에서 백엔드 서버로 데이터 요청을 하여 백엔드 서버는 데이터베이스에서 데이터를 받아와서 프론트서버로 데이터를 보내주고 프론트 서버는 HTML과 데이터를 합쳐서 브라우저에게 보내준다.`,
      },
      {
        type: 'normal',
        value: `브라우저 ➔ 프론트 서버 ➔ 백엔드 서버 ➔ DB`,
      },
      {
        type: 'h4',
        value: `<h4 class=${style.h4}>SPA</h4>`,
      },
      {
        type: 'normal',
        value: `SPA 에서는 프론트 서버에서 정적파일들을 먼저 받아(HTML, CSS, Javascript) 화면을 그리고 데이터를 백엔서 서버에서 받아오는동안 로딩바를 화면에 표시해 주도록 한다.`,
      },
      {
        type: 'normal',
        value: `브라우저 ➔ 프론트 서버에서 정적파일들을 받아옴(HTML, CSS, Javascript) </br> 브라우저 ➔ 백엔드 서버(프론트 서버를 거치지 않고 백엔드 서버로 바로 데이터를 요청) ➔ DB`,
      },
      {
        type: 'h4',
        value: `<h4 class=${style.h4}>프론트 서버(웹 서버)</h4>`,
      },
      {
        type: 'normal',
        value: `다른말로 HTTP Server라고도 한다. 웹 브라우저의 파트너로서 서버의 정보를 제공하는 소프트웨어라고 할 수 있다.

        대표적으로 Nginx, Apache가 있다.
        
        웹 서버는 인터넷 네트워크 위에서 HTTP 프로토콜을 이용해 HTML, CSS, Javascript, image/mediafile과 같은 정적인 정보들을 웹 브라우저에 전송한다.
        
        아파치 소프트웨어 재단에서 만든 웹서버(web server)를 일컫는다.
        
        리눅스에서는 httpd 로 명명지어져 배포된다.
        
        정적인 데이터들 (html, css 이미지, 파일 등)에 대한 클라이언트의 요청을 데이터로 만들어서 응답한다.
        
        80 포트를 사용`,
      },
      {
        type: 'normal',
        value: `http 프로토콜 기반으로 web client (browser) 로부터의 요청을 서비스하는 기능을 담당하는 프로그램.
        80번 포트로 클라이언트 요청(POST,GET,DELETE)이 왔을때만 응답한다.
        정적인 데이터에 대한 처리를 담당한다.`,
      },
      {
        type: 'h4',
        value: `<h4 class=${style.h4}>웹서버를 이해하기에 가장 편했던 유투브 영상</h4>`,
      },
      {
        type: 'normal',
        value: `https://www.youtube.com/watch?v=Zimhvf2B7Es`,
      },
    ],
  },
  {
    id: 4,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 5,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 6,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 7,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 8,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 9,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 10,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 11,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 12,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 13,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 14,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 15,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 16,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 17,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 18,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 19,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 20,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 21,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 22,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 23,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 24,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 25,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 26,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 27,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 28,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 29,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 30,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 31,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
  {
    id: 32,
    title: '리액트와 불변성3',
    date: '2024-01-15',
    folder: Folder.Javascript,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: 'normal',
        value: `상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.`,
      },
    ],
  },
];

/**
 * @constant algorithmPostlist
 * @description post 데이타
 */
export const algorithmPostlist = [
  {
    id: 1,
    title: '배열의 길이를 2의 거듭제곱으로 만들기',
    date: '2023-12-24',
    folder: Folder.Algorithm,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: LEVEL.Lv1,
    post: [
      {
        type: 'h4',
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: 'normal',
        value: `정수 배열 arr이 매개변수로 주어집니다. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.`,
      },
      {
        type: 'h4',
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: 'normal',
        value: `1 ≤ arr의 길이 ≤ 1,000</br>
        1 ≤ arr의 원소 ≤ 1,000`,
      },
      {
        type: 'h4',
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: 'normal',
        value: `입출력 예 설명</br>
        입출력 예 #1</br></br>
        
        예제 1번의 arr의 길이는 6입니다. arr의 길이를 2의 정수 거듭제곱으로 만드는 방법은 0을 2개, 10개, 26개,..., 추가하는 방법이 있고 그중 최소한으로 0을 추가하는 방법은 2개를 추가하는 것입니다. 따라서 [1, 2, 3, 4, 5, 6, 0, 0]을 return 합니다.</br>
        입출력 예 #2</br></br>
        
        예제 2번의 arr의 길이는 4이고 이미 2의 정수 거듭제곱입니다. 따라서 뒤에 0을 추가하지 않아도 되므로 [58, 172, 746, 89]를 return 합니다.</br>`,
      },

      {
        type: 'code',
        value: `function solution(arr) {
   const length = arr.length;
   const totalLength = 2 ** Math.ceil(Math.log2(length));
   return [...arr, ...new Array(totalLength - length).fill(0)];
}`,
      },
    ],
  },
];
