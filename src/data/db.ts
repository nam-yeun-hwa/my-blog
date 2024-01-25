import { ComponentType, Folder, Level } from 'type/post';
import style from 'app/(layoutCase)/posts/[postid]/page.module.css';
import tableStyle from 'app/_component/detailPage/table.module.css';
/**
 * @constant totalPostlist
 * @description post 데이타
 */
export const totalPostlist = [
  {
    id: 1,
    title: '리액트와 불변성',
    date: '2024-01-15',
    folder: Folder.REACT,
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다. 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
    post: [
      {
        type: ComponentType.H2,
        value: `<h2 class=${style.h2}>리액트에서 불변성을 지켜야 하는 이유는?</h2>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까?</br></br>
        리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다. 아래처럼 기존 객체는 그대로 두고, 새로운 객체를 만들어 원하는 값을 덮어씌워야 한다.`,
      },
      {
        type: ComponentType.CODE,
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
        type: ComponentType.NORMAL,
        value: `리액트는 컴포넌트에 변화가 필요한지 필요하지 않은지 Props의 변화 통해 알 수 있는데 컴포넌트의 렌더링 성능을 최적화 하기 위해서는 이전에 컴포넌트가 들고 있던 Props와 새로 받아올 Props를 비교하는 과정이 필요하며 불변성을 유지시켜 주어야 한다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 불변성이 유지되지 않은 같은 참조를 가리키고 있는 데이터</h4>`,
      },
      {
        type: ComponentType.CODE,
        value: `const data = { id:1, text:'안녕하세요'};
    
const sameData = data;
sameData.text = '안녕하세요';
      
console.log(sameData === data); // true`,
      },
      {
        type: ComponentType.NORMAL,
        value: `sameData에 기존의 data를 대입하고 text 값을 수정 했다. 비록 새로운 이름을 선언 하긴 했지만 sameData와 data는 똑같은 객체를 가리키고 있다.</br></br>
        따라서 sameData.text 값을 바꾸면 당연히 data.text 값 또한 바뀌게 된다. sameData와 data는 완전히 일치하는 객채이기 때문에 이를 비교하면 결과는 true 이다.`,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `객체의 특정 프로퍼티만 변경하는 작업을 수행하면 리액트에서는 변경이 일어나지 않았다고 인식하여 리렌더링이 일어나지 않는다. <b>불변성을 지켜주면서 값을 전달해 주어야 한다.</b>`,
      },
      {
        type: ComponentType.H2,
        value: `<h2 class=${style.h2}>불변성을 유지하면서 상태를 업데이트하는 방법</h2>`,
      },
      {
        type: ComponentType.CODE,
        value: `const data = { id:1, text:'안녕하세요'};
const nextData = { ...data, text: '사요나라'};
      
console.log(nextData === data) // false`,
      },
      {
        type: ComponentType.NORMAL,
        value: `위 코드는 data 변수를 참조가 끊어진 새로운 값으로 생성 한다. 이번에 선언한 nextData는 완전히 새로운 객체 이다.</br></br>
        리액트는 상태가 변경되었는지 여부를 판단할 때 이전 상태와 현재 상태를 비교하여 기본적으로 부모로 부터 내려받는 Props나 내부 상태인 State가 변경되었을 때 컴포넌트를 다시 렌더링 하는 리렌더링 과정이 일어난다.<br/>
        `,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `React는 <b>Props</b>와 <b>State</b>의 변경을 불변성을 이용해서 감지한다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `객체의 참조를 복사한다는 점을 이용해 단순히 참조만 비교하는 얕은 비교를 이용해서 변경이 일어났는지 확인한다.</br></br>
        자바스크립트에서 참조 타입의 데이터인 경우 메모리 힙 영역에 저장이 되어 내부 프로퍼티를 변경해도 같은 참조를 갖고 있다.</br></br>
        따라서 객체의 특정 프로퍼티만 변경하는 작업을 수행하면 리액트에서는 변경이 일어나지 않았다고 인식하여 리렌더링이 일어나지 않는다. 따라서 리렌더링을 일으키려면 리액트에 이전의 참조와 다른 참조로 변경되었음을 알려야 한다.</br></br>
        상태가 변경되었는지를 정확하게 판단하기 위해서는 불변성을 유지해야 하며 불변성을 유지하지 않으면 리액트가 제대로 동작하지 않고 성능 최적화가 무력화될 수 있다.</br>
        `,
      },
    ],
  },
  {
    id: 2,
    title: '함수형 프로그래밍',
    date: '2024-01-15',
    folder: Folder.JAVASCRIPT,
    preview: `데이터를 함수를 이용해 새로운 데이터로 만들어 나가는 데이터 파이프 라인의 형태로 프로그래밍이 작동 하며 함수형 프로그래밍은 거의 모든 것을 순수 함수로 나누어 문제를 해결하는 기법으로, 작은 문제를 해결하기 위한 함수를 작성하여 가독성을 높이고 유지보수를 용이하게 해준다. (클로저, 하스켈, 리스프)`,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `데이터를 함수를 이용해 새로운 데이터로 만들어 나가는 데이터 파이프 라인의 형태로 프로그래밍이 작동 하며 함수형 프로그래밍은 거의 모든 것을 순수 함수로 나누어 문제를 해결하는 기법으로, 작은 문제를 해결하기 위한 함수를 작성하여 가독성을 높이고 유지보수를 용이하게 해준다. (클로저, 하스켈, 리스프)`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `
        객체지향 추상화의 최소단위가 객체인것 처럼 함수형은 함수가 최소 단위이다.
        함수 단위로 나누어지므로 재사용성이 높다.
        불변성을 지향하기에 동작을 예측하기 쉽고 부수효과(Side Effect)방지한다.
        부수효과(Side Effect)를 방지 한다는 것은 동시성 문제도 해결된다는 의미이다.
        객체지향은 제어흐름의 간접적인 전환에 부과되는 규율 함수형은 변수 할당에 부과되는 규율`,
      },
      {
        type: ComponentType.H2,
        value: `<h2 class=${style.h2}>함수형 vs. 절차형</h2>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `아래의 코드는 N개의 숫자가 공백 없이 쓰여있다. </br> 이 숫자를 모두합해서 출력하는 프로그램을 작성하시오.`,
      },
      {
        type: ComponentType.CODE,
        value: `예) "12345" -> 15`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 절차형 프로그래밍</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `절차형 프로그래밍은 프로그램을 일련의 절차나 명령어로 구성하는 방식입니다. 절차형 언어는 상태를 중심으로 프로그램을 작성하며, 명령어의 순서가 중요한 역할을 합니다. 프로시저(절차)를 작성하고 호출하여 문제를 해결하는 방식이 특징입니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `const stringNumber = "12345";
let sum = 0;
for(let i=0; i < stringNumber.length; i+=1){
  sum += stringNumber[i] - "0";
}`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 함수형 프로그래밍</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `함수형 프로그래밍은 함수를 주요 구성 요소로 삼는 프로그래밍 패러다임입니다. 함수형 언어는 상태 변경을 피하고, 불변성을 강조하며, 함수 조합성에 중점을 둡니다. 함수형 프로그래밍은 입력과 출력 간의 관계를 정의하는 함수들을 조합하여 프로그램을 작성하며, 부작용을 최소화하려는 경향이 있습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `const stringNumber = "12345";
let result = stringNumber.split(" ")
    .map((num) => parseInt(num))
    .reduce((acc, value) => acc + value, 0);`,
      },
      {
        type: ComponentType.H2,
        value: `<h2 class=${style.h2}>선언형 vs. 명령형</h2>`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 명령형</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `명령형 프로그래밍은 프로그램이 어떻게 수행되는지를 명시적으로 나타내는 스타일입니다. 대부분의 절차형 언어가 명령형 패러다임을 따릅니다. 프로그래머는 상태와 명령어의 순서에 중점을 두어 프로그램을 작성합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h3 class=${style.h3}>control Flow</h3>`,
      },
      {
        type: 'normal',
        value: `Goto </br>
        if/Then/Else</br>
        Switch/Case</br>
        For/While`,
      },
      {
        type: ComponentType.CODE,
        value: `const stringNumber = "12345";
let result = stringNumber.split(" ")
    .map((num) => parseInt(num))
    .reduce((acc, value) => acc + value, 0);`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 선언형</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `선언형 프로그래밍은 원하는 결과를 설명하고, 시스템이 그 결과를 어떻게 달성할지에 대한 구체적인 단계나 순서를 명시하지 않는 스타일이다. 선언형 프로그래밍의 예로 SQL, HTML, CSS 등이 있다. 프로그래머는 "무엇(What)"을 명시하고, 해결방법은 컴퓨터에게 위임하는 방법 이다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h3 class=${style.h3}>control Flow</h3>`,
      },
      {
        type: 'data Flow',
        value: `Stateless</br>
        Recursion</br>
        pipe`,
      },
      {
        type: ComponentType.CODE,
        value: `[1,2,3,4,5].filter(v => v% === 0)
  .forEach(v => console.log(v));`,
      },
      {
        type: ComponentType.H2,
        value: `<h2 class=${style.h2}>함수형 프로그래밍의 장점</h2>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `함수형 프로그래밍은 다양한 장점을 가지고 있어서 많은 프로그래머들이 이를 선호하는 이유가 있습니다. 몇 가지 주요 장점은 다음과 같습니다.`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `
        불변성 (Immutability): 함수형 프로그래밍에서는 데이터를 변경할 수 없는 불변의 구조로 다룹니다. 이로써 부작용이 감소하고, 코드의 예측 가능성과 안정성이 높아집니다. 또한, 병렬 처리와 캐싱 등의 최적화가 쉬워집니다.
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
    folder: Folder.JAVASCRIPT,
    preview: `브라우저 작동원리에 대해 공부하던 중 의문점이 발생했다

    <b>"브라우저 주소창에 URL을 입력하면 브라우저는 HTTP GET 요청을 URL 프론트 서버로 전송한다.
    보통 프론트 엔드가 있는 웹 서비스의 경우 HTML 파일을 결과로 반환한다."</b>
    
    라는 부분인데 프론트 서버의 존재가 정확히 어떤 일을 하는 것인지 궁금해 졌다.`,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `브라우저 작동원리에 대해 공부하던 중 의문점이 발생했다.</br></br>

        <b>"브라우저 주소창에 URL을 입력하면 브라우저는 HTTP GET 요청을 URL 프론트 서버로 전송한다.
        보통 프론트 엔드가 있는 웹 서비스의 경우 HTML 파일을 결과로 반환한다."</b>
        
        라는 부분인데 프론트 서버의 존재가 정확히 어떤 일을 하는 것인지 궁금해 졌다..</br>`,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `프론트 서버는 어떤 주소에 대한 요청을 보냈을 때, Markup Language (HTML,CSS, Javascript)를 응답해서 사용자에게 GUI 환경을 제공해준다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `→ react, next, styled-components, redux 등
        <img href="https://velog.velcdn.com/images/bunny/post/f81790cf-1b26-4a2e-88a5-c6bc23fe7955/image.jpg"/></br></br>
        프론트엔드 개발자가 React 라이브러리를 활용하여 클라이언트(브라우저)에게 제공할 Javascript 파일들을 ES6 + JSX 문법으로 작성하게 되면, Babel 등의 컴파일러가 모든 브라우저에서 호환 가능한 문법으로 변환해준다.</br></br>
        또한 Webpack 등의 모듈 번들러가 HTML, CSS, Javascript 파일들을 효율적인 방식으로 적절히 번들링하여 준비해둔다.</br></br>
        클라이언트가 요청을 보낼 때마다 프론트 서버는 미리 준비해둔 HTML, CSS, Javascript 파일들을 클라이언트에게 제공한다. 그러면 클라이언트(브라우저)는 전달받은 Javascript를 실행해 페이지에 렌더링을 시작한다. 즉, React 라이브러리를 활용했던 Javascript 코드는 동적으로 DOM에 렌더링 해준다.
        `,
      },
      {
        type: ComponentType.H2,
        value: `<h2 class=${style.h2}>브라우저의 전체 흐름</h2>`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 SSR</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `SSR 전통적인 웹사이트에서는 브라우저에서는 프론트 서버로 GET 요청을 하고 프론트 서버에서 백엔드 서버로 데이터 요청을 하여 백엔드 서버는 데이터베이스에서 데이터를 받아와서 프론트서버로 데이터를 보내주고 프론트 서버는 HTML과 데이터를 합쳐서 브라우저에게 보내준다.</br></br>
        브라우저 ➔ 프론트 서버 ➔ 백엔드 서버 ➔ DB`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 SPA</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `SPA 에서는 프론트 서버에서 정적파일들을 먼저 받아(HTML, CSS, Javascript) 화면을 그리고 데이터를 백엔서 서버에서 받아오는동안 로딩바를 화면에 표시해 주도록 한다.</br></br>
        브라우저 ➔ 프론트 서버에서 정적파일들을 받아옴(HTML, CSS, Javascript) </br> 브라우저 ➔ 백엔드 서버(프론트 서버를 거치지 않고 백엔드 서버로 바로 데이터를 요청) ➔ DB`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 프론트 서버(웹 서버)</h4>`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `
        다른말로 HTTP Server라고도 한다. 웹 브라우저의 파트너로서 서버의 정보를 제공하는 소프트웨어라고 할 수 있다.
        대표적으로 Nginx, Apache가 있다.
        웹 서버는 인터넷 네트워크 위에서 HTTP 프로토콜을 이용해 HTML, CSS, Javascript, image/mediafile과 같은 정적인 정보들을 웹 브라우저에 전송한다.
        아파치 소프트웨어 재단에서 만든 웹서버(web server)를 일컫는다.
        리눅스에서는 httpd 로 명명지어져 배포된다.
        정적인 데이터들 (html, css 이미지, 파일 등)에 대한 클라이언트의 요청을 데이터로 만들어서 응답한다.
        80 포트를 사용`,
      },
      {
        type: ComponentType.NORMAL,
        value: `http 프로토콜 기반으로 web client (browser) 로부터의 요청을 서비스하는 기능을 담당하는 프로그램.
        80번 포트로 클라이언트 요청(POST,GET,DELETE)이 왔을때만 응답한다.
        정적인 데이터에 대한 처리를 담당한다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 웹서버를 이해하기에 가장 편했던 유투브 영상</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `https://www.youtube.com/watch?v=Zimhvf2B7Es`,
      },
    ],
  },
  {
    id: 4,
    title: '브라우저에서 이벤트가 발생하고 전파되는 방식',
    date: '2024-01-15',
    folder: Folder.JAVASCRIPT,
    preview: `이벤트 버블링과 이벤트 캡쳐는 브라우저에서 이벤트가 발생하고 전파되는 방식을 설명하는 개념입니다. `,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 이벤트 버블링 - Event Bubbling</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `이벤트 버블링은 특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 요소들로 전달되어 가는 특성을 의미합니다. 이는 이벤트가 가장 하위의 요소에서 시작하여 상위 요소로 전파되는 방식입니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `&lt;body>
  &lt;div class="layer1">
    &lt;div class="layer2">
      &lt;div class="layer3">
        &lt;/div>
     &lt;/div>
   &lt;/div>
 &lt;/body>

 &lt;script>
  var divList = document.querySelectorAll('div');
  divList.forEach(function(div) {
    div.addEventListener('click', logEvent);
  });

  function logEvent(event) {
    console.log(event.currentTarget.className);
  }
&lt;/script>
      `,
      },
      {
        type: ComponentType.NORMAL,
        value: `클릭한 것이 가장 하위의 div 태그인 "layer3"이라면, 콘솔에는 <b>"layer3 -> layer2 -> layer1" </b> 순서로 출력됩니다. 이는 이벤트가 하위에서 상위 요소로 전파되는 특성을 보여줍니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 이벤트 캡쳐 - Event Capture</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `이벤트 캡쳐는 이벤트 버블링과는 반대 방향으로 이벤트가 전파되는 방식입니다. 이는 이벤트가 최상위 요소에서 시작하여 가장 하위의 요소로 향하는 방식입니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `&lt;body>
&lt;div class="layer1">
  &lt;div class="layer2">
    &lt;div class="layer3">
      &lt;/div>
    &lt;/div>
  &lt;/div>
&lt;/body>

&lt;script>
var divList = document.querySelectorAll('div');
divList.forEach(function(div) {
  div.addEventListener('click', logEvent, true);
});

function logEvent(event) {
  console.log(event.currentTarget.className);
}
&lt;/script>
      `,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `여기서는 addEventListener 함수의 <b>세 번째 인자로 true</b>를 전달하여 이벤트 캡처링을 활성화합니다. </br> 클릭한 것이 최상위의 div 태그인 "layer1"이라면, 콘솔에는 "layer1 -> layer2 -> layer3" 순서로 출력됩니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 stopPropagation()</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `stopPropagation() 메서드는 이벤트의 전파를 중지시키는 역할을 합니다. 만약 이를 사용하면 이벤트가 현재 요소에서 더 이상 상위 또는 하위로 전파되지 않습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `function logEvent(event) {
  event.stopPropagation();
  console.log(event.currentTarget.className);
}`,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `이렇게 사용하면 클릭한 요소의 이벤트만 발생하고 상위 또는 하위 요소로의 이벤트 전파가 중지됩니다.`,
      },
    ],
  },
  {
    id: 5,
    title: '일반함수 VS 화살표 함수의 this 바인딩',
    date: '2023-03-20',
    folder: Folder.JAVASCRIPT,
    preview: `일반 함수와 화살표 함수의 this 바인딩에 대한 차이에 대한 내용을 약간 각색하여 정리하겠습니다. 일반 함수에서 this는 함수가 호출될 때 동적으로 결정되며, 호출된 컨텍스트에 바인딩됩니다.
    내부 함수의 this는 전역 객체(window)를 가리키므로 undefined 출력.`,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 일반 함수</h4>`,
      },
      {
        type: ComponentType.CODE,
        value: `const foo = function () {
  console.log('일반 함수');
}`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 화살표 함수</h4>`,
      },
      {
        type: ComponentType.CODE,
        value: `const foo = () => console.log('화살표 함수');`,
      },
      {
        type: ComponentType.NORMAL,
        value: `두 함수는 기능적으로 완전히 동일하게 작동합니다.`,
      },
      {
        type: ComponentType.H2,
        value: `<h4 class=${style.h2}>📝 JavaScript 일반 함수의 this 바인딩</h4>`,
      },
      {
        type: ComponentType.CODE,
        value: `const cat = {
  name: 'meow',
  foo1: function() {
    const foo2 = function() {
      console.log(this.name); // undefined
    }
    foo2();
  }
};

cat.foo1(); // undefined
        `,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `일반 함수에서 this는 함수가 호출될 때 함수가 어디에서 호출되었는지에 따라 동적으로 결정되며, 호출된 컨텍스트에 바인딩됩니다.
        전역스코프에서 실행(선언)이 되어 foo2 내부의 this는 지정되지 않아서 곧 전역 객체를 가리키게 됩니다.
        내부 함수의 this는 전역 객체(window)를 가리키므로 전역 객체에 name이란 속성은 존재하지 않아 undefined 출력 됩니다.
        이 내부함수가 global에서도 제대로 작동하기 위해서 우리는 저 내부함수에 객체의 this를 바인딩 할 필요가 있을 것입니다.`,
      },
      {
        type: ComponentType.H2,
        value: `<h2 class=${style.h2}>📝 JavaScript 화살표 함수의 this 바인딩</h2>`,
      },
      {
        type: ComponentType.CODE,
        value: `const cat = {
  name: 'meow',
  foo1: function() {
    const foo2 = () => {
      console.log(this.name);
    }
    foo2();
  }
};

cat.foo1(); // meow
`,
      },
      {
        type: ComponentType.NORMAL,
        value: `위 코드와 달라진 점은 cat 객체의 내부함수 foo2가 화살표 함수로 선언됐다는 점 뿐입니다. 그런데 이번엔 우리가 의도한대로 meow가 잘 찍혔습니다. 어떻게 가능한걸까요? </br></br>
        화살표 함수에서 this는 함수가 정의된 스코프에서 상속됩니다. (Lexical this) 내부 함수의 this는 외부 함수의 this를 상속받아 cat을 가리키므로 meow 출력 됩니다.`,
      },
      {
        type: ComponentType.H2,
        value: `<h4 class=${style.h2}>addEventListener()의 콜백함수</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `원래 addEventListener의 콜백함수에서는 this에 해당 이벤트 리스너가 호출된 엘리먼트가 바인딩되도록 정의되어 있습니다. 그러나 화살표 함수를 사용할 경우, 이미 this의 값이 정해져 있는 콜백함수의 경우 기존 바인딩 값이 사라지고 상위 스코프(이 경우엔 전역 객체)가 바인딩되기 때문에 의도했던 대로 동작하지 않을 수 있습니다. 물론 상위 스코프의 속성들을 쓰려고 의도한 경우라면 사용할 수 있습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `const button = document.getElementById('myButton');

// 화살표 함수 사용 (비권장)
button.addEventListener('click', () => {
  console.log(this); // Window
  this.innerHTML = 'clicked'; // 전역 객체(window)의 innerHTML을 변경
});

// 일반 함수 사용
button.addEventListener('click', function() {
    console.log(this); // button 엘리먼트
    this.innerHTML = 'clicked'; // 해당 버튼의 innerHTML을 변경
});    
`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `화살표 함수의 경우, this가 해당 이벤트 리스너를 호출한 문맥이 아닌 상위 스코프의 this를 가리키므로 비추천합니다.
        일반 함수를 사용하면 this는 해당 이벤트가 발생한 엘리먼트를 가리키며, 버튼의 innerHTML을 변경하는 등의 작업이 의도한 대로 동작합니다.
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `위의 예시에서는 화살표 함수를 사용할 경우 this가 Window를 가리키므로 버튼의 innerHTML을 변경하는 동작이 의도와 다릅니다. 따라서 일반 함수를 사용하여 콜백함수를 정의하는 것이 바람직합니다.
        `,
      },
    ],
  },
  {
    id: 6,
    title: '중첩된 객체를 가진 객체의 깊은 복사 하는 방법',
    date: '2023-03-03',
    folder: Folder.JAVASCRIPT,
    preview: `키-값 쌍이 여러 개인 객체가 있습니다. 문제는 객체가 완전하지 않다는 것입니다. 이 문제는 객체에 기존데이터가 있는 상태에서 새로운 필드를 추가하는 경우나 외부 API에서 데이터를 가져와 현재 데이터 모델에 연결해야 하는 경우에 자주 발생합니다. 어느 쪽이든 문제가 되는 부분은 같습니다.`,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `키-값 쌍이 여러 개인 객체가 있습니다. 문제는 객체가 완전하지 않다는 것입니다. 이 문제는 객체에 기존데이터가 있는 상태에서 새로운 필드를 추가하는 경우나 외부 API에서 데이터를 가져와 현재 데이터 모델에 연결해야 하는 경우에 자주 발생합니다. 어느 쪽이든 문제가 되는 부분은 같습니다. 새로운 필드 또는 데이터로 채워지지 않는 나머지 부분을 기본값 객체로 채워야 한다는 점입니다.</br></br>

        기본값을 설정하면서 원래의 데이터를 유지하는 새로운 객체를 생성하려면 어떻게 해야 할까요?</br>
        당연히 부수 효과나 조작은 발생하지 않아야 합니다.`,
      },

      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 Object.assign()을 이용한 값이 중첩되지 않은 객체의 복사 (Shallow Copy)</h4>`,
      },
      {
        type: ComponentType.CODE,
        value: `const default = {
  author:'',
  title:'',
  year:2017,
  rating:null
};

const book = {
  author : 'joe Morgan',
  title : 'Simplifying Javascript'
};

const updated = Object.assign({}, defaults, book);
console.log(updated);

//{ 
//  author : 'joe Morgan',
//  title : 'Simplifying Javascript,
//  year:2017,
//  rating:null
//}`,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `첫번째 객체에 빈 객체를 사용하면 빈객체에 새로운 값이 갱신되어 반환됩니다.</br>다른 객체에는 조작이 발생하지 않습니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `위의 코드는 defaults와 book 객체를 병합하여 얕은 복사를 수행합니다. 하지만 details 객체는 참조 관계가 유지되므로 shallowCopy 객체를 수정하면 defaults나 book에도 영향을 미칠 수 있습니다.</br></br>`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 Object.assign()을 이용한 값이 중첩된 객체의 복사 (Deep Copy)</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `중첩된 객체가 있는 경우에 Object.assign()을 이용해서 복사하도록 하면 모든 것을 갱신할 수 있습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `const defaultEmployee = {
  name : {
        first : '',
          last : ''
        }
    years : 0,
};
const employee = Object.assign({}, defaultEmployee);`,
      },
      {
        type: ComponentType.NORMAL,
        value: `위의 코드에서 name 속성은 복사 할수 없습니다. 실제로 키 name에 할당된 독립적인 객체에 대해 참조만 복사 됩니다. 중첩된 객체는 해당 객체를 담고 있는 객체와 독립적으로 존재합니다.</br></br>
        중첩된 객체를 담고 있는 객체가 가지고 있는 것은 중첩된 객체에 대한 참조 뿐입니다. 참조에 대한 복사만으로는 중첩된 객체에 깊은 복사를 적용할 수 없습니다. 단지 참조의 위치를 복사하는 것에 불과 합니다.</br></br>
        
        따라서 원본 객체 또는 복사한 객체 중 어디서라도 중첩된 객체의 값을 변경하면 원본 객체와 복사한 객체 모두 변경됩니다.`,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `<b>중첩된 객체</b>가 있는 경우에 <b>Object.assign()</b>을 이용해서 복사하도록 하면 모든 것을 갱신할 수 있습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `const defaultEmployee = {
  name : {
           first : '',
           last : ''
         }
  years : 0,
};

const employee2 = Object.assign(
  {},
    defaultEmployee,
    {
      name : Object.assign({} , defaultEmployee.name)
    }
);`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 Lodash를 이용한 깊은 복사 cloneDeep</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `Lodash 라이브러리는 깊은 복사를 수행하는 cloneDeep 메서드를 제공합니다. Lodash는 일반적인 유틸리티 함수들을 모아놓은 라이브러리로서, 깊은 복사를 쉽게 처리할 수 있게 도와줍니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `const _ = require('lodash');

const defaults = {
  author: '',
  title: '',
  details: {
    pages: 0,
    language: ''
  }
};

const book = {
  author: 'John Doe',
  title: 'Sample Book',
  details: {
    pages: 200,
    language: 'English'
  }
};

const deepCopyResult = _.cloneDeep(defaults);
_.merge(deepCopyResult, book);

console.log(deepCopyResult);`,
      },
      {
        type: ComponentType.NORMAL,
        value: `cloneDeep 함수를 사용하면 중첩된 객체까지 깊은 복사가 이루어집니다. 이후 merge 함수를 사용하여 두 객체를 병합할 수 있습니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 JSON.stringify() 이용한 깊은 복사 cloneDeep</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `JSON.stringify()와 JSON.parse()를 이용하여 객체를 문자열로 변환하고 다시 파싱하여 깊은 복사를 수행할 수 있습니다. 단, 이 방법은 함수나 특별한 타입의 객체에는 적용되지 않을 수 있습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `const originalObject = {
  nestedObject: {
    key: 'value'
  },
  otherKey: 'otherValue'
};

const deepCopy = JSON.parse(JSON.stringify(originalObject));
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `하지만 이방법은 사용하기는 쉽지만 <b>다른 방법에비해 아주 느리다</b>고 알려져있다.`,
      },
    ],
  },
  {
    id: 7,
    title: 'const, let, var',
    date: '2023-02-21',
    folder: Folder.JAVASCRIPT,
    preview: `let은 재할당 할 수 있다는 점에서 var와 유사합니다. 그렇지만 var는 어휘적 유효범위(lexical scope)를 따르는 반면 let은 블록 유효범위를 따릅니다. 일단 블록 유효범위 변수는 if블록이나 for 반복문 같은 블록의 내부에만 존재한다고 알아두세요. 블록 밖에서는 블록 유효범위에 접근 할 수 없습니다. 즉, 변수를 선언한 중괄호를 벗어나면 변수가 존재하지 않습니다.`,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 블록유효범위를 따르는 const</h4>`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `블록의 문맥 내에서 재할당할 수 없는 변수 입니다.
        const는 한 번 선언되면 재할당이 불가능한 변수를 선언하는 데 사용됩니다.
        그러나 const로 선언된 변수가 가리키는 값(객체 또는 배열 등)의 내부는 수정될 수 있습니다. 이는 변수가 참조하는 메모리 주소가 변경되지 않는다는 의미입니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `const discountable = [];

for(let i = 0; i < cart.length; i++){
    discountable.push(i);
}`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 블록유효범위를 따르는 let</h4>`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `let은 변수를 선언하고, 필요에 따라 재할당할 수 있는 키워드입니다.
        let은 블록 유효범위(block scope)를 가지며, 블록 외부에서는 해당 변수에 접근할 수 없습니다.
        같은 블록 내에서 같은 이름의 변수를 재선언할 수 없습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `if (true) {
    let blockScopedVar = 'I am a block-scoped variable';
    console.log(blockScopedVar); // 유효
}

console.log(blockScopedVar); // 에러: blockScopedVar is not defined`,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `var를 사용하는 경우에는 같은 유효범위에서 같은 이름의 변수를 다시 선언할 수 잇지만</br>
        let과 const는 같은 이름이 변수를 다시 선언할 수 없습니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 어휘적 유효범위(lexical scope)를 따르는 var</h4>`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `var는 어휘적 유효범위(lexical scope)를 가지며, 함수 유효범위를 따릅니다.
        함수 내에서 선언된 변수는 함수 전체에서 접근 가능하며, 함수 외부에서는 변수에 접근할 수 없습니다.
        같은 함수 내에서 같은 이름의 변수를 재선언할 수 있습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `function exampleFunction() {
    var lexicalScopedVar = 'I am a lexical-scoped variable';
    console.log(lexicalScopedVar); // 유효
}

console.log(lexicalScopedVar); // 에러: lexicalScopedVar is not defined`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 var를 사용하여 함수 유효범위를 따르는 클로저</h4>`,
      },
      {
        type: ComponentType.CODE,
        value: `function addClick(items) {
    for (var i = 0; i < items.length; i++) {
        items[i].onClick = function() {
            return i;
        };
    }
    return items;
}

const example = [{}, {}];
const clickSet = addClick(example);
console.log(clickSet[0].onClick()); // 2 (모든 onClick 함수가 마지막 값인 2를 참조)
      `,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `<b>var를 사용</b>한 경우 함수 내부에서 만든 <b>클로저에서 외부 변수를 참조할 때 주의</b>가 필요합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 let을 사용하여 클로저 문제를 해결한 코드</h4>`,
      },
      {
        type: ComponentType.CODE,
        value: `function addClick(items) {
    for (let i = 0; i < items.length; i++) {
        items[i].onClick = function() {
            return i;
        };
    }
    return items;
}

const example = [{}, {}];
const clickSet = addClick(example);
console.log(clickSet[0].onClick()); // 0`,
      },
      {
        type: ComponentType.NORMAL,
        value: `let을 사용하면 블록 내에서 선언된 i 변수가 블록 유효 범위를 가지게 됩니다. 따라서 각 onClick 함수는 고유한 i 값을 가지며 클로저로서의 역할을 수행합니다. 위 코드에서 clickSet[0].onClick()를 호출하면 0이 반환됩니다. 이는 let을 사용하여 각각의 클로저가 자신만의 i를 기억하게 되어 마지막 값인 2가 아니라 각각의 인덱스를 반환하게 됐기 때문입니다.`,
      },
    ],
  },
  {
    id: 8,
    title: '게시물 등록',
    date: '2024-01-15',
    folder: Folder.JAVASCRIPT,
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
    folder: Folder.ALGORITHM,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: Level.Lv1,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: ComponentType.H4,
        value: `정수 배열 arr이 매개변수로 주어집니다. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `1 ≤ arr의 길이 ≤ 1,000</br>
        1 ≤ arr의 원소 ≤ 1,000`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <tr>
              <th>arr</th>
              <th>result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>[1, 2, 3, 4, 5, 6]</td>
              <td>[1, 2, 3, 4, 5, 6, 0, 0]</td>
            </tr>
            <tr>
              <td>[58, 172, 746, 89]</td>
              <td>[58, 172, 746, 89]</td>
            </tr>
          </tbody>
        </table>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `
        입출력 예 설명</br>
        입출력 예 #1</br></br>
        
        예제 1번의 arr의 길이는 6입니다. arr의 길이를 2의 정수 거듭제곱으로 만드는 방법은 0을 2개, 10개, 26개,..., 추가하는 방법이 있고 그중 최소한으로 0을 추가하는 방법은 2개를 추가하는 것입니다. 따라서 [1, 2, 3, 4, 5, 6, 0, 0]을 return 합니다.</br>
        입출력 예 #2</br></br>
        
        예제 2번의 arr의 길이는 4이고 이미 2의 정수 거듭제곱입니다. 따라서 뒤에 0을 추가하지 않아도 되므로 [58, 172, 746, 89]를 return 합니다.</br>`,
      },

      {
        type: ComponentType.CODE,
        value: `function solution(arr) {
   const length = arr.length;
   const totalLength = 2 ** Math.ceil(Math.log2(length));
   return [...arr, ...new Array(totalLength - length).fill(0)];
}`,
      },
    ],
  },
  {
    id: 2,
    title: '괄호 회전하기',
    date: '2023-12-24',
    folder: Folder.ALGORITHM,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: Level.Lv1,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다. </br>
        (), [], {} 는 모두 올바른 괄호 문자열입니다.</br>
만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.</br>
만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.</br></br>
대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.</br>`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `s의 길이는 1 이상 1,000 이하입니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <tr>
              <th>s</th>
              <th>result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>"{}"</td>
              <td>3</td>
            </tr>
            <tr>
              <td>"}]()[{"</td>
              <td>2</td>
            </tr>
            <tr>
              <td>"[)(]"</td>
              <td>0</td>
            </tr>
            <tr>
              <td>"}}}"</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>`,
      },
      {
        type: ComponentType.CODE,
        value: `// candidate
// [](){}
// ](){}[
// (){}[]
// ){}[](
// {}[]()
// }[](){


function solution(s) {
    const stack = [];
    let result = 0;
    let is_right = true;
    
    //짝이 안맞으면 0 리턴
    if (s.length % 2 === 1) return 0;

    for (let i = 0; i < s.length; i++){
        let candidate = s.slice(i) + s.slice(0, i);

        is_right = true;
        for (let word of candidate) {
            if (word === "(" || word === "{" || word === "[") {
                stack.push(word);
            }
            else {
                let last = stack.pop();
                if (last === "(" && word === ")") continue;
                if (last === "{" && word === "}") continue;
                if (last === "[" && word === "]") continue;
    
                is_right = false;
                break;
            }
        }
        if (is_right) result++;
    }
    return result;
}`,
      },
    ],
  },
  {
    id: 3,
    title: '최대공약수와 최소공배수, N개의 최소공배수',
    date: '2023-12-24',
    folder: Folder.ALGORITHM,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: Level.Lv1,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `두 수는 1이상 1000000이하의 자연수입니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table class=${tableStyle.table}>
          <thead>
            <tr class=${tableStyle.tr}>
              <th class=${tableStyle.th}>n</th>
              <th class=${tableStyle.th}>m</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td class=${tableStyle.td}>3</td>
              <td class=${tableStyle.td}>2</td>
            </tr>
            <tr class=${tableStyle.tr}>
              <td class=${tableStyle.td}>12</td>
              <td class=${tableStyle.td}>5</td>
            </tr>
          </tbody>
        </table>
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `입출력 예 #1</br>
        위의 설명과 같습니다.</br></br>
        
        입출력 예 #2</br>
        자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.`,
      },

      {
        type: ComponentType.CODE,
        value: `function solution(n, m) {
          let 최대공약수 = 0;
         
         const [min, max] = [n, m].sort((a, b) => a - b);
     
         for (let i = 1; i <= min; i++) {
            if (min % i === 0 && max % i === 0) 최대공약수 = i;
         }
         
         const 최소공배수 = (min * max) / 최대공약수;
     
         return [최대공약수, 최소공배수];
     }`,
      },
    ],
  },
  {
    id: 4,
    title: '배열 만들기 2',
    date: '2023-12-24',
    folder: Folder.ALGORITHM,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: Level.Lv1,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
</br></br>
        만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `1 ≤ l ≤ r ≤ 1,000,000`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <tr>
              <th>L</th>
              <th>R</th>
              <th>result</th>
            </tr>
          <thead>
          <tbody>
          <tr>
            <td>5</td>
            <td>555</td>
            <td>[5, 50, 55, 500, 505, 550, 555]</td>
          </tr>
          <tr>
            <td>10</td>
            <td>20</td>
            <td>[-1]</td>
          </tr>
          </tbody>
        </table>
        `,
      },

      {
        type: ComponentType.NORMAL,
        value: `입출력 예 #1</br></br>

        5 이상 555 이하의 0과 5로만 이루어진 정수는 작은 수부터 5, 50, 55, 500, 505, 550, 555가 있습니다. 따라서 [5, 50, 55, 500, 505, 550, 555]를 return 합니다.</br>
        입출력 예 #2</br></br>
        
        10 이상 20 이하이면서 0과 5로만 이루어진 정수는 없습니다. 따라서 [-1]을 return 합니다.`,
      },

      {
        type: ComponentType.CODE,
        value: `// l 이상 r이하
// 오름차순으로 저장한 배열을 return 
// 정수가 없다면, -1
function everyFunction(value){
        return value < 38;
}

function solution(l, r) {
    var answer = [];
    
    for(let i=l; i<=r; i++){
        // 숫자 "0"과 "5"로만 이루어진 모든 정수
        
        if(i%5 !== 0) continue;
      
        if(![...String(i)].every(a => a === '5' || a === '0')) continue;
        
        answer.push(i);
    }
    
    return answer.length > 0 ? answer : [-1];
}`,
      },
    ],
  },
  {
    id: 5,
    title: '겹치는 선분의 길이',
    date: '2023-12-24',
    folder: Folder.ALGORITHM,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: Level.Lv1,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

        lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.</br>
        <img src="https://velog.velcdn.com/images/bunny/post/04db5f2c-9735-4388-ba9d-45c578a0b2c5/image.png"/></br>
        선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.
        `,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `lines의 길이 = 3</br>
        lines의 원소의 길이 = 2</br>
        모든 선분은 길이가 1 이상입니다.</br>
        lines의 원소는 [a, b] 형태이며, a, b는 각각 선분의 양 끝점 입니다.</br>
        100 ≤ a < b ≤ 100</br>`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <tr>
              <th>lines</th>
              <th>result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>[[0, 1], [2, 5], [3, 9]]</td>
              <td>2</td>
            </tr>
            <tr>
            <td>[[-1, 1], [1, 3], [3, 9]]</td>
            <td>0</td>
          </tr>
           <tr>
              <td>[[0, 5], [3, 9], [1, 10]]</td>
              <td>8</td>
            </tr>
          </tbody>
        </table>
  `,
      },
      {
        type: ComponentType.NORMAL,
        value: `입출력 예 #1</br></br>

        두 번째, 세 번째 선분 [2, 5], [3, 9]가 [3, 5] 구간에 겹쳐있으므로 2를 return 합니다.</br>
        입출력 예 #2</br>
        </br>
        겹친 선분이 없으므로 0을 return 합니다.</br>
        입출력 예 #3</br></br>
        
        첫 번째와 두 번째 선분이 [3, 5] 구간에서 겹칩니다.</br>
        첫 번째와 세 번째 선분 [1, 5] 구간에서 겹칩니다.</br>
        두 번째와 세 번째 선분 [3, 9] 구간에서 겹칩니다.</br>
        따라서 [1, 9] 구간에 두 개 이상의 선분이 겹쳐있으므로, 8을 return 합니다.`,
      },

      {
        type: ComponentType.CODE,
        value: `function solution(lines) {
  const table = Array.from({ length: 200 }, () => new Set())
  lines.forEach(([a, b], index) => {
    for (let i = a; i < b; i++) {
      table[i + 100].add(index)
    }
  })

  let count = 0
  table.forEach((line) => {
    if ([...line].length > 1) count++
  })
  return count
}`,
      },
    ],
  },
  {
    id: 6,
    title: '완주하지 못한 선수',
    date: '2023-12-24',
    folder: Folder.ALGORITHM,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: Level.Lv1,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.</br></br>

        마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
        `,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다. </br>
        completion의 길이는 participant의 길이보다 1 작습니다.</br>
        참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.</br>
        참가자 중에는 동명이인이 있을 수 있습니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <th>participant</th>
            <th>completion</th>
            <th>return</th>
          </thead>
          <tbody>
            <tr>
              <td>["leo", "kiki", "eden"]</td>
              <td>["eden", "kiki"]</td>
              <td>"leo"</td>
            </tr>
            <tr>
              <td>["marina", "josipa", "nikola", "vinko", "filipa"]</td>
              <td>["josipa", "filipa", "marina", "nikola"]</td>
              <td>"vinko"</td>
            </tr>
            <tr>
            <td>["mislav", "stanko", "mislav", "ana"]</td>
            <td>["stanko", "ana", "mislav"]</td>
            <td>"mislav"</td>
          </tr>
          </tbody>
        </table>
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `예제 #1
        "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다. </br></br>
        
        예제 #2</br>
        "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.</br></br>
        
        예제 #3</br>
        "mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `function solution(participant, completion) {
    completion.sort();
    participant.sort();
    
    return participant.find((참가자,i) => {
        let 완주자 = completion[i];
        if(!완주자 || 참가자 !== 완주자) return 참가자;
    });
}`,
      },
    ],
  },
  {
    id: 7,
    title: '로또의 최고 순위와 최저 순위',
    date: '2023-12-24',
    folder: Folder.ALGORITHM,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: Level.Lv1,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `로또 6/45(이하 '로또'로 표기)는 1부터 45까지의 숫자 중 6개를 찍어서 맞히는 대표적인 복권입니다. 아래는 로또의 순위를 정하는 방식입니다. 
        `,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <th>순위</th>
            <th>당첨 내용</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>6개 번호가 모두 일치</td>
            </tr>
            <tr>
              <td>2</td>
              <td>5개 번호가 일치</td>
            </tr>
            <tr>
              <td>3</td>
              <td>4개 번호가 일치</td>
            </tr>
            <tr>
              <td>4</td>
              <td>3개 번호가 일치</td>
            </tr>
            <tr>
              <td>5</td>
              <td>2개 번호가 일치</td>
            </tr>
            <tr>
              <td>6</td>
              <td>(낙첨) 그 외</td>
            </tr>
          </tbody>
        </table>
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다. 하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다. 당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
        알아볼 수 없는 번호를 0으로 표기하기로 하고, 민우가 구매한 로또 번호 6개가 44, 1, 0, 0, 31 25라고 가정해보겠습니다. 당첨 번호 6개가 31, 10, 45, 1, 6, 19라면, 당첨 가능한 최고 순위와 최저 순위의 한 예는 아래와 같습니다. 
        `,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <tr>
              <th>당첨 번호</th>
              <th>31</th>
              <th>10</th>
              <th>45</th>
              <th>1</th>
              <th>6</th>
              <th>19</th>
              <th>결과</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>최고 순위 번호</td>
              <td>31</td>
              <td>0→10</td>
              <td>44</td>
              <td>1</td>
              <td>0→6	</td>
              <td>25</td>
              <td>4개 번호 일치, 3등</td>
            </tr>
            <tr>
              <td>최저 순위 번호</td>
              <td>31</td>
              <td>0→11</td>
              <td>44</td>
              <td>1	</td>
              <td>0→7	</td>
              <td>25</td>
              <td>2개 번호 일치, 5등</td>
            </tr>
          </tbody>
        </table>
        `,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `lottos는 길이 6인 정수 배열입니다. </br>
        lottos의 모든 원소는 0 이상 45 이하인 정수입니다.</br>
        0은 알아볼 수 없는 숫자를 의미합니다.</br>
        0을 제외한 다른 숫자들은 lottos에 2개 이상 담겨있지 않습니다.</br>
        lottos의 원소들은 정렬되어 있지 않을 수도 있습니다.</br>
        win_nums은 길이 6인 정수 배열입니다.</br>
        win_nums의 모든 원소는 1 이상 45 이하인 정수입니다.</br>
        win_nums에는 같은 숫자가 2개 이상 담겨있지 않습니다.</br>
        win_nums의 원소들은 정렬되어 있지 않을 수도 있습니다.`,
      },
      {
        type: 'h4',
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <tr>
              <th>lottos</th>
              <th>win_nums</th>
              <th>result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>[44, 1, 0, 0, 31, 25]</td>
              <td>[31, 10, 45, 1, 6, 19]</td>
              <td>[3, 5]</td>
            <tr>
            <tr>
              <td>[0, 0, 0, 0, 0, 0]</td>
              <td>[38, 19, 20, 40, 15, 25]	</td>
              <td>[1, 6]</td>
            <tr>
            <tr>
              <td>[45, 4, 35, 20, 3, 9]	</td>
              <td>[20, 9, 3, 45, 4, 35]</td>
              <td>[1, 1]</td>
            <tr>
          </tbody>
        </table>
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `예제 #1
        "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다. </br></br>
        
        예제 #2</br>
        "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.</br></br>
        
        예제 #3</br>
        "mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.`,
      },

      {
        type: ComponentType.CODE,
        value: `function solution(lottos, win_nums) {
   
    //최고순위
    let best = lottos.filter(v => {
        return win_nums.includes(v) || v === 0;
    }).length;

      
    //최저순위
    let lowest = lottos.filter(v => {
        return win_nums.includes(v);
    }).length;
    
    
    return [best > 0 ? Math.abs(7 - best) : 6 , lowest > 0 ? Math.abs(7.- lowest) : 6];
}`,
      },
    ],
  },
  {
    id: 8,
    title: '의상',
    date: '2023-12-24',
    folder: Folder.ALGORITHM,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: Level.Lv1,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `코니는 매일 다른 옷을 조합하여 입는것을 좋아합니다.</br></br>

        예를 들어 코니가 가진 옷이 아래와 같고, 오늘 코니가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야합니다. 
        `,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <th>종류</th>
            <th>이름</th>
          </thead>
          <tbody>
            <tr>
              <td>얼굴</td>
              <td>동그란 안경, 검정 선글라스</td>
            </tr>
            <tr>
              <td>하의</td>
              <td>청바지</td>
            </tr>
            <tr>
              <td>겉옷</td>
              <td>긴 코트</td>
            </tr>
          </tbody>
        </table>
        `,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다. </br>
        코니가 가진 의상의 수는 1개 이상 30개 이하입니다.</br>
        같은 이름을 가진 의상은 존재하지 않습니다.</br>
        clothes의 모든 원소는 문자열로 이루어져 있습니다.</br>
        모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <tr>
              <th>clothes</th>
              <th>return</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>[["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]</td>
              <td>5</td>
            <tr>
            <tr>
              <td>[["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]</td>
              <td>3</td>
            <tr>
          </tbody>
        </table>
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `예제 #1
        headgear에 해당하는 의상이 yellow_hat, green_turban이고 eyewear에 해당하는 의상이 blue_sunglasses이므로 아래와 같이 5개의 조합이 가능합니다.`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `
1. yellow_hat</br>
2. blue_sunglasses</br>
3. green_turban</br>
4. yellow_hat + blue_sunglasses</br>
5. green_turban + blue_sunglasses`,
      },
      {
        type: ComponentType.NORMAL,
        value: `예제 #1
        예제 #2
face에 해당하는 의상이 crow_mask, blue_sunglasses, smoky_makeup이므로 아래와 같이 3개의 조합이 가능합니다.`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `
        예제 #2 </br>
        1. crow_mask</br>
        2. blue_sunglasses</br>
        3. smoky_makeup`,
      },
      {
        type: ComponentType.CODE,
        value: `function solution(clothes) {
      let answer = 1;
      const closet = new Map();
      clothes.forEach(v => {
          const [ value, category] = v;
          let count = closet.get(category) + 1 || 1;
          closet.set(category, count);
      })
      
      
      for(const [key, value] of closet){
          answer *= value+1;
      }
      
      return answer-1;
  }
  
  // 아무 옷을 안입는 경우때문에 -1 `,
      },
    ],
  },
  {
    id: 9,
    title: '완주하지 못한 선수',
    date: '2023-12-24',
    folder: Folder.ALGORITHM,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: Level.Lv1,
    post: [
      {
        type: 'h4',
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.</br></br>

        마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
        `,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다. </br>
        completion의 길이는 participant의 길이보다 1 작습니다.</br>
        참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.</br>
        참가자 중에는 동명이인이 있을 수 있습니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <th>participant</th>
            <th>completion</th>
            <th>return</th>
          </thead>
          <tbody>
            <tr>
              <td>["leo", "kiki", "eden"]</td>
              <td>["eden", "kiki"]</td>
              <td>"leo"</td>
            </tr>
            <tr>
              <td>["marina", "josipa", "nikola", "vinko", "filipa"]</td>
              <td>["josipa", "filipa", "marina", "nikola"]</td>
              <td>"vinko"</td>
            </tr>
            <tr>
            <td>["mislav", "stanko", "mislav", "ana"]</td>
            <td>["stanko", "ana", "mislav"]</td>
            <td>"mislav"</td>
          </tr>
          </tbody>
        </table>
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `예제 #1
        "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다. </br></br>
        
        예제 #2</br>
        "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.</br></br>
        
        예제 #3</br>
        "mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.`,
      },

      {
        type: ComponentType.CODE,
        value: `function solution(participant, completion) {
    completion.sort();
    participant.sort();
    
    return participant.find((참가자,i) => {
        let 완주자 = completion[i];
        if(!완주자 || 참가자 !== 완주자) return 참가자;
    });
}`,
      },
    ],
  },
  {
    id: 10,
    title: '멘토링(블루투포스 대표적 문제)',
    date: '2023-11-08',
    folder: Folder.ALGORITHM,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: Level.Lv1,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니 다. 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다. </br>
        선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.</br>
        만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.</br>
        M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.</br>`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `첫 번째 줄에 반 학생 수 N(1<=N<=20)과 M(1<=M<=10)이 주어진다. </br>
        두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어진다. 학생번호가 제일 앞에서부터 1등, 2등, ...N등 순으로 표현된다.</br>
        만약 한 줄에 N=4이고, 테스트 결과가 3 4 1 2로 입력되었다면 3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등을 의미합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <th>arr</th>
            <th>result</th>
          </thead>
          <tbody>
            <tr>
              <td>[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `(3, 1), (3, 2), (4, 2)와 같이 3가지 경우의 (멘토, 멘티) 짝을 만들 수 있다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `[1,1][1,2]</br>
        [1,3][1,4]</br></br>
        
        [2,1][2,2]</br>
        [2,3][2,4]</br></br>
        
        [3,1][3,2]</br>
        [3,3][3,4]</br></br>
        
        [4,1][4,2]</br>
        [4,3][4,4]</br></br>
        
        의 모두의 (멘토,멘티) 조합을 돌면서</br>
        테스트 1 : [3, 4, 1, 2] (3, 1)의 경우 멘토 멘티 가능</br>
        테스트 2 : [4, 3, 2, 1] (3, 1)의 경우 멘토 멘티 가능</br>
        테스트 3 : [3, 1, 4, 2] (3, 1)의 경우 멘토 멘티 가능</br></br>
        
        테스트 3개에서 멘토 멘티가 가능한 수를 구한다.`,
      },

      {
        type: ComponentType.CODE,
        value: `function solution(test){
    let answer=0;
    m=test.length;
    n=test[0].length;
    for(let i=1; i <=n; i++){
        for(let j=1; j<=n; j++){
            let cnt=0;
            for(let k=0; k < m; k++){
                let pi=pj=0;
                for(let s=0; s < n; s++){
                  //멘토가 3일 경우 s 등수 1, 2, 1
                    if(test[k][s]===i) pi=s;
                    //멘티가 1일 경우 s 등수 3, 4, 2 
                    if(test[k][s]===j) pj=s;
                }
                if(pi < pj) cnt++;
            }
            if(cnt===m) answer++;
        }
    }
    return answer;
}`,
      },
    ],
  },
  {
    id: 11,
    title: '졸업 선물',
    date: '2023-11-08',
    folder: Folder.ALGORITHM,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: Level.Lv1,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.</br>
        학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라 고 했습니다. 선생님이 가지고 있는 예산은 한정되어 있습니다.</br>
        현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요. 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는 할인에 포함되지 않습니다.</br>`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `첫 번째 줄에 반 학생수 N(1<=N<=1000)과 예산 M(1<=M<=100,000,000)이 주어진다. </br>
        두 번째 줄부터 N줄에 걸쳐 각 학생들이 받고 싶은 상품의 가격과 배송비가 입력됩니다. </br>
        상품가격과 배송비는 각각 100,000을 넘지 않습니다. 상품가격은 짝수로만 입력됩니다.</br>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `첫 번째 줄에 선생님이 현재 예산으로 선물할 수 있는 최대 학생수를 출력합니다. 선생님 최소한 1개 이상의 상품을 살 수 있는 예산을 가지고 있습니다.</br>`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <th>arr</th>
            <th>result</th>
          </thead>
          <tbody>
            <tr>
              <td>[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]]</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `(2, 2), (4, 3), (4, 5)와 (10, 3)를 할인받아 (5, 3)에 사면 비용이 4+7+9+8=28입니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `function solution(m, product){
    let answer=0;
    let n=product.length;
    product.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1]));
    for(let i=0; i<n; i++){
        let money=m-(product[i][0]/2+product[i][1]);
        let cnt=1;
        for(let j=0; j<n; j++){
        //★★★현재 오름차순으로 정렬되있기 때문에 뒤에 나올 선물들의 값들이 더 작을 경우가 없기 때문에 break 해준다.
            if(j!==i && (product[j][0]+product[j][1])>money) break;
            if(j!==i && (product[j][0]+product[j][1])<=money){
                money-=(product[j][0]+product[j][1]);
                cnt++;
            }
        }
        answer=Math.max(answer, cnt);
    }  
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));`,
      },
    ],
  },
  {
    id: 12,
    title: 'K번째 큰 수',
    date: '2023-11-08',
    folder: Folder.ALGORITHM,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: Level.Lv1,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 같은 숫자의 카드가 여러장 있을 수 있습니다. 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려 고 합니다. 3장을 뽑을 수 있는 모든 경우를 기록합니다. 기록한 값 중 K번째로 큰 수를 출력 하는 프로그램을 작성하세요.
        만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값 은 22입니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `첫 줄에 자연수 N(3<=N<=100)과 K(1<=K<=50) 입력되고, 그 다음 줄에 N개의 카드값이 입력 된다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `첫 번째 줄에 선생님이 현재 예산으로 선물할 수 있는 최대 학생수를 출력합니다. 선생님 최소한 1개 이상의 상품을 살 수 있는 예산을 가지고 있습니다.</br>
        첫 줄에 K번째 수를 출력합니다. K번째 수는 반드시 존재합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <th>n</th>
            <th>k</th>
            <th>card</th>
            <th>result</th>
          </thead>
          <tbody>
            <tr>
              <td>10</td>
              <td>3</td>
              <td>[13, 15, 34, 23, 45, 65, 33, 11, 26, 42]</td>
              <td>143</td>
            </tr>
          </tbody>
        </table>
        `,
      },
      {
        type: ComponentType.CODE,
        value: `function solution(n, k, card){
    let answer;
    let tmp = new Set();
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            for(let k=j+1; k<n; k++){
                tmp.add(card[i]+card[j]+card[k]);
            }
        }
    }
    //new Set()을 배열로 만들기 > Array.from(tmp)
    let a=Array.from(tmp).sort((a, b)=>b-a);
    answer=a[k-1];
    return answer;
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));`,
      },
    ],
  },
  {
    id: 13,
    title: '괄호문자제거',
    date: '2023-11-08',
    folder: Folder.ALGORITHM,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: Level.Lv1,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.</br>
        남은 문자만 출력한다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <th>s</th>
            <th>result</th>
          </thead>
          <tbody>
            <tr>
              <td>(A(BC)D)EF(G(H)(IJ)K)LM(N)</td>
              <td>EFLM</td>
            </tr>
          </tbody>
        </table>
        `,
      },
      {
        type: ComponentType.CODE,
        value: `function solution(s){  
    let answer;
    let stack=[];
    for(let x of s){
        if(x===')'){
        //★★★★★★ 
            while(stack.pop()!=='(');
        }
        else stack.push(x);
    }
    answer=stack.join('');
    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";`,
      },
    ],
  },
  {
    id: 14,
    title: '후위식 연산(postfix)',
    date: '2023-11-08',
    folder: Folder.ALGORITHM,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: Level.Lv1,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.</br>
        만약 3(5+2)-9 을 후위연산식으로 표현하면 352+9- 로 표현되며 그 결과는 12입니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `첫 줄에 후위연산식이 주어집니다. </br>
        연산식의 길이는 50을 넘지 않습니다. 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <th>str</th>
            <th>result</th>
          </thead>
          <tbody>
            <tr>
              <td>352+*9-</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
        `,
      },
      {
        type: ComponentType.CODE,
        value: `function solution(s){  
    let answer;
    let stack=[];
    for(let x of s){
        if(!isNaN(x)) stack.push(Number(x));
        else{
            let rt=stack.pop();
            let lt=stack.pop();
            if(x==='+') stack.push(lt+rt);
            else if(x==='-') stack.push(lt-rt);
            else if(x==='*') stack.push(lt*rt);
            else if(x==='/') stack.push(lt/rt);
        }
    }
    answer=stack[0];
    return answer;
}

let str="352+*9-";
console.log(solution(str));`,
      },
    ],
  },
  {
    id: 15,
    title: '쇠막대기',
    date: '2023-11-08',
    folder: Folder.ALGORITHM,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: Level.Lv1,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `여러 개의 쇠막대기를 레이저로 절단하려고 한다. 효율적인 작업을 위해서 쇠막대기를 아래에 서 위로 겹쳐 놓고, 레이저를 위에서 수직으로 발사하여 쇠막대기들을 자른다. 쇠막대기와 레 이저의 배치는 다음 조건을 만족한다.</br></br>`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `
        쇠막대기는 자신보다 긴 쇠막대기 위에만 놓일 수 있다. - 쇠막대기를 다른 쇠막대기 위에 놓는 경우 완전히 포함되도록 놓되, 끝점은 겹치지 않도록 놓는다.</br>
        각 쇠막대기를 자르는 레이저는 적어도 하나 존재한다.</br>
        레이저는 어떤 쇠막대기의 양 끝점과도 겹치지 않는다.</br></br>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `
        아래 그림은 위 조건을 만족하는 예를 보여준다. 수평으로 그려진 굵은 실선은 쇠막대기이고, 점은 레이저의 위치, 수직으로 그려진 점선 화살표는 레이저의 발사 방향이다.</br>
        <img src="https://velog.velcdn.com/images/bunny/post/50094ea9-f482-462b-9a88-f78e812d1cf2/image.png" alt="쇠막대기 이미지"/>
        이러한 레이저와 쇠막대기의 배치는 다음과 같이 괄호를 이용하여 왼쪽부터 순서대로 표현할 수 있다.</br></br>

        레이저는 여는 괄호와 닫는 괄호의 인접한 쌍 ‘( ) ’ 으로 표현된다. 또한, 모든 ‘( ) ’는 반 드시 레이저를 표현한다.</br></br>

        쇠막대기의 왼쪽 끝은 여는 괄호 ‘ ( ’ 로, 오른쪽 끝은 닫힌 괄호 ‘) ’ 로 표현된다.</br>
        위 예의 괄호 표현은 그림 위에 주어져 있다.</br></br>

        쇠막대기는 레이저에 의해 몇 개의 조각으로 잘려지는데, 위 예에서 가장 위에 있는 두 개의 쇠막대기는 각각 3개와 2개의 조각으로 잘려지고, 이와 같은 방식으로 주어진 쇠막대기들은 총 17개의 조각으로 잘려진다.</br>
        쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 주어졌을 때, 잘려진 쇠막대기 조각의 총 개수를 구하는 프로그램을 작성하시오.</br>
        `,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `한 줄에 쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 공백없이 주어진다. 괄호 문자의 개수는 최대 100,000이다.</br>
        잘려진 조각의 총 개수를 나타내는 정수를 한 줄에 출력한다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <th>s</th>
            <th>result</th>
          </thead>
          <tbody>
            <tr>
              <td>()(((()())(())()))(())</td>
              <td>17</td>
            </tr>
            <tr>
              <td>(((()(()()))(())()))(()())</td>
              <td>24</td>
            </tr>
          </tbody>
        </table>
        `,
      },
      {
        type: ComponentType.CODE,
        value: `function solution(s){  
    let answer;
    let stack=[];
    for(let x of s){
        if(!isNaN(x)) stack.push(Number(x));
        else{
            let rt=stack.pop();
            let lt=stack.pop();
            if(x==='+') stack.push(lt+rt);
            else if(x==='-') stack.push(lt-rt);
            else if(x==='*') stack.push(lt*rt);
            else if(x==='/') stack.push(lt/rt);
        }
    }
    answer=stack[0];
    return answer;
}

let str="352+*9-";
console.log(solution(str));`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `1. ( 여는 괄호를 만나면 스택에 푸쉬 해준다.</br>
          2. ) 닫기 괄호를 만나면 스택의 마지막 값이 ( 일 경우 레이저로 간주해 준다.</br>
          3. 레이저일 경우 스택에서 레이저 열기 괄호를 pop() 해준다.</br>
          4. 레이저가 지나갔기 때문에 지금 스택에 남은 열린 괄호를 잘린 쇠막대로 보고 + 3 카운트 해준다.</br>
          레이저 이후 닫는 괄호 ) 를 만나면 열린 괄호를 하나 pop() 해준다. 잘린 쇠막대 + 1 카운트 해준다.</br>
          레이저가 나올때마다 현재 스택에 쌓인 열린 괄호의 개수로 카운트 해주고</br>
          레이저가 끝나고 바로 나오는 닫는 괄호의 경우에는 + 1 개수로 카운트 해준다.</br>`,
      },
    ],
  },
  {
    id: 16,
    title: '공주 구하기',
    date: '2023-11-08',
    folder: Folder.ALGORITHM,
    part_title: '2024 KAKAO WINTER INTERNSHIP',
    lv: Level.Lv1,
    post: [
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 문제 설명</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `정보 왕국의 이웃 나라 외동딸 공주가 숲속의 괴물에게 잡혀갔습니다.</br>
        정보 왕국에는 왕자가 N명이 있는데 서로 공주를 구하러 가겠다고 합니다. 정보왕국의 왕은 다음과 같은 방법으로 공주를 구하러 갈 왕자를 결정하기로 했습니다.</br>
        왕은 왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다. 그리고 1번 왕자부터 N 번 왕자까지 순서대로 시계 방향으로 돌아가며 동그랗게 앉게 한다. 그리고 1번 왕자부터 시 계방향으로 돌아가며 1부터 시작하여 번호를 외치게 한다. 한 왕자가 K(특정숫자)를 외치면 그 왕자는 공주를 구하러 가는데서 제외되고 원 밖으로 나오게 된다. 그리고 다음 왕자부터 다시 1부터 시작하여 번호를 외친다.</br>
        이렇게 해서 마지막까지 남은 왕자가 공주를 구하러 갈 수 있다.
        <img src="https://velog.velcdn.com/images/bunny/post/56e3ea81-4827-4a0d-96bf-e392873c29b7/image.png" alt="공주구하기 이미지"/></br>
        예를 들어 총 8명의 왕자가 있고, 3을 외친 왕자가 제외된다고 하자. 처음에는 3번 왕자가 3 을 외쳐 제외된다. 이어 6, 1, 5, 2, 8, 4번 왕자가 차례대로 제외되고 마지막까지 남게 된 7 번 왕자에게 공주를 구하러갑니다.</br>
        N과 K가 주어질 때 공주를 구하러 갈 왕자의 번호를 출력하는 프로그램을 작성하시오.
`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 제한 사항</h4>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `첫 줄에 자연수 N(5<=N<=1,000)과 K(2<=K<=9)가 주어진다. </br>
        첫 줄에 마지막 남은 왕자의 번호를 출력합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `<h4 class=${style.h4}>📝 입출력 예</h4>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
        <table>
          <thead>
            <th>N</th>
            <th>K</th>
            <th>answer</th>
          </thead>
          <tbody>
            <tr>
              <td>8</td>
              <td>3</td>
              <td>7</td>
            </tr>
          </tbody>
        </table>
        `,
      },
      {
        type: ComponentType.CODE,
        value: `코드 찾아 넣기`,
      },
    ],
  },
];
