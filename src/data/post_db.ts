import { ComponentType, Folder, Level } from 'type/post';

/**
 * @constant totalPostlist
 * @description post 데이타
 */
export const totalPostlist = [
  {
    id: 14,
    title: '테스트 주도 개발(Test driven devlopment, TDD)',
    date: '2024-07-08 22:13:16',
    folder: Folder.TDD,
    tag: ['테스트 주도 개발'],
    preview: `테스트 코드를 먼저 작성하는 테스트 주도 개발 방벙론은 테스트 프레임워크를 사용하여 자동화된 테스트 시스템에서 미리 정의된 사양을 바탕으로 실패하는 테스트 명새를 작성하고`,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `소프트웨어를 전문적으로 개발하는 기업들은 서비스의 안정적인 운영과 서비스의 품질을 확보하기 위해 테스트 코드를 작성하고 관리하고 있다. 다시 말하면 서비스의 품질을 확보하기 위해서는 테스트 코드 작성이 필수라는 것이다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `테스트 주도 개발이라는 개념이 나오기 전에는 우리가 지금까지 해온 것과 같이 움직이는 소프트웨어를 개발한 후 해당 소프트 웨어에 대한 테스트 코드를 작성하는 방식을 사용해 왔다. 이 방식을 사용하면 다음과 같은 문제점들이 있다.`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `다른 사람이 작성한 소스 코드 또는 내가 예전에 작성한 코드에 대해 테스트 코드를 작성해야 하는데 이 코드가 어떻게 동작하는지 알 수 없거나 기억할 수 없음으로 코드를 다시 분석하고 테스트 코드를 작성해야 한다.
        작성된 코드가 테스트하기 쉽게 작성되어 있지 않다. 따라서 테스트 코드를 작성하기가 불가능 하거나 테스트 코드를 작성하기 위해 이미 작성된 코드를 수정해야 할 경우가 발생한다. 이때 기존 코드의 수정으로 인해 예기치 않은 문제가 발생할 수 있다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `이런 문제를 해결하기 위해 켄트백(Kent Beck)은 테스트 코드를 먼저 작성하는 테스트 주도 개발론을 제안하게 되었다. 테스트 줃 개발 방벙론은 테스트 프레임워크 등을 사용하여 자동화된 테스트 시스템에서 미리 정의된 사양을 바탕으로`,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `실패하는 테스트 명세를 작성하고 그 테스트 명세를 통과하기 위한 최소한의 코드를 작성한다. 마지막으로 해당 코드를 리팩토링 하는 것으로 개발을 마치는 프로세스이다.`,
      },
      {
        type: ComponentType.H2,
        value: `Jest 테스트 프레임워크로 테스트 코드 작성하기`,
      },
      {
        type: ComponentType.NORMAL,
        value: `Jest는 주로 JavaScript 및 TypeScript 애플리케이션을 테스트하기 위해 사용되는 JavaScript 테스팅 프레임워크로 특히 React 애플리케이션 테스트에 최적화되어 있다. 페이스북(현 메타)에서 개발했으며,  React 외에도 다른 JavaScript 프레임워크나 라이브러리와도 잘 작동한다.`,
      },
      {
        type: ComponentType.H2,
        value: `Jest의 주요 쿼리 함수`,
      },
      {
        type: ComponentType.H3,
        value: `describe 함수 `,
      },
      {
        type: ComponentType.NORMAL,
        value: `describe함수는 jest가 제공하는 함수로써 여러 테스트를 한 그룹으로 묶고 설명을 붙이기 위해 사용한다.`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `첫번째 매개변수는 명령 프롬프트에 표시할 설명
        두번째 매개변수는 여러 테스트를 그룹으로 묶을 콜백 함수`,
      },
      {
        type: ComponentType.CODE,
        value: `describe('test index.js file', () => {

});`,
      },
      {
        type: ComponentType.H3,
        value: `it 함수`,
      },
      {
        type: ComponentType.NORMAL,
        value: `it함수는 실제 테스트가 실행되는 테스트 명세를 작성할 때 사용한다.`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `첫번째 매개변수는 테스트 명세의 설명
        두 번째 매개변수에는 실제로 테스트를 실행하는 테스트 코드를 작성`,
      },
      {
        type: ComponentType.CODE,
        value: `it('sum 1+2 to equal 3', () => {
      
});`,
      },
      {
        type: ComponentType.H3,
        value: `expect 함수`,
      },
      {
        type: ComponentType.NORMAL,
        value: `expect 함수는 주로 테스트 프레임워크에서 테스트 결과를 확인하기 위해 사용되는 메서드나 함수이다. expect 함수는 테스트 대상이 특정 조건을 만족하는지, 즉 예상된 동작을 수행하는지를 검증하는 역할이다.`,
      },

      {
        type: ComponentType.CODE,
        value: `it('sum 1+2 to equal 3', () => {
      expect(sum(1,2)).toBe(3);
});`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `여기서 sum(1,2)는 테스트 대상이 실제로 생성한 값이고, 3는 기대하는 값이며 toBe는 일치 여부를 확인하는 메서드이다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `expect는 단순한 값 비교 외에도 다양한 일치 조건을 제공한다. 예를 들어, 두 객체가 동일한지, 배열이 특정 요소를 포함하는지, 함수가 특정 예외를 던지는지 등을 확인할 수 있다.`,
      },
      {
        type: ComponentType.CODE,
        value: `// 객체나 배열의 동등성 비교
expect(actualValue).toEqual(expectedValue); 

// 배열이 특정 아이템을 포함하는지
expect(array).toContain(item); 

// 함수가 특정 오류를 던지는지
expect(() => functionCall()).toThrow(ErrorType); 
        `,
      },
      {
        type: ComponentType.H2,
        value: `@testing-library로 리액트 컴포넌트 테스트 코드 작성 하기`,
      },
      {
        type: ComponentType.NORMAL,
        value: `@testing-library는 DOM 테스팅 라이브러리(DOM Testing Library)이다. @testing-library는 사용자 중심 방식으로 UI 컴포넌트를 테스트하는데 도움을 주는 라이브러리이며
        리액트 컴포넌트의 테스트 코드 작성을 도와준다. </br></br>
        
        테스트 코드를 작성할 때 컴포넌트 세부 구현사항을 포함하지 않으면서도 신뢰할 수 있는 테스트 코드 작성에 도움을 준다. 이렇게 컴포넌트의 세부 구현 사항을 포함하지 않은 테스트 코드를 작성하면 컴포넌트의 세부 구현 부분을 리팩토링 하여도 테스트 코드를 수정할 필요가 없다, 이로 인해 한번 작성한 테스트 코드는 긴 시간 유지할 수 있으며 오랜 기간 유지 가능하여 테스트 코드를 자주 수정하지 않아도 되므로 개발 생산성을 향상 시켜 준다.`,
      },
      {
        type: ComponentType.H3,
        value: `App.js 컴포넌트 - 렌더링 테스트`,
      },
      {
        type: ComponentType.CODE,
        value: `import { render, screen } from 'testing-library/react';
import App from './App.js';
        
test('renders learn react link', ()=>{
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
})`,
      },
      {
        type: ComponentType.H3,
        value: `test`,
      },
      {
        type: ComponentType.NORMAL,
        value: `test 함수(it 함수와 같은 역할을 하는 함수)를 사용하여 테스트 명세를 작성한 테스트 코드이다.`,
      },
      {
        type: ComponentType.H3,
        value: `render`,
      },
      {
        type: ComponentType.NORMAL,
        value: `리액트 컴포넌트를 화면에 표시하기 위함`,
      },
      {
        type: ComponentType.H3,
        value: `screen`,
      },
      {
        type: ComponentType.NORMAL,
        value: `리액트 컴포넌트가 표시된 화면을 의미한다.`,
      },
      {
        type: ComponentType.H3,
        value: `GetByText`,
      },
      {
        type: ComponentType.NORMAL,
        value: `getByText 함수는 주어진 텍스트를 포함하는 DOM 요소를 찾는 데 사용된다. 렌더링된 컴포넌트에서 screen.GetByText를 통해 화면에서 'learn react'라는 글자를 가지고 있는 돔 요소를 찾는다.`,
      },
      {
        type: ComponentType.CODE,
        value: `import { render, screen } from '@testing-library/react';
import App from './App';
        
test('renders Hello World text', () => {
  render(<App />);
  const textElement = screen.getByText('Hello World');
  expect(textElement).toBeInTheDocument();
\});
        `,
      },
      {
        type: ComponentType.H3,
        value: `toBeInTheDocument`,
      },
      {
        type: ComponentType.NORMAL,
        value: `요소를 찾아 jest expect().toBeInTheDocument()를 사용하여 돔에 표시되어 있는지 확인 한다. </br>

        render 함수는 메모리상에 돔을 만들고 screen을 통해 해당 돔에 접근 하는 것을 의미한다.
        react-testing-library의 render 함수를 사용하여 App이라는 컴포넌트를 렌더링 하였다.`,
      },
      {
        type: ComponentType.H2,
        value: `React Testing Library의 주요 쿼리 함수`,
      },
      {
        type: ComponentType.H3,
        value: `getByText`,
      },
      {
        type: ComponentType.NORMAL,
        value: `주어진 텍스트를 포함하는 요소를 찾습니다.</br>
        ex) screen.getByText(/learn react/i)는 대소문자를 구분하지 않고 "learn react"라는 텍스트를 포함하는 요소를 찾습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `import { render, screen } from '@testing-library/react';
import App from './App';
        
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
        `,
      },
      {
        type: ComponentType.H3,
        value: `getByRole`,
      },
      {
        type: ComponentType.NORMAL,
        value: `특정 역할(예: 버튼, 링크)을 가진 요소를 찾습니다.</br>
        screen.getByRole('button', { name: /submit/i })은 "submit" 텍스트를 가진 버튼을 찾습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `import { render, screen } from '@testing-library/react';
import App from './App';
        
test('renders submit button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /submit/i });
  expect(buttonElement).toBeInTheDocument();
});
        `,
      },
      {
        type: ComponentType.H3,
        value: `getByLabelText`,
      },
      {
        type: ComponentType.NORMAL,
        value: `특정 라벨 텍스트와 연결된 요소(주로 폼 필드)를 찾습니다.</br>
        screen.getByLabelText('Username')은 "Username" 라벨을 가진 입력 필드를 찾습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
        
test('finds the username input', () => {
  render(<LoginForm />);
  const inputElement = screen.getByLabelText('Username');
  expect(inputElement).toBeInTheDocument();
});
        `,
      },

      {
        type: ComponentType.H3,
        value: `getByPlaceholderText`,
      },
      {
        type: ComponentType.NORMAL,
        value: `특정 플레이스홀더 텍스트를 가진 입력 요소를 찾습니다. </br>
        screen.getByPlaceholderText('Enter your username')은 "Enter your username" 플레이스홀더를 가진 입력 필드를 찾습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
        
test('finds the input by placeholder', () => {
  render(<LoginForm />);
  const inputElement = screen.getByPlaceholderText('Enter your username');
  expect(inputElement).toBeInTheDocument();
});
        `,
      },
      {
        type: ComponentType.H3,
        value: `getByAltText`,
      },
      {
        type: ComponentType.NORMAL,
        value: `주어진 alt 텍스트를 가진 이미지를 찾습니다.</br>
        screen.getByAltText('Profile Picture')은 "Profile Picture" alt 텍스트를 가진 이미지를 찾습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `import { render, screen } from '@testing-library/react';
import Profile from './Profile';
        
test('finds the profile picture', () => {
  render(<Profile />);
  const imageElement = screen.getByAltText('Profile Picture');
  expect(imageElement).toBeInTheDocument();
});
        `,
      },
      {
        type: ComponentType.H3,
        value: `getByTestId`,
      },
      {
        type: ComponentType.NORMAL,
        value: `data-testid 속성을 사용하여 요소를 찾습니다. </br>
        screen.getByTestId('custom-element')은 data-testid="custom-element" 속성을 가진 요소를 찾습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `import { render, screen } from '@testing-library/react';
import Component from './Component';
        
test('finds element by test id', () => {
  render(<Component />);
  const element = screen.getByTestId('custom-element');
  expect(element).toBeInTheDocument();
});
        `,
      },
      {
        type: ComponentType.H3,
        value: `queryByText`,
      },
      {
        type: ComponentType.NORMAL,
        value: `요소가 존재하지 않거나, 하나만 존재할 때 사용합니다. 존재하지 않으면 null을 반환합니다. </br>
        getByText는 요소가 없으면 에러를 던집니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `import { render, screen } from '@testing-library/react';
import App from './App';
        
test('does not find non-existing text', () => {
  render(<App />);
  const textElement = screen.queryByText('Non-existing Text');
  expect(textElement).toBeNull();
});
        `,
      },
      {
        type: ComponentType.H3,
        value: `findByText`,
      },
      {
        type: ComponentType.NORMAL,
        value: `비동기적으로 요소를 찾을 때 사용합니다. 주로 요소가 나중에 렌더링될 경우에 사용합니다. 반환 값은 Promise입니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `import { render, screen } from '@testing-library/react';
import App from './App';
        
test('renders welcome message', async () => {
  render(<App />);
  const messageElement = await screen.findByText(/welcome/i);
  expect(messageElement).toBeInTheDocument();
});
        `,
      },
      {
        type: ComponentType.H2,
        value: `참고할만한 예제들`,
      },
      {
        type: ComponentType.H3,
        value: `예제 [1] - 컴포넌트가 올바르게 렌더링되는지를 확인하는 테스트 케이스`,
      },
      {
        type: ComponentType.NORMAL,
        value: `&lt;App />에 대한 Jest 테스트 스위트를 작성한 것으로 <App /> 컴포넌트가 올바르게 렌더링되는지를 확인하는 하나의 테스트 케이스를 포함하고 있다.`,
      },
      {
        type: ComponentType.KEYWORD,
        value: `render,getElementByClassName,toHaveLength,toHaveAttribute`,
      },
      {
        type: ComponentType.CODE,
        value: `describe('&lt;App />', ()=>{
it('renders component correctly', ()=>{      
      ① const { container } = render(<App />);              
      ② expect(container.getElementByClassName('App-logo')).toHaveLength(1);       
      ③ expect(container.getElementByClassName('App-logo')[0]).toHaveAttribute('src','logo.svg');
    })
})`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `① 이 줄은 &lt;App /> 컴포넌트를 렌더링한다. render 함수는 컴포넌트를 가상 DOM에 렌더링하고, 반환된 객체에서 container를 구조 분해 할당하여 가져오며 container는 렌더링된 DOM 트리를 포함한다.
        ② 이 줄은 container 안에 'App-logo' 클래스를 가진 요소가 하나 있는지 확인한다. expect 함수는 기대값을 설정하는 데 사용되고, toHaveLength(1)는 요소의 길이가 1인지 확인한다.
        ③ 이 줄은 'App-logo' 클래스를 가진 첫 번째 요소가 'src' 속성을 가지고 있으며, 그 값이 'logo.svg'인지 확인한다. toHaveAttribute('src', 'logo.svg')는 요소의 src 속성이 'logo.svg'인지를 확인한다.`,
      },
      {
        type: ComponentType.H3,
        value: `예제 [2] - <img /> 테스트 코드`,
      },
      {
        type: ComponentType.KEYWORD,
        value: `render,getElementsByTagName,toHaveLength,toHaveTextContext`,
      },
      {
        type: ComponentType.CODE,
        value: `describe('&lt;App /\>', ()=>{
it('renders component correctly', ()=>{
      ①const { container } = render(<App /\>);  
      ② expect(container.getElementsByTagName('p')).toHaveLength(1);
      ③ expect(container.getElementsByTagName('p')[0]).toHaveTextContext('Edit src/App.js and save to reload.')
   })
})`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `① 이 줄은 &lt;App /> 컴포넌트를 렌더링한다. render 함수는 컴포넌트를 가상 DOM에 렌더링하고, 반환된 객체에서 container를 구조 분해 할당하여 가져오며 container는 렌더링된 DOM 트리를 포함한다.
        ② 이 줄은 container 안에 <p> 태그를 가진 요소가 하나 있는지 확인한다. expect 함수는 기대값을 설정하는 데 사용되고, toHaveLength(1)는 해당 요소의 길이가 1인지 확인한다.
        ③ 이 줄은 &lt;p> 태그를 가진 첫 번째 요소가 'Edit src/App.js and save to reload.'라는 텍스트 내용을 가지고 있는지 확인한다. expect 함수는 기대값을 설정하는 데 사용되고, toHaveTextContent('Edit src/App.js and save to reload.')는 해당 요소의 텍스트 내용이 정확히 일치하는지를 확인한다.`,
      },
      {
        type: ComponentType.H3,
        value: `예제 [3] - <p/> 테스트`,
      },
      {
        type: ComponentType.CODE,
        value: `describe('&lt;App /\>', ()=>{
  it('renders component correctly', ()=>{
      const { container } = render(<App /\>);    
      expect(container).toMatchSnapshot();
    })
})`,
      },
      {
        type: ComponentType.NORMAL,
        value: `toMatchSnapshot가 실행되면 src/snapshots/App.test.js.snap이라는 파일이 생성된 것을 확인 할 수 있다. 파일을 열어 내용을 확인해 보면 App 컴포넌트가 화면에 렌더링될 때 표시되는 HTML 내용이 저장된 것을 확인 할 수 있다.</br>
        저장된 스냅샷은 App 컴포넌트가 수정되어 화면에 표시되는 HTML 구조가 변경되면 에러를 표시하게 된다. 이렇게 스냅샷은 화면에 표시되는 컴포넌트가 변경되었는지 감지하기 위한 테스트로 많이 사용된다.`,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `만약 컴포넌트를 수정하여 화면 표시가 변경된 것이 의도된 수정이었다면 스냅샷 테스트로 저장된 파일을 업데이트해 주어야 한다. 명령프롬프트에 에러가 표시된 상태에서 키보드 'u'키를 누르면 스냅샷으로 생성된 파일이 업데이트 된다. 그러면 새롭게 업데이트된 스냅샷 파일이 다시 기준이 되어 변경을 감지하고 에러를 표시하게 된다.`,
      },
      {
        type: ComponentType.H3,
        value: `예제 [4] - 테스트 코드 스냅샷 (화면에 표시되는 내용이 변경 되었는지 체크)`,
      },
      {
        type: ComponentType.NORMAL,
        value: `Button 컴포넌트는 Props만을 가지는 단순 컴포넌트이다.
        Button 컴포넌트가 화면에 잘 표시 되는지, Props가 잘 적용되는지를 확인하도록 한다.`,
      },
      {
        type: ComponentType.CODE,
        value: `import React from 'react';
import { render, screen } from 'testing-library/react';
import 'jest-styled-components';
import {Button} from './index';

describe('&lt;Button />', ()=>{
  it('renders component correctly', ()=>{
      const { container } = render(&lt;Button label="Button Test" /\>);
        
        const label = screen.getByText("button Test");
        expect(label).toBeInTheDocument();

    const parent = label.parentElement;
        expect(parent).toHaveStyleRule('background-color', '#304FFE');
        expect(parent).toHaveStyleRule('background-color', '#1E40FF', { modifier:'hover'});
        
        expect(container).toMatchSnapshot();
    })
})`,
      },
    ],
  },
  {
    id: 13,
    title: '리액트와 불변성',
    date: '2024-01-15 22:11:33',
    folder: Folder.REACT,
    tag: ['React'],
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
    id: 12,
    title: '함수형 프로그래밍',
    date: '2024-01-15 22:11:33',
    folder: Folder.JAVASCRIPT,
    tag: ['Javascript'],
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
        부수효과(Side Effect)를 방지 한다는 것은 동시성 문제도 해결된다는 의미이다.`,
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
    id: 11,
    title: '프론트 서버',
    date: '2024-01-15 22:11:33',
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
    id: 10,
    title: '브라우저에서 이벤트가 발생하고 전파되는 방식',
    date: '2024-01-15 22:11:33',
    folder: Folder.JAVASCRIPT,
    tag: ['browser'],
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
    id: 9,
    title: '일반함수 VS 화살표 함수의 this 바인딩',
    date: '2023-03-20 22:11:33',
    folder: Folder.JAVASCRIPT,
    tag: ['Javascript'],
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
    id: 8,
    title: '중첩된 객체를 가진 객체의 깊은 복사 하는 방법',
    date: '2023-03-03 22:11:33',
    folder: Folder.JAVASCRIPT,
    tag: ['Javascript'],
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
    date: '2023-02-21 22:11:33',
    folder: Folder.JAVASCRIPT,
    tag: ['Javascript'],
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
    id: 6,
    title: '클로저 (Closure)',
    date: '2023-02-19 22:11:33',
    folder: Folder.JAVASCRIPT,
    tag: ['Javascript'],
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
        https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0`,
      },
    ],
  },
  {
    id: 5,
    title: '함수선언식 VS 함수표현식의 호이스팅(Hoisting)',
    date: '2023-02-19 22:11:33',
    folder: Folder.JAVASCRIPT,
    tag: ['Javascript'],
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
  //   {
  //     id: 4,
  //     title: '컨텍스트와 실행 과정',
  //     date: '2023-02-18 22:11:33',
  //     folder: Folder.JAVASCRIPT,
  //     preview: `자바스크립트에서 실행 컨텍스트(execution context)는 코드가 실행될 때 생성되는 환경을 말합니다. 실행 컨텍스트는 코드의 실행에 필요한 정보를 담고 있으며, 변수 및 함수의 스코프, 변수의 값, this 등의 정보를 포함합니다. 실행 컨텍스트는 스택(Stack) 자료구조로 관리되며, 코드의 실행이 시작될 때마다 새로운 실행 컨텍스트가 스택의 맨 위에 추가되고, 코드의 실행이 종료될 때 해당 실행 컨텍스트가 스택에서 제거됩니다..
  //     `,
  //     tag: ['Javascript'],
  //     post: [
  //       {
  //         type: ComponentType.H2,
  //         value: `실행 컨텍스트(execution context)`,
  //       },
  //       {
  //         type: ComponentType.NORMAL,
  //         value: `자바스크립트에서 실행 컨텍스트(execution context)는 코드가 실행될 때 생성되는 환경을 말합니다. 실행 컨텍스트는 코드의 실행에 필요한 정보를 담고 있으며, 변수 및 함수의 스코프, 변수의 값, this 등의 정보를 포함합니다. `,
  //       },
  //       {
  //         type: ComponentType.CODE,
  //         value: `var name = 'zero';

  // function wow(word) {
  //   console.log(word + ' ' + name);
  // }

  // function say () {
  //   var name = 'nero';
  //   console.log(name);
  //   wow('hello');
  // }
  // say();`,
  //       },
  //       {
  //         type: ComponentType.NORMAL,
  //         value: `일단 처음 브라우저가 스크립트를 로딩해서 실행하기 시작하는 순간 모든 것을 포함하는 전역 컨텍스트가 생깁니다. 모든 것을 관리하는 환경입니다. 페이지가 종료될 때까지 유지됩니다.`,
  //       },
  //       {
  //         type: ComponentType.H4,
  //         value: `1. 전역 컨텍스트(Global Context) 생성`,
  //       },
  //       {
  //         type: ComponentType.NORMAL,
  //         value: `전역 컨텍스트를 객체 형식으로 표현해보겠습니다.`,
  //       },
  //       {
  //         type: ComponentType.CODE,
  //         value: `변수객체: { name: 'zero', wow: Function, say: Function }
  // scopeChain: ['전역 변수객체']
  // this: window`,
  //       },
  //       {
  //         type: ComponentType.NORMAL,
  //         value: `전역 컨텍스트는 arguments(함수의 인자)가 없으며 variable은 해당 스코프의 변수들입니다. </br> name, wow, say가 있습니다.</br></br>
  //         자신과 상위 스코프들의 변수객체인 scope chain생성 됩니다.</br>스코프 체인은 자기 자신인 전역 변수객체입니다.</br></br>
  //         this는 따로 설정되어 있지 않으면 window입니다. </br>this를 바꾸는 방법이 바로 new를 호출하는 겁니다. </br>또는 함수에 다른 this 값을 bind할 수도 있습니다.</br></br>
  //         일반 함수의 this가 왜 window인지 아시겠죠? </br>원래 기본적으로 window고 new나 bind같은 상황에서 this가 바뀌는 겁니다.
  //         `,
  //       },
  //       {
  //         type: ComponentType.H4,
  //         value: `2. say 함수 호출 시 컨텍스트 생성`,
  //       },
  //       {
  //         type: ComponentType.CODE,
  //         value: `변수객체: { name: 'nero' }
  // scopeChain: ['say 변수객체', '전역 변수객체']
  // this: window`,
  //       },
  //       {
  //         type: ComponentType.NORMAL,
  //         value: `맨위 코드에서 say();호출 하는 순간 새로운 컨텍스트인 say함수 컨텍스트가 생깁니다. </br> 아까 전역 컨텍스트는 그대로 있습니다.`,
  //       },
  //       {
  //         type: ComponentType.H4,
  //         value: `say함수 실행`,
  //       },
  //       {
  //         type: ComponentType.CODE,
  //         value: `var name = 'nero';
  // console.log(name); (결과: 'nero')
  // wow('hello');;
  //         `,
  //       },
  //       {
  //         type: ComponentType.NORMAL,
  //         value: `say를 호출한 후 차례대로 say함수 내의 내용들이 실행하는데요.</br>
  //         variable의 name에 nero를 대입해주고 나서 console.log(name);이 있습니다.</br></br>

  //         name 변수는 say 컨텍스트 안에서 찾으면 됩니다.</br>
  //         variable에 name이 nero라고 되어 있네요. name이 콘솔에 찍힙니다.</br></br>

  //         그 다음엔 wow('hello')가 있습니다. </br>
  //         say 컨텍스트 안에서 wow 변수를 찾을 수 없습니다.</br>
  //         찾을 수 없다면 scope chain을 따라 올라가 상위 변수객체에서 찾습니다. 그래서 전역 변수객체에서 찾습니다. </br>전역 변수객체의 variable에 wow라는 함수가 있네요. 이걸 호출합니다.`,
  //       },
  //       {
  //         type: ComponentType.H4,
  //         value: `3. wow 함수 호출 시 컨텍스트 생성`,
  //       },
  //       {
  //         type: ComponentType.CODE,
  //         value: `변수객체: { arguments: { word: 'hello' } }
  // scopeChain: ['wow 변수객체', '전역 변수객체']
  // this: window`,
  //       },
  //       {
  //         type: ComponentType.NORMAL,
  //         value: `여기서 중요한 게 lexical scoping에 따라 wow 함수의 스코프 체인은 선언 시에 이미 정해져 있습니다. </br>
  //         따라서 say 스코프는 wow 컨텍스트의 scope chain이 아닙니다. variable은 없고, this는 window입니다.</br></br>
  //         이제 컨텍스트가 생긴 후 함수가 실행 됩니다. (say 함수는 아직 종료되지 않았습니다.)</br>
  //        `,
  //       },
  //       {
  //         type: ComponentType.H4,
  //         value: `wow 함수 호출 실행`,
  //       },
  //       {
  //         type: ComponentType.CODE,
  //         value: `console.log(word + ' ' + name);
  // (word: 'hello', name: 'zero')
  // (전역 컨텍스트의 name 변수를 참조)`,
  //       },
  //       {
  //         type: ComponentType.NORMAL,
  //         value: ` wow 함수 안에서 console.log(word + ' ' + name);이 있는데요.</br>
  //         word랑 name 변수는 wow 컨텍스트에서 찾으시면 됩니다.</br></br>

  //         word는 arguments에서 찾을 수 있고, name은 wow 변수객체에는 값이 없으니, scope chain을 따라 전역 스코프에서 찾을수 있습니다.</br></br>
  //         전역 변수객체로 올라가니 variable에 name이 zero라고 되어 있네요. </br> 그래서 hello zero가 되는 겁니다. hello nero가 아니라요.</br> wow 컨텍스트에 따르면 wow 함수는 애초에 say 컨텍스트와 일절 관련이 없었던 겁니다.</br></br>

  //         이제 wow 함수 종료 후 wow 컨텍스트가 사라지고, say 함수의 실행이 마무리됩니다. 따라서 say 컨텍스트도 사라지고, </br>마지막에 전역 컨텍스트도 사라집니다. 함수 실행, 변수 선언 등 모든 게 다 논리적입니다. </br></br>그래서 컨텍스트 개념을 이해하면 자바스크립트의 모든 문제들을 풀 수 있습니다. 정리하자면 `,
  //       },
  //       {
  //         type: ComponentType.STRINGLIST,
  //         value: `전역 컨텍스트에 전역 변수가 선언되고, 함수 wow와 say가 변수객체에 할당됩니다.
  //         say 함수가 호출되면 say 함수의 컨텍스트가 생성되고, 그 내부에서 name 변수가 'nero'로 초기화됩니다.
  //         wow 함수가 say 함수 내에서 호출되면, wow 함수의 컨텍스트가 생성되고, 내부에서 word와 name 변수를 참조합니다.
  //         wow 함수 내에서 name 변수는 전역 컨텍스트의 name 변수를 참조하여 'hello zero'를 출력합니다.`,
  //       },
  //       {
  //         type: ComponentType.NORMAL,
  //         value: `참고 https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0`,
  //       },
  //     ],
  //   },
  {
    id: 3,
    title: '콜백 지옥(Callback Hell)과 프로미스(Promise)',
    date: '2022-09-22 22:11:33',
    folder: Folder.JAVASCRIPT,
    preview: ` 비동기 프로그래밍에서 자주 발생하는 코드 구조의 한 종류로, 여러 비동기 동작이 중첩된 형태로 코드가 작성될 때 발생하는 가독성 저하와 유지보수의 어려움을 지칭합니다.`,
    tag: ['Javascript'],
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
    id: 2,
    title: '프로미스(Promise)의 세 가지 상태와 활용',
    date: '2022-09-07 22:11:33',
    folder: Folder.JAVASCRIPT,
    preview: `프로미스를 사용할 때 알아야 하는 가장 기본적인 개념이 바로 프로미스의 상태(states)입니다. 여기서 말하는 상태란 프로미스의 처리 과정을 의미합니다. new Promise()로 프로미스를 생성하고 종료될 때까지 3가지 상태를 갖습니다..
    `,
    tag: ['Javascript'],
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
    id: 1,
    title: 'JWT와 토큰 관리 방법',
    date: '2022-07-08 22:11:33',
    folder: Folder.JAVASCRIPT,
    preview: `액세스 토큰은 주로 인증된 사용자가 보호된 리소스에 접근할 수 있는 권한을 부여하는 데 사용되는 문자열입니다. 주로 웹 애플리케이션, 모바일 앱 등에서 사용자 인증 및 권한 부여에 쓰입니다. 여러 인증 프로토콜에서 사용되며, 대표적으로 OAuth 2.0에서 정의되어 있습니다.
    `,
    tag: ['JWT', 'Token'],
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
  {
    id: 14,
    title: 'GIT 명령어',
    date: '2024-02-16 22:11:33',
    folder: Folder.GIT,
    preview: `설정 및 설정 모든 커밋에서 사용할 사용자 이름과 사용할 이메일 주소를 설정합니다. git config --global user.name "your name" git config --global user.email your email address ".`,
    tag: ['git'],
    post: [
      {
        type: ComponentType.H2,
        value: `설정 및 설정 💡`,
      },
      {
        type: ComponentType.H4,
        value:
          '모든 커밋에서 사용할 사용자 이름과 사용할 이메일 주소를 설정합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git config --global user.name "your name"
git config --global user.email "your email address"`,
      },
      {
        type: ComponentType.H2,
        value: `프로젝트 시작하기 💡`,
      },
      {
        type: ComponentType.H4,
        value: '새로운 로컬 저장소를 초기화합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git init "project-name"`,
      },
      {
        type: ComponentType.H4,
        value: '기존 프로젝트와 버전 이력을 복제합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git clone "git url"`,
      },
      {
        type: ComponentType.H2,
        value: `변경 및 스테이징 💡`,
      },
      {
        type: ComponentType.H4,
        value: '작업 디렉터리에서 수정된 파일의 상태를 보여줍니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git status`,
      },
      {
        type: ComponentType.H4,
        value: '파일을 스테이징 영역에 추가합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git add "file"`,
      },
      {
        type: ComponentType.H4,
        value: '모든 수정된 파일을 스테이징 영역에 추가합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git add .`,
      },
      {
        type: ComponentType.H4,
        value: '설명적인 메시지와 함께 스테이징된 파일을 커밋합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git commit -m"commit your message"`,
      },
      {
        type: ComponentType.H2,
        value: `커밋 관리 💡`,
      },
      {
        type: ComponentType.H4,
        value: '마지막 커밋을 수정합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git commit --amend`,
      },
      {
        type: ComponentType.H4,
        value: '커밋 메시지를 변경하지 않고 마지막 커밋을 수정합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git commit --amend --no-edit`,
      },
      {
        type: ComponentType.H4,
        value: '압축된 커밋 이력을 표시합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git log --oneline`,
      },
      {
        type: ComponentType.H4,
        value: '커밋 이력을 그래픽 형식으로 표시합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git log --graph`,
      },
      {
        type: ComponentType.H4,
        value: '다른 기본 팁 위에 변경 사항을 다시 적용합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git rebase "your branch"`,
      },
      {
        type: ComponentType.H4,
        value: '지정된 변경 사항을 취소하는 새로운 커밋을 만듭니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git revert "your commit"`,
      },
      {
        type: ComponentType.H2,
        value: `브랜치 및 병합 💡`,
      },
      {
        type: ComponentType.H4,
        value: '저장소에 있는 모든 브랜치를 나열합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git branch`,
      },
      {
        type: ComponentType.H4,
        value: '새로운 브랜치를 생성합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git branch "branch name"`,
      },
      {
        type: ComponentType.H4,
        value: '지정된 브랜치로 전환합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git checkout "branch name"`,
      },
      {
        type: ComponentType.H4,
        value: '지정된 브랜치의 이력을 현재 브랜치에 병합합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git merge "branch name"`,
      },
      {
        type: ComponentType.H4,
        value: '지정된 브랜치를 삭제합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git branch -d "branch name"`,
      },
      {
        type: ComponentType.H2,
        value: `프로젝트 시작 및 업데이트 💡`,
      },
      {
        type: ComponentType.H4,
        value: '로컬 브랜치 커밋을 원격 저장소 브랜치에 업로드합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git push "alias" "branch name"`,
      },
      {
        type: ComponentType.H4,
        value: '원격 브랜치 변경 사항을 현재 로컬 브랜치에 통합합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git pull`,
      },
      {
        type: ComponentType.H2,
        value: `검사 및 비교 💡`,
      },
      {
        type: ComponentType.H4,
        value: '현재 브랜치의 버전 이력을 표시합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git log"`,
      },
      {
        type: ComponentType.H4,
        value: '특정 파일의 변경 사항을 표시합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git log --follow "file name"`,
      },
      {
        type: ComponentType.H4,
        value: '두 브랜치 사이의 콘텐츠 차이를 표시합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git diff "branchB"`,
      },
      {
        type: ComponentType.H2,
        value: `특정 커밋 사용하기 💡`,
      },
      {
        type: ComponentType.H4,
        value: '지정된 커밋의 메타데이터와 콘텐츠 변경 사항을 표시합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git show "commit"`,
      },
      {
        type: ComponentType.H4,
        value: '지정된 커밋에서 소개된 변경 사항을 현재 브랜치에 적용합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git cherry-pick "commit"`,
      },
      {
        type: ComponentType.H4,
        value: '현재 브랜치 팁을 지정된 커밋 위로 이동합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git reset --soft "commit"`,
      },
      {
        type: ComponentType.H4,
        value:
          '현재 브랜치 팁을 지정된 커밋으로 이동합니다. 변경 사항을 스테이징하지 않습니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git reset "commit"`,
      },
      {
        type: ComponentType.H4,
        value:
          '작업 디렉터리를 지정된 커밋으로 재설정하고 모든 변경 사항을 삭제합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git reset --hard "commit"`,
      },
      {
        type: ComponentType.H2,
        value: `변경 사항 되돌리기 💡`,
      },
      {
        type: ComponentType.H4,
        value:
          '지정된 커밋 이후의 모든 커밋을 취소하고 변경 사항을 로컬로 유지합니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git reset "commit"`,
      },
      {
        type: ComponentType.H4,
        value: '지정된 커밋 이후의 모든 변경 사항을 지웁니다.',
      },
      {
        type: ComponentType.CODE,
        value: `git reset --hard "commit"`,
      },
    ],
  },
  {
    id: 15,
    title: '리액트(React) vs 뷰(Vue)',
    date: '2022-08-15 22:11:33',
    folder: Folder.REACT,
    tag: ['React', 'Vue'],
    preview: `react는 UI 라이브러리이며 JSX(Javascript XML)형태로 코드를 작성하여 Javascript 문법을 응용하기 때문에 Javascript만으로 UI로직과 DOM을 구현한다. Vue는 제공되는 html 기반의 템플릿이 있어 쉽고 빠르게 제작이 가능하여 진입장벽이 낮으며 개발자간 코드 통일성이 있으며 소규모 프로젝트에 용이하다.`,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `
        리액트(React)와 뷰(Vue.js)는 모두 현대적인 프론트엔드 JavaScript 라이브러리 및 프레임워크로, 웹 애플리케이션의 사용자 인터페이스(UI)를 개발하기 위해 사용된다. 이 두 기술의 각각 고유한 특징과 장단점에 대해 이야기 해보고자 한다. </br></br>

        react는 UI 라이브러리이며 JSX(Javascript XML)형태로 코드를 작성하여 UI로직과 DOM을 구현한다. 자바스크립트를 사용하기 때문에 자바스크립트 문법에 능숙해야 하며 커스터마이징 및 자유도가 높은편이다. 또한 커뮤니티 형성이 잘 되어있고 큰 프로젝트에 용이하다.</br></br>

        Vue는 제공되는 html 기반의 템플릿이 있어 쉽고 빠르게 제작이 가능하여 진입장벽이 낮고 개발
        자간 코드 통일성이 있으며 소규모 프로젝트에 용이하다.</br></br>`,
      },
      {
        type: ComponentType.TABLE,
        value: `
      <table>
        <thead>
          <tr>
            <th></th>
            <th>데이터 바인딩</th>
            <th>코딩 문법</th>
            <th>UI 구성 아키텍쳐</th>
            <th>공통</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>리액트</td>
            <td>단방향 데이터바인딩</td>
            <td>UI 라이브러리로 JSX(Javascript XML)문법을 사용</br> 자바스크립트를 사용하기 때문에 커스터 마이징 및 자유도가 높은 편</td>
            <td>컴포넌트 기반 아키텍처를 사용하여 UI를 구성</td>
            <td>가상돔 사용</td>
          </tr>
          <tr>
            <td>뷰</td>
            <td>양방향 데이터바인딩</td>
            <td>프레임워크가 지원해주는 문법에 따라 작성하기 때문에 개발자간 코드 통일성이 있다.</td>
            <td>HTML 기반의 템플릿 문법을 사용하여 UI를 정의</td>
            <td>가상돔 사용</td>
          </tr>
        </tbody>
      </table>
      `,
      },
      {
        type: ComponentType.H2,
        value: `단방향 데이터 바인딩(React)`,
      },

      {
        type: ComponentType.NORMAL,
        value: `리액트는 단방향 데이터 바인딩을 사용한다. 리액트는 데이터의 흐름이 상위 컴포넌트에서 하위 컴포넌트로 한 방향으로만 흐르기 때문에 데이터의 변화를 추적하기가 쉽고, 디버깅이 용이하다. 또한, 리액트는 Virtual DOM을 활용하여 성능을 향상시키고, 변경된 부분만을 업데이트하여 성능 저하를 최소화한다. 하지만 화면을 업데이트하기 위해 변화를 감지하고 화면을 업데이트하는 관련 코드를 매번 작성해야 하는 불편함이 있다.</br></br>
        리액트에서 상태(State)와 생명주기(Lifecycle) 관리를 위해 사용되는 메서드들이 호출되어야 한다는 의미이다. 예를 들어, 상태가 변경될 때마다 setState 메서드를 호출하여 컴포넌트를 다시 렌더링하거나, 생명주기 메서드 중에서 변화가 감지되는 경우에 관련 코드를 작성해주어야 한다. 이러한 작업은 번거로울 수 있지만, 리액트의 성능 최적화를 위해서는 필수적이다.`,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `<b>리액트 장단점</b></br>
        - 데이터 변화에 따른 성능 저하 없이 DOM 객체 갱신 가능</br>
        - 데이터 흐름이 단방향(부모->하위 컴포넌트)이라, 코드를 이해하기 쉽고 데이터 추적과 디버깅이 쉽다.</br>
        - 커뮤니티와 생태계가 크고 활발하여 문제 해결 및 지원이 용이하다.</br>
        - 변화를 감지하고 화면을 업데이트 하는 코드를 매번 작성해 줘야 하는 번거로움이 있다.`,
      },
      {
        type: ComponentType.H2,
        value: `양방향 데이터 바인딩(Vue)`,
      },
      {
        type: ComponentType.NORMAL,
        value: `뷰는 양방향 데이터 바인딩을 지원한다. 이는 프레임워크가 데이터의 변경을 감지하고 자동으로 DOM 객체에 렌더링하여 사용자 인터페이스를 업데이트 한다. 이러한 방식은 사용자가 입력한 값이나 데이터가 변경될 때마다 화면이 즉시 반영되므로 개발자가 따로 체크하거나 업데이트 코드를 작성할 필요가 없어 편리하다. 그러나 데이터가 많거나 복잡한 애플리케이션의 경우 성능 저하를 초래할 수 있다. 
      `,
      },

      {
        type: ComponentType.EMPHASIS,
        value: `
        <b>장단점</b></br>
        - 진입 장벽이 낮고, 간단한 프로젝트부터 복잡한 애플리케이션까지 다양한 범위의 프로젝트에 적합하다.</br>
        - 데이터의 변화에 따라 DOM 객체 전체를 렌더링해주거나 데이터를 바꿔주므로, 성능이 감소되는 경우가 있다.
        `,
      },
      {
        type: ComponentType.H2,
        value: `가상돔(Virtual DOM)`,
      },
      {
        type: ComponentType.NORMAL,
        value: `실제 돔에는 브라우저가 화면을 그리는데 필요한 모든 정보가 들어 있어 실제 돔을 조작하는 작업은 무겁기 때문에 가상돔을 만들어 메모리에 저장하고 이전 가상돔에 있던 내용과 현재 가상 돔을 비교하여 바뀐 부분만 실제 돔에 적용한다.
      `,
      },
    ],
  },
  {
    id: 16,
    title: '브라우저의 JavaScript 코드 실행 과정 - 콜스택과 이벤트 루프',
    date: '2024-02-28 01:20:33',
    folder: Folder.JAVASCRIPT,
    tag: ['Javascript', 'browser'],
    preview: `콜스택은 현재 실행 중인 함수의 호출을 기록하는 자료 구조입니다. 함수가 호출되면 해당 함수의 정보가 스택에 추가되고, 함수의 실행이 완료되면 스택에서 제거됩니다. 따라서 콜스택은 함수의 호출 순서를 추적하고, 실행 중인 함수의 컨텍스트를 관리합니다.`,
    post: [
      { type: ComponentType.H2, value: `콜스택 (Call Stack)` },
      {
        type: ComponentType.NORMAL,
        value: `콜스택은 현재 실행 중인 함수의 호출을 기록하는 자료 구조입니다. 함수가 호출되면 해당 함수의 정보가 스택에 추가되고, 함수의 실행이 완료되면 스택에서 제거됩니다. 따라서 콜스택은 함수의 호출 순서를 추적하고, 실행 중인 함수의 컨텍스트를 관리합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `실행 컨텍스트가 생성되고 콜스택에 쌓이는 과정`,
      },
      {
        type: ComponentType.CODE,
        value: `function greet(name) {
  let greeting = "Hello, " + name + "!";
  console.log(greeting);
}

function sayHello() {
  greet("Alice");
}

sayHello();`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `
        1. sayHello() 함수가 호출되면서 새로운 실행 컨텍스트가 생성되고 호출 스택에 추가됩니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `　호출 스택: [sayHello()]`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `
        2. sayHello() 함수 내에서 greet("Alice")가 호출되면서 또 다른 실행 컨텍스트가 생성되고 호출 스택에 추가됩니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `　호출 스택: [sayHello(), greet("Alice")]`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `
        3. greet("Alice") 함수 내에서 변수 greeting이 생성되고 값이 할당됩니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `　호출 스택: [sayHello(), greet("Alice")]`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `
        4. console.log(greeting)이 실행되고 호출 스택에서 greet("Alice") 실행 컨텍스트가 제거됩니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `　호출 스택: [sayHello()]`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `
        5. sayHello() 함수 내의 모든 코드가 실행되고 호출 스택에서 해당 실행 컨텍스트가 제거됩니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `　호출 스택: []`,
      },
      {
        type: ComponentType.H2,
        value: `이벤트 루프 큐 (Event Loop Queue)`,
      },
      {
        type: ComponentType.NORMAL,
        value: `이벤트 루프 큐는 비동기 작업의 완료 또는 이벤트 발생을 기다리는 대기열입니다. 비동기 함수의 콜백 함수나 이벤트 처리기는 이벤트 루프 큐에 추가되어 대기하다가 콜스택이 비어있을 때 실행됩니다. 이벤트 루프는 콜스택이 비어있을 때마다 큐에서 작업을 꺼내어 콜스택에 추가하여 실행될 수 있도록 합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `이벤트 루프와 호출 스택 1`,
      },
      {
        type: ComponentType.CODE,
        value: `setTimeout(() => {
  console.log('hello');
}, 0); // 작업 큐에 콜백이 추가됨

console.log('world');

// 출력 결과:
// world
// hello
`,
      },
      {
        type: ComponentType.NORMAL,
        value: `1. setTimeout(() => { console.log('hello'); }, 0); 코드가 실행됩니다.`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `
        setTimeout 함수가 호출되어 타이머가 설정됩니다. 이때 콜백 함수는 태스크 큐에 추가됩니다.
        현재 호출 스택: [setTimeout()]`,
      },
      {
        type: ComponentType.NORMAL,
        value: `2. console.log('world'); 코드가 실행됩니다.`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `
        "world"가 콘솔에 출력됩니다.
        현재 호출 스택: [setTimeout()]`,
      },
      {
        type: ComponentType.NORMAL,
        value: `3. 호출 스택에서는 더 이상 실행할 코드가 없으므로 이벤트 루프가 작동합니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `4. 이벤트 루프는 호출 스택이 비어있는지 확인하고, 비어있다면 작업 큐에 있는 콜백 함수를 호출 스택에 추가하여 실행합니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `5. 작업 큐에 있는 콜백 함수가 호출 스택에 추가되어 실행됩니다.`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `
        "hello"가 콘솔에 출력됩니다.
        현재 호출 스택: []`,
      },
      {
        type: ComponentType.NORMAL,
        value: `이렇게 되면 "world"가 먼저 출력되고, 그 후 "hello"가 출력됩니다. 이는 setTimeout의 시간 지연이 0ms로 설정되었더라도, 해당 콜백 함수가 작업 큐에 추가되고 이벤트 루프를 통해 호출 스택에 올라가기 때문입니다. 따라서 JavaScript의 비동기성에 의해 콜백 함수의 실행이 이루어집니다.`,
      },
      {
        type: ComponentType.H4,
        value: `이벤트 루프와 호출 스택 2`,
      },
      {
        type: ComponentType.CODE,
        value: `function greet(name) {
  let greeting = "Hello, " + name + "!";
  console.log(greeting);
}

function sayHello() {
  greet("Alice");
  setTimeout(function() {
    console.log("비동기 함수 실행 완료");
  }, 1000); // 1초 후에 실행됨
}

sayHello();`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `
        1. sayHello() 함수가 호출되면서 새로운 실행 컨텍스트가 생성되고 호출 스택에 추가됩니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `　호출 스택: [sayHello()]`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `
        2. sayHello() 함수 내에서 greet("Alice")가 호출되면서 또 다른 실행 컨텍스트가 생성되고 호출 스택에 추가됩니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `　호출 스택: [sayHello(), greet("Alice")]`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `
        3. greet("Alice") 함수 내에서 변수 greeting이 생성되고 값이 할당됩니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `　호출 스택: [sayHello(), greet("Alice")]`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `
        4. console.log(greeting)이 실행되고 호출 스택에서 greet("Alice") 실행 컨텍스트가 제거됩니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `　호출 스택: [sayHello()]`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `
        5. setTimeout 함수가 호출되어 타이머가 설정됩니다. 이때 비동기적으로 실행되므로 호출 스택에는 추가되지 않습니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `　호출 스택:[sayHello()]`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `
        6. sayHello() 함수 내의 모든 코드가 실행되었지만, 아직 타이머가 만료되지 않았으므로 이벤트 루프에서 대기합니다.`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `
        7. 1초 후, 타이머가 만료되면 설정된 콜백 함수가 이벤트 루프 큐에 추가됩니다.`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `
        8. 이벤트 루프는 호출 스택이 비어있는지 확인하고, 비어있다면 이벤트 루프 큐에서 콜백 함수를 꺼내와 호출 스택에 추가하여 실행합니다.`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `
        9. 비동기 함수 실행 완료" 메시지가 출력되고 호출 스택에서 해당 실행 컨텍스트가 제거됩니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `　호출 스택: []`,
      },
      {
        type: ComponentType.NORMAL,
        value: `이렇게 비동기 함수가 추가되면, 해당 비동기 함수의 콜백 함수가 이벤트 루프를 통해 적절한 시점에 호출되어 실행됩니다.`,
      },
      {
        type: ComponentType.H2,
        value: `JavaScript 코드 실행이 브라우저의 성능과 사용자 경험에 미치는 영향`,
      },
      {
        type: ComponentType.NORMAL,
        value: `웹 브라우저는 콜 스택에 실행 컨텍스트가 존재하는 동안, 즉 실행 중인 함수가 존재하는 동안에는 먹통이 되어 버립니다. 브라우저는 대개 60fps로 동작하기 때문에, 대략 16ms 안에 코드의 실행을 완료하지 못하면 브라우저의 애니메이션이 뚝뚝 끊기는 현상이 나타납니다. 이는 사용자 경험에 악영향을 미칠 수 있습니다. `,
      },
      {
        type: ComponentType.CODE,
        value: `
// 동기적인 처리 예제
function syncExample() {
  console.log("시작");
  for (let i = 0; i < 1000000000; i++) {
    // 매우 오랜 시간이 걸리는 작업
  }
  console.log("종료");
}

// 비동기적인 처리 예제
function asyncExample() {
  console.log("시작");
  setTimeout(function() {
    console.log("비동기 처리 완료");
  }, 2000); // 2초 후에 콜백 함수 실행
  console.log("종료");
}

// 동기적인 처리 실행
syncExample();

// 비동기적인 처리 실행
asyncExample();

        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `위 코드에서 syncExample 함수는 매우 오랜 시간이 걸리는 반복문을 포함하고 있어, 실행 중에는 다른 작업이 불가능합니다. 이 함수가 실행 중일 때는 브라우저가 먹통이 되어 버리고, 애니메이션이 끊겨 보일 수 있습니다. </br></br>

        asyncExample 함수는 비동기적으로 처리됩니다. setTimeout 함수를 사용하여 비동기적으로 콜백 함수를 실행하도록 하였기 때문에, 이 함수가 실행되는 동안에도 다른 작업이 가능합니다. 이는 브라우저가 뚝뚝 끊기는 현상을 방지하는 데 도움이 됩니다.</br></br>
        
        따라서, 비동기적인 처리를 통해 브라우저가 먹통이 되는 현상을 방지할 수 있으며, 사용자 경험을 향상시킬 수 있습니다.`,
      },
    ],
  },
  {
    id: 17,
    title: '주소창에 google.com을 입력하면 생기는 일',
    date: '2024-03-02 00:05:33',
    folder: Folder.NETWORK,
    tag: ['browser', 'HTTP-Protocol'],
    preview: `사용자가 입력한 url 주소 중에서 도메인 네임을 DNS 서버에서 검색한다. 
    DNS 서버에서 해당 도메인 네임에 해당하는 IP주소를 찾아 사용자가 입력한 URL 정보와 함께 전달한다.`,
    post: [
      {
        type: ComponentType.NUMLIST,
        value:
          '1. 사용자가 입력한 url 주소 중에서 도메인 네임을 DNS 서버에서 검색한다. </br> 　DNS 서버에서 해당 도메인 네임에 해당하는 IP주소를 찾아 사용자가 입력한 URL 정보와 함께 전달한다.',
      },
      {
        type: ComponentType.H4,
        value: `URL에서 도메인 네임 추출`,
      },
      {
        type: ComponentType.NORMAL,
        value: `도메인 네임은 일반적으로 "www.example.com"과 같은 형식을 갖습니다.`,
      },
      {
        type: ComponentType.H4,
        value: `URL 정보와 함께 전달`,
      },
      {
        type: ComponentType.NORMAL,
        value: `https://www.example.com:8080/path/to/resource?id=123&name=example#section1`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `
        프로토콜: https
호스트: www.example.com
포트: 8080
경로: /path/to/resource
쿼리 문자열: ?id=123&name=example
프래그먼트: #section1
`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `2. 웹 페이지 URL + IP 주소는 HTTP 프로토콜을 사용하여 HTTP 요청 메세지를 생성한다.`,
      },
      {
        type: ComponentType.CODE,
        value: `//일반적으로 HTTP 요청 메시지는 아래와 같은 형식을 갖습니다.

GET / HTTP/1.1
Host: www.example.com
`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `HTTP 요청 메시지의 내용에는 요청한 페이지의 경로, HTTP 메소드(GET, POST 등), 헤더(Host 등), 요청 바디 등이 포함됩니다.`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `3. HTTP 요청 메세지는 TCP/IP 네트워크를 통해 TCP 프로토콜을 사용하여 인터넷을 거쳐 해당 IP 주소의 컴퓨터로 전송된다 이렇게 도착한 HTTP 요청 메세지는 HTTP 프로토콜을 사용하여 웹 페이지 URL 정보로 변환된다.`,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `웹 서버는 HTTP 요청 메시지를 분석하여 요청된 작업을 수행하고, 이에 대한 응답을 클라이언트에게 반환합니다.`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `4. 웹 서버는 도착한 웹 페이지 URL 정보에 해당하는 데이터를 검색한다.`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `5. 검색된 웹 페이지 데이터는 또다시 HTTP 프로토콜을 사용하여 HTTP 응답 메세지를 생성한다.`,
      },
      {
        type: ComponentType.H4,
        value: `HTTP 응답 메시지 생성`,
      },
      {
        type: ComponentType.NORMAL,
        value: `HTTP 응답 메시지는 일반적으로 상태 코드, 헤더 및 본문으로 구성됩니다. 아래는 간단한 HTTP 응답 메시지를 생성하는 JavaScript 코드입니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `// 상태 코드
const statusCode = 200;

// 헤더 설정
const headers = {
  'Content-Type': 'text/plain', // 텍스트 형식의 응답
  'Content-Length': 12 // 본문의 길이
};

// 응답 본문
const responseBody = 'Hello, World!';

// HTTP 응답 메시지 생성
const httpResponse = 'HTTP/1.1 \${statusCode} OK\\r\\n' +
                      Object.keys(headers).map(key => \${key}: \${headers[key]}).join('\\r\\n') + '\\r\\n' +
                      '\\r\\n' +
                      responseBody;

console.log(httpResponse);
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `위 코드는 다음과 같은 HTTP 응답 메시지를 생성합니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `HTTP/1.1 200 OK
Content-Type: text/plain
Content-Length: 12

Hello, World!
        `,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `이렇게 생성된 HTTP 응답 메시지는 클라이언트에게 전송될 수 있으며, 클라이언트는 이를 해석하여 적절한 작업을 수행합니다.`,
      },
      {
        type: ComponentType.NUMLIST,
        value: `6. 이렇게 생성된 HTTP 응답 메세지는 TCP 프로토콜을 사용하여 인터넷을 거쳐 원래 컴퓨터로 전달된다.`,
      },

      {
        type: ComponentType.NUMLIST,
        value: `7. 도착한 HTTP 응답 메세지는 HTTP 프로토콜을 이용하여 웹 페이지 데이터로 변환되고, 웹 브라우저에 의해 출력되어 사용자가 볼 수 있게 된다.`,
      },
    ],
  },
  {
    id: 18,
    title: '이벤트 바인딩이란?',
    date: '2024-03-06 00:21:33',
    folder: Folder.JAVASCRIPT,
    tag: ['Javascript'],
    preview: `이벤트 바인딩이란, 발생하는 이벤트와 그 후에 어떤일이 일어나는지 알려주는 콜백함수와 연결해준 다는 뜻이다. 이벤트 바인딩이는 총 3가지 방법이 있는데, HTML이벤트 핸들러, 전통적인 DOM핸들러, EventListener을 이용한 핸들러가있다.`,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `이벤트 바인딩은 발생하는 이벤트와 그 후에 어떤 일이 일어나는지를 알려주는 콜백 함수를 연결해주는 것을 말합니다. 이벤트 바인딩이는 총 3가지 방법이 있는데, HTML이벤트 핸들러, 전통적인 DOM핸들러, EventListener을 이용한 핸들러가있습니다.`,
      },
      {
        type: ComponentType.H2,
        value: `HTML 이벤트 핸들러`,
      },
      {
        type: ComponentType.CODE,
        value: `&lt;!DOCTYPE html>
&lt;html lang="en">
&lt;head>
&lt;meta charset="UTF-8">
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
&lt;title>HTML Event Handler Example</title>
&lt;style>
    button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }
&lt;/style>
&lt;/head>
&lt;body>

<!-- HTML 이벤트 핸들러를 사용하여 버튼에 직접 이벤트를 할당합니다. -->
&lt;button onclick="handleClick()">Click me</button>

&lt;script>
    // 이벤트 핸들러 함수를 정의합니다.
    function handleClick() {
        console.log('Button clicked!');
    }
&lt;/script>

&lt;/body>
&lt;/html>
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `이 예제는 버튼을 클릭할 때마다 콘솔에 메시지를 출력하는 HTML 이벤트 핸들러를 보여줍니다. 여기서는 버튼 요소의 onclick 속성을 사용하여 이벤트 핸들러를 바로 지정합니다. 이 방법은 HTML과 JavaScript가 혼용되는 문제가 있으며, 추천되는 방법은 아닙니다. 대신 JavaScript 코드에서 이벤트 핸들러를 바인딩하는 방법을 사용하는 것이 더 권장됩니다.`,
      },
      {
        type: ComponentType.H2,
        value: `전통적인 DOM 핸들러`,
      },
      {
        type: ComponentType.CODE,
        value: `&lt;!DOCTYPE html>
&lt;html lang="en">
&lt;head>
&lt;meta charset="UTF-8">
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
&lt;title>DOM Event Handler Example</title>
&lt;style>
    button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }
&lt;/style>
&lt;/head>
&lt;body>

<!-- DOM 이벤트 핸들러를 사용하여 버튼에 이벤트를 할당합니다. -->
&lt;button id="myButton">Click me</button>

&lt;script>
    // 대상 요소를 가져옵니다.
    const myButton = document.getElementById('myButton');

    // 이벤트 핸들러 함수를 정의합니다.
    function handleClick(event) {
        console.log('Button clicked!');
        console.log('Event:', event);
    }

    // DOM 이벤트 핸들러를 사용하여 이벤트를 바인딩합니다.
    myButton.onclick = handleClick;
&lt;/script>

&lt;/body>
&lt;/html>
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `이 예제는 버튼을 클릭할 때마다 콘솔에 메시지를 출력하는 전통적인 DOM 이벤트 핸들러를 보여줍니다. 여기서는 버튼 요소의 onclick 속성에 함수를 할당하여 이벤트 핸들러를 지정합니다. 이 방법은 HTML 이벤트 핸들러와 달리 JavaScript 코드로 이벤트 핸들러를 바인딩하므로 HTML과 JavaScript의 혼용 문제를 해결합니다. 그러나 하나의 이벤트에 하나의 핸들러만 할당할 수 있고, 핸들러에 인수를 전달하는 것이 불가능하며, 여러 개의 핸들러가 할당된 경우 마지막에 추가된 핸들러만 실행됩니다.`,
      },
      {
        type: ComponentType.H2,
        value: `EventListener을 이용한 핸들러`,
      },
      {
        type: ComponentType.CODE,
        value: `&lt;!DOCTYPE html>
&lt;html lang="en">
&lt;head>
&lt;meta charset="UTF-8">
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0">
&lt;title>Event Binding Example</title>
&lt;style>
    button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }
&lt;/style>
&lt;/head>
&lt;body>

&lt;button id="myButton">Click me</button>

&lt;script>
    // 대상 요소를 가져옵니다.
    const myButton = document.getElementById('myButton');

    // 콜백 함수를 정의합니다.
    function handleClick(event) {
        console.log('Button clicked!');
        console.log('Event:', event);
    }

    function handleAnotherClick(event) {
        console.log('Another button clicked!');
        console.log('Event:', event);
    }

    // addEventListener를 사용하여 이벤트를 바인딩합니다.
    myButton.addEventListener('click', handleClick);
    myButton.addEventListener('click', handleAnotherClick);

    // 이벤트를 캡쳐링하는 핸들러를 추가할 수도 있습니다.
    myButton.addEventListener('click', function(event) {
        console.log('Capturing event...');
    }, true);

    // 이벤트 핸들러를 제거할 수도 있습니다.
    // myButton.removeEventListener('click', handleClick);

    // 다수의 이벤트 핸들러를 추가할 수 있습니다.
    // 다음 코드는 위의 코드와 동일한 효과를 냅니다.
    // myButton.onclick = handleClick;
    // myButton.onclick = handleAnotherClick;

    &lt;/script>

&lt;/body>
&lt;/html>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `이 예제는 버튼을 클릭할 때마다 콘솔에 메시지를 출력하는 간단한 이벤트 핸들러를 보여줍니다. 여기서 addEventListener를 사용하여 이벤트를 바인딩하고, 하나의 이벤트에 여러 개의 핸들러를 추가할 수 있습니다. 캡쳐링과 버블링을 지원하며, HTML뿐만 아니라 DOM 요소에도 적용됩니다.`,
      },
    ],
  },
  {
    id: 19,
    title: 'RESTful API이란?',
    date: '2024-03-06 00:22:33',
    folder: Folder.JAVASCRIPT,
    tag: ['Javascript'],
    preview: `RESTful API는 HTTP 프로토콜을 기반으로하는 웹 서비스 아키텍처입니다. 자원, 메소드, 메시지 등을 정의하여 클라이언트-서버 간의 통신을 가능하게 합니다. 또한, RESTful API는 표준 HTTP 메소드(GET, POST, PUT, DELETE)를 사용하여 서버와 통신합니다.    `,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `RESTful API는 HTTP 프로토콜을 기반으로하는 웹 서비스 아키텍처입니다. 자원, 메소드, 메시지 등을 정의하여 클라이언트-서버 간의 통신을 가능하게 합니다.`,
      },
      {
        type: ComponentType.H4,
        value: `메시지(Message)`,
      },
      {
        type: ComponentType.NORMAL,
        value: `
        메시지는 클라이언트와 서버 간의 통신에서 전달되는 데이터의 내용을 나타냅니다. RESTful API에서 메시지는 요청(Request)과 응답(Response)로 구분됩니다. </br></br>

        <b>요청 메시지</b>는 클라이언트가 서버로 보내는 데이터입니다. 이 데이터에는 요청의 목적과 함께 필요한 정보가 포함될 수 있습니다. 주로 JSON 형식으로 데이터가 전송됩니다.
        요청 메시지에는 요청하는 자원의 식별, 자원의 상태 변경을 위한 데이터, 요청하는 작업의 종류(메소드) 등이 포함될 수 있습니다.</br></br>
        
        <b>응답 메시지</b>는 서버가 클라이언트로 보내는 데이터입니다. 클라이언트의 요청에 대한 응답으로 서버는 해당 요청에 대한 처리 결과를 클라이언트에게 전달합니다. 마찬가지로 주로 JSON 형식으로 데이터가 전송됩니다.
응답 메시지에는 요청에 대한 처리 결과(성공 또는 실패), 요청한 자원의 데이터, 추가적인 정보(예를 들어, HTTP 상태 코드) 등이 포함될 수 있습니다.`,
      },
      {
        type: ComponentType.H4,
        value: `자원(Resource)`,
      },
      {
        type: ComponentType.NORMAL,
        value: `자원은 RESTful API의 핵심 개념 중 하나입니다. URI란 웹상의 자료의 id 즉, 내가 올린 블로그 글의 특정 id를 입력해줘야 글을 볼수 있는 것처럼 URI는 인터넷 자원을 나타내는 서버에 있는 정보의 표현입니다(고유 식별자). 일반적으로 웹에서는 URI(Uniform Resource Identifier)를 사용하여 자원을 식별합니다. 예를 들어, /todos는 "할일 목록"이라는 자원을 나타내며, /todos/1은 ID가 1인 특정 할일을 나타냅니다.`,
      },
      {
        type: ComponentType.H4,
        value: `메소드(Method) 메시지`,
      },
      {
        type: ComponentType.NORMAL,
        value: `메소드 메시지는 클라이언트가 서버에게 요청하는 작업의 종류를 나타냅니다. RESTful API에서는 주로 다음과 같은 네 가지 메소드를 사용합니다.`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `<b>GET</b>: 서버에서 자원을 가져오기 위해 사용됩니다. 클라이언트가 서버에게 특정 자원에 대한 정보를 요청할 때 사용됩니다. 예를 들어, /todos에 GET 요청을 보내면 모든 할일 목록을 가져올 수 있습니다.
        <b>POST</b>: 서버에 새로운 자원을 생성하기 위해 사용됩니다. 클라이언트가 서버에게 새로운 자원을 추가하려는 경우 사용됩니다. 예를 들어, /todos에 POST 요청을 보내면 새로운 할일을 추가할 수 있습니다.
        <b>PUT</b>: 서버의 자원을 수정하기 위해 사용됩니다. 클라이언트가 서버에게 특정 자원을 수정하려는 경우 사용됩니다. 예를 들어, /todos/1에 PUT 요청을 보내면 ID가 1인 할일을 수정할 수 있습니다.
        <b>DELETE</b>: 서버에서 자원을 삭제하기 위해 사용됩니다. 클라이언트가 서버에게 특정 자원을 삭제하려는 경우 사용됩니다. 예를 들어, /todos/2에 DELETE 요청을 보내면 ID가 2인 할일을 삭제할 수 있습니다.`,
      },
      {
        type: ComponentType.H2,
        value: `REST의 주요 특징`,
      },
      {
        type: ComponentType.H4,
        value: `1. 유니폼 인터페이스(일관적인 인터페이스)`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `REST API는 HTTP 프로토콜을 기반으로 하며, HTTP URI를 통해 자원을 명시하고, HTTP 메소드(POST, GET, PUT, DELETE)를 통해 해당 자원에 대한 CRUD(Create, Read, Update, Delete) 작업을 수행합니다.
일관적인 인터페이스라는 것은 시스템 또는 애플리케이션의 리소스에 접근하기 위한 인터페이스가 일관적이어야 한다는 뜻입니다. 리소스에 접근하는 방식, 요청의 형식, 응답의 형식이 애플리케이션 전반에 걸쳐 URI 요청의 형태와 응답의 형태가 일관적이어야 합니다.
        이러한 특성으로 인해 REST API는 간단하고 일관된 인터페이스를 제공하며, 다양한 플랫폼 및 언어에 종속되지 않고 사용할 수 있습니다.`,
      },
      {
        type: ComponentType.H4,
        value: `2. 무상태성(Statelessness)`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `REST API는 상태를 관리하지 않는 stateless한 특성을 가집니다. 상태가 없다는 것은 클라이언트가 서버의 요청을 보낼 때 이전 요청의 영향을 받지 않음을 의미합니다.
        예를 들어 /login으로 로그인 요청을 보내고 로그인이 되어 다음 페이지인 /page로 넘어갔다면 /page로 리소스를 불러올 때, 이전 요청에서 login한 사실을 서버가 알고 있어야 한다면 그것은 상태가 있는 아키텍처인 것입니다.
        서버는 각 요청을 독립적으로 처리하고, 클라이언트의 세션 상태를 유지할 필요가 없습니다. 이는 서버의 부하를 줄이고, 확장성을 높이는데 도움이 됩니다.
        HTTP는 기본적으로 상태가 없는 프로토콜 입니다. 따라서 HTTP를 사용하는 웹 애플리케이션은 기본적으로 상태가 없는 구조를 따릅니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `이와 같은 특징들로 REST API는 인터넷 상의 자원을 표현하고, 다양한 플랫폼 및 언어 간의 통신을 간소화하며, 확장성 있는 시스템을 구축하는 데 사용됩니다.`,
      },
    ],
  },
  {
    id: 20,
    title: '콜백함수란?',
    date: '2024-03-08 02:42:02',
    folder: Folder.JAVASCRIPT,
    tag: ['Javascript', '콜백함수'],
    preview: `다른함수의 인자로써 이용되는 함수이며 제어권도 함께 위임한 함수이다. 위의 코드에서 setTimeout 함수로 비동기 작업을 시작한 후에 console.log("다른 코드")가 실행됩니다. 이때 "다른 코드" 부분이 비동기 작업이 완료되기를 기다리는 동안 실행되는 코드이며 비동기 작업의 완료를 기다리는 동안 자바스크립트 코드 실행 제어권이 다른 코드에게 넘어갑니다.`,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `자바스크립트에서 콜백 함수는 다른 함수의 매개변수로 전달되어 해당 함수의 실행이 완료된 후에 호출되는 함수를 가리킵니다. 이는 비동기적인 작업을 처리하거나 특정 이벤트가 발생했을 때 처리할 로직을 정의할 때 유용합니다. </br></br> 예를 들어, setTimeout 함수는 콜백 함수를 사용하여 특정 시간이 경과한 후에 실행되는 코드를 정의할 수 있으며 코드 제어권도 함께 위임한 함수입니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `function performAsyncTask() {
    console.log("비동기 작업 시작");
    setTimeout(() => {
        console.log("비동기 작업 완료");
    }, 2000);
    console.log("다른 코드");
}

performAsyncTask();

//"비동기 작업 시작"
//"다른 코드"
//"비동기 작업 완료"`,
      },
      {
        type: ComponentType.NORMAL,
        value: `위의 코드에서 setTimeout 함수로 비동기 작업을 시작한 후에 console.log("다른 코드")가 실행됩니다. 이때 "다른 코드" 부분이 비동기 작업이 완료되기를 기다리는 동안 실행되는 코드이며 비동기 작업의 완료를 기다리는 동안 자바스크립트 코드 실행 제어권이 다른 코드에게 넘어갑니다. 이를 통해 비동기 작업을 처리하면서도 코드 실행의 흐름을 제어할 수 있습니다. `,
      },
    ],
  },
  {
    id: 21,
    title: '.call과 .apply의 차이점',
    date: '2024-03-21 13:30:02',
    folder: Folder.JAVASCRIPT,
    tag: ['Javascript'],
    preview: `this가 함수 호출식에 따라 객체를 가르켰다면 call apply bind는 함수가 직접 실행문맥을 결정한다. 그 중 call과 apply는 함수를 호출해서 실행한다. 두번째로 쓰이는 매개변수가 배열일 경우 apply를 사용한다.`,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `call과 apply는 함수를 호출하는 메서드입니다. 이 두 메서드를 사용하면 함수의 this 값을 명시적으로 설정할 수 있습니다.
      call과 apply의 첫 번째 매개변수는 함수 내부에서 this가 가리킬 객체를 설정합니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `function greet() {
    console.log(\`Hello, \${this.name}!\`);
}

const person = {
    name: 'Alice'
};

greet.call(person); // "Hello, Alice!"
greet.apply(person); // "Hello, Alice!"`,
      },
      {
        type: ComponentType.NORMAL,
        value: `여기서 call과 apply를 사용하여 greet 함수를 호출할 때, this는 person 객체를 가리킵니다. 따라서 Hello, Alice!가 출력됩니다.

        하지만 두번째 매개변수를 전달하는 방식에서는 차이가 있습니다. `,
      },
      {
        type: ComponentType.CODE,
        value: `function greet(greeting) {
    console.log(\`\${greeting}, \${this.name}!\`);
}

const person = {
    name: 'Alice'
};

greet.call(person, 'Good morning'); // "Good morning, Alice!"
greet.apply(person, ['Good morning']); // "Good morning, Alice!"`,
      },
      {
        type: ComponentType.NORMAL,
        value: `call은 매개변수를 직접 나열하여 전달하는 반면, apply는 매개변수를 배열로 묶어 전달합니다.

        `,
      },
    ],
  },
  {
    id: 22,
    title: '화살표 함수와 일반함수의 차이점',
    date: '2024-03-21 18:55:02',
    folder: Folder.JAVASCRIPT,
    tag: ['Javascript'],
    preview: `화살표함수는 함수를 간단하게 표현할 수 있는 ES6문법 이다. 일반 함수는 this가 동적으로 바인딩되는 반면, 화살표 함수는 바로 상위 스코프의 this와 같으며 화살표함수는 프로토타입 프로퍼티를 가지고있지 않기때문에 생성자 함수로 사용이어렵다. `,
    post: [
      {
        type: ComponentType.H2,
        value: `선언방식`,
      },
      {
        type: ComponentType.H4,
        value: `일반 함수 선언 방식`,
      },
      {
        type: ComponentType.CODE,
        value: `
function square(x) {
  return x * x;
}
        `,
      },
      {
        type: ComponentType.H4,
        value: `화살표 함수 선언 방식       
        `,
      },
      {
        type: ComponentType.CODE,
        value: `
const square = (x) => {
  return x * x;
};        
        `,
      },
      {
        type: ComponentType.H2,
        value: `this 바인딩`,
      },
      {
        type: ComponentType.NORMAL,
        value: `일반 함수는 this가 동적으로 바인딩되는 반면 화살표 함수는 바로 상위 스코프의 this와 같다.`,
      },
      {
        type: ComponentType.H4,
        value: `일반함수`,
      },
      {
        type: ComponentType.CODE,
        value: `const cat = {
  name: 'meow',
  foo1: function() {
    const foo2 = function() {
      console.log(this.name);
    }
    foo2();
  }
};

cat.foo1();	// undefined`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `cat.foo1() 메소드 호출 시 내부 함수 foo2가 실행됨
      함수가 호출됐으므로 foo2 내부의 this는 지정되지 않아서 곧 전역 객체를 가리킴
      전역 객체에 name이란 속성은 존재하지 않으므로 undefined가 뜸`,
      },

      {
        type: ComponentType.EMPHASIS,
        value: `일반 함수는 함수를 호출할 때 함수가 어디에서 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.`,
      },
      {
        type: ComponentType.H4,
        value: `화살표 함수`,
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

cat.foo1();	// meow
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `화살표 함수에서의 this는 자기가 정의된 스코프에 존재하는 this를 가르킨다. 즉 자기의 상위에 있는 스코프의 this를 가르키는 것이다. 따라서 내부함수에 어떠한 바인딩도 하지 않았지만 화살표 함수로 함수를 정의했기 때문에 this가 cat 가르키게 된다.`,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다. 동적으로 결정되는 일반 함수와는 달리 화살표 함수의 this 언제나 상위 스코프의 this를 가리키는 것이다.`,
      },
      {
        type: ComponentType.H2,
        value: `생성자 함수로 사용`,
      },
      {
        type: ComponentType.NORMAL,
        value: `화살표함수는 프로토타입 프로퍼티를 가지고있지 않기 때문에 생성자 함수로 사용이 어렵다.</br>여기서 생성자 함수란 new 키워드를 사용하여 객체의 속성과 메서드를 정의하며 해당 객체를 생성하는 데 사용된다.`,
      },
      {
        type: ComponentType.CODE,
        value: `// 일반함수 생성자 함수 정의
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 객체 생성
var person1 = new Person('John', 30);
var person2 = new Person('Alice', 25);

console.log(person1.name); // 출력: John
console.log(person2.age); // 출력: 25
        `,
      },
      {
        type: ComponentType.H2,
        value: `arguments 전달`,
      },
      {
        type: ComponentType.NORMAL,
        value: `일반함수에서는 함수 내에서 모든 전달된 인자를 포함하고 있는 arguments변수가 전달되어 사용할 수 있지만, 화살표 함수에서는 arguments변수가 전달되지 않는다.`,
      },
      {
        type: ComponentType.H4,
        value: `일반 함수`,
      },
      {
        type: ComponentType.CODE,
        value: `function regularFunction() {
  console.log(arguments);
}

regularFunction(1, 2, 3); // 출력: { '0': 1, '1': 2, '2': 3 
}`,
      },
      {
        type: ComponentType.H4,
        value: `화살표 함수`,
      },
      {
        type: ComponentType.CODE,
        value: `const arrowFunction = () => {
  console.log(arguments);
}

arrowFunction(1, 2, 3); // Error: arguments is not defined`,
      },
      {
        type: ComponentType.NORMAL,
        value: `화살표 함수에서는 arguments를 사용할 수 없기 때문에 위와 같은 코드는 에러를 발생시킨다. 대신에 화살표 함수에서는 Rest parameters를 사용하여 모든 전달된 인자를 받고, args 배열에 저장한 후 출력할수 있다.`,
      },
      {
        type: ComponentType.CODE,
        value: `const arrowFunctionWithRest = (...args) => {
  console.log(args);
}

arrowFunctionWithRest(1, 2, 3); // 출력: [1, 2, 3]`,
      },
    ],
  },
  {
    id: 23,
    title:
      'HTML(하이퍼텍스트 마크업 언어)에서 속성(Attribute)과 프로퍼티(Property)',
    date: '2024-03-22 10:23:02',
    folder: Folder.JAVASCRIPT,
    tag: ['Javascript'],
    preview: `HTML(하이퍼텍스트 마크업 언어)에서 속성(Attribute)과 프로퍼티(Property)는 특정 요소에 대한 정보를 지정하는 데 사용되는 용어입니다. 그러나 두 용어 간에는 몇 가지 차이가 있습니다.`,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `HTML(하이퍼텍스트 마크업 언어)에서 속성(Attribute)과 프로퍼티(Property)는 특정 요소에 대한 정보를 지정하는 데 사용되는 용어입니다. 그러나 두 용어 간에는 몇 가지 차이가 있습니다.`,
      },
      {
        type: ComponentType.H2,
        value: `속성(Attribute)`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `HTML 요소에 대한 부가적인 정보를 지정하는 데 사용됩니다.
        이름과 값의 쌍으로 구성됩니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `예를 들면 다음과 같습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `&lt;a href="https://www.example.com">링크&lt;/a>`,
      },
      {
        type: ComponentType.NORMAL,
        value: `위의 예에서 href는 속성이며, "https://www.example.com"은 해당 속성의 값입니다.`,
      },
      {
        type: ComponentType.H2,
        value: `프로퍼티(Property)`,
      },
      {
        type: ComponentType.STRINGLIST,
        value: `JavaScript에서 DOM(문서 객체 모델)을 통해 HTML 요소에 접근할 때 사용되는 용어입니다.
        HTML 요소의 속성은 대응하는 DOM 객체의 프로퍼티로 매핑됩니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `예를 들면 다음과 같습니다.`,
      },
      {
        type: ComponentType.CODE,
        value: `&lt;div id="myDiv">내 디브&lt;/div>

var element = document.getElementById("myDiv");
console.log(element.id); // "myDiv"`,
      },
      {
        type: ComponentType.EMPHASIS,
        value: `위의 예에서 HTML에서는 id라는 속성을 사용하고, JavaScript에서는 id라는 프로퍼티를 사용하여 해당 값을 가져옵니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `간단히 말하면, 속성은 HTML에서 정의되어 있고 문서를 렌더링할 때 사용되며, 프로퍼티는 JavaScript를 통해 DOM을 조작할 때 사용됩니다. 일반적으로 두 용어가 상호 운용되기 때문에 많은 경우에는 두 용어를 혼용하여 사용하는 것이 일반적입니다.`,
      },
    ],
  },
  {
    id: 24,
    title: 'Function.prototype.bind()',
    date: '2024-03-22 10:43:02',
    folder: Folder.JAVASCRIPT,
    tag: ['Javascript'],
    preview: `HTML(하이퍼텍스트 마크업 언어)에서 속성(Attribute)과 프로퍼티(Property)는 특정 요소에 대한 정보를 지정하는 데 사용되는 용어입니다. 그러나 두 용어 간에는 몇 가지 차이가 있습니다.`,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `Function.prototype.bind는 자바스크립트에서 함수를 생성하고 호출할 때 this 키워드의 값을 고정시키는 메소드이다. </br> 이 메소드를 사용하면 함수를 호출할 때 함수 내부에서 사용되는 this가 특정한 객체로 고정된다.
        </br>함수 메소드 call, apply, bind가 공통적으로 첫번째 매개 변수를 this 값으로 지정할 수 있다.

      `,
      },
      {
        type: ComponentType.CODE,
        value: `function greet() {
    console.log(\`Hello, \${this.name}!\`);
}

const person = {
    name: 'Alice'
};

greet.call(person); // "Hello, Alice!"
greet.apply(person); // "Hello, Alice!"
  `,
      },
      {
        type: ComponentType.NORMAL,
        value: `위 코드에서 call과 apply를 사용하여 greet 함수를 호출할 때, this는 person 객체를 가리켜 this값을 명시적으로 지정해 주었다. 단, bind는 call, apply와 달리 새로운 함수를 반환한다는 특징이 있다. 아래는 bind를 사용한 예제이다.`,
      },

      {
        type: ComponentType.CODE,
        value: `const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // undefined
`,
      },
      {
        type: ComponentType.NORMAL,
        value: `코드에서 module 객체에는 x라는 속성과 getX라는 메서드가 있다.
      unboundGetX는 getX 메서드를 가리키는데 이때 this는 호출 시점에 따라 결정된다. 그러므로 unboundGetX()를 호출하면 this는 전역객체를 가리키므로 x는 정의되지 않은 것으로 취급되어 undefined를 반환한다.
     `,
      },
      {
        type: ComponentType.NORMAL,
        value: `이번에는 bind 메서드를 사용한 예제를 보도록 하자. `,
      },
      {
        type: ComponentType.CODE,
        value: `const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // 42`,
      },

      {
        type: ComponentType.NORMAL,
        value: `위에서 unboundGetX 함수를 module 객체에 바인딩하여 boundGetX를 생성한다.
      이제 boundGetX()를 호출하면 this는 module 객체를 가리키므로 x의 값인 42를 반환한다.
      `,
      },

      {
        type: ComponentType.NORMAL,
        value: `bind를 사용하면 함수의 this를 명시적으로 지정할 수 있어서, 함수를 다른 컨텍스트에서 호출할 때 유용하다. 또한 매개변수를 미리 지정하여 부분적으로 함수를 실행하는 것도 가능하다.`,
      },
    ],
  },
  {
    id: 25,
    title:
      '브라우저 렌더링 중 스크립트 태그를 만날 때 파싱이 중단되는 문제와 해결',
    date: '2024-03-24 11:41:02',
    folder: Folder.JAVASCRIPT,
    tag: ['Javascript'],
    preview: `브라우저는 async 속성을 가진 스크립트를 만나면 HTML 파싱과 함께 스크립트 파일의 다운로드를 동시에 시작합니다.
    스크립트 파일이 다운로드되고 실행될 준비가 되면, HTML 파싱은 멈추고 스크립트가 실행됩니다.`,
    post: [
      {
        type: ComponentType.NORMAL,
        value: `렌더링 엔진은 HTML 한 줄씩 순차적으로 파싱하며 DOM을 생성해 나가다가 JavaScript를 만나면 DOM 생성을 임시 중단합니다.
        DOM 생성을 임시 중단하고, 자바스크립트 코드를 파싱하기 위해 자바스크립트 엔진에 제어권을 넘기게 되는데, 파싱이 끝나면 다시 렌더링 엔진에 제어권을 넘겨 중단된 부분부터 HTML 파싱을 재개하며 DOM 트리를 생성합니다.
        `,
      },
      {
        type: ComponentType.NORMAL,
        value: `DOM을 생성해 나가다가 스크립트 태그를 만날 때 파싱이 중단되는 문제를 해결하는 몇 가지 방법 중 비동기적으로 스크립트 로드하는 방법을 설명하려 합니다.
         async나 defer 속성을 사용하여 스크립트를 비동기적으로 로드할 수 있습니다. 이를 통해 스크립트 로드가 병렬적으로 이루어지므로 페이지 파싱이 중단되지 않습니다.`,
      },
      {
        type: ComponentType.H4,
        value: `HTML 코드`,
      },
      {
        type: ComponentType.CODE,
        value: `&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title>Async vs Defer&lt;/title&gt;
&lt;/head&gt;
  &lt;body&gt;
    &lt;h1>Async vs Defer 예제&gt;/h1&gt;
    &lt;script src="script.js" async&gt;/script&gt;
    &lt;script src="script.js" defer&gt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;`,
      },
      {
        type: ComponentType.H4,
        value: `script.js`,
      },
      {
        type: ComponentType.CODE,
        value: `console.log("이 부분은 스크립트가 실행되어야 하는 내용입니다.");`,
      },
      {
        type: ComponentType.NORMAL,
        value: `여기서 async와 defer 속성을 가진 &lt;script> 태그가 있습니다. 이 두 가지 속성의 차이를 살펴보겠습니다.`,
      },
      {
        type: ComponentType.H4,
        value: `async 속성`,
      },
      {
        type: ComponentType.NORMAL,
        value: `브라우저는 async 속성을 가진 스크립트를 만나면 HTML 파싱과 함께 스크립트 파일의 다운로드를 동시에 시작합니다.
              스크립트 파일이 다운로드되고 실행될 준비가 되면, HTML 파싱은 멈추고 스크립트가 실행됩니다.
              따라서 console.log가 실행될 때까지 HTML 파싱은 멈추게 됩니다.`,
      },
      {
        type: ComponentType.H4,
        value: `defer 속성`,
      },
      {
        type: ComponentType.NORMAL,
        value: `브라우저는 defer 속성을 가진 스크립트를 만나면 HTML 파싱을 계속하면서 스크립트 파일의 다운로드를 시작합니다.
              스크립트 파일은 DOM 생성이 완료된 직후에 실행됩니다. 즉, DOMContentLoaded 이벤트가 발생한 후에 실행됩니다.
              따라서 console.log가 실행될 때까지 HTML 파싱은 멈추지 않습니다.`,
      },
      {
        type: ComponentType.NORMAL,
        value: `이러한 방법 중에서 적합한 방법을 선택하여 사용하면 됩니다. 일반적으로 비동기 로드나 스크립트 위치 이동이 가장 효과적인 해결책일 수 있습니다.`,
      },
    ],
  },
];

/**
 * @description 날짜별로 SORT
 */
export const sortedTotalPostlist = totalPostlist.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});
