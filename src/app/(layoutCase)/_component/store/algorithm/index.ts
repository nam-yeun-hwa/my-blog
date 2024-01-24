import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Folder, IAlgorithmPost, IPost, LEVEL } from 'type/post';
import style from 'app/(layoutCase)/_component/post.module.css';

type algorithmType = {
  algorithmList: Array<IAlgorithmPost>;
  isFetching: boolean;
};

const initialValue = [
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

const algorithmStore = createSlice({
  name: 'algorithmStore',
  initialState: {
    algorithmList: initialValue,
    isFetching: false,
  } as algorithmType,
  reducers: {
    rdxSetAlgorithmData(state, action: PayloadAction<Array<IAlgorithmPost>>) {
      state.algorithmList = action.payload;
    },
    rdxSetFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
  },
});

export default algorithmStore;
export const { rdxSetAlgorithmData, rdxSetFetching } = algorithmStore.actions;
