import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Folder, IPost } from 'type/post';
import style from 'app/(layoutCase)/_component/post.module.css';

type algorithmType = {
  algorithmList: Array<IPost>;
  isFetching: boolean;
};

const initialValue = [
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
];

const algorithmStore = createSlice({
  name: 'algorithmStore',
  initialState: {
    algorithmList: initialValue,
    isFetching: false,
  } as algorithmType,
  reducers: {
    rdxSetAlgorithmData(state, action: PayloadAction<Array<IPost>>) {
      state.algorithmList = action.payload;
    },
    rdxSetFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
  },
});

export default algorithmStore;
export const { rdxSetAlgorithmData, rdxSetFetching } = algorithmStore.actions;
