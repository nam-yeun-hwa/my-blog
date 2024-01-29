import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComponentType, Folder, IAlgorithmPost, IPost, Level } from 'type/post';
import style from 'app/(layoutCase)/_component/post.module.css';
import tableStyle from 'app/_component/detailPage/table.module.css';

type algorithmType = {
  algorithmList: Array<IAlgorithmPost>;
  isFetching: boolean;
};

const initialValue = [
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
