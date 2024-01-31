import { ComponentType, Folder, Level } from 'type/post';

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
    preview: `React의 문서를 읽다 보면 불변성을 강조하는 부분 또는 State를 직접적으로 변경하지 말라는 말을 본 적이 있을 것이다. 왜 그런 걸까? 리액트에서 상태를 다룰 때는 객체가 지닌 값을 바꾸고 싶다고 해서 값을 직접 수정하면 안된다.`,
    post: [
      {
        type: ComponentType.H2,
        value: `리액트에서 불변성을 지켜야 하는 이유는?`,
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
        value: `불변성이 유지되지 않은 같은 참조를 가리키고 있는 데이터`,
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
        value: `불변성을 유지하면서 상태를 업데이트하는 방법`,
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
    preview: `데이터를 함수를 이용해 새로운 데이터로 만들어 나가는 데이터 파이프 라인의 형태로 프로그래밍이 작동 하며 함수형 프로그래밍은 거의 모든 것을 순수 함수로 나누어 문제를 해결하는 기법으로, 작은 문제를 해결하기 위한 함수를 작성하여 가독성을 높이고 유지보수를 용이하게 해준다.`,
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
        value: `함수형 vs. 절차형`,
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
        value: `절차형 프로그래밍`,
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
        value: `함수형 프로그래밍`,
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
        value: `선언형 vs. 명령형`,
      },
      {
        type: ComponentType.H4,
        value: `명령형`,
      },
      {
        type: ComponentType.NORMAL,
        value: `명령형 프로그래밍은 프로그램이 어떻게 수행되는지를 명시적으로 나타내는 스타일입니다. 대부분의 절차형 언어가 명령형 패러다임을 따릅니다. 프로그래머는 상태와 명령어의 순서에 중점을 두어 프로그램을 작성합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `control Flow`,
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
        value: `선언형`,
      },
      {
        type: ComponentType.NORMAL,
        value: `선언형 프로그래밍은 원하는 결과를 설명하고, 시스템이 그 결과를 어떻게 달성할지에 대한 구체적인 단계나 순서를 명시하지 않는 스타일이다. 선언형 프로그래밍의 예로 SQL, HTML, CSS 등이 있다. 프로그래머는 "무엇(What)"을 명시하고, 해결방법은 컴퓨터에게 위임하는 방법 이다.`,
      },
      {
        type: ComponentType.H4,
        value: `control Flow`,
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
        value: `함수형 프로그래밍의 장점`,
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
    preview: `브라우저 작동원리에 대해 공부하던 중 의문점이 발생했다.<b>"브라우저 주소창에 URL을 입력하면 브라우저는 HTTP GET 요청을 URL 프론트 서버로 전송한다.`,
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
        value: `브라우저의 전체 흐름`,
      },
      {
        type: ComponentType.H4,
        value: `SSR`,
      },
      {
        type: ComponentType.NORMAL,
        value: `SSR 전통적인 웹사이트에서는 브라우저에서는 프론트 서버로 GET 요청을 하고 프론트 서버에서 백엔드 서버로 데이터 요청을 하여 백엔드 서버는 데이터베이스에서 데이터를 받아와서 프론트서버로 데이터를 보내주고 프론트 서버는 HTML과 데이터를 합쳐서 브라우저에게 보내준다.</br></br>
        브라우저 ➔ 프론트 서버 ➔ 백엔드 서버 ➔ DB`,
      },
      {
        type: ComponentType.H4,
        value: `SPA`,
      },
      {
        type: ComponentType.NORMAL,
        value: `SPA 에서는 프론트 서버에서 정적파일들을 먼저 받아(HTML, CSS, Javascript) 화면을 그리고 데이터를 백엔서 서버에서 받아오는동안 로딩바를 화면에 표시해 주도록 한다.</br></br>
        브라우저 ➔ 프론트 서버에서 정적파일들을 받아옴(HTML, CSS, Javascript) </br> 브라우저 ➔ 백엔드 서버(프론트 서버를 거치지 않고 백엔드 서버로 바로 데이터를 요청) ➔ DB`,
      },
      {
        type: ComponentType.H4,
        value: `프론트 서버(웹 서버)`,
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
        value: `웹서버를 이해하기에 가장 편했던 유투브 영상</h4>`,
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
    preview: `이벤트 버블링과 이벤트 캡쳐는 브라우저에서 이벤트가 발생하고 전파되는 방식을 설명하는 개념입니다. 이벤트 버블링은 특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 요소들로 전달되어 가는 특성을 의미합니다. 이는 이벤트가 가장 하위의 요소에서 시작하여 상위 요소로 전파되는 방식입니다.`,
    post: [
      {
        type: ComponentType.H4,
        value: `이벤트 버블링 - Event Bubbling`,
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
        value: `이벤트 캡쳐 - Event Capture`,
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
        value: `stopPropagation()`,
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
    preview: `일반 함수와 화살표 함수의 this 바인딩에 대한 차이에 대한 내용을 약간 각색하여 정리하겠습니다. 일반 함수에서 this는 함수가 호출될 때 동적으로 결정되며, 호출된 컨텍스트에 바인딩됩니다.`,
    post: [
      {
        type: ComponentType.H4,
        value: `일반 함수`,
      },
      {
        type: ComponentType.CODE,
        value: `const foo = function () {
  console.log('일반 함수');
}`,
      },
      {
        type: ComponentType.H4,
        value: `화살표 함수`,
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
        value: `JavaScript 일반 함수의 this 바인딩`,
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
        value: `JavaScript 화살표 함수의 this 바인딩`,
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
        value: `addEventListener()의 콜백함수`,
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
        value: `Object.assign()을 이용한 값이 중첩되지 않은 객체의 복사 (Shallow Copy)`,
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
        value: `Object.assign()을 이용한 값이 중첩된 객체의 복사 (Deep Copy)`,
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
        value: `Lodash를 이용한 깊은 복사 cloneDeep`,
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
        value: `JSON.stringify() 이용한 깊은 복사 cloneDeep`,
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
        value: `하지만 이방법은 사용하기는 쉽지만 <b>다른 방법에비해 아주 느리다</b>고 알려져 있습니다.`,
      },
    ],
  },
  {
    id: 7,
    title: 'const, let, var',
    date: '2023-02-21',
    folder: Folder.JAVASCRIPT,
    preview: `let은 재할당 할 수 있다는 점에서 var와 유사합니다. 그렇지만 var는 어휘적 유효범위(lexical scope)를 따르는 반면 let은 블록 유효범위를 따릅니다. 일단 블록 유효범위 변수는 if블록이나 for 반복문 같은 블록의 내부에만 존재한다고 알아두세요.`,
    post: [
      {
        type: ComponentType.H4,
        value: `블록유효범위를 따르는 const`,
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
        value: `블록유효범위를 따르는 let`,
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
        value: `var를 사용하는 경우에는 같은 유효범위에서 같은 이름의 변수를 다시 선언할 수 있지만</br>
        let과 const는 같은 이름이 변수를 다시 선언할 수 없습니다.`,
      },
      {
        type: ComponentType.H4,
        value: `어휘적 유효범위(lexical scope)를 따르는 var`,
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
        value: `var를 사용하여 함수 유효범위를 따르는 클로저`,
      },
      {
        type: ComponentType.CODE,
        value: `// var를 사용한 클로저 예제
function createClosureVar() {
    var closuresVar = [];

    for (var i = 0; i < 5; i++) {
        closuresVar.push(function () {
            console.log(i);
        });
    }

    return closuresVar;
}

var closuresVarArray = createClosureVar();

// 클로저 호출
for (var j = 0; j < closuresVarArray.length; j++) {
    closuresVarArray[j](); // 모든 클로저가 5를 출력
}`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `var를 사용한 경우, for 루프에서 생성된 클로저가 i를 참조하고 있습니다.
        하지만 var는 함수 스코프를 갖기 때문에 for 루프가 종료된 후에도 i는 전역 스코프에 남아 있고, 클로저는 항상 전역 스코프에 있는 i를 참조합니다.
        따라서 클로저를 호출할 때 모든 클로저가 i의 최종 값인 5를 출력합니다.
        `,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `<b>var를 사용</b>한 경우 함수 내부에서 만든 <b>클로저에서 외부 변수를 참조할 때 주의</b>가 필요합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `let을 사용하여 클로저 문제를 해결한 코드`,
      },
      {
        type: ComponentType.CODE,
        value: `// let을 사용한 클로저 예제
function createClosureLet() {
    var closuresLet = [];

    for (let i = 0; i < 5; i++) {
        closuresLet.push(function () {
            console.log(i);
        });
    }

    return closuresLet;
}

var closuresLetArray = createClosureLet();

// 클로저 호출
for (let j = 0; j < closuresLetArray.length; j++) {
    closuresLetArray[j](); // 각 클로저가 해당하는 값(0부터 4까지)을 출력
}`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `let을 사용한 경우, for 루프에서 생성된 클로저가 i를 참조하고 있습니다. 
        let은 블록 스코프를 갖기 때문에 각 클로저는 해당 블록에서의 i를 참조합니다.
        따라서 클로저를 호출할 때 각각의 클로저는 자신이 생성된 시점의 i 값을 출력하게 됩니다.`,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `쉽게 말해 let을 이용하면 for문이 반복될 때마다 값을 잠급니다.`,
      },
      {
        type: ComponentType.H4,
        value: `블록 유효범위 (Block Scope)`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `블록 유효범위는 중괄호 {}로 둘러싸인 영역을 가리킵니다.
        let 및 const 키워드로 선언된 변수는 블록 유효 범위를 가집니다. 즉, 해당 변수는 그 변수가 선언된 블록 내에서만 유효하며 외부에서 접근할 수 없습니다.
        블록은 주로 조건문 (if, else, for, while 등) 내부, 함수 내부, 또는 단독 중괄호 블록으로 정의됩니다.`,
      },
      {
        type: ComponentType.H4,
        value: `어휘적 유효범위 (Lexical Scope 또는 Static Scope)`,
      },
      {
        type: ComponentType.NORMAL,
        value: `어휘적 유효범위는 코드를 작성하는 시점에 결정되는 스코프의 종류입니다. 변수가 어디에서 선언되었는지에 따라 그 변수의 유효 범위가 정해집니다. 어휘적 유효범위는 함수를 어디에 작성했는지에 따라 함수의 스코프가 결정되는 것을 의미합니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `function outer() {
  let outerVar = 'I am outer';

  function inner() {
    let innerVar = 'I am inner';
    console.log(outerVar); // outerVar는 어휘적 유효범위에 의해 접근 가능
    console.log(innerVar); // innerVar는 현재 스코프에 선언되어 있어 직접 접근 가능
  }

  inner();

  console.log(outerVar); // outerVar는 여전히 어휘적 유효범위에 의해 접근 가능
  console.log(innerVar); // Error: innerVar는 outer 함수의 스코프를 벗어나서 접근 불가능
}

outer();`,
      },
      {
        type: ComponentType.NORMAL,
        value: `위 예제에서 inner 함수는 자신의 스코프와 외부 함수인 outer 함수의 스코프에 접근할 수 있습니다. 이는 어휘적 유효범위에 의한 것입니다. 변수의 유효 범위는 코드를 작성하는 시점에 이미 정해져 있습니다.`,
      },
      {
        type: ComponentType.H4,
        value: `함수 유효범위 (Function Scope)`,
      },
      {
        type: ComponentType.NORMAL,
        value: `함수 유효범위는 함수 내에서 선언된 변수가 함수 내부에서만 유효하다는 원칙을 나타냅니다. 함수 유효범위는 함수가 실행될 때마다 새로운 스코프가 생성되며, 함수 내에서 선언된 변수는 해당 함수 내에서만 접근할 수 있습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `function exampleFunction() {
  let localVar = 'I am a local variable'; // 함수 유효범위에 속한 변수

  if (true) {
    let blockVar = 'I am a block-scoped variable'; // 블록 유효범위에 속한 변수
    console.log(localVar); // 함수 유효범위 내에서 접근 가능
    console.log(blockVar); // 블록 유효범위 내에서 접근 가능
  }

  console.log(localVar); // 함수 유효범위 내에서 접근 가능
  console.log(blockVar); // Error: 블록 유효범위를 벗어난 곳에서는 접근 불가능
}`,
      },
      {
        type: ComponentType.NORMAL,
        value: `위 예제에서 localVar는 함수 유효범위 내에서 선언되어 함수 전체에서 접근 가능합니다. 하지만 blockVar는 블록 내에서만 유효한 변수이므로 블록 외부에서는 접근할 수 없습니다. </br></br>

        요약하면, 어휘적 유효범위는 코드를 작성하는 시점에 변수의 스코프가 결정되며, 함수 유효범위는 함수가 실행될 때 생성되는 스코프입니다. 함수 유효범위는 어휘적 유효범위를 따르기 때문에 함수가 어디에 선언되었는지에 따라 스코프가 결정됩니다.`,
      },
    ],
  },
  {
    id: 8,
    title: '클로저 (Closure)',
    date: '2023-02-19',
    folder: Folder.JAVASCRIPT,
    preview: `비공개 변수는 클로저 함수 내부에 생성한 변수도 아니고, 매개변수도 아닌 변수를 의미합니다. 클로저를 말할 때는 스코프/컨텍스트/비공개 변수와 함수의 관계를 항상 같이 말해주어야 합니다. closure 함수 안에 console.log(name)이 있는데요.`,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `
        클로저는 자바스크립트에서 매우 강력하고 중요한 개념 중 하나입니다. 클로저는 외부 변수(외부 렉시컬 환경에 있는 변수)를 기억하고 접근할 수 있는 함수입니다. 이를테면, 어떤 함수가 다른 함수 내에서 정의되고 그 함수가 외부 변수를 참조하면, 클로저가 형성됩니다.</br></br>
        클로저는 함수가 선언될 때의 렉시컬 스코프(Lexical Scope)를 기억하여, 함수가 다른 스코프에서 호출되더라도 해당 스코프의 변수에 접근할 수 있게 하는 기능을 말합니다.`,
      },
      // {
      //   type: ComponentType.H2,
      //   value: '클로저 (Closure)',
      // },
      {
        type: ComponentType.CODE,
        value: `var makeClosure = function() {
  var name = 'zero';
  return function() {
    console.log(name);
  };
};

var closure = makeClosure();
closure(); // 'zero'
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `makeClosure 함수가 실행될 때 name 변수가 생성되고, 반환된 내부 함수가 클로저 역할을 합니다. 클로저인 내부 함수는 외부 함수의 스코프에 접근할 수 있기 때문에 name 변수에 접근하여 값을 출력할 수 있습니다.`,
      },
      {
        type: ComponentType.H2,
        value: '비공개 변수',
      },
      {
        type: ComponentType.NORMAL,
        value: `비공개 변수는 클로저를 사용하여 함수 내부에서만 접근할 수 있는 변수를 의미합니다. 이 변수는 함수 내부에서 선언되거나 함수의 매개변수로 전달되지 않으면서도 클로저를 통해 접근 가능합니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `function makeCounter() {
  let count = 0;

  // 내부 함수(클로저)를 반환
  return function() {
    return count++;
  };
}

// makeCounter 함수 호출로 클로저 생성
let counter = makeCounter();

// 클로저를 통해 외부 변수(count)에 접근하고 값을 변경
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
        
        `,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `makeCounter 함수가 호출되면서 새로운 렉시컬 환경이 만들어지고, count 변수가 그 환경에 저장됩니다.
        makeCounter 함수 내부에서 정의된 익명 함수(클로저)가 반환되면서 <b>외부 변수 count에 대한 참조를 유지</b>합니다.
        반환된 익명 함수가 counter 변수에 할당되면서 클로저가 형성됩니다.
        counter를 호출할 때마다 클로저는 외부 변수 count에 접근하여 값을 변경하고 반환합니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `클로저는 함수가 생성될 때의 렉시컬 스코프(어휘적 스코프)에 있는 변수에 대한 참조를 기억합니다. 이를 통해 함수가 나중에 호출될 때에도 해당 변수에 접근할 수 있습니다. 클로저는 함수형 프로그래밍, 비동기 작업, 정보 은닉 등 다양한 상황에서 사용되며, 자바스크립트에서 고유하고 강력한 특징 중 하나입니다.`,
      },
      {
        type: ComponentType.H2,
        value: '이벤트 리스너와 클로저',
      },
      {
        type: ComponentType.NORMAL,
        value:
          '이벤트 리스너와 클로저 관련 문제에 대한 설명에서, 클로저를 사용하여 각 이벤트 핸들러가 반복문의 각 단계에서 고유한 인덱스를 기억하도록 수정한 예제입니다.',
      },
      {
        type: ComponentType.CODE,
        value: `for (var i = 0; i < 5; i++) {
  (function(j) {
    $('#target' + j).on('click', function() {
      alert(j);
    });
  })(i);
}`,
      },
      {
        type: ComponentType.NORMAL,
        value:
          '이렇게 하면 클로저를 통해 각 이벤트 핸들러가 자신만의 고유한 j 값을 기억하게 되어, 클릭할 때 각 버튼에 해당하는 인덱스가 올바르게 출력됩니다. 클로저를 사용하여 변수의 값을 고정시켜 이벤트 핸들러가 정상적으로 작동하도록 만들었습니다.',
      },
      {
        type: ComponentType.NORMAL,
        value: `같이 참고하면 좋은 링크 </br>
        ${process.env.NEXT_PUBLIC_APP_API_BASE_URL} </br> 
        https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0`,
      },
    ],
  },
  {
    id: 9,
    title: '함수선언식 VS 함수표현식의 호이스팅(Hoisting)',
    date: '2023-02-19',
    folder: Folder.JAVASCRIPT,
    preview: `호이스팅(Hoisting)은 JavaScript에서 변수와 함수 선언이 최상단으로 끌어올려지는 현상을 말합니다. 하지만 함수 선언식과 함수 표현식은 다르게 동작하므로 주의가 필요합니다.
    `,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `호이스팅(Hoisting)은 JavaScript에서 변수와 함수 선언이 최상단으로 끌어올려지는 현상을 말합니다. 하지만 함수 선언식과 함수 표현식은 다르게 동작하므로 주의가 필요합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `함수 선언식`,
      },
      {
        type: ComponentType.NORMAL,
        value: `함수 선언식은 전체가 호이스팅되기 때문에 함수를 선언하기 전에 호출해도 정상적으로 동작합니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `console.log(zero); // undefined
sayWow(); // 'wow'

function sayWow() {
  console.log('wow');
}

var zero = 'zero';
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `함수 선언식인 sayWow는 전체가 끌어올려져서 호출 전에도 함수가 정의되어 있습니다. 아래 sayWow함수가 상단으로 끌여 올려진것과 같은 의미가 됩니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `function sayWow() {
  console.log('wow');
}

var zero;
console.log(zero);
sayWow();
zero = 'zero';`,
      },
      {
        type: ComponentType.H4,
        value: `함수 표현식`,
      },
      {
        type: ComponentType.NORMAL,
        value: `함수 표현식은 변수만 끌어올려지고 함수의 할당은 그대로 유지되기 때문에 호출하기 전에 변수에 함수를 할당해야 합니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `
sayWow(); // 에러
sayYeah(); // 에러

var sayYeah = function() {
  console.log('yeah');
}

function sayWow() {
  console.log('wow');
}
`,
      },
      {
        type: ComponentType.NORMAL,
        value:
          '함수 표현식인 sayYeah는 변수 선언만 호이스팅되어 sayYeah()를 호출하기 전에 함수를 할당해주지 않으면 에러가 발생합니다. 아래는 sayYeah가 호이스팅되어 상단으로 올려졌으나 값이 할당되지 않아 호출하면 에러를 발생시킵니다.',
      },
      {
        type: ComponentType.CODE,
        value: `var sayYeah;
sayYeah(); // 에러

sayYeah = function() {
  console.log('yeah');
}

function sayWow() {
  console.log('wow');
}
        `,
      },
      {
        type: ComponentType.NORMAL,
        value:
          '함수 표현식은 변수에 함수를 할당하는 형태이므로 변수 호이스팅은 발생하지만 함수의 할당은 유지되지 않아 함수를 먼저 호출할 수 없습니다. ',
      },
      {
        type: ComponentType.EMPHASIS,
        value:
          '함수 표현식을 사용할 때는 변수에 함수가 할당된 이후에 호출하도록 유의해야 합니다.',
      },
      {
        type: ComponentType.NORMAL,
        value: `참고하면 좋은 링크</br>
          https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0`,
      },
    ],
  },
  {
    id: 10,
    title: '컨텍스트와 실행 과정',
    date: '2023-02-18',
    folder: Folder.JAVASCRIPT,
    preview: `호이스팅(Hoisting)은 JavaScript에서 변수와 함수 선언이 최상단으로 끌어올려지는 현상을 말합니다. 하지만 함수 선언식과 함수 표현식은 다르게 동작하므로 주의가 필요합니다.
    `,
    post: [
      {
        type: ComponentType.CODE,
        value: `var name = 'zero'; 

function wow(word) { 
  console.log(word + ' ' + name); 
}

function say () { 
  var name = 'nero'; 
  console.log(name); 
  wow('hello'); 
}
say();`,
      },
      {
        type: ComponentType.NORMAL,
        value: `일단 처음 브라우저가 스크립트를 로딩해서 실행하기 시작하는 순간 모든 것을 포함하는 전역 컨텍스트가 생깁니다. 모든 것을 관리하는 환경입니다. 페이지가 종료될 때까지 유지됩니다.`,
      },
      {
        type: ComponentType.H4,
        value: `1. 전역 컨텍스트(Global Context) 생성`,
      },
      {
        type: ComponentType.NORMAL,
        value: `전역 컨텍스트를 객체 형식으로 표현해보겠습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `변수객체: { name: 'zero', wow: Function, say: Function }
scopeChain: ['전역 변수객체']
this: window`,
      },
      {
        type: ComponentType.NORMAL,
        value: `전역 컨텍스트는 arguments(함수의 인자)가 없으며 variable은 해당 스코프의 변수들입니다. </br> name, wow, say가 있습니다.</br></br>
        자신과 상위 스코프들의 변수객체인 scope chain생성 됩니다.</br>스코프 체인은 자기 자신인 전역 변수객체입니다.</br></br>
        this는 따로 설정되어 있지 않으면 window입니다. </br>this를 바꾸는 방법이 바로 new를 호출하는 겁니다. </br>또는 함수에 다른 this 값을 bind할 수도 있습니다.</br></br>
        일반 함수의 this가 왜 window인지 아시겠죠? </br>원래 기본적으로 window고 new나 bind같은 상황에서 this가 바뀌는 겁니다.
        `,
      },
      {
        type: ComponentType.H4,
        value: `2. say 함수 호출 시 컨텍스트 생성`,
      },
      {
        type: ComponentType.CODE,
        value: `변수객체: { name: 'nero' }
scopeChain: ['say 변수객체', '전역 변수객체']
this: window`,
      },
      {
        type: ComponentType.NORMAL,
        value: `맨위 코드에서 say();호출 하는 순간 새로운 컨텍스트인 say함수 컨텍스트가 생깁니다. </br> 아까 전역 컨텍스트는 그대로 있습니다.`,
      },
      {
        type: ComponentType.H4,
        value: `say함수 실행`,
      },
      {
        type: ComponentType.CODE,
        value: `var name = 'nero';
console.log(name); (결과: 'nero')
wow('hello');;
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `say를 호출한 후 차례대로 say함수 내의 내용들이 실행하는데요.</br>
        variable의 name에 nero를 대입해주고 나서 console.log(name);이 있습니다.</br></br>
        
        name 변수는 say 컨텍스트 안에서 찾으면 됩니다.</br>
        variable에 name이 nero라고 되어 있네요. name이 콘솔에 찍힙니다.</br></br>
        
        그 다음엔 wow('hello')가 있습니다. </br>
        say 컨텍스트 안에서 wow 변수를 찾을 수 없습니다.</br>
        찾을 수 없다면 scope chain을 따라 올라가 상위 변수객체에서 찾습니다. 그래서 전역 변수객체에서 찾습니다. </br>전역 변수객체의 variable에 wow라는 함수가 있네요. 이걸 호출합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `3. wow 함수 호출 시 컨텍스트 생성`,
      },
      {
        type: ComponentType.CODE,
        value: `변수객체: { arguments: { word: 'hello' } }
scopeChain: ['wow 변수객체', '전역 변수객체']
this: window`,
      },
      {
        type: ComponentType.NORMAL,
        value: `여기서 중요한 게 lexical scoping에 따라 wow 함수의 스코프 체인은 선언 시에 이미 정해져 있습니다. </br>
        따라서 say 스코프는 wow 컨텍스트의 scope chain이 아닙니다. variable은 없고, this는 window입니다.</br></br>
        이제 컨텍스트가 생긴 후 함수가 실행 됩니다. (say 함수는 아직 종료되지 않았습니다.)</br>
       `,
      },
      {
        type: ComponentType.H4,
        value: `wow 함수 호출 실행`,
      },
      {
        type: ComponentType.CODE,
        value: `console.log(word + ' ' + name); 
(word: 'hello', name: 'zero')
(전역 컨텍스트의 name 변수를 참조)`,
      },
      {
        type: ComponentType.NORMAL,
        value: ` wow 함수 안에서 console.log(word + ' ' + name);이 있는데요.</br>
        word랑 name 변수는 wow 컨텍스트에서 찾으시면 됩니다.</br></br>

        word는 arguments에서 찾을 수 있고, name은 wow 변수객체에는 값이 없으니, scope chain을 따라 전역 스코프에서 찾을수 있습니다.</br></br>
        전역 변수객체로 올라가니 variable에 name이 zero라고 되어 있네요. </br> 그래서 hello zero가 되는 겁니다. hello nero가 아니라요.</br> wow 컨텍스트에 따르면 wow 함수는 애초에 say 컨텍스트와 일절 관련이 없었던 겁니다.</br></br>

        이제 wow 함수 종료 후 wow 컨텍스트가 사라지고, say 함수의 실행이 마무리됩니다. 따라서 say 컨텍스트도 사라지고, </br>마지막에 전역 컨텍스트도 사라집니다. 함수 실행, 변수 선언 등 모든 게 다 논리적입니다. </br></br>그래서 컨텍스트 개념을 이해하면 자바스크립트의 모든 문제들을 풀 수 있습니다. 정리하자면 `,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `전역 컨텍스트에 전역 변수가 선언되고, 함수 wow와 say가 변수객체에 할당됩니다.
        say 함수가 호출되면 say 함수의 컨텍스트가 생성되고, 그 내부에서 name 변수가 'nero'로 초기화됩니다.
        wow 함수가 say 함수 내에서 호출되면, wow 함수의 컨텍스트가 생성되고, 내부에서 word와 name 변수를 참조합니다.
        wow 함수 내에서 name 변수는 전역 컨텍스트의 name 변수를 참조하여 'hello zero'를 출력합니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `참고 https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0`,
      },
    ],
  },
  {
    id: 11,
    title: '콜백 지옥(Callback Hell)과 프로미스(Promise)',
    date: '2022-09-22',
    folder: Folder.JAVASCRIPT,
    preview: ` 비동기 프로그래밍에서 자주 발생하는 코드 구조의 한 종류로, 여러 비동기 동작이 중첩된 형태로 코드가 작성될 때 발생하는 가독성 저하와 유지보수의 어려움을 지칭합니다.`,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `콜백 지옥(Callback Hell)은 비동기 프로그래밍에서 자주 발생하는 코드 구조의 한 종류로, 여러 비동기 동작이 중첩된 형태로 코드가 작성될 때 발생하는 가독성 저하와 유지보수의 어려움을 지칭합니다. 주로 콜백 함수를 사용하는 상황에서 비동기적인 작업들이 중첩되어 발생하며, 코드가 길어질수록 가독성이 떨어지고 로직의 이해가 어려워지는 문제가 발생합니다. </br></br>

      예를 들어, 서버에서 데이터를 받아오고, 그 데이터를 가공한 후 다시 서버에 전송하고, 그 응답을 받아와서 화면에 출력하는 일련의 비동기 동작들이 중첩되는 상황에서 콜백 지옥이 발생할 수 있습니다. 이러한 중첩된 콜백 함수들은 코드의 들여쓰기 수준이 깊어지고, 가독성이 떨어져 코드를 이해하기 어려워집니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `asyncFunction1(function(result1) {
    asyncFunction2(result1, function(result2) {
        asyncFunction3(result2, function(result3) {
            // ...
        });
    });
});`,
      },
      {
        type: ComponentType.NORMAL,
        value: `이러한 중첩된 구조는 비동기 동작이 많아질수록 코드를 이해하기 어려워지며, 에러 처리 및 유지보수가 복잡해집니다.</br></br>

        콜백 지옥을 해결하기 위한 방법으로는 Promise나 Async/Await와 같은 비동기 처리 방식을 활용하는 것이 있습니다. 이를 통해 코드의 가독성을 향상시키고, 비동기 동작들을 보다 명시적이고 관리하기 쉬운 형태로 구현할 수 있습니다.`,
      },
      {
        type: ComponentType.H2,
        value: `Promise나 Async/Await을 사용하여 콜백지옥을 해결하는 방법`,
      },
      {
        type: ComponentType.NORMAL,
        value: `콜백 지옥을 해결하기 위해 Promise나 Async/Await을 사용하는 것은 비동기 코드를 더 간결하고 가독성 있게 만들 수 있는 방법 중 하나입니다. 아래는 각각 Promise와 Async/Await을 사용하여 콜백 지옥을 해결하는 예제 코드입니다.`,
      },
      {
        type: ComponentType.H4,
        value: `1. Promise 사용`,
      },
      {
        type: ComponentType.CODE,
        value: `function asyncFunction1() {
      return new Promise((resolve) => {
          // 비동기 작업 수행
          setTimeout(() => {
              console.log('Async Function 1');
              resolve('Result from Async Function 1');
          }, 1000);
      });
  }
  
  function asyncFunction2(result) {
      return new Promise((resolve) => {
          // 비동기 작업 수행
          setTimeout(() => {
              console.log('Async Function 2');
              resolve('Result from Async Function 2');
          }, 1000);
      });
  }
  
  function asyncFunction3(result) {
      return new Promise((resolve) => {
          // 비동기 작업 수행
          setTimeout(() => {
              console.log('Async Function 3');
              resolve('Result from Async Function 3');
          }, 1000);
      });
  }
  
  asyncFunction1()
      .then((result1) => asyncFunction2(result1))
      .then((result2) => asyncFunction3(result2))
      .then((result3) => {
          console.log('Final Result:', result3);
      })
      .catch((error) => {
          console.error('Error:', error);
      });
      `,
      },
      {
        type: ComponentType.H4,
        value: `Async/Await 사용`,
      },
      {
        type: ComponentType.CODE,
        value: `function asyncFunction1() {
      return new Promise((resolve) => {
          // 비동기 작업 수행
          setTimeout(() => {
              console.log('Async Function 1');
              resolve('Result from Async Function 1');
          }, 1000);
      });
  }
  
  function asyncFunction2(result) {
      return new Promise((resolve) => {
          // 비동기 작업 수행
          setTimeout(() => {
              console.log('Async Function 2');
              resolve('Result from Async Function 2');
          }, 1000);
      });
  }
  
  function asyncFunction3(result) {
      return new Promise((resolve) => {
          // 비동기 작업 수행
          setTimeout(() => {
              console.log('Async Function 3');
              resolve('Result from Async Function 3');
          }, 1000);
      });
  }
  
  async function runAsyncFunctions() {
      try {
          const result1 = await asyncFunction1();
          const result2 = await asyncFunction2(result1);
          const result3 = await asyncFunction3(result2);
  
          console.log('Final Result:', result3);
      } catch (error) {
          console.error('Error:', error);
      }
  }
  
  runAsyncFunctions();
      `,
      },
      {
        type: ComponentType.NORMAL,
        value: `위의 코드에서는 각각의 비동기 함수가 Promise를 반환하도록 작성되었고, 이를 순차적으로 호출하도록 then 또는 await을 사용하였습니다. async & await에서 예외를 처리하는 방법은 바로 try catch입니다. </br></br>
        코드에서 발생한 네트워크 통신 오류뿐만 아니라 간단한 타입 오류 등의 일반적인 오류까지도 catch로 잡아낼 수 있습니다. 발견된 에러는 error 객체에 담기기 때문에 에러의 유형에 맞게 에러 코드를 처리해주시면 됩니다.</br></br>
        프로미스를 사용하게 되면 프로미스 객체에 비동기 처리된 결과값이 저장되며 콜백의 경우 매번 비동기 함수를 호출하여 비동기처리된 결과값을 얻었다면 프로미스는 .then 메소드를 통해서 원하는 때에 저장되어 있는 비동기 값을 사용할 수 있습니다.</br></br>
        Async & Await을 사용하면 비동기 코드를 동기 코드처럼 작성할 수 있습니다. 이로써 코드의 의도가 명확해지고 가독성이 향상됩니다. Async & Await을 사용하면 콜백 지옥을 피하고 비동기 코드를 구조적이고 명료하게 작성할 수 있습니다.`,
      },
    ],
  },
  {
    id: 12,
    title: '프로미스(Promise)의 세 가지 상태와 활용',
    date: '2022-09-07',
    folder: Folder.JAVASCRIPT,
    preview: `프로미스를 사용할 때 알아야 하는 가장 기본적인 개념이 바로 프로미스의 상태(states)입니다. 여기서 말하는 상태란 프로미스의 처리 과정을 의미합니다. new Promise()로 프로미스를 생성하고 종료될 때까지 3가지 상태를 갖습니다..
    `,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `프로미스는 비동기 처리를 위한 패턴 중 하나로, 세 가지 상태를 가지며 각각의 상태에 따라 처리 과정이 이뤄집니다.`,
      },
      {
        type: ComponentType.H2,
        value: `1. Pending(대기) 상태`,
      },
      {
        type: ComponentType.NORMAL,
        value: `프로미스가 생성되고 아직 비동기 처리가 완료되지 않은 초기 상태를 "대기" 상태라고 합니다. 아래는 프로미스를 생성하는 예제입니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `const myPromise = new Promise((resolve, reject) => {
  // 비동기 처리 로직...
});
        `,
      },
      {
        type: ComponentType.H2,
        value: `2. Fulfilled(이행) 상태`,
      },
      {
        type: ComponentType.NORMAL,
        value: `비동기 처리가 성공적으로 완료되면 프로미스는 "이행" 상태가 됩니다. resolve 함수를 호출하여 상태를 변경합니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `const myPromise = new Promise((resolve, reject) => {
  const data = "Success!";
  resolve(data);
});

myPromise.then((result) => {
  console.log(result); // "Success!"
});
        `,
      },
      {
        type: ComponentType.H2,
        value: `3. Rejected(실패) 상태`,
      },
      {
        type: ComponentType.NORMAL,
        value: `비동기 처리 중 오류가 발생하면 프로미스는 "실패" 상태가 됩니다. reject 함수를 호출하여 상태를 변경합니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `const myPromise = new Promise((resolve, reject) => {
  const error = new Error("Something went wrong!");
  reject(error);
});

myPromise.catch((error) => {
  console.error(error.message); // "Something went wrong!"
});`,
      },
      {
        type: ComponentType.NORMAL,
        value: `프로미스를 사용하면 콜백 지옥을 피하고 비동기 코드를 더 간결하게 작성할 수 있습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
}

fetchData()
  .then((result) => {
    console.log(result); // "Data fetched successfully!"
  })
  .catch((error) => {
    console.error(error); // "Error fetching data"
  });`,
      },
      {
        type: ComponentType.NORMAL,
        value: `프로미스를 사용하면 비동기 코드를 일관된 방식으로 처리하고, 세 가지 상태를 활용하여 처리 결과를 명확하게 다룰 수 있습니다. 이를 통해 코드의 가독성과 유지보수성이 향상됩니다.`,
      },
    ],
  },
  {
    id: 13,
    title: 'JWT와 토큰 관리 방법',
    date: '2022-07-08',
    folder: Folder.JAVASCRIPT,
    preview: `액세스 토큰은 주로 인증된 사용자가 보호된 리소스에 접근할 수 있는 권한을 부여하는 데 사용되는 문자열입니다. 주로 웹 애플리케이션, 모바일 앱 등에서 사용자 인증 및 권한 부여에 쓰입니다. 여러 인증 프로토콜에서 사용되며, 대표적으로 OAuth 2.0에서 정의되어 있습니다.
    `,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `JWT(JSON Web Token)는 JSON 객체를 사용하여 모바일이나 웹의 사용자 인증을 위해 사용하며 정보를 안전성 있게 암호화한 토큰을 의미한다.`,
      },
      {
        type: ComponentType.H4,
        value: `Access Token`,
      },
      {
        type: ComponentType.NORMAL,
        value: `액세스 토큰은 주로 인증된 사용자가 보호된 리소스에 접근할 수 있는 권한을 부여하는 데 사용되는 문자열입니다. 주로 웹 애플리케이션, 모바일 앱 등에서 사용자 인증 및 권한 부여에 쓰입니다. 여러 인증 프로토콜에서 사용되며, 대표적으로 OAuth 2.0에서 정의되어 있으며</br></br>기본적으로 Access Token은 다음과 같은 특징을 가지고 있다.`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `<b>유효 기간(Expiration)</b> : Access Token은 일정 기간 동안만 유효하다. 일반적으로 짧은 시간(예: 2시간) 동안만 유효하며, 이 기간이 지나면 재발급이나 새로운 인증이 필요하다.

        <b>권한 범위(범위)</b> : Access Token에는 사용자가 수행할 수 있는 특정 작업 또는 리소스에 대한 권한 범위가 지정된다. Scope는 해당 토큰으로 어떤 작업이 가능한지를 결정하는 데 사용된다.
        
        <b>발급자(Issuer)</b> : 토큰을 발급한 인증 서버(발급자)의 정보가 토큰에 포함될 수 있다. 클라이언트는 이 정보를 사용하여 토큰의 신뢰성을 확인할 수 있다.
        
        <b>서명(Signature)</b> : 보안을 강화하기 위해 토큰은 발급자에 의해 서명된다. 서명을 통해 토큰이 유효하며 조작되지 않았음을 검증할 수 있다.
        
        <b>사용자 식별 정보</b> : Access Token에는 사용자를 고유하게 식별할 수 있는 정보(사용자 ID 등)가 포함될 수 있다. 이를 통해 서버는 특정 사용자에 대한 작업을 수행할 수 있다.`,
      },
      {
        type: ComponentType.H4,
        value: `Refresh token`,
      },
      {
        type: ComponentType.NORMAL,
        value: `access 토큰이 만료가 됐을 경우 access 토큰을 재발급 받을 수 있도록 서버에 요청할 수 있다. fresh token은 access token을 재발급받을 수 있는 token이다. 이 token은 서버에 저장되기 때문에(stateful) refresh token이 해커에 의해 탈취당했다고 판단되었을 때 서버에서 refresh token을 삭제함으로써 강제 로그아웃을 시킬 수 있다.</br></br>

        이런 특징을 이용해서 access token + refresh token의 조합을 구성하면 access token의 경제적인 장점과 refresh token의 보안적인 장점을 둘 다 챙길 수 있다. access token은 보안 적으로 취약하니 2시간 정도로 짧게 가져가고, refresh token은 처리 비용이 많이 들기 때문에 2주 정도로 길게 가져가는 방식을 주로 사용한다.`,
      },
      {
        type: ComponentType.CODE,
        value: `client.interceptors.request.use(
    function (config) {
        const user = localStorage.getItem('user');
        if (!user) {
            config.headers["accessToken"] = null;
            config.headers["refreshToken"] = null;
            return config
        }
        const { accessToken, refreshToken } = JSON.parse(user)
        config.headers["accessToken"] = accessToken;
        config.headers["refreshToken"] = refreshToken;
        return config
    }
)`,
      },
      {
        type: ComponentType.NORMAL,
        value: `reqeust를 보낼때 localStorage에 token 정보가 있다면 헤더에 토큰 정보를 저장하고 없다면 null로 처리를 한다.`,
      },
      {
        type: ComponentType.CODE,
        value: `client.interceptors.response.use(
    function (response) {
        return response
    },
    async function (error) {
      if (error.response && error.response.status === 403) {
          try {
              const originalRequest = error.config;
              const data = await client.get('auth/refreshtoken')
              if (data) {
                  const {accessToken, refreshToken} = data.data
                  localStorage.removeItem('user')
                  localStorage.setItem('user', JSON.stringify(data.data, ['accessToken', 'refreshToken']))
                  originalRequest.headers['accessToken'] = accessToken;
                  originalRequest.headers['refreshToken'] = refreshToken;
                  return await client.request(originalRequest);
                  }
          } catch (error){
              localStorage.removeItem('user');
              console.log(error);
          }
          return Promise.reject(error)
      }
      return Promise.reject(error)
    }
)`,
      },
      {
        type: ComponentType.NORMAL,
        value: `response를 받았을 때, error가 발생했고 해당 error의 status가 403이라면 기존의 originalRequest를 auth/refreshtoken 으로 전달해 토큰을 재발급 받도록 한다.</br></br>
        여기서 403 이외의 오류가 들어온다면 토큰 재발급에 실패한것으로 처리를 한다.</br></br>
        재발급 받은 토큰을 다시 로컬스토리지에 저장 하고 헤더 부분에 토큰 정보를 변경하고 다시 originalRequest를 보낸다.`,
      },
      {
        type: ComponentType.CODE,
        value: `import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:4000/'
})

client.interceptors.request.use(
    function (config) {
        const user = localStorage.getItem('user');
        if (!user) {
            config.headers["accessToken"] = null;
            config.headers["refreshToken"] = null;
            return config
        }
        const { accessToken, refreshToken } = JSON.parse(user)
        config.headers["accessToken"] = accessToken;
        config.headers["refreshToken"] = refreshToken;
        return config
    }
)

client.interceptors.response.use(
    function (response) {
        return response
    },
    async function (error) {
      if (error.response && error.response.status === 403) {
          try {
              const originalRequest = error.config;
              const data = await client.get('auth/refreshtoken')
              if (data) {
                  const {accessToken, refreshToken} = data.data
                  localStorage.removeItem('user')
                  localStorage.setItem('user', JSON.stringify(data.data, ['accessToken', 'refreshToken']))
                  originalRequest.headers['accessToken'] = accessToken;
                  originalRequest.headers['refreshToken'] = refreshToken;
                  return await client.request(originalRequest);
                  }
          } catch (error){
              localStorage.removeItem('user');
              console.log(error);
          }
          return Promise.reject(error)
      }
      return Promise.reject(error)
    }
)

export default client;`,
      },
      {
        type: ComponentType.H2,
        value: `보안`,
      },
      {
        type: ComponentType.H2,
        value: `CSRF(Cross Site Request Forgery)`,
      },
      {
        type: ComponentType.NORMAL,
        value: `CSRF는 Cross-Site Request Forgery의 약자로, 한 사이트에서 인증된 사용자의 권한을 가로채어 다른 사이트에서 공격자가 의도한 동작을 수행하게 하는 공격이다. 이 공격은 사용자가 자신의 의지와 무관하게 공격자가 의도한 요청을 악의적인 웹사이트를 통해 전송함으로써 이루어진다.`,
      },
      {
        type: ComponentType.H4,
        value: `CSRF 작동 원리`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `사용자가 특정 웹사이트에 로그인하여 인증을 받는다.
          이 사용자가 다른 웹사이트(공격자의 사이트)를 방문한다.
         공격자의 사이트에서는 사용자의 권한으로 특정 동작(예: 글쓰기, 계정 변경 등)을 요청하는 HTTP 요청을 생성한다.
         이를 트리거하기 위해 공격자는 이미 로그인된 사용자의 브라우저에서 악의적인 요청을 보낼 수 있는 방법을 찾는다.`,
      },
      {
        type: ComponentType.H4,
        value: `예시 시나리오`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `사용자 A가 은행 웹사이트에 로그인한다.
        사용자 A가 악의적인 이메일 링크를 클릭하여 공격자의 웹사이트에 접속한다.
        해당 웹사이트에서는 사용자 A의 권한으로 은행 웹사이트에 자동으로 자금 이체를 요청하는 HTTP 요청을 생성한다.
        이를 통해 은행 웹사이트는 사용자 A의 권한으로 이체를 실행하게 된다.`,
      },
      {
        type: ComponentType.H2,
        value: `XSS(Cross Site Scripting)`,
      },
      {
        type: ComponentType.NORMAL,
        value: `XSS라고 불리는 이유는 CSS가 이미 약자가 있기 때문이고 code injection attack이라고도 한다.

        XSS도 다양한 공격 방법이 있는데 우선은
        <b>공격자가 의도하는 악의적인 js 코드를 피해자의 웹 브라우저에서 실행</b>시키는 것 정도로 알고 있으면 된다.
        
        이 방법으로 피해자 브라우저에 저장된 중요 정보들을 탈취 가능하다.`,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `아무리 다른 공격(CSRF 등)에 대한 방비를 열심히 했다 해도 XSS가 뚫린다면 아무 소용이 없다. js코드로 의도하지 않은 request를 날린다던가 localStorage, 변수 값 등 모든 것이 탈취 가능하기 때문이다. XSS 공격 방지는 웹 보안의 뿌리이며 XSS 공격을 막는 것은 웹 보안을 위한 최소한의 조치이다.`,
      },
      {
        type: ComponentType.H2,
        value: `해결 1) localStorage에 저장하는 방법`,
      },
      {
        type: ComponentType.H4,
        value: `CSRF 공격에는 안전하다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `그 이유는 자동으로 request에 담기는 쿠키와는 다르게 js 코드에 의해 헤더에 담기므로 XSS를 뚫지 않는 이상 공격자가 정상적인 사용자인 척 request를 보내기가 어렵다.`,
      },
      {
        type: ComponentType.H4,
        value: `XSS에 취약하다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `공격자가 localStorage에 접근하는 js 코드 한 줄만 주입하면 localStorage를 공격자가 내 집처럼 드나들 수 있다.`,
      },
      {
        type: ComponentType.H2,
        value: `해결 2) cookie에 저장하는 방법`,
      },
      {
        type: ComponentType.H4,
        value: `XSS 공격으로부터 localStorage에 비해 안전하다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `쿠키의 httpOnly 옵션을 사용하면 Js에서 쿠키에 접근 자체가 불가능하다.</br>
        그래서 XSS 공격으로 쿠키 정보를 탈취할 수 없다.(httpOnly 옵션은 서버에서 설정할 수 있음) 하지만 XSS 공격으로부터 완전히 안전한 것은 아니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `httpOnly 옵션으로 쿠키의 내용을 볼 수 없다 해도 js로 request를 보낼 수 있으므로 자동으로 request에 실리는 쿠키의 특성 상 사용자의 컴퓨터에서 요청을 위조할 수 있기 때문이다.</br>
        공격자가 귀찮을 뿐이지 XSS가 뚫린다면 httpOnly cookie도 안전하진 않다.`,
      },
      {
        type: ComponentType.H4,
        value: `CSRF 공격에 취약하다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `자동으로 http request에 담아서 보내기 때문에 공격자가 request url만 안다면 사용자가 관련 link를 클릭하도록 유도하여 request를 위조하기 쉽다.`,
      },
      {
        type: ComponentType.H2,
        value: `해결 3 : refresh token 사용하는 방법`,
      },
      {
        type: ComponentType.NORMAL,
        value: `가장 좋은 방법으로는 refresh token을 사용하는 방법이 있다. CSRF 공격으로부터 안전한 환경을 유지하기 위해 쿠키에 SameSite 속성을 설정하고, 리프레시 토큰을 활용하여 요청의 유효성을 검증하는 방법이다. 백엔드 api 개발자와 소통이 가능하다면 refresh token을 httpOnly 쿠키로 설정하고
        url이 새로고침 될 때마다 refresh token을 request에 담아 새로운 accessToken을 발급 받는다. </br></br>
        
        발급 받은 accessToken은 js private variable에 저장한다.</br></br>
        
        이런 방식을 사용하는 경우, refresh token이 CSRF에 의해 사용된다 하더라도 공격자는 accessToken을 알 수 없다.</br></br>
        
        CSRF는 피해자의 컴퓨터를 제어할 수 있는 것이 아니기 때문이다. 요청을 위조하여 피해자가 의도하지 않은 서버 동작을 일으키는 공격방법이기 때문에 refresh token을 통해 받아온 response(accessToken)는 공격자가 확인할 수 없다.</br></br>
        
        따라서 쿠키를 사용하여 XSS를 막고 refresh token 방식을 이용하여 CSRF를 막을 수 있다.`,
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
        value: `문제 설명`,
      },
      {
        type: ComponentType.H4,
        value: `정수 배열 arr이 매개변수로 주어집니다. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.`,
      },
      {
        type: ComponentType.H4,
        value: `제한 사항`,
      },
      {
        type: ComponentType.NORMAL,
        value: `1 ≤ arr의 길이 ≤ 1,000</br>
        1 ≤ arr의 원소 ≤ 1,000`,
      },
      {
        type: ComponentType.H4,
        value: `입출력 예`,
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
        value: `문제 설명`,
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
        value: `제한 사항`,
      },
      {
        type: ComponentType.NORMAL,
        value: `s의 길이는 1 이상 1,000 이하입니다.`,
      },
      {
        type: ComponentType.H4,
        value: `입출력 예`,
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
        value: `문제 설명`,
      },
      {
        type: ComponentType.NORMAL,
        value: `두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `제한 사항`,
      },
      {
        type: ComponentType.NORMAL,
        value: `두 수는 1이상 1000000이하의 자연수입니다.`,
      },
      {
        type: ComponentType.H4,
        value: `📝 입출력 예`,
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
        value: `문제 설명`,
      },
      {
        type: ComponentType.NORMAL,
        value: `정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
</br></br>
        만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `제한 사항`,
      },
      {
        type: ComponentType.NORMAL,
        value: `1 ≤ l ≤ r ≤ 1,000,000`,
      },
      {
        type: ComponentType.H4,
        value: `입출력 예`,
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
        value: `문제 설명`,
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
        value: `제한 사항`,
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
        value: `입출력 예`,
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
        value: `문제 설명`,
      },
      {
        type: ComponentType.NORMAL,
        value: `수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.</br></br>

        마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
        `,
      },
      {
        type: ComponentType.H4,
        value: `제한 사항`,
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
        value: `입출력 예`,
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
        value: `문제 설명`,
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
        value: `제한 사항`,
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
        value: `입출력 예`,
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
        value: `문제 설명`,
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
        value: `제한 사항`,
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
        value: `입출력 예`,
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
        type: ComponentType.STRINGLIST,
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
        type: ComponentType.STRINGLIST,
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
        value: `문제 설명`,
      },
      {
        type: ComponentType.NORMAL,
        value: `수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.</br></br>

        마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.
        `,
      },
      {
        type: ComponentType.H4,
        value: `제한 사항`,
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
        value: `입출력 예`,
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
        value: `문제 설명`,
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
        value: `제한 사항`,
      },
      {
        type: ComponentType.NORMAL,
        value: `첫 번째 줄에 반 학생 수 N(1<=N<=20)과 M(1<=M<=10)이 주어진다. </br>
        두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어진다. 학생번호가 제일 앞에서부터 1등, 2등, ...N등 순으로 표현된다.</br>
        만약 한 줄에 N=4이고, 테스트 결과가 3 4 1 2로 입력되었다면 3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등을 의미합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `📝 입출력 예`,
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
        value: `문제 설명`,
      },
      {
        type: ComponentType.NORMAL,
        value: `선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.</br>
        학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라 고 했습니다. 선생님이 가지고 있는 예산은 한정되어 있습니다.</br>
        현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요. 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는 할인에 포함되지 않습니다.</br>`,
      },
      {
        type: ComponentType.H4,
        value: `제한 사항`,
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
        value: `입출력 예`,
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
        value: `문제 설명`,
      },
      {
        type: ComponentType.NORMAL,
        value: `현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 같은 숫자의 카드가 여러장 있을 수 있습니다. 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려 고 합니다. 3장을 뽑을 수 있는 모든 경우를 기록합니다. 기록한 값 중 K번째로 큰 수를 출력 하는 프로그램을 작성하세요.
        만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값 은 22입니다.`,
      },
      {
        type: ComponentType.H4,
        value: `제한 사항`,
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
        value: `입출력 예`,
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
        value: `문제 설명`,
      },
      {
        type: ComponentType.NORMAL,
        value: `입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.`,
      },
      {
        type: ComponentType.H4,
        value: `제한 사항`,
      },
      {
        type: ComponentType.NORMAL,
        value: `첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.</br>
        남은 문자만 출력한다.`,
      },
      {
        type: ComponentType.H4,
        value: `입출력 예`,
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
        value: `문제 설명`,
      },
      {
        type: ComponentType.NORMAL,
        value: `후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.</br>
        만약 3(5+2)-9 을 후위연산식으로 표현하면 352+9- 로 표현되며 그 결과는 12입니다.`,
      },
      {
        type: ComponentType.H4,
        value: `제한 사항`,
      },
      {
        type: ComponentType.NORMAL,
        value: `첫 줄에 후위연산식이 주어집니다. </br>
        연산식의 길이는 50을 넘지 않습니다. 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.`,
      },
      {
        type: ComponentType.H4,
        value: `입출력 예`,
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
        value: `문제 설명`,
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
        value: `제한 사항`,
      },
      {
        type: ComponentType.NORMAL,
        value: `한 줄에 쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 공백없이 주어진다. 괄호 문자의 개수는 최대 100,000이다.</br>
        잘려진 조각의 총 개수를 나타내는 정수를 한 줄에 출력한다.`,
      },
      {
        type: ComponentType.H4,
        value: `입출력 예`,
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
        type: ComponentType.STRINGLIST,
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
        value: `문제 설명`,
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
        value: `제한 사항`,
      },
      {
        type: ComponentType.NORMAL,
        value: `첫 줄에 자연수 N(5<=N<=1,000)과 K(2<=K<=9)가 주어진다. </br>
        첫 줄에 마지막 남은 왕자의 번호를 출력합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `입출력 예`,
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
