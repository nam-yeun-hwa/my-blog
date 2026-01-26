import { ComponentType, Folder, IPost, Level } from 'type/post';

/**
 * @constant totalPostlist
 * @description post 데이타
 */
export const totalPostlist: IPost[] = [
	{
		id: 29,
		title: '모듈형 프로그래밍',
		date: '2024-11-05 14:02',
		folder: Folder.CODESNIPPETS,
		tag: ['지연로딩', 'Lazy-loading'],
		preview:
			'모듈을 초기에 모두 미리 로드하기 보다는 필요한 시점에만 로드하는 것이 더 이로울 때가 있습니다. 지연로딩(Lazy-loading)을 사용하면 필요한 시점에 로드할 수 있습니다.',
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `모듈을 사용하면 생기는 이점`,
			},
			{
				type: ComponentType.NORMAL,
				value: `모듈형 프로그래밍을 사용하면 다음과 같은 다양한 이점을 얻을 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `1. 한 번만 실행된다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `기존 스크립트는 DOM에 추가될 때마다 실행되는 반면에 모듈 스크립트는 한 번만 실행 됩니다. 자바스크립트 모듈을 사용하면 의존성 트리의 가장 내부에 위치한 모듈이 먼저 실행됩니다. 가장 내부에 위치한 모듈이 먼저 평가되고 여기에 의존하는 모듈에 접근 할 수 있다는 것이 이점입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `2. 자동으로 지연 로드된다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `즉시 로드되지 않기 위해 다른 스크립트 파일은 defer속성을 붙여야 하지만,  모듈은 자동으로 지연되어 로드됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `3. 유지보수와 재사용이 쉽다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `모듈은 다른 모듈에 영향을 주지 않고 독립적으로 실행될 수 있는 코드 조각으로 관리됩니다. 이를 통해 여러 다른 함수에서 동일한 코드를 재사용할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `4. 네임스페이스를 제공한다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `모듈은 관련 변수와 상수를 위한 개별 공간을 생성하여 글로벌 네임스페이스를 오염시키지 않고 모듈 참조를 통해 사용할 수 있게 해줍니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `5. 사용하지 않는 코드를 제거한다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `모듈이 도입되기 전에는 사용하지 않는 코드를 수동으로 제거해야 했습니다.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value:
					'모듈을 통해 코드를 가져오게 되면 웹팩(Webpack)이나 롤업(Rollup)같은 번들러를 사용해 사용하지 않는 모듈을 자동으로 제거할 수 있습니다. 이처럼 번들에 추가하기 전에 사용하지 않는 코드를 제거하는 것을 <b>트리쉐이킹(tree-shaking)</b>이라고 합니다.',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `동적으로 모듈 가져오기`,
			},
			{
				type: ComponentType.NORMAL,
				value: `모듈을 초기에 모두 미리 로드하기 보다는 필요한 시점에만 로드하는 것이 더 이로울 때가 있습니다. 지연로딩(Lazy-loading)을 사용하면 필요한 시점에 로드할 수 있습니다. 예를 들어 사용자가 링크나 버튼을 클릭할 때 로드하게 만들 수 있어 초기 로딩 시간을 줄일 수 있습니다. 이게 바로 동적 가져오기(dynamic import)가 생겨난 이유 입니다...`,
			},
			{
				type: ComponentType.NORMAL,
				value: `동적 가저오기는 함수와 비슷한 새로운 형태의 가져오기 입니다. import(url)는 요청된 모듈의 네임스페이스 객체에 대한 프로미스 프로미스 객체를 반환 합니다. 이 프로미스 객체는 모듈 자체와 모든 모듈 의존성을 가져온 후, 인스턴스화 하고 평가한 뒤에 만들어 집니다. 다음은 동적 가져오기를 사용하는 cakeFatory에 대한 예제입니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `form.addEventListener("sumit", e => {
  e.preventDefault();
   import("/modules/cakeFatory.js)
   .then((module) => {
     //가져온 모듈 사용하기
     module.oven.makeCupcake("sprinkles");
     module.oven.makeMuffin("large");
   })
})`,
			},
			{
				type: ComponentType.NORMAL,
				value: `동적 가져오기는 awit와 함께 사용할 수 있습니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `let module = awit import("/modules/cakeFactory.js");`,
			},
			{
				type: ComponentType.NORMAL,
				value: `동적 가져오기를 사용하면 모듈이 사용될 때만 다운로드되고 실행됩니다. 사용자 상호작용에 반응하거나 화면에 보이면 실행하기 등 자주 사용되는 패턴은 동적 가져오기를 통해 바닐라 자바스크립트에서도 쉽게 구현할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `사용자 상호작용에 따라 가져오기`,
			},
			{
				type: ComponentType.NORMAL,
				value: `일부 기능의 경우 사용자가 상호작용할 때만 필요할 수도 있습니다. 채팅 창이나 다이얼로그, 비디오 등이 대표적인 예시입니다.  이런 기능은 페이지 로드 시점에 필요한 것이 아니라 사용자가 컴포넌트를 클릭하는 등 상호작용에 따라 로드되는 것이 좋습니다. 동적 가져오기를 활용하면 실행한 다음에 따라 오는 함수를 통해 원하는 기능을 사용할 수 있습니다. `,
			},
			{
				type: ComponentType.NORMAL,
				value: `다음 예시는 lodash.sortby 모듈을 동적으로 로드하여 정렬 기능을 구현하는 코드입니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const btn = document.querySelector('button');
  e.preventDefault();
	import('lodash.sortBy')
	.then(module => module.default)
	.then(sortInput()) //use the imported dependency
	.catch(err => { console.log(err )});`,
			},
			{
				type: ComponentType.REFERENCES,
				value: 'REFERENCES : 자바스크립트 + 리액트 디자인 패턴',
			},
		],
	},

	{
		id: 28,
		title: 'Tailwind 사용하기',
		date: '2024-09-22 12:51',
		folder: Folder.HTMLCSS,
		tag: ['CSS', 'Tailwind'],
		preview:
			'Tailwind를 사용하시 쉽도록 기존 css를 기준으로 도표화 하여 설명 하고 있다.',
		post: [
			{
				type: ComponentType.NORMAL,
				value: `Tailwind는 유틸리티 퍼스트(Utility-first) CSS 프레임워크입니다. 이는 기본적으로 미리 정의된 클래스를 활용해 빠르게 스타일링할 수 있도록 도와주는 프레임워크를 의미합니다. 기존의 CSS 방식과는 다르게 Tailwind는 별도의 스타일 시트를 작성하는 대신, HTML 클래스에 직접 스타일링 관련 유틸리티 클래스들을 추가하는 방식으로 작업합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `유틸리티 클래스`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Tailwind는 각 스타일을 단일 클래스에 캡슐화합니다. <br/>예를 들어, text-center, bg-blue-500, p-4와 같은 클래스를 조합해 텍스트 정렬, 배경색 설정, 패딩 등을 간단하게 적용할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `반응형 디자인`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Tailwind는 기본적으로 반응형 디자인을 쉽게 처리할 수 있도록 도와줍니다. <br/>예를 들어, md:text-center와 같이 특정 화면 크기에서만 적용될 스타일을 정의할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `미리 정의된 테마`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Tailwind는 색상, 글꼴 크기, 여백 등을 미리 정의된 값으로 제공하며, 이를 쉽게 커스터마이징할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `유연성`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Tailwind는 매우 유연하여 프로젝트의 스타일 가이드를 따르면서도 세부적으로 다양한 스타일을 적용할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `JIT(Just-In-Time)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `필요할 때마다 스타일을 생성해 주는 JIT 모드를 지원하여, 사용하지 않는 CSS 클래스가 빌드에 포함되지 않도록 합니다. 이로 인해 빌드 크기를 크게 줄일 수 있습니다.`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `tailwind 텍스트 크기 클래스(font-size)`,
			},
			{
				type: ComponentType.NORMAL,
				value:
					'테일윈드 CSS(Tailwind CSS)에서 폰트 크기는 text- 접두사를 사용하여 설정하며, 기본적으로 다양한 크기 클래스를 제공합니다. 아래는 테일윈드의 폰트 크기 클래스의 예시와 그에 해당하는 실제 크기입니다. (Tailwind CSS v3.4 기준)',
			},
			{
				type: ComponentType.CODE,
				value: `<p class="text-xs">text-xs: 0.75rem (12px)</p>
<p class="text-sm">text-sm: 0.875rem (14px)</p>
<p class="text-base">text-base: 1rem (16px)</p>
<p class="text-lg">text-lg: 1.125rem (18px)</p>
<p class="text-xl">text-xl: 1.25rem (20px)</p>
<p class="text-2xl">text-2xl: 1.5rem (24px)</p>
<p class="text-3xl">text-3xl: 1.875rem (30px)</p>
<p class="text-4xl">text-4xl: 2.25rem (36px)</p>
<p class="text-5xl">text-5xl: 3rem (48px)</p>
<p class="text-6xl">text-6xl: 3.75rem (60px)</p>
<p class="text-7xl">text-7xl: 4.5rem (72px)</p>
<p class="text-8xl">text-8xl: 6rem (96px)</p>
<p class="text-9xl">text-9xl: 8rem (128px)</p>`,
			},
			{
				type: ComponentType.TABLE,
				value: ``,
				tables: {
					header: [
						{
							accessorKey: 'className',
							header: '클래스',
						},
						{
							accessorKey: 'rem',
							header: 'rem 크기',
						},
						{
							accessorKey: 'px',
							header: 'px 크기',
						},
					],
					contents: [
						{
							className: 'text-xs',
							rem: '0.75rem',
							px: '12px',
						},
						{
							className: 'text-sm',
							rem: '0.875rem',
							px: '14px',
						},
						{
							className: 'text-base',
							rem: '1rem',
							px: '16px',
						},
						{
							className: 'text-lg',
							rem: '1.125rem',
							px: '18px',
						},
						{
							className: 'text-xl',
							rem: '1.25rem',
							px: '20px',
						},
						{
							className: 'text-xs',
							rem: '0.75rem',
							px: '12px',
						},
						{
							className: 'text-2xl',
							rem: '1.5rem',
							px: '24px',
						},
						{
							className: 'text-3xl',
							rem: '1.875rem',
							px: '30px',
						},
						{
							className: 'text-4xl',
							rem: '2.25rem',
							px: '36px',
						},
						{
							className: 'text-5xl',
							rem: '3rem',
							px: '48px',
						},
						{
							className: 'text-6xl',
							rem: '3.75rem',
							px: '60px',
						},
						{
							className: 'text-7xl',
							rem: '4.5rem',
							px: '72px',
						},
						{
							className: 'text-8xl',
							rem: '6rem',
							px: '96px',
						},
						{
							className: 'text-9xl',
							rem: '8rem',
							px: '128px',
						},
					],
				},
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `tailwind 폰트 두께 (font-weight)`,
			},
			{
				type: ComponentType.CODE,
				value: `<p class="font-thin">font-thin: font-weight: 100</p>
<p class="font-extralight">font-extralight: font-weight: 200</p>
<p class="font-light">font-light: font-weight: 300</p>
<p class="font-normal">font-normal: font-weight: 400</p>
<p class="font-medium">font-medium: font-weight: 500</p>
<p class="font-semibold">font-semibold: font-weight: 600</p>
<p class="font-bold">font-bold: font-weight: 700</p>
<p class="font-extrabold">font-extrabold: font-weight: 800</p>
<p class="font-black">font-black: font-weight: 900</p>
      `,
			},
			{
				type: ComponentType.TABLE,
				value: '',
				tables: {
					header: [
						{
							accessorKey: 'className',
							header: '클래스',
						},
						{
							accessorKey: 'font-weight',
							header: 'font-weight',
						},
					],
					contents: [
						{
							className: 'font-thin',
							'font-weight': '100',
						},
						{
							className: 'font-extralight',
							'font-weight': '200',
						},
						{
							className: 'font-light',
							'font-weight': '300',
						},
						{
							className: 'font-normal',
							'font-weight': '400',
						},
						{
							className: 'font-medium',
							'font-weight': '500',
						},
						{
							className: 'font-semibold',
							'font-weight': '600',
						},
						{
							className: 'font-bold',
							'font-weight': '700',
						},
						{
							className: 'font-extrabold',
							'font-weight': '800',
						},
						{
							className: 'font-black',
							'font-weight': '900',
						},
					],
				},
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `tailwind 라인 높이 (line-height)`,
			},
			{
				type: ComponentType.CODE,
				value: `<p class="leading-none">leading-none: line-height: 1</p>
<p class="leading-tight">leading-tight: line-height: 1.25</p>
<p class="leading-snug">leading-snug: line-height: 1.375</p>
<p class="leading-normal">leading-normal: line-height: 1.5</p>
<p class="leading-relaxed">leading-relaxed: line-height: 1.625</p>
<p class="leading-loose">leading-loose: line-height: 2</p>
<p class="leading-3">leading-3: line-height: 0.75rem (12px)</p>
<p class="leading-4">leading-4: line-height: 1rem (16px)</p>
<p class="leading-5">leading-5: line-height: 1.25rem (20px)</p>
<!-- leading-6 ~ leading-10까지 지원 -->`,
			},
			{
				type: ComponentType.TABLE,
				value: '',
				tables: {
					header: [
						{
							accessorKey: 'className',
							header: '클래스',
						},
						{
							accessorKey: 'line-height',
							header: 'line-height',
						},
					],
					contents: [
						{
							className: 'leading-none',
							'font-weight': '1',
						},
						{
							className: 'leading-tight',
							'font-weight': '1.25',
						},
						{
							className: 'leading-snug',
							'font-weight': '1.375',
						},
						{
							className: 'leading-normal',
							'font-weight': '1.5',
						},
						{
							className: 'leading-relaxed',
							'font-weight': '1.625',
						},
						{
							className: 'leading-loose',
							'font-weight': '2',
						},
						{
							className: 'leading-3',
							'font-weight': '0.75rem (12px)',
						},
						{
							className: 'leading-4',
							'font-weight': '1rem (16px)',
						},
						{
							className: 'leading-5',
							'font-weight': '1.25rem (20px)',
						},
						{
							className: 'leading-6',
							'font-weight': '1.5rem (24px)',
						},
						{
							className: 'leading-7',
							'font-weight': '1.75rem (28px)',
						},
						{
							className: 'leading-8',
							'font-weight': '2rem (32px)',
						},
						{
							className: 'leading-9',
							'font-weight': '2.25rem (36px)',
						},
						{
							className: 'leading-10',
							'font-weight': '2.5rem (40px)',
						},
					],
				},
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `tailwind 레터 스페이싱 (letter-spacing)`,
			},
			{
				type: ComponentType.CODE,
				value: `<p class="tracking-tighter">tracking-tighter: letter-spacing: -0.05em</p>
<p class="tracking-tight">tracking-tight: letter-spacing: -0.025em</p>
<p class="tracking-normal">tracking-normal: letter-spacing: 0</p>
<p class="tracking-wide">tracking-wide: letter-spacing: 0.025em</p>
<p class="tracking-wider">tracking-wider: letter-spacing: 0.05em</p>
<p class="tracking-widest">tracking-widest: letter-spacing: 0.1em</p>`,
			},
			{
				type: ComponentType.TABLE,
				value: '',
				tables: {
					header: [
						{
							accessorKey: 'className',
							header: '클래스',
						},
						{
							accessorKey: 'letter-spacing',
							header: 'letter-spacing',
						},
					],
					contents: [
						{
							className: 'tracking-tighter',
							'letter-spacing': '-0.05em',
						},
						{
							className: 'tracking-tight',
							'letter-spacing': '-0.025em',
						},
						{
							className: 'tracking-normal',
							'letter-spacing': '0',
						},
						{
							className: 'tracking-wide',
							'letter-spacing': '0.025em',
						},
						{
							className: 'tracking-wider',
							'letter-spacing': '0.05em',
						},
						{
							className: 'tracking-widest',
							'letter-spacing': '0.1em',
						},
					],
				},
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `tailwind 테일윈드 스페이싱 스케일`,
			},
			{
				type: ComponentType.NORMAL,
				value: `테일윈드의 마진(m-)과 패딩(p-)은 동일한 스페이싱 스케일을 공유합니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `1 단위 = 0.25rem = 4px (브라우저 기본 루트 폰트 크기 1rem = 16px 기준)
n 값에 따라 n * 0.25rem으로 계산
테일윈드의 스페이싱 시스템은 top, right, bottom, left 방향에 대해 동일한 값을 사용합니다.
마진: mt-n, mr-n, mb-n, ml-n은 모두 동일한 n * 0.25rem 값을 가짐.
패딩: pt-n, pr-n, pb-n, pl-n도 동일한 n * 0.25rem 값을 가짐.`,
			},
			{
				type: ComponentType.CODE,
				value: `<div class="mt-0">mt-0: margin-top: 0px</div> <!-- mr-0, mb-0, ml-0 동일 -->
<div class="mt-1">mt-1: margin-top: 0.25rem (4px)</div> <!-- mr-1, mb-1, ml-1 동일 -->
<div class="mt-2">mt-2: margin-top: 0.5rem (8px)</div> <!-- mr-2, mb-2, ml-2 동일 -->
<div class="mt-3">mt-3: margin-top: 0.75rem (12px)</div> <!-- mr-3, mb-3, ml-3 동일 -->
<div class="mt-4">mt-4: margin-top: 1rem (16px)</div> <!-- mr-4, mb-4, ml-4 동일 -->
<div class="mt-5">mt-5: margin-top: 1.25rem (20px)</div> <!-- mr-5, mb-5, ml-5 동일 -->
<div class="mt-6">mt-6: margin-top: 1.5rem (24px)</div> <!-- mr-6, mb-6, ml-6 동일 -->
<div class="mt-7">mt-7: margin-top: 1.75rem (28px)</div> <!-- mr-7, mb-7, ml-7 동일 -->
<div class="mt-8">mt-8: margin-top: 2rem (32px)</div> <!-- mr-8, mb-8, ml-8 동일 -->
<div class="mt-9">mt-9: margin-top: 2.25rem (36px)</div> <!-- mr-9, mb-9, ml-9 동일 -->
<div class="mt-10">mt-10: margin-top: 2.5rem (40px)</div> <!-- mr-10, mb-10, ml-10 동일 -->`,
			},
			{
				type: ComponentType.TABLE,
				value: '',
				tables: {
					header: [
						{
							accessorKey: 'className',
							header: 'mt-n, mr-n, mb-n, ml-n, pt-n, pr-n, pb-n, pl-n',
						},
						{
							accessorKey: 'scale',
							header: '스케일',
						},
					],
					contents: [
						{
							className: 'n=0',
							scale: '0px',
						},
						{
							className: 'n=1',
							scale: '0.25rem (4px)',
						},
						{
							className: 'n=2',
							scale: '0.5rem (8px)',
						},
						{
							className: 'n=3',
							scale: '0.75rem (12px)',
						},
						{
							className: 'n=4',
							scale: '1rem (16px)',
						},
						{
							className: 'n=5',
							scale: '1.25rem (20px)',
						},
						{
							className: 'n=6',
							scale: '1.5rem (24px)',
						},
						{
							className: 'n=7',
							scale: '1.75rem (28px))',
						},
						{
							className: 'n=8',
							scale: '2rem (32px)',
						},
						{
							className: 'n=9',
							scale: '2.25rem (36px)',
						},
						{
							className: 'n=10',
							scale: '2.5rem (40px)',
						},
					],
				},
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: 'tailwind 커스텀 설정 (tailwind.config.js)',
			},
			{
				type: ComponentType.CODE,
				value: `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      // 커스텀 패딩
      padding: {
        '10': '2.5rem', // 40px
        '12': '3rem',   // 48px
      },
      // 커스텀 마진
      margin: {
        '10': '2.5rem', // 40px
        '12': '3rem',   // 48px
      },
      // 커스텀 폰트 두께
      fontWeight: {
        'extra-thin': 50,
      },
      // 커스텀 라인 높이
      lineHeight: {
        11: '2.75rem', // 44px
        12: '3rem',    // 48px
      },
      // 커스텀 레터 스페이싱
      letterSpacing: {
        'extra-wide': '0.15em',
      },
    },
  },
};`,
			},
		],
	},
	{
		id: 27,
		title: '데이터베이스 예제를 보면서 이해하기 기본편',
		date: '2024-08-19 17:54:16',
		folder: Folder.DATABASE,
		tag: ['mysql', 'database'],
		preview: `데이타베이스 생성하고 기본 값들에 대해 설명한다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `데이타베이스 생성하기`,
			},
			{
				type: ComponentType.NORMAL,
				value: `nodejs라는 데이타 베이스 생성하고 use nodejs; 명령어로 생성한 데이타베이스 선택하는 예제`,
			},
			{
				type: ComponentType.CODE,
				value: `mysql> CREATE SCHEMA ‘nodejs’ DEFAULT CHARACTER SET utf8;
Query Ok, 1 row affected (0,01 sec)
mysql> use nodejs;
Database changed`,
			},
			{
				type: ComponentType.NORMAL,
				value: `CREATE SCHEMA 'nodejs' DEFAULT CHARACTER SET utf8; 명령어는 MySQL 데이터베이스에서 새로운 스키마(데이터베이스)를 생성하는 SQL 명령어이다.`,
			},
			{
				type: ComponentType.CODE,
				value: `CREATE SCHEMA 'nodejs';`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위 명령어는 새로운 스키마(또는 데이터베이스)인 'nodejs'를 생성한다.`,
			},
			{
				type: ComponentType.CODE,
				value: `DEFAULT CHARACTER SET utf8;`,
			},
			{
				type: ComponentType.NORMAL,
				value: `스키마에서 기본으로 사용할 문자 세트를 UTF-8로 설정한다. UTF-8은 다양한 언어와 문자를 지원하는 유니코드 인코딩 방식이다.  즉, 이 명령어는 'nodejs'라는 이름의 데이터베이스를 생성하고, 그 데이터베이스 내에서 모든 테이블이 UTF-8 문자 세트를 기본으로 사용하도록 설정한다. </br></br></br>`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `MySQL 프롬프트에서 댓글테이블 생성`,
			},
			{
				type: ComponentType.CODE,
				value: `mysql> CREATE TABLE nodejs.comments(
-> id INT NOT NULL AUTO_INCREMENT,
-> commenter INT NOT NULL, //댓글단사람 아이디 
-> comment VARCHAR(100) NOT NULL, //100글짜까지 커멘트 
-> created_at DATETIME NOT NULL DEFAULT now(), 생성일 날짜시간 유저가 값을 입력하지 않을경우에 현재날짜시간을 입력해줌
-> PRIMARY KEY(id)
-> INDEX commenter_idx (commenter ASC),
-> CONSTRAINT commenter
-> FOREIGN KEY (commenter)
-> REFERENCES nodejs.users (id)
-> ON DELETE CASCADE
-> ON UPDATE CASCADE
-> COMMENT =“댓글”
-> DEFAULT CHARSET=utf8mb4
-> ENGIME=InnoDB;
)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `INT : 정수 자료형
        VARCHAR : 문자열 자료형, 가변길이(CHAR은 고정길이)
        TEXT : 긴 문자열은 TEXT로 별도저장(소설, 일기 등)
        DATETIME : 날짜 자료형 저장
        TINYINT : -128에서 127까지 저장할수있다. 1 또는 0만 저장해 불값으로 사용 가능
        NOT NULL : 빈값은 허용하지 않음
        AUTO_INCREMENT  : 숫자 자료형인 경우 다음 로우가 저장될때 자동으로 1증가
        UNSIGNED : 0과 양수만 허용
        ZEROFILL : 숫자의 자리수가 고정된 경우 빈자리에 0을 넣음
        DEFAULT now() : 날짜 컬럼의 기본값을 현지 시간으로`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `column 세부 옵션 설명`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `INDEX commenter_idx (commenter ASC)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `INDEX는 데이터베이스에서 특정 열의 값을 기반으로 빠르게 데이터를 검색할 수 있도록 인덱스를 생성하는 명령어로
        댓글검색시 자주 사용하는 commenter에 INDEX를 걸어주고 코맨터 컬럼 을 오름차순으로 인덱싱 하겠다는 뜻이다. 
        `,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `CONSTRAINT commenter`,
			},
			{
				type: ComponentType.NORMAL,
				value: `CONSTRAINT는 특정 제약 조건에 이름을 부여하는 명령어로
        commenter에 특정 제약조건을 부여 하겠다라는 명령어이다. 
        `,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `FOREIGN KEY (commenter)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `FOREIGN KEY는 테이블 간의 관계를 정의하는 명령어이다.
        * (commenter)는 이 외래 키가 참조할 테이블의 열(column)을 나타내며 이 경우, commenter 열이 외래 키 역할을 한다.
        `,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `REFERENCES nodejs.users (id)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `REFERENCES는 외래 키가 참조할 테이블과 열을 지정한다.
        nodejs.users는 참조할 대상 테이블을 나타내며, id는 그 테이블에서 참조할 열 이다.
        따라서, commenter 열은 nodejs 스키마(테이블)의 users 테이블에 있는 id 열을 참조하게 되며
        `,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `이는 commenter 열의 값이 users 테이블의 id 열에 있는 값 중 하나여야 함을 의미한다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이 SQL 구문은 외래 키(Foreign Key)를 정의하여 테이블 간의 참조 무결성을 설정하는 명령문이다 
        `,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `ON DELETE CASCADE`,
			},
			{
				type: ComponentType.NORMAL,
				value: `ON DELETE CASCADE는 참조된 레코드가 삭제될 때 이 외래 키를 가진 레코드도 자동으로 삭제되도록 설정한다.
        예를 들어, users 테이블에서 특정 id를 가진 사용자가 삭제되면, 이 id를 참조하는 모든 commenter 레코드도 자동으로 삭제된다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `ON UPDATE CASCADE`,
			},
			{
				type: ComponentType.NORMAL,
				value: `ON UPDATE CASCADE는 참조된 레코드의 기본 키(즉, id)가 업데이트될 때, 이 외래 키를 가진 레코드의 값도 자동으로 업데이트되도록 설정한다.
        예를 들어, users 테이블의 특정 id 값이 변경되면, 이 id를 참조하는 모든 commenter 열의 값도 자동으로 업데이트된다.
        `,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `DEFAULT CHARSET=utf8mb4`,
			},
			{
				type: ComponentType.NORMAL,
				value: `DEFAULT CHARSET는 테이블 또는 데이터베이스에서 문자열 열(column)에 사용할 기본 문자 집합(문자열 데이터의 인코딩 방식)을 지정한다.
      utf8mb4는 MySQL에서 제공하는 문자 집합 중 하나로 유니코드의 모든 문자를 표현할 수 있으며, 특히 이모지(emoji)나 특수 문자를 제대로 저장할 수 있다.
        `,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `UNIQUE INDEX name_QNIQUE (name ASC)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이 명령문은 데이터베이스의 특정 테이블에 대해 고유 인덱스를 생성한다.
        INDEX는 데이터베이스에서 특정 열의 값을 기반으로 빠르게 데이터를 검색할 수 있도록 인덱스를 생성하는 명령어이다. </br></br>
        
* <b>UNIQUE INDEX</b> 는 인덱스가 고유해야 함을 의미하며 이 인덱스를 적용한 열(column)에는 중복된 값이 있을 수 없다.</br>
* <b>name_QNIQUE</b>는 생성할 인덱스의 이름이며 인덱스 이름은 데이터베이스 내에서 고유해야 하며, 쿼리에서 사용하기 위한 식별자로 사용된다.</br>
* <b>(name ASC)</b>는 name은 인덱스를 생성할 열(column)의 이름을 나타내며 ASC는 오름차순(ascending)으로 인덱스를 생성하겠다는 의미이다. 이 인덱스를 사용하여 데이터를 검색할 때 오름차순으로 정렬된 결과를 빠르게 얻을 수 있다.</br>
</br>예로 users라는 테이블이 있고, 이 테이블에서 name 열에 대해 고유한 인덱스를 생성하고 싶다면 다음과 같은 쿼리를 사용할 수 있다.
         `,
			},
			{
				type: ComponentType.CODE,
				value: `CREATE UNIQUE INDEX name_QNIQUE ON users(name ASC);`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `[테이블] - CREATE 생성`,
			},
			{
				type: ComponentType.NORMAL,
				value: 'INSERT INTO 테이블 (컬럼명들) VALUES (값들)',
			},
			{
				type: ComponentType.CODE,
				value: `
mysql> INSERT INTO nodejs.users (name, age, married, comment) VALUES ('zero', 24, 0, '자기소개 커멘트');
Query OK, 1 row affected (0.01 sec)`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `문자열은 작은 따옴표(')로 감싸야 한다.`,
			},
			{
				type: ComponentType.NORMAL,
				value:
					'위 SQL 쿼리는 nodejs 데이터베이스의 users 테이블에 이름이 zero이고, 나이가 24세이며, 미혼이고, "자기소개 커멘트"라는 코멘트를 가진 새로운 사용자를 추가하는 명령이다. id와 create_at은 자동으로 생성된다.',
			},
			{
				type: ComponentType.CODE,
				value: `mysql> INSERT INTO nodejs.comments (commenter, comment) VALUES(1, ‘안녕하세요. commenter1의 댓글입니다. )`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위 SQL 쿼리는 nodejs.comments 테이블에 사용자 ID가 1인 사용자가 "안녕하세요. commenter1의 댓글입니다."라는 댓글을 추가하는 명령이다.</br></br>`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `[테이블] - READ 조회`,
			},
			{
				type: ComponentType.NORMAL,
				value: 'SELECT 컬럼 FROM 테이블명',
			},
			{
				type: ComponentType.CODE,
				value: 'mysql> SELECT * FROM nodejs.users;',
			},
			{
				type: ComponentType.NORMAL,
				value: `SELECT는 데이터베이스에서 데이터를 조회하는 데 사용된다.
        * 는 테이블의 모든 열(columns)을 조회하겠다는 뜻으로 모든 컬럼을 선택한다는 의미이다.`,
			},
			{
				type: ComponentType.CODE,
				value: 'mysql> SELECT name, married FROM nodejs.users;',
			},
			{
				type: ComponentType.NORMAL,
				value: `위 SQL 쿼리는 nodejs라는 데이터베이스 안에 있는 users라는 테이블에서 name과 married라는 두 개의 컬럼(열)의 데이터를 선택(select)하여 
        조회하는 명령이다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `WHERE 조건문과 AND `,
			},
			{
				type: ComponentType.NORMAL,
				value: `여러가지 조건을 동시에 만족하는 것을 찾아준다.`,
			},
			{
				type: ComponentType.CODE,
				value:
					'mysql> SELECT name, age, FROM nodejs.users WHERE married = 1 AND age > 30;',
			},
			{
				type: ComponentType.NORMAL,
				value: `쿼리의 내용은 married 필드가 1(즉, 결혼한 상태)이고 age 필드가 30세 이상인 사용자들의 name(이름)과 age(나이)를 조회한다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `WHERE 조건문과 OR `,
			},
			{
				type: ComponentType.NORMAL,
				value: `OR로 여러가지 조건 중 하나 이상을 만족하는 것을 찾아준다.`,
			},
			{
				type: ComponentType.CODE,
				value:
					'mysql> SELECT id, name FROM nodejs.users WHERE married = 0 OR age > 30;',
			},
			{
				type: ComponentType.NORMAL,
				value: `쿼리의 내용은 결혼하지 않은 사용자(married가 0인 사용자) 또는 나이가 30세를 초과하는 사용자(age > 30)의 id와 name을 가져온다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `ORDER BY로 특정 컬럼을 순서대로 정렬 한값 가져오기`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `DESC는 내림차순
        ASC는 오름차순`,
			},
			{
				type: ComponentType.CODE,
				value: 'mysql> SELECT id, name FROM nodejs.users ORDER BY age DESC;',
			},
			{
				type: ComponentType.NORMAL,
				value: `nodejs 데이터베이스의 users 테이블에서 사용자들의 id와 name을 조회하고, age(나이) 값을 기준으로 내림차순(나이가 많은 순서대로)으로 정렬하는 명령이다. </br></br>`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `LIMIT으로 조회할 개수 제한`,
			},
			{
				type: ComponentType.CODE,
				value:
					'mysql> SELECT id, name FROM nodejs.users ORDER BY age DESC LIMIT 1;',
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>ORDER BY age DESC</b>`,
			},
			{
				type: ComponentType.NORMAL,
				value: `age(나이) 필드를 기준으로 내림차순(나이가 많은 순서)으로 정렬한다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>LIMIT 1</b>`,
			},
			{
				type: ComponentType.NORMAL,
				value: `결과 집합에서 가장 첫 번째 행만 가져온다. 즉, 정렬된 결과 중 첫 번째 사용자(나이가 가장 많은 사용자) 하나만 선택한다.</br></br>`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `OFFSET으로 앞의 로우들 스킵하기`,
			},
			{
				type: ComponentType.NORMAL,
				value: `OFFSET 2면 세번째 것부터 찾음`,
			},
			{
				type: ComponentType.CODE,
				value:
					'mysql> SELECT id, name FROM nodejs.users ORDER BY age DESC LIMIT 1 OFFSET 1;',
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>ORDER BY age DESC</b>`,
			},
			{
				type: ComponentType.NORMAL,
				value: `* age(나이) 필드를 기준으로 내림차순(나이가 많은 순서)으로 결과를 정렬해준다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>LIMIT 1</b>`,
			},
			{
				type: ComponentType.NORMAL,
				value: `* 결과에서 하나의 행만 선택 하지만 이 행은 기본적으로 정렬된 결과의 첫 번째가 아닌, OFFSET 값이 적용된 다음 행이다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>OFFSET 1</b>`,
			},
			{
				type: ComponentType.NORMAL,
				value: `* 정렬된 결과 집합에서 첫 번째 행을 건너뛰고 두 번째 행부터 시작한다. 이 경우, 내림차순으로 정렬된 사용자 목록에서 두 번째로 나이가 많은 사용자가 선택된다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `[테이블] - UPDATE 수정`,
			},
			{
				type: ComponentType.NORMAL,
				value: `UPDATE 테이블명 SET 칼럼=새값 WHERE 조건`,
			},
			{
				type: ComponentType.CODE,
				value: `mysql> UPDATE nodejs.users SET comment = ‘여기 comment의 내용을 변경합니다.’ WHERE id=2;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1 Changed: 1 Warnings: 0`,
			},
			{
				type: ComponentType.NORMAL,
				value: `nodejs.users 테이블에서 id 값이 2인 행을 찾아서 해당 행의 comment 컬럼의 값을 '바꿀 내용'으로 업데이트한다.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `UPDATE시 WHERE를 빼먹으면 모든 사람의 comment가 변경되니 주의해야 한다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `[테이블] - DELETE 삭제`,
			},
			{
				type: ComponentType.NORMAL,
				value: `DELETE FROM 테이블명 WHERE 조건`,
			},
			{
				type: ComponentType.CODE,
				value: `mysql> DELETE FROM nodejs.users WHERE id = 2;
Query OK, 1 row affected (0.00 sec)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `nodejs.users 테이블에서 id 값이 2인 행을 찾아
        해당 행을 테이블에서 삭제한다.`,
			},
			{
				type: ComponentType.NORMAL,
				value:
					'위 내용은 https://www.inflearn.com/course/lecture?courseSlug=%EB%85%B8%EB%93%9C-js-%EA%B5%90%EA%B3%BC%EC%84%9C&unitId=143595&tab=curriculum 를 기반으로 작성 되었습니다.',
			},
		],
	},
	{
		id: 26,
		title: '테스트 주도 개발(Test driven devlopment, TDD)',
		date: '2024-07-08 22:13:16',
		folder: Folder.TDD,
		tag: ['TDD'],
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
				type: ComponentType.GUIDE_MESSAGE,
				value: `실패하는 테스트 명세를 작성하고 그 테스트 명세를 통과하기 위한 최소한의 코드를 작성한다. 마지막으로 해당 코드를 리팩토링 하는 것으로 개발을 마치는 프로세스이다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Jest 테스트 프레임워크로 테스트 코드 작성하기`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Jest는 주로 JavaScript 및 TypeScript 애플리케이션을 테스트하기 위해 사용되는 JavaScript 테스팅 프레임워크로 특히 React 애플리케이션 테스트에 최적화되어 있다. 페이스북(현 메타)에서 개발했으며,  React 외에도 다른 JavaScript 프레임워크나 라이브러리와도 잘 작동한다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Jest의 주요 쿼리 함수`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
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
				type: ComponentType.HEADING,
				headingType: 'h3',
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
				type: ComponentType.HEADING,
				headingType: 'h3',
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
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `@testing-library로 리액트 컴포넌트 테스트 코드 작성 하기`,
			},
			{
				type: ComponentType.NORMAL,
				value: `@testing-library는 DOM 테스팅 라이브러리(DOM Testing Library)이다. @testing-library는 사용자 중심 방식으로 UI 컴포넌트를 테스트하는데 도움을 주는 라이브러리이며
        리액트 컴포넌트의 테스트 코드 작성을 도와준다. </br></br>
        
        테스트 코드를 작성할 때 컴포넌트 세부 구현사항을 포함하지 않으면서도 신뢰할 수 있는 테스트 코드 작성에 도움을 준다. 이렇게 컴포넌트의 세부 구현 사항을 포함하지 않은 테스트 코드를 작성하면 컴포넌트의 세부 구현 부분을 리팩토링 하여도 테스트 코드를 수정할 필요가 없다, 이로 인해 한번 작성한 테스트 코드는 긴 시간 유지할 수 있으며 오랜 기간 유지 가능하여 테스트 코드를 자주 수정하지 않아도 되므로 개발 생산성을 향상 시켜 준다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
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
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `test`,
			},
			{
				type: ComponentType.NORMAL,
				value: `test 함수(it 함수와 같은 역할을 하는 함수)를 사용하여 테스트 명세를 작성한 테스트 코드이다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `render`,
			},
			{
				type: ComponentType.NORMAL,
				value: `리액트 컴포넌트를 화면에 표시하기 위함`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `screen`,
			},
			{
				type: ComponentType.NORMAL,
				value: `리액트 컴포넌트가 표시된 화면을 의미한다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
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
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `toBeInTheDocument`,
			},
			{
				type: ComponentType.NORMAL,
				value: `요소를 찾아 jest expect().toBeInTheDocument()를 사용하여 돔에 표시되어 있는지 확인 한다. </br>

        render 함수는 메모리상에 돔을 만들고 screen을 통해 해당 돔에 접근 하는 것을 의미한다.
        react-testing-library의 render 함수를 사용하여 App이라는 컴포넌트를 렌더링 하였다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `React Testing Library의 주요 쿼리 함수`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
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
				type: ComponentType.HEADING,
				headingType: 'h3',
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
				type: ComponentType.HEADING,
				headingType: 'h3',
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
				type: ComponentType.HEADING,
				headingType: 'h3',
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
				type: ComponentType.HEADING,
				headingType: 'h3',
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
				type: ComponentType.HEADING,
				headingType: 'h3',
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
				type: ComponentType.HEADING,
				headingType: 'h3',
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
				type: ComponentType.HEADING,
				headingType: 'h3',
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
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `참고할만한 예제들`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `예제 [1] - 컴포넌트가 올바르게 렌더링되는지를 확인하는 테스트 케이스`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<App />에 대한 Jest 테스트 스위트를 작성한 것으로 <App /> 컴포넌트가 올바르게 렌더링되는지를 확인하는 하나의 테스트 케이스를 포함하고 있다.`,
			},
			{
				type: ComponentType.KEYWORD,
				value: `render,getElementByClassName,toHaveLength,toHaveAttribute`,
			},
			{
				type: ComponentType.CODE,
				value: `describe('<App />', ()=>{
it('renders component correctly', ()=>{      
      ① const { container } = render(<App />);              
      ② expect(container.getElementByClassName('App-logo')).toHaveLength(1);       
      ③ expect(container.getElementByClassName('App-logo')[0]).toHaveAttribute('src','logo.svg');
    })
})`,
			},
			{
				type: ComponentType.NORMAL,
				value: `① 이 줄은 <App /> 컴포넌트를 렌더링한다. render 함수는 컴포넌트를 가상 DOM에 렌더링하고, 반환된 객체에서 container를 구조 분해 할당하여 가져오며 container는 렌더링된 DOM 트리를 포함한다.
        ② 이 줄은 container 안에 'App-logo' 클래스를 가진 요소가 하나 있는지 확인한다. expect 함수는 기대값을 설정하는 데 사용되고, toHaveLength(1)는 요소의 길이가 1인지 확인한다.
        ③ 이 줄은 'App-logo' 클래스를 가진 첫 번째 요소가 'src' 속성을 가지고 있으며, 그 값이 'logo.svg'인지 확인한다. toHaveAttribute('src', 'logo.svg')는 요소의 src 속성이 'logo.svg'인지를 확인한다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `예제 [2] - <img /> 테스트 코드`,
			},
			{
				type: ComponentType.KEYWORD,
				value: `render,getElementsByTagName,toHaveLength,toHaveTextContext`,
			},
			{
				type: ComponentType.CODE,
				value: `describe('<App /\>', ()=>{
it('renders component correctly', ()=>{
      ①const { container } = render(<App /\>);  
      ② expect(container.getElementsByTagName('p')).toHaveLength(1);
      ③ expect(container.getElementsByTagName('p')[0]).toHaveTextContext('Edit src/App.js and save to reload.')
   })
})`,
			},
			{
				type: ComponentType.NORMAL,
				value: `① 이 줄은 <App /> 컴포넌트를 렌더링한다. render 함수는 컴포넌트를 가상 DOM에 렌더링하고, 반환된 객체에서 container를 구조 분해 할당하여 가져오며 container는 렌더링된 DOM 트리를 포함한다.
        ② 이 줄은 container 안에 <p> 태그를 가진 요소가 하나 있는지 확인한다. expect 함수는 기대값을 설정하는 데 사용되고, toHaveLength(1)는 해당 요소의 길이가 1인지 확인한다.
        ③ 이 줄은 <p> 태그를 가진 첫 번째 요소가 'Edit src/App.js and save to reload.'라는 텍스트 내용을 가지고 있는지 확인한다. expect 함수는 기대값을 설정하는 데 사용되고, toHaveTextContent('Edit src/App.js and save to reload.')는 해당 요소의 텍스트 내용이 정확히 일치하는지를 확인한다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `예제 [3] - <p/> 테스트`,
			},
			{
				type: ComponentType.CODE,
				value: `describe('<App /\>', ()=>{
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
				type: ComponentType.GUIDE_MESSAGE,
				value: `만약 컴포넌트를 수정하여 화면 표시가 변경된 것이 의도된 수정이었다면 스냅샷 테스트로 저장된 파일을 업데이트해 주어야 한다. 명령프롬프트에 에러가 표시된 상태에서 키보드 'u'키를 누르면 스냅샷으로 생성된 파일이 업데이트 된다. 그러면 새롭게 업데이트된 스냅샷 파일이 다시 기준이 되어 변경을 감지하고 에러를 표시하게 된다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `예제 [4] - 스냅샷 (화면에 표시되는 내용이 변경 되었는지 체크)`,
			},
			{
				type: ComponentType.KEYWORD,
				value: `getByText,parentElement,toHaveStyleRule`,
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

describe('<Button />', ()=>{
  it('renders component correctly', ()=>{
        ① const { container } = render(<Button label="Button Test" /\>);

        ② const label = screen.getByText("button Test");
           expect(label).toBeInTheDocument();

        ③ const parent = label.parentElement;
        ④ expect(parent).toHaveStyleRule('background-color', '#304FFE');
          expect(parent).toHaveStyleRule('background-color', '#1E40FF', { modifier:'hover'});
        
        ⑤ expect(container).toMatchSnapshot();
    })
})`,
			},
			{
				type: ComponentType.NORMAL,
				value: `
        ① render 함수는 <Button label="Button Test" />를 가상 DOM에 렌더링하고, 반환된 객체에서 container를 구조 분해 할당한다. </br></br>
② screen.getByText를 사용하여 "Button Test"라는 텍스트를 가진 요소를 찾는다. 
expect로 해당 요소가 문서에 존재하는지 확인한다.</br></br>
③ label 요소의 부모 요소(parentElement)를 가져온다.</br></br>

④ expect를 사용하여 부모 요소가 특정 스타일 규칙을 가지고 있는지 확인한다. jest-styled-components의 toHaveStyleRule을 사용하여 다음 두 가지 스타일 규칙을 확인한다.</br>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `기본 배경색이 #304FFE인지
        hover 상태에서 배경색이 #1E40FF인지`,
			},
			{
				type: ComponentType.NORMAL,
				value: `backgroundColor과 hoverColor은 우리가 screen.getByText로 찾은 Label 컴포넌트가 아닌 Label 컴포넌트의 부모 요소인 Container 컴포넌트에 설정이 된다. 따라서 label.parentElement를 사용해 Label 컴포넌트의 부모 요소(Container 컴포넌트)에 접근하여 값이 잘 설정 되었는지 확인 한다.</br></br>

        Button 컴포넌트는 Props로 BackgroundClolor과 hoverColor이 설정되어 있지 않으면 기본값이 설정되도록 개발 되었다. backgroundColor과 hoverColor가 설정되어 있지 않은 상황에서 기본값이 잘 설정되는지 확인하기 위해 jest-styled-components의 새로운 Matcher인 toHaveStyleRule를 사용하여 확인 하도록 한다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `⑤ 마지막으로, container의 현재 상태를 스냅샷으로 저장하여 이후 테스트 실행 시 컴포넌트의 출력이 변하지 않았는지 확인합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `예제 [4] - onClick 함수 테스트`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Button 컴포넌트의 onClick 함수를 테스트 하기 위한 테스트 명세이다.`,
			},
			{
				type: ComponentType.CODE,
				value: `it('clicks the button', () => {
    ① const handlerClick = jest.fn(); 
    ② render(<Button label="Button Test" onClick={handlerClick} />); 
    ③ const label = screen.getByText('Button Test'); 
    ④ expect(handleClick).toHaveBeenCalledTimes(0); 
    ⑤ fireEvent.click(label); 
    ⑥ expect(handlerClick).toHaveBeenCalledTimes(1); 
});`,
			},
			{
				type: ComponentType.NORMAL,
				value: `
        ① 클릭 핸들러 함수로 jest.fn()을 사용하여 mock 함수 생성 </br>
        ② Button 컴포넌트를 렌더링하고, onClick props에 mock 함수 전달</br>
        ③ 화면에서 "Button Test" 라는 텍스트를 가진 요소를 찾음</br>
        ④ 클릭 이벤트가 발생하지 않았는지 확인</br>
        ⑤ 찾은 요소에 클릭 이벤트를 발생시킴</br>
        ⑥ 클릭 이벤트 핸들러가 한 번 호출되었는지 확인</br>
        `,
			},
			{
				type: ComponentType.NORMAL,
				value: `그다음 화면에 표시된 버튼 컴포넌트를 찾아서 아직 해당 컴포넌트를 클릭하지 않았음을 확인하기 위해 toHaveBeenCalledTimes 함수를 사용하여 우리가 만든 모의함수가 잘 호출되었는지 확인해준다.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>모의 함수(Mocking functions)</b></br>
        onClick 이벤트에는 사실 어떤 함수가 연결될지 알 수가 없다. jest에서는 이처럼 어떤 이벤트를 통해 함수가 호출되는지를 확인하기 위해 모의 함수(Mocking functions)를 사용한다. 모의 함수를 사용하여 onClick 이벤트를 테스트 한다.</br></br>

jest의 모의함수(jest.fn)을 사용하여 handlerClick 변수를 선언하고 Button 컴포넌트의 Props로 onClick을 통해 전달 해준다.
        `,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `예제 [5] - <Input /> 입력된 값이 일치 체크`,
			},
			{
				type: ComponentType.KEYWORD,
				value: `getByDisplayValue,getByPlaceholderText,fireEvent,fireEvent.change`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `getByDisplayValue를 이용하여 input을 찾아 렌더링 하는 예제`,
			},
			{
				type: ComponentType.CODE,
				value: `import React from 'react';
import { render, screen, fireEvent } from 'testing-library/react';
import 'jest-styled-components';
import {Input} from './index';

describe('<Input />', ()=>{
	it('renders component correctly', ()=>{
      ① const { container } = render(<Input value="default value" /\>);
      ② const label = screen.getByDisplayValue("default value");
      ③ expect(label).toBeInTheDocument();
      ④ expect(container).toMatchSnapshot();
   })
})`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이 코드는 React 컴포넌트 <Input />를 테스트하기 위해 작성된 Jest 테스트 파일이다. react-testing-library와 jest-styled-components를 사용하여 <Input /> 컴포넌트의 렌더링 및 동작을 한다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `① render 함수는 <Input /> 컴포넌트를 렌더링합니다. 여기서 value prop으로 "default value"를 설정합니다.</br>
② screen.getByDisplayValue 함수는 주어진 값("default value")을 표시하는 요소를 검색합니다.</br>
　여기서는 <Input /> 컴포넌트가 "default value"라는 값을 가진 입력 필드를 렌더링하는지 확인합니다.</br>
③ expect 함수는 단언(assertion)을 정의합니다. 여기서는 label 요소가 문서 내에 존재하는지 확인합니다.
　toBeInTheDocument 매처는 요소가 실제로 DOM에 존재하는지 확인합니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Input 컴포넌트는 Button 컴포넌트와 다르게 필수 Props가 존재하지 않는다. 따라서 화면에 표시되었는지를 알기 위해 검색(Query)할 방법이 없다. </br>

그래서 Input 컴포넌트의 필수가 아닌 Props인 value값을 설정하고 react-testing-library의 screen.getByDisplayValue를 사용하여 input 컴포넌트를 찾는다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `getByPlaceholderText를 이용하여 input을 찾아 렌더링 하는 예제`,
			},
			{
				type: ComponentType.CODE,
				value: `it('renders placeholder correctly', ()=>{
    render(<Input placeholder="default placeholder" /\>);

    const input = screen.getByPlaceholderText("default placeholder");
    expect(input).toBeInTheDocument();        
})`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `fireEvent를 이용하여 이벤트 테스트 하는 예제`,
			},
			{
				type: ComponentType.CODE,
				value: `import { render, screen, fireEvent } from 'testing-library/react';

it('renders placeholder correctly', ()=>{
    render(<Input placeholder="default placeholder" /\>);
        
    const input = screen.getByPlaceholderText("default placeholder") as HTMLInputElement;
        
    fireEvent.change(input, {target:{ value:'study react'}})
    expect(input.value).toBe('study react')
})`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Input 컴포넌트의 placeholder를 사용하여 Input 컴포넌트를 화면에 표시하고 해당컴포넌트를 getByPlaceholderText를 통해 찾았다. 이렇게 찾은 컴포넌트는 기본적으로 HTMLElement타입이다. 하지만 HTML의 input 태그를 사용하고 있으므로, 타입스크립트의 as를 사용하여 HTMLInputElement로 타입변환을 해준다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `fireEvent의 change함수로 실제 사용자가 데이터를 입력하는 테스트 코드를 작성 해준다.
앞에서 찾은 Input 컴포넌트에 데이터를 입력해주고 입력된 데이터가 실제로 화면에 잘 표시 되고 있는지를 확인하기 위해 toBe를 사용하여 input, value값이 우리가 fireEvent를 사용하여 입력한 값과 같은지 확인 하였다.`,
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
				type: ComponentType.HEADING,
				headingType: 'h2',
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
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.GUIDE_MESSAGE,
				value: `객체의 특정 프로퍼티만 변경하는 작업을 수행하면 리액트에서는 변경이 일어나지 않았다고 인식하여 리렌더링이 일어나지 않는다. <b>불변성을 지켜주면서 값을 전달해 주어야 한다.</b>`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
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
				type: ComponentType.GUIDE_MESSAGE,
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
		tag: ['JavaScript'],
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
				type: ComponentType.HEADING,
				headingType: 'h2',
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
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `선언형 vs. 명령형`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `명령형`,
			},
			{
				type: ComponentType.NORMAL,
				value: `명령형 프로그래밍은 프로그램이 어떻게 수행되는지를 명시적으로 나타내는 스타일입니다. 대부분의 절차형 언어가 명령형 패러다임을 따릅니다. 프로그래머는 상태와 명령어의 순서에 중점을 두어 프로그램을 작성합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `control Flow`,
			},
			{
				type: ComponentType.NORMAL,
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
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `선언형`,
			},
			{
				type: ComponentType.NORMAL,
				value: `선언형 프로그래밍은 원하는 결과를 설명하고, 시스템이 그 결과를 어떻게 달성할지에 대한 구체적인 단계나 순서를 명시하지 않는 스타일이다. 선언형 프로그래밍의 예로 SQL, HTML, CSS 등이 있다. 프로그래머는 "무엇(What)"을 명시하고, 해결방법은 컴퓨터에게 위임하는 방법 이다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `control Flow`,
			},
			{
				type: ComponentType.NORMAL,
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
				type: ComponentType.HEADING,
				headingType: 'h2',
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
		tag: ['FrontEnd'],
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
				type: ComponentType.GUIDE_MESSAGE,
				value: `프론트 서버는 어떤 주소에 대한 요청을 보냈을 때, Markup Language (HTML,CSS, JavaScript)를 응답해서 사용자에게 GUI 환경을 제공해준다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `→ react, next, styled-components, redux 등
        <img href="https://velog.velcdn.com/images/bunny/post/f81790cf-1b26-4a2e-88a5-c6bc23fe7955/image.jpg"/></br></br>
        프론트엔드 개발자가 React 라이브러리를 활용하여 클라이언트(브라우저)에게 제공할 JavaScript 파일들을 ES6 + JSX 문법으로 작성하게 되면, Babel 등의 컴파일러가 모든 브라우저에서 호환 가능한 문법으로 변환해준다.</br></br>
        또한 Webpack 등의 모듈 번들러가 HTML, CSS, JavaScript 파일들을 효율적인 방식으로 적절히 번들링하여 준비해둔다.</br></br>
        클라이언트가 요청을 보낼 때마다 프론트 서버는 미리 준비해둔 HTML, CSS, JavaScript 파일들을 클라이언트에게 제공한다. 그러면 클라이언트(브라우저)는 전달받은 JavaScript를 실행해 페이지에 렌더링을 시작한다. 즉, React 라이브러리를 활용했던 JavaScript 코드는 동적으로 DOM에 렌더링 해준다.
        `,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `브라우저의 전체 흐름`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `SSR`,
			},
			{
				type: ComponentType.NORMAL,
				value: `SSR 전통적인 웹사이트에서는 브라우저에서는 프론트 서버로 GET 요청을 하고 프론트 서버에서 백엔드 서버로 데이터 요청을 하여 백엔드 서버는 데이터베이스에서 데이터를 받아와서 프론트서버로 데이터를 보내주고 프론트 서버는 HTML과 데이터를 합쳐서 브라우저에게 보내준다.</br></br>
        브라우저 ➔ 프론트 서버 ➔ 백엔드 서버 ➔ DB`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `SPA`,
			},
			{
				type: ComponentType.NORMAL,
				value: `SPA 에서는 프론트 서버에서 정적파일들을 먼저 받아(HTML, CSS, JavaScript) 화면을 그리고 데이터를 백엔서 서버에서 받아오는동안 로딩바를 화면에 표시해 주도록 한다.</br></br>
        브라우저 ➔ 프론트 서버에서 정적파일들을 받아옴(HTML, CSS, JavaScript) </br> 브라우저 ➔ 백엔드 서버(프론트 서버를 거치지 않고 백엔드 서버로 바로 데이터를 요청) ➔ DB`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `프론트 서버(웹 서버)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `
        다른말로 HTTP Server라고도 한다. 웹 브라우저의 파트너로서 서버의 정보를 제공하는 소프트웨어라고 할 수 있다.
        대표적으로 Nginx, Apache가 있다.
        웹 서버는 인터넷 네트워크 위에서 HTTP 프로토콜을 이용해 HTML, CSS, JavaScript, image/mediafile과 같은 정적인 정보들을 웹 브라우저에 전송한다.
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
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `이벤트 버블링 - Event Bubbling`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이벤트 버블링은 특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 더 상위의 화면 요소들로 전달되어 가는 특성을 의미합니다. 이는 이벤트가 가장 하위의 요소에서 시작하여 상위 요소로 전파되는 방식입니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `<body>
  <div class="layer1">
    <div class="layer2">
      <div class="layer3">
        </div>
     </div>
   </div>
 </body>

 <script>
  var divList = document.querySelectorAll('div');
  divList.forEach(function(div) {
    div.addEventListener('click', logEvent);
  });

  function logEvent(event) {
    console.log(event.currentTarget.className);
  }
</script>
      `,
			},
			{
				type: ComponentType.NORMAL,
				value: `클릭한 것이 가장 하위의 div 태그인 "layer3"이라면, 콘솔에는 <b>"layer3 -> layer2 -> layer1" </b> 순서로 출력됩니다. 이는 이벤트가 하위에서 상위 요소로 전파되는 특성을 보여줍니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `이벤트 캡쳐 - Event Capture`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이벤트 캡쳐는 이벤트 버블링과는 반대 방향으로 이벤트가 전파되는 방식입니다. 이는 이벤트가 최상위 요소에서 시작하여 가장 하위의 요소로 향하는 방식입니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `<body>
<div class="layer1">
  <div class="layer2">
    <div class="layer3">
      </div>
    </div>
  </div>
</body>

<script>
var divList = document.querySelectorAll('div');
divList.forEach(function(div) {
  div.addEventListener('click', logEvent, true);
});

function logEvent(event) {
  console.log(event.currentTarget.className);
}
</script>
      `,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `여기서는 addEventListener 함수의 <b>세 번째 인자로 true</b>를 전달하여 이벤트 캡처링을 활성화합니다. </br> 클릭한 것이 최상위의 div 태그인 "layer1"이라면, 콘솔에는 "layer1 -> layer2 -> layer3" 순서로 출력됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.GUIDE_MESSAGE,
				value: `이렇게 사용하면 클릭한 요소의 이벤트만 발생하고 상위 또는 하위 요소로의 이벤트 전파가 중지됩니다.`,
			},
		],
	},
	{
		id: 9,
		title: '일반함수 VS 화살표 함수의 this 바인딩',
		date: '2023-03-20 22:11:33',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript'],
		preview: `일반 함수와 화살표 함수의 this 바인딩에 대한 차이에 대한 내용을 약간 각색하여 정리하겠습니다. 일반 함수에서 this는 함수가 호출될 때 동적으로 결정되며, 호출된 컨텍스트에 바인딩됩니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `일반 함수`,
			},
			{
				type: ComponentType.CODE,
				value: `const foo = function () {
  console.log('일반 함수');
}`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h2',
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
				type: ComponentType.HEADING,
				headingType: 'h2',
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
				type: ComponentType.HEADING,
				headingType: 'h2',
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
		tag: ['JavaScript'],
		preview: `키-값 쌍이 여러 개인 객체가 있습니다. 문제는 객체가 완전하지 않다는 것입니다. 이 문제는 객체에 기존데이터가 있는 상태에서 새로운 필드를 추가하는 경우나 외부 API에서 데이터를 가져와 현재 데이터 모델에 연결해야 하는 경우에 자주 발생합니다. 어느 쪽이든 문제가 되는 부분은 같습니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `키-값 쌍이 여러 개인 객체가 있습니다. 문제는 객체가 완전하지 않다는 것입니다. 이 문제는 객체에 기존데이터가 있는 상태에서 새로운 필드를 추가하는 경우나 외부 API에서 데이터를 가져와 현재 데이터 모델에 연결해야 하는 경우에 자주 발생합니다. 어느 쪽이든 문제가 되는 부분은 같습니다. 새로운 필드 또는 데이터로 채워지지 않는 나머지 부분을 기본값 객체로 채워야 한다는 점입니다.</br></br>

        기본값을 설정하면서 원래의 데이터를 유지하는 새로운 객체를 생성하려면 어떻게 해야 할까요?</br>
        당연히 부수 효과나 조작은 발생하지 않아야 합니다.`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
  title : 'Simplifying JavaScript'
};

const updated = Object.assign({}, defaults, book);
console.log(updated);

//{ 
//  author : 'joe Morgan',
//  title : 'Simplifying JavaScript,
//  year:2017,
//  rating:null
//}`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `첫번째 객체에 빈 객체를 사용하면 빈객체에 새로운 값이 갱신되어 반환됩니다.</br>다른 객체에는 조작이 발생하지 않습니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위의 코드는 defaults와 book 객체를 병합하여 얕은 복사를 수행합니다. 하지만 details 객체는 참조 관계가 유지되므로 shallowCopy 객체를 수정하면 defaults나 book에도 영향을 미칠 수 있습니다.</br></br>`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.GUIDE_MESSAGE,
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
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h4',
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
		tag: ['JavaScript'],
		preview: `let은 재할당 할 수 있다는 점에서 var와 유사합니다. 그렇지만 var는 어휘적 유효범위(lexical scope)를 따르는 반면 let은 블록 유효범위를 따릅니다. 일단 블록 유효범위 변수는 if블록이나 for 반복문 같은 블록의 내부에만 존재한다고 알아두세요.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.GUIDE_MESSAGE,
				value: `var를 사용하는 경우에는 같은 유효범위에서 같은 이름의 변수를 다시 선언할 수 있지만</br>
        let과 const는 같은 이름이 변수를 다시 선언할 수 없습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>var를 사용</b>한 경우 함수 내부에서 만든 <b>클로저에서 외부 변수를 참조할 때 주의</b>가 필요합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.GUIDE_MESSAGE,
				value: `쉽게 말해 let을 이용하면 for문이 반복될 때마다 값을 잠급니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `블록 유효범위 (Block Scope)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `블록 유효범위는 중괄호 {}로 둘러싸인 영역을 가리킵니다.
        let 및 const 키워드로 선언된 변수는 블록 유효 범위를 가집니다. 즉, 해당 변수는 그 변수가 선언된 블록 내에서만 유효하며 외부에서 접근할 수 없습니다.
        블록은 주로 조건문 (if, else, for, while 등) 내부, 함수 내부, 또는 단독 중괄호 블록으로 정의됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h4',
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
		tag: ['JavaScript'],
		preview: `비공개 변수는 클로저 함수 내부에 생성한 변수도 아니고, 매개변수도 아닌 변수를 의미합니다. 클로저를 말할 때는 스코프/컨텍스트/비공개 변수와 함수의 관계를 항상 같이 말해주어야 합니다. closure 함수 안에 console.log(name)이 있는데요.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `
        클로저는 자바스크립트에서 매우 강력하고 중요한 개념 중 하나입니다. 클로저는 외부 변수(외부 렉시컬 환경에 있는 변수)를 기억하고 접근할 수 있는 함수입니다. 이를테면, 어떤 함수가 다른 함수 내에서 정의되고 그 함수가 외부 변수를 참조하면, 클로저가 형성됩니다.</br></br>
        클로저는 함수가 선언될 때의 렉시컬 스코프(Lexical Scope)를 기억하여, 함수가 다른 스코프에서 호출되더라도 해당 스코프의 변수에 접근할 수 있게 하는 기능을 말합니다.`,
			},
			// {
			//   type: ComponentType.HEADING, headingType:'h2',
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
				type: ComponentType.HEADING,
				headingType: 'h2',
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
				type: ComponentType.HEADING,
				headingType: 'h2',
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
		tag: ['JavaScript'],
		preview: `호이스팅(Hoisting)은 JavaScript에서 변수와 함수 선언이 최상단으로 끌어올려지는 현상을 말합니다. 하지만 함수 선언식과 함수 표현식은 다르게 동작하므로 주의가 필요합니다.
    `,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `호이스팅(Hoisting)은 JavaScript에서 변수와 함수 선언이 최상단으로 끌어올려지는 현상을 말합니다. 하지만 함수 선언식과 함수 표현식은 다르게 동작하므로 주의가 필요합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.GUIDE_MESSAGE,
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
	//     tag: ['JavaScript'],
	//     post: [
	//       {
	//         type: ComponentType.HEADING, headingType:'h2',
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
	//         type: ComponentType.HEADING, headingType:'h4',
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
	//         type: ComponentType.HEADING, headingType:'h4',
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
	//         type: ComponentType.HEADING, headingType:'h4',
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
	//         type: ComponentType.HEADING, headingType:'h4',
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
	//         type: ComponentType.HEADING, headingType:'h4',
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
		tag: ['JavaScript'],
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
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Promise나 Async/Await을 사용하여 콜백지옥을 해결하는 방법`,
			},
			{
				type: ComponentType.NORMAL,
				value: `콜백 지옥을 해결하기 위해 Promise나 Async/Await을 사용하는 것은 비동기 코드를 더 간결하고 가독성 있게 만들 수 있는 방법 중 하나입니다. 아래는 각각 Promise와 Async/Await을 사용하여 콜백 지옥을 해결하는 예제 코드입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h4',
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
		tag: ['JavaScript'],
		post: [
			{
				type: ComponentType.NORMAL,
				value: `프로미스는 비동기 처리를 위한 패턴 중 하나로, 세 가지 상태를 가지며 각각의 상태에 따라 처리 과정이 이뤄집니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
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
				type: ComponentType.HEADING,
				headingType: 'h2',
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
				type: ComponentType.HEADING,
				headingType: 'h2',
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
		tag: ['JWT'],
		post: [
			{
				type: ComponentType.NORMAL,
				value: `JWT(JSON Web Token)는 JSON 객체를 사용하여 모바일이나 웹의 사용자 인증을 위해 사용하며 정보를 안전성 있게 암호화한 토큰을 의미한다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `보안`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `CSRF(Cross Site Request Forgery)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `CSRF는 Cross-Site Request Forgery의 약자로, 한 사이트에서 인증된 사용자의 권한을 가로채어 다른 사이트에서 공격자가 의도한 동작을 수행하게 하는 공격이다. 이 공격은 사용자가 자신의 의지와 무관하게 공격자가 의도한 요청을 악의적인 웹사이트를 통해 전송함으로써 이루어진다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h2',
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
				type: ComponentType.GUIDE_MESSAGE,
				value: `아무리 다른 공격(CSRF 등)에 대한 방비를 열심히 했다 해도 XSS가 뚫린다면 아무 소용이 없다. js코드로 의도하지 않은 request를 날린다던가 localStorage, 변수 값 등 모든 것이 탈취 가능하기 때문이다. XSS 공격 방지는 웹 보안의 뿌리이며 XSS 공격을 막는 것은 웹 보안을 위한 최소한의 조치이다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `해결 1) localStorage에 저장하는 방법`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `CSRF 공격에는 안전하다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `그 이유는 자동으로 request에 담기는 쿠키와는 다르게 js 코드에 의해 헤더에 담기므로 XSS를 뚫지 않는 이상 공격자가 정상적인 사용자인 척 request를 보내기가 어렵다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `XSS에 취약하다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `공격자가 localStorage에 접근하는 js 코드 한 줄만 주입하면 localStorage를 공격자가 내 집처럼 드나들 수 있다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `해결 2) cookie에 저장하는 방법`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `CSRF 공격에 취약하다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `자동으로 http request에 담아서 보내기 때문에 공격자가 request url만 안다면 사용자가 관련 link를 클릭하도록 유도하여 request를 위조하기 쉽다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
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
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `설정 및 설정 💡`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value:
					'모든 커밋에서 사용할 사용자 이름과 사용할 이메일 주소를 설정합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git config --global user.name "your name"
git config --global user.email "your email address"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `프로젝트 시작하기 💡`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '새로운 로컬 저장소를 초기화합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git init "project-name"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '기존 프로젝트와 버전 이력을 복제합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git clone "git url"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `변경 및 스테이징 💡`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '작업 디렉터리에서 수정된 파일의 상태를 보여줍니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git status`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '파일을 스테이징 영역에 추가합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git add "file"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '모든 수정된 파일을 스테이징 영역에 추가합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git add .`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '설명적인 메시지와 함께 스테이징된 파일을 커밋합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git commit -m"commit your message"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `커밋 관리 💡`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '마지막 커밋을 수정합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git commit --amend`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '커밋 메시지를 변경하지 않고 마지막 커밋을 수정합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git commit --amend --no-edit`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '압축된 커밋 이력을 표시합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git log --oneline`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '커밋 이력을 그래픽 형식으로 표시합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git log --graph`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '다른 기본 팁 위에 변경 사항을 다시 적용합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git rebase "your branch"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '지정된 변경 사항을 취소하는 새로운 커밋을 만듭니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git revert "your commit"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `브랜치 및 병합 💡`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '저장소에 있는 모든 브랜치를 나열합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git branch`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '새로운 브랜치를 생성합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git branch "branch name"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '지정된 브랜치로 전환합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git checkout "branch name"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '지정된 브랜치의 이력을 현재 브랜치에 병합합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git merge "branch name"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '지정된 브랜치를 삭제합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git branch -d "branch name"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `프로젝트 시작 및 업데이트 💡`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '로컬 브랜치 커밋을 원격 저장소 브랜치에 업로드합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git push "alias" "branch name"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '원격 브랜치 변경 사항을 현재 로컬 브랜치에 통합합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git pull`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `검사 및 비교 💡`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '현재 브랜치의 버전 이력을 표시합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git log"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '특정 파일의 변경 사항을 표시합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git log --follow "file name"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '두 브랜치 사이의 콘텐츠 차이를 표시합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git diff "branchB"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `특정 커밋 사용하기 💡`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '지정된 커밋의 메타데이터와 콘텐츠 변경 사항을 표시합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git show "commit"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '지정된 커밋에서 소개된 변경 사항을 현재 브랜치에 적용합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git cherry-pick "commit"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '현재 브랜치 팁을 지정된 커밋 위로 이동합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git reset --soft "commit"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value:
					'현재 브랜치 팁을 지정된 커밋으로 이동합니다. 변경 사항을 스테이징하지 않습니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git reset "commit"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value:
					'작업 디렉터리를 지정된 커밋으로 재설정하고 모든 변경 사항을 삭제합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git reset --hard "commit"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `변경 사항 되돌리기 💡`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value:
					'지정된 커밋 이후의 모든 커밋을 취소하고 변경 사항을 로컬로 유지합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `git reset "commit"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
		preview: `react는 UI 라이브러리이며 JSX(JavaScript XML)형태로 코드를 작성하여 JavaScript 문법을 응용하기 때문에 JavaScript만으로 UI로직과 DOM을 구현한다. Vue는 제공되는 html 기반의 템플릿이 있어 쉽고 빠르게 제작이 가능하여 진입장벽이 낮으며 개발자간 코드 통일성이 있으며 소규모 프로젝트에 용이하다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `
        리액트(React)와 뷰(Vue.js)는 모두 현대적인 프론트엔드 JavaScript 라이브러리 및 프레임워크로, 웹 애플리케이션의 사용자 인터페이스(UI)를 개발하기 위해 사용된다. 이 두 기술의 각각 고유한 특징과 장단점에 대해 이야기 해보고자 한다. </br></br>

        react는 UI 라이브러리이며 JSX(JavaScript XML)형태로 코드를 작성하여 UI로직과 DOM을 구현한다. 자바스크립트를 사용하기 때문에 자바스크립트 문법에 능숙해야 하며 커스터마이징 및 자유도가 높은편이다. 또한 커뮤니티 형성이 잘 되어있고 큰 프로젝트에 용이하다.</br></br>

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
            <td>UI 라이브러리로 JSX(JavaScript XML)문법을 사용</br> 자바스크립트를 사용하기 때문에 커스터 마이징 및 자유도가 높은 편</td>
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
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `단방향 데이터 바인딩(React)`,
			},

			{
				type: ComponentType.NORMAL,
				value: `리액트는 단방향 데이터 바인딩을 사용한다. 리액트는 데이터의 흐름이 상위 컴포넌트에서 하위 컴포넌트로 한 방향으로만 흐르기 때문에 데이터의 변화를 추적하기가 쉽고, 디버깅이 용이하다. 또한, 리액트는 Virtual DOM을 활용하여 성능을 향상시키고, 변경된 부분만을 업데이트하여 성능 저하를 최소화한다. 하지만 화면을 업데이트하기 위해 변화를 감지하고 화면을 업데이트하는 관련 코드를 매번 작성해야 하는 불편함이 있다.</br></br>
        리액트에서 상태(State)와 생명주기(Lifecycle) 관리를 위해 사용되는 메서드들이 호출되어야 한다는 의미이다. 예를 들어, 상태가 변경될 때마다 setState 메서드를 호출하여 컴포넌트를 다시 렌더링하거나, 생명주기 메서드 중에서 변화가 감지되는 경우에 관련 코드를 작성해주어야 한다. 이러한 작업은 번거로울 수 있지만, 리액트의 성능 최적화를 위해서는 필수적이다.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>리액트 장단점</b></br>
        - 데이터 변화에 따른 성능 저하 없이 DOM 객체 갱신 가능</br>
        - 데이터 흐름이 단방향(부모->하위 컴포넌트)이라, 코드를 이해하기 쉽고 데이터 추적과 디버깅이 쉽다.</br>
        - 커뮤니티와 생태계가 크고 활발하여 문제 해결 및 지원이 용이하다.</br>
        - 변화를 감지하고 화면을 업데이트 하는 코드를 매번 작성해 줘야 하는 번거로움이 있다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `양방향 데이터 바인딩(Vue)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `뷰는 양방향 데이터 바인딩을 지원한다. 이는 프레임워크가 데이터의 변경을 감지하고 자동으로 DOM 객체에 렌더링하여 사용자 인터페이스를 업데이트 한다. 이러한 방식은 사용자가 입력한 값이나 데이터가 변경될 때마다 화면이 즉시 반영되므로 개발자가 따로 체크하거나 업데이트 코드를 작성할 필요가 없어 편리하다. 그러나 데이터가 많거나 복잡한 애플리케이션의 경우 성능 저하를 초래할 수 있다. 
      `,
			},

			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `
        <b>장단점</b></br>
        - 진입 장벽이 낮고, 간단한 프로젝트부터 복잡한 애플리케이션까지 다양한 범위의 프로젝트에 적합하다.</br>
        - 데이터의 변화에 따라 DOM 객체 전체를 렌더링해주거나 데이터를 바꿔주므로, 성능이 감소되는 경우가 있다.
        `,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
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
		tag: ['JavaScript', 'browser'],
		preview: `콜스택은 현재 실행 중인 함수의 호출을 기록하는 자료 구조입니다. 함수가 호출되면 해당 함수의 정보가 스택에 추가되고, 함수의 실행이 완료되면 스택에서 제거됩니다. 따라서 콜스택은 함수의 호출 순서를 추적하고, 실행 중인 함수의 컨텍스트를 관리합니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `콜스택 (Call Stack)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `콜스택은 현재 실행 중인 함수의 호출을 기록하는 자료 구조입니다. 함수가 호출되면 해당 함수의 정보가 스택에 추가되고, 함수의 실행이 완료되면 스택에서 제거됩니다. 따라서 콜스택은 함수의 호출 순서를 추적하고, 실행 중인 함수의 컨텍스트를 관리합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.STRINGLIST,
				value: `
        1. sayHello() 함수가 호출되면서 새로운 실행 컨텍스트가 생성되고 호출 스택에 추가됩니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `　호출 스택: [sayHello()]`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `
        2. sayHello() 함수 내에서 greet("Alice")가 호출되면서 또 다른 실행 컨텍스트가 생성되고 호출 스택에 추가됩니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `　호출 스택: [sayHello(), greet("Alice")]`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `
        3. greet("Alice") 함수 내에서 변수 greeting이 생성되고 값이 할당됩니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `　호출 스택: [sayHello(), greet("Alice")]`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `
        4. console.log(greeting)이 실행되고 호출 스택에서 greet("Alice") 실행 컨텍스트가 제거됩니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `　호출 스택: [sayHello()]`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `
        5. sayHello() 함수 내의 모든 코드가 실행되고 호출 스택에서 해당 실행 컨텍스트가 제거됩니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `　호출 스택: []`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `이벤트 루프 큐 (Event Loop Queue)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이벤트 루프 큐는 비동기 작업의 완료 또는 이벤트 발생을 기다리는 대기열입니다. 비동기 함수의 콜백 함수나 이벤트 처리기는 이벤트 루프 큐에 추가되어 대기하다가 콜스택이 비어있을 때 실행됩니다. 이벤트 루프는 콜스택이 비어있을 때마다 큐에서 작업을 꺼내어 콜스택에 추가하여 실행될 수 있도록 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.STRINGLIST,
				value: `
        1. sayHello() 함수가 호출되면서 새로운 실행 컨텍스트가 생성되고 호출 스택에 추가됩니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `　호출 스택: [sayHello()]`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `
        2. sayHello() 함수 내에서 greet("Alice")가 호출되면서 또 다른 실행 컨텍스트가 생성되고 호출 스택에 추가됩니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `　호출 스택: [sayHello(), greet("Alice")]`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `
        3. greet("Alice") 함수 내에서 변수 greeting이 생성되고 값이 할당됩니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `　호출 스택: [sayHello(), greet("Alice")]`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `
        4. console.log(greeting)이 실행되고 호출 스택에서 greet("Alice") 실행 컨텍스트가 제거됩니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `　호출 스택: [sayHello()]`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `
        5. setTimeout 함수가 호출되어 타이머가 설정됩니다. 이때 비동기적으로 실행되므로 호출 스택에는 추가되지 않습니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `　호출 스택:[sayHello()]`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `
        6. sayHello() 함수 내의 모든 코드가 실행되었지만, 아직 타이머가 만료되지 않았으므로 이벤트 루프에서 대기합니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `
        7. 1초 후, 타이머가 만료되면 설정된 콜백 함수가 이벤트 루프 큐에 추가됩니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `
        8. 이벤트 루프는 호출 스택이 비어있는지 확인하고, 비어있다면 이벤트 루프 큐에서 콜백 함수를 꺼내와 호출 스택에 추가하여 실행합니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
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
				type: ComponentType.HEADING,
				headingType: 'h2',
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
				type: ComponentType.STRINGLIST,
				value:
					'1. 사용자가 입력한 url 주소 중에서 도메인 네임을 DNS 서버에서 검색한다. </br> 　DNS 서버에서 해당 도메인 네임에 해당하는 IP주소를 찾아 사용자가 입력한 URL 정보와 함께 전달한다.',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `URL에서 도메인 네임 추출`,
			},
			{
				type: ComponentType.NORMAL,
				value: `도메인 네임은 일반적으로 "www.example.com"과 같은 형식을 갖습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.STRINGLIST,
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
				type: ComponentType.STRINGLIST,
				value: `3. HTTP 요청 메세지는 TCP/IP 네트워크를 통해 TCP 프로토콜을 사용하여 인터넷을 거쳐 해당 IP 주소의 컴퓨터로 전송된다 이렇게 도착한 HTTP 요청 메세지는 HTTP 프로토콜을 사용하여 웹 페이지 URL 정보로 변환된다.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `웹 서버는 HTTP 요청 메시지를 분석하여 요청된 작업을 수행하고, 이에 대한 응답을 클라이언트에게 반환합니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `4. 웹 서버는 도착한 웹 페이지 URL 정보에 해당하는 데이터를 검색한다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `5. 검색된 웹 페이지 데이터는 또다시 HTTP 프로토콜을 사용하여 HTTP 응답 메세지를 생성한다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.GUIDE_MESSAGE,
				value: `이렇게 생성된 HTTP 응답 메시지는 클라이언트에게 전송될 수 있으며, 클라이언트는 이를 해석하여 적절한 작업을 수행합니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `6. 이렇게 생성된 HTTP 응답 메세지는 TCP 프로토콜을 사용하여 인터넷을 거쳐 원래 컴퓨터로 전달된다.`,
			},

			{
				type: ComponentType.STRINGLIST,
				value: `7. 도착한 HTTP 응답 메세지는 HTTP 프로토콜을 이용하여 웹 페이지 데이터로 변환되고, 웹 브라우저에 의해 출력되어 사용자가 볼 수 있게 된다.`,
			},
		],
	},
	{
		id: 18,
		title: '이벤트 바인딩이란?',
		date: '2024-03-06 00:21:33',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript'],
		preview: `이벤트 바인딩이란, 발생하는 이벤트와 그 후에 어떤일이 일어나는지 알려주는 콜백함수와 연결해준 다는 뜻이다. 이벤트 바인딩이는 총 3가지 방법이 있는데, HTML이벤트 핸들러, 전통적인 DOM핸들러, EventListener을 이용한 핸들러가있다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `이벤트 바인딩은 발생하는 이벤트와 그 후에 어떤 일이 일어나는지를 알려주는 콜백 함수를 연결해주는 것을 말합니다. 이벤트 바인딩이는 총 3가지 방법이 있는데, HTML이벤트 핸들러, 전통적인 DOM핸들러, EventListener을 이용한 핸들러가있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `HTML 이벤트 핸들러`,
			},
			{
				type: ComponentType.CODE,
				value: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HTML Event Handler Example</title>
<style>
    button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }
</style>
</head>
<body>

<!-- HTML 이벤트 핸들러를 사용하여 버튼에 직접 이벤트를 할당합니다. -->
<button onclick="handleClick()">Click me</button>

<script>
    // 이벤트 핸들러 함수를 정의합니다.
    function handleClick() {
        console.log('Button clicked!');
    }
</script>

</body>
</html>
        `,
			},
			{
				type: ComponentType.NORMAL,
				value: `이 예제는 버튼을 클릭할 때마다 콘솔에 메시지를 출력하는 HTML 이벤트 핸들러를 보여줍니다. 여기서는 버튼 요소의 onclick 속성을 사용하여 이벤트 핸들러를 바로 지정합니다. 이 방법은 HTML과 JavaScript가 혼용되는 문제가 있으며, 추천되는 방법은 아닙니다. 대신 JavaScript 코드에서 이벤트 핸들러를 바인딩하는 방법을 사용하는 것이 더 권장됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `전통적인 DOM 핸들러`,
			},
			{
				type: ComponentType.CODE,
				value: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DOM Event Handler Example</title>
<style>
    button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }
</style>
</head>
<body>

<!-- DOM 이벤트 핸들러를 사용하여 버튼에 이벤트를 할당합니다. -->
<button id="myButton">Click me</button>

<script>
    // 대상 요소를 가져옵니다.
    const myButton = document.getElementById('myButton');

    // 이벤트 핸들러 함수를 정의합니다.
    function handleClick(event) {
        console.log('Button clicked!');
        console.log('Event:', event);
    }

    // DOM 이벤트 핸들러를 사용하여 이벤트를 바인딩합니다.
    myButton.onclick = handleClick;
</script>

</body>
</html>
        `,
			},
			{
				type: ComponentType.NORMAL,
				value: `이 예제는 버튼을 클릭할 때마다 콘솔에 메시지를 출력하는 전통적인 DOM 이벤트 핸들러를 보여줍니다. 여기서는 버튼 요소의 onclick 속성에 함수를 할당하여 이벤트 핸들러를 지정합니다. 이 방법은 HTML 이벤트 핸들러와 달리 JavaScript 코드로 이벤트 핸들러를 바인딩하므로 HTML과 JavaScript의 혼용 문제를 해결합니다. 그러나 하나의 이벤트에 하나의 핸들러만 할당할 수 있고, 핸들러에 인수를 전달하는 것이 불가능하며, 여러 개의 핸들러가 할당된 경우 마지막에 추가된 핸들러만 실행됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `EventListener을 이용한 핸들러`,
			},
			{
				type: ComponentType.CODE,
				value: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Event Binding Example</title>
<style>
    button {
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }
</style>
</head>
<body>

<button id="myButton">Click me</button>

<script>
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

    </script>

</body>
</html>`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이 예제는 버튼을 클릭할 때마다 콘솔에 메시지를 출력하는 간단한 이벤트 핸들러를 보여줍니다. 여기서 addEventListener를 사용하여 이벤트를 바인딩하고, 하나의 이벤트에 여러 개의 핸들러를 추가할 수 있습니다. 캡쳐링과 버블링을 지원하며, HTML뿐만 아니라 DOM 요소에도 적용됩니다.`,
			},
		],
	},
	{
		id: 19,
		title: '[TECH-QA] RESTful API이란?',
		date: '2025-03-11 13:26:33',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript'],
		preview: `RESTful API는 HTTP 프로토콜을 기반으로하는 웹 서비스 아키텍처입니다. 자원, 메소드, 메시지 등을 정의하여 클라이언트-서버 간의 통신을 가능하게 합니다. 또한, RESTful API는 표준 HTTP 메소드(GET, POST, PUT, DELETE)를 사용하여 서버와 통신합니다.    `,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `RESTful API(Representational State Transfer API)는 웹 서비스를 구축하기 위한 설계 방식 중 하나로, REST라는 아키텍처 스타일을 따르는 API로, 주로 HTTP 프로토콜을 기반으로하는 웹 서비스 아키텍처입니다. 자원, 메소드, 메시지 등을 정의하여 클라이언트-서버 간의 통신을 가능하게 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `메시지(Message)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `
        메시지는 클라이언트와 서버 간의 통신에서 전달되는 데이터의 내용을 나타냅니다. RESTful API에서 메시지는 요청(Request)과 응답(Response)로 구분됩니다. </br></br>
			`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `요청 메시지`,
			},
			{
				type: ComponentType.NORMAL,
				value: `
       요청 메시지는 클라이언트가 서버로 보내는 데이터입니다. 이 데이터에는 요청의 목적과 함께 필요한 정보가 포함될 수 있습니다. 주로 JSON 형식으로 데이터가 전송됩니다.
        요청 메시지에는 요청하는 자원의 식별, 자원의 상태 변경을 위한 데이터, 요청하는 작업의 종류(메소드) 등이 포함될 수 있습니다.</br></br>
			`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `요청(Request)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `ID가 123인 사용자의 정보를 조회 : GET /users/123`,
			},
			{
				type: ComponentType.CODE,
				value: `{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com"
}
       `,
			},
			{
				type: ComponentType.NORMAL,
				value: `새로운 사용자 생성 : POST /users`,
			},
			{
				type: ComponentType.CODE,
				value: `{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
       `,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `응답: 201 Created (성공 시)`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `응답 메시지`,
			},
			{
				type: ComponentType.NORMAL,
				value: `
        응답 메시지는 서버가 클라이언트로 보내는 데이터입니다. 클라이언트의 요청에 대한 응답으로 성공 여부, 처리된 데이터, 또는 오류 정보를 클라이언트에게 전달합니다. 일반적으로 HTTP 상태 코드와 함께 JSON 형식으로 반환되며, 상황에 따라 다양한 구조를 가질 수 있습니다. 마찬가지로 주로 JSON 형식으로 데이터가 전송됩니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>상황</b>: 사용자가 특정 리소스를 성공적으로 조회했을 때
<b>HTTP 상태 코드</b>: 200 OK`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `예제) ID가 123인 사용자를 조회`,
			},
			{
				type: ComponentType.CODE,
				value: `{
  "status": "success",
  "data": {
    "id": 123,
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2025-01-01T10:00:00Z"
  },
  "message": "User retrieved successfully"
}`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `상황: 새로운 리소스가 성공적으로 생성되었을 때
HTTP 상태 코드: 201 Created`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `예제) 새로운 사용자를 추가`,
			},
			{
				type: ComponentType.CODE,
				value: `{
  "status": "success",
  "data": {
    "id": 124,
    "name": "Jane Doe",
    "email": "jane@example.com",
    "created_at": "2025-03-11T09:00:00Z"
  },
  "message": "User created successfully",
  "location": "/users/124"
}`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `location: 새로 생성된 리소스의 URI를 나타냄 (선택적).`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `서버에서 응답 메시지 설계 팁`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `일관성 유지: 성공/오류 응답 형식을 일관되게 설계 (예: 항상 status, data, message 필드 사용).
상태 코드 활용: 적절한 HTTP 상태 코드를 사용해 클라이언트가 응답을 쉽게 해석하도록 도움.
오류 상세 제공: 오류 발생 시 error 객체에 구체적인 정보(코드, 메시지, 세부사항)를 포함해 디버깅 용이성을 높임.
필요한 데이터만 반환: 클라이언트가 필요로 하는 정보만 제공해 오버페칭(over-fetching)을 방지.

`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `자원(Resource)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `자원은 RESTful API의 핵심 개념 중 하나입니다. URI(Uniform Resource Identifier)란 웹상의 자료의 id 즉, <u>내가 올린 블로그 글의 특정 id를 입력해줘야 글을 볼수 있는 것처럼</u> URI는 인터넷 자원을 나타내는 서버에 있는 정보(고유 식별자)의 표현입니다. </br>일반적으로 웹에서는 URI를 사용하여 아래와 같이 자원을 식별합니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `/todos ---- 할일 목록이라는 자원
				/todos/1 ---- ID가 1인 특정 할일 자원
				`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
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
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `REST의 주요 특징`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `클라이언트-서버 구조 (Client-Server)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `클라이언트와 서버가 명확히 분리되어 있습니다. 클라이언트는 요청을 보내고, 서버는 이에 대한 응답을 제공합니다. 이로 인해 각 구성 요소가 독립적으로 발전할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `유니폼 인터페이스(일관적인 인터페이스)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `REST API는 리소스(데이터)를 URI로 식별하고, HTTP 메서드(GET, POST, PUT, DELETE 등)를 통해 조작합니다. 이를 통해 단순하고 일관된 접근 방식을 제공합니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `예: GET /users/123 (특정 사용자 조회), POST /users (사용자 생성).`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `무상태성(Statelessness)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `REST API는 상태를 관리하지 않는 stateless한 특성을 가집니다. 상태가 없다는 것은 클라이언트가 서버의 요청을 보낼 때 각 요청은 독립적으로 처리되며, 서버는 이전 요청의 상태를 기억하지 않습니다. <b>클라이언트는 필요한 모든 정보를 요청에 포함</b>해야 합니다.
				이는 서버의 부하를 줄이고, 확장성을 높이는데 도움이 됩니다.
        HTTP는 기본적으로 상태가 없는 프로토콜 입니다. 따라서 HTTP를 사용하는 웹 애플리케이션은 기본적으로 상태가 없는 구조를 따릅니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `캐시 가능 (Cacheable)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `응답 데이터는 캐시 가능 여부를 명시할 수 있어, 클라이언트나 중간 서버가 동일한 요청에 대해 이전 응답을 재사용할 수 있습니다. 이는 성능을 향상시킵니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `계층화 시스템 (Layered System)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `클라이언트는 서버와 직접 통신하는지, 아니면 프록시나 게이트웨이 같은 중간 계층을 거치는지 알 필요가 없습니다. 이는 보안과 확장성을 높입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `리소스 중심 (Resource-Based)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `모든 데이터는 리소스로 표현되며, 클라이언트는 리소스를 조작합니다. 리소스는 JSON, XML 등의 형식으로 표현됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `HTTP 프로토콜 활용`,
			},
			{
				type: ComponentType.NORMAL,
				value: `REST는 주로 HTTP를 기반으로 동작하며, 상태 코드(200 OK, 404 Not Found 등)를 사용해 요청의 성공/실패 여부를 전달합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `기타`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>확장성</b>: Stateless와 계층화 덕분에 서버 부하를 분산하기 쉽습니다.
<b>유연성</b>: 다양한 클라이언트(웹, 모바일 등)에서 사용 가능합니다.
<b>단순성</b>: 직관적인 설계로 개발과 유지보수가 용이합니다.
`,
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
		tag: ['JavaScript', '콜백함수'],
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
		tag: ['JavaScript'],
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
		tag: ['JavaScript'],
		preview: `화살표함수는 함수를 간단하게 표현할 수 있는 ES6문법 이다. 일반 함수는 this가 동적으로 바인딩되는 반면, 화살표 함수는 바로 상위 스코프의 this와 같으며 화살표함수는 프로토타입 프로퍼티를 가지고있지 않기때문에 생성자 함수로 사용이어렵다. `,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `선언방식`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `this 바인딩`,
			},
			{
				type: ComponentType.NORMAL,
				value: `일반 함수는 this가 동적으로 바인딩되는 반면 화살표 함수는 바로 상위 스코프의 this와 같다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.GUIDE_MESSAGE,
				value: `일반 함수는 함수를 호출할 때 함수가 어디에서 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.GUIDE_MESSAGE,
				value: `화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다. 동적으로 결정되는 일반 함수와는 달리 화살표 함수의 this 언제나 상위 스코프의 this를 가리키는 것이다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
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
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `arguments 전달`,
			},
			{
				type: ComponentType.NORMAL,
				value: `일반함수에서는 함수 내에서 모든 전달된 인자를 포함하고 있는 arguments변수가 전달되어 사용할 수 있지만, 화살표 함수에서는 arguments변수가 전달되지 않는다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
				type: ComponentType.HEADING,
				headingType: 'h4',
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
		tag: ['JavaScript'],
		preview: `HTML(하이퍼텍스트 마크업 언어)에서 속성(Attribute)과 프로퍼티(Property)는 특정 요소에 대한 정보를 지정하는 데 사용되는 용어입니다. 그러나 두 용어 간에는 몇 가지 차이가 있습니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `HTML(하이퍼텍스트 마크업 언어)에서 속성(Attribute)과 프로퍼티(Property)는 특정 요소에 대한 정보를 지정하는 데 사용되는 용어입니다. 그러나 두 용어 간에는 몇 가지 차이가 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
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
				value: `<a href="https://www.example.com">링크</a>`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위의 예에서 href는 속성이며, "https://www.example.com"은 해당 속성의 값입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
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
				value: `<div id="myDiv">내 디브</div>

var element = document.getElementById("myDiv");
console.log(element.id); // "myDiv"`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
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
		tag: ['JavaScript'],
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
		tag: ['JavaScript'],
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
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `HTML 코드`,
			},
			{
				type: ComponentType.CODE,
				value: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Async vs Defer</title>
</head>
  <body>
    <h1>Async vs Defer 예제>/h1>
    <script src="script.js" async>/script>
    <script src="script.js" defer>/script>
  </body>
</html>`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `script.js`,
			},
			{
				type: ComponentType.CODE,
				value: `console.log("이 부분은 스크립트가 실행되어야 하는 내용입니다.");`,
			},
			{
				type: ComponentType.NORMAL,
				value: `여기서 async와 defer 속성을 가진 <script> 태그가 있습니다. 이 두 가지 속성의 차이를 살펴보겠습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `async 속성`,
			},
			{
				type: ComponentType.NORMAL,
				value: `브라우저는 async 속성을 가진 스크립트를 만나면 HTML 파싱과 함께 스크립트 파일의 다운로드를 동시에 시작합니다.
              스크립트 파일이 다운로드되고 실행될 준비가 되면, HTML 파싱은 멈추고 스크립트가 실행됩니다.
              따라서 console.log가 실행될 때까지 HTML 파싱은 멈추게 됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
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
	{
		id: 30,
		title: '[English] There is nothing to + 동사원형',
		date: '2024-12-19',
		folder: Folder.ENGLISH,
		tag: ['English'],
		preview: `"there is nothing to"는 상황에 따라 여러 의미로 해석될 수 있습니다. 가장 일반적인 해석은 아래와 같습니다. `,
		post: [
			{
				type: ComponentType.STRINGLIST,
				value: `"There is nothing to do." (할 것이 없다.)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `"There is nothing to worry about." (걱정할 필요가 없다.)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `"There is nothing to this problem." (이 문제는 별것 아니다.)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `"There is nothing to see." (볼게 없다.)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `"There is nothing to worry about." (걱정할 거 없다.)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `"There is nothing to lose." (잃을 게 없다.)`,
			},
		],
	},
	{
		id: 31,
		title: '[English] work + 전치사',
		date: '2024-12-23',
		folder: Folder.ENGLISH,
		tag: ['English'],
		preview: `"He is just some guy I work with!"는 상황에 따라 여러 의미로 해석될 수 있습니다. 가장 일반적인 해석은 아래와 같습니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `"He is just some guy I work with!" (그냥 직장 동료라고!)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `는 상황에 따라 여러 의미로 해석될 수 있습니다. 가장 일반적인 해석은 아래와 같습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `"work with" (~와 함께 일하다 [사람/집단])`,
			},
			{
				type: ComponentType.NORMAL,
				value: `I work whith a great team (저는 훈륭한 팀과 함꼐 일합니다.)`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `"work for" + (~를 위해 일하다[고용관계]) `,
			},
			{
				type: ComponentType.NORMAL,
				value: `Mike works for a computer company (마이크는 컴퓨터 회사에서 일합니다.)`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `"work at" (~에서 일하다[장소])`,
			},
			{
				type: ComponentType.NORMAL,
				value: `He works at the hospital (그는 병원에서 일합니다.)`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `"work in" (~에서 일하다 [분야/부서])`,
			},
			{
				type: ComponentType.NORMAL,
				value: `I work in management training (나는 관리 교육 분야에서 일합니다.)`,
			},
		],
	},
	{
		id: 32,
		title: '[English] There is gotta be : 분명히 ~이 있을 것이다.',
		date: '2025-01-05',
		folder: Folder.ENGLISH,
		tag: ['English'],
		preview: `"There is gotta be = There is got to be!"는 분명히 ~이 있을 것이다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `"have got to = gotta" (~해야한다. ~임이 틀림없다.)`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>have to/ have got to/ gotta</b>는 <span style="color: red;">필요성</span>이나 <span style="color: red;">의무</span>를 나타내는 표현이다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>have got to (해야만 한다)</b> : Have got to는 have to보다 조금 더 강한 강조를 나타내며, 필요성이나 의무를 표현할 때 사용됩니다. 이 표현은 주로 구어체에서 사용되며, 때때로 문어체에서도 볼 수 있습니다.`,
			},

			{
				type: ComponentType.STRINGLIST,
				value: `<b>Gotta (꼭 해야 한다, 반드시 해야 한다)</b> : Gotta는 have got to의 구어체 축약형으로, 강한 필요성이나 의무를 표현할 때 사용됩니다. 이는 매우 비공식적인 상황이나 대화에서 자주 사용됩니다.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				promptTypeProps: 'TIP',
				value: `<b>구어체</b>는 일상적인 대화에서 주로 사용되는 말의 표현 방식입니다. 글로 쓰는 문어체와는 달리, 자연스럽고 자유로운 표현이 특징입니다. 구어체는 사람들이 실제로 대화할 때 쓰는 어휘, 문장 구조, 억양 등을 반영하며, 문법적 완전성을 꼭 따르지 않을 수도 있습니다.`,
			},
		],
	},
	{
		id: 33,
		title: '[TECH-QA] CORS란',
		date: '2025-02-27',
		folder: Folder.HTTP,
		tag: ['JavaScript', 'TECH-QA'],
		preview: `"CORS(Cross-Origin Resource Sharing)는 도메인 혹은 포트가 다른 외부서버의 자원을 요청할때 생긴다."`,
		post: [
			{
				type: ComponentType.KEYWORD,
				value: `동일출처정책(Same-Origin Policy: 프로토콜/도메인/포트가 모두 같음),보안목적`,
			},

			{
				type: ComponentType.NORMAL,
				value: `<b>CORS(Cross-Origin Resource Sharing)</b>는 웹 브라우저에서 실행되는 스크립트가 <b>도메인 혹은 포트가 다른 출처(origin)</b>에서 외부서버의 자원을 요청할때 생긴다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `출처(Origin) 주요 개념`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `프로토콜(http, https)
				도메인(example.com)
				포트(예: 80, 443)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `의 조합으로 정의됩니다. 예: https://example.com:443`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>동일출처 정책</b>에 의해 브라우저는 외부서버에 요청한 데이타를 보안목적으로 차단하며 해당 문제를 해결하기 위해서는 서버의 response헤더에 Access-Control-Allow-Origin 같은 헤더로 어떤 출처를 허용할지 응답합니다.</br></br>
CORS는 서버 측에서 크로스 오리진 요청을 허용하거나 제한하는 정책을 정의하는 메커니즘으로 서버의 응답(response)에 포함되어야 하며 프론트엔드는 요청을 보내는 역할만 하고, CORS 정책을 제어할 수는 없습니다.`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `프론트 요청`,
			},
			{
				type: ComponentType.NORMAL,
				value: `프론트엔드(클라이언트)에서 요청을 보낼 때 Origin 헤더를 포함시켜 자신의 출처를 서버에 알립니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `GET https://api.other.com/data
Origin: https://example.com
`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `서버 응답`,
			},
			{
				type: ComponentType.NORMAL,
				value: `서버는 이 요청을 받고, 해당 출처를 허용할지 여부를 판단한 후 응답 헤더에 Access-Control-Allow-Origin을 추가합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `Access-Control-Allow-Origin: https://example.com
`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `Node.js (Express)`,
			},
			{
				type: ComponentType.CODE,
				value: `const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://example.com'); // 특정 출처 허용
  // 또는 '*'로 모든 출처 허용 (보안상 주의 필요)
  // res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/data', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(3000);`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `Nginx (웹 서버 설정)`,
			},
			{
				type: ComponentType.CODE,
				value: `server {
    listen 80;
    server_name api.example.com;

    location / {
        add_header 'Access-Control-Allow-Origin' 'https://example.com';
        # 다른 설정...
    }
}`,
			},
		],
	},
	{
		id: 34,
		title:
			'[독서] 스키너의 심리상자 열기 - 고전적 조건화(classical conditioning)',
		date: '2025-03-03 14:30:21',
		folder: Folder.READINGNOTES,
		tag: ['스키너의 심리상자 열기', '독서'],
		preview: `파블로프가 발견한 것은 소위 고전적 조건화(classical conditioning)라는 것이다. 즉 사람이 눈을 깜빡이거나 깜짝 놀라거나 침을 흘리는 것과 같은 무조건적인 동물 반사를 조건화하게 되면, 새로운 자극앞에서도 그런 반응이 나타날 수 있다는 것이다.`,
		post: [
			{
				type: ComponentType.KEYWORD,
				value: `고전적 조건화(classical conditioning)`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `[페이지 23] </br>파블로프가 발견한 것은 소위 <b>고전적 조건화(classical conditioning)</b>라는 것이다. </br>즉 사람이 눈을 깜빡이거나 깜짝 놀라거나 침을 흘리는 것과 같은 무조건적인 동물 반사를 조건화하게 되면, 새로운 자극앞에서도 그런 반응이 나타날 수 있다는 것이다.
개가 음식을 보고 종소리를 연상하면 나중에 종소리만 들려도 침을 흘린다는 파블로프의 그 유명한 이론 말이다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `감상평`,
			},
			{
				type: ComponentType.NORMAL,
				value: `파블로프의 고전적 조건화(classical conditioning)에 대해 다시 생각해보니, 인간과 동물의 행동이 얼마나 무의식적으로 학습될 수 있는지 새삼 놀라웠다.
이 이론을 접하면서 든 생각은, 우리는 일상에서도 자연스럽게 조건에 의한 결과를 항상 경험하고 있다는 생각이 들었다. 이를테면, 아침에 커피 향을 맡으면(input 조건화) 자연스레 기분이 좋아진다거나(output), 특정 노래를 들으면 과거의 기억이 떠오르며 감정이 요동치는 경험 같은 것들 말이다. </br></br>이 모든것은 우리가 과거에 경험한 것들에 의해서만 가능하고 커피향을 맡으면 기분이 좋아진다는 것은 어쩌면 학습화된 조건화 반응이 아닐까 라는 생각도 들었다.</br></br>
파블로프의 개처럼 우리도 모르는 사이에 자극(input 조건화)과 반응(output 침을 흘리는 행위)이 연결되어 삶의 패턴이 만들어지는 걸까?

인간의 뇌는 어떤 input 조건에 대하여 어떤 관련과 연관성을 가지고 여러가지 감각들을 무의식안에서 찾아오는 걸까?
또 한편으로는, 이 단순해 보이는 발견이 심리학뿐 아니라 광고나 교육 같은 분야에도 얼마나 큰 영향을 미쳤을지도 궁금해진다.</br></br>
우리가 어떤 제품을 보고 긍정적인 감정을 느끼게 된다면, 그건 어쩌면 의도된 조건화의 결과일지도 모른다는 생각이 든다.
광고에서라면 모두가 긍정적으로 생각할 수 있는 승리 또는 긍정적인 이미지를 상징화한 아이들을 모델로서 체택한다면 그 제품에 대해 우리는 그 아이돌이 가지는 이미지를 그대로 떠올리게 될것이고 그것이 그 제품의 이미지가 되는 그런것? </br></br>
세상에 브랜드로서 존재하는 것들은 사실은 그 브랜드가 가지고 있는 이미지에 대해 우리가 끊임없이 조건화하고 학습화하여 얻어낸 그 이상 그 이하가 아닐 수도 있겠단 생각..
인간은 참으로 단순한 것 같아..`,
			},
		],
	},
	{
		id: 35,
		title: '[TECH-QA] next/image',
		date: '2025-03-03 16:30:21',
		folder: Folder.NEXTJS,
		tag: ['next', 'TECH-QA'],
		preview: `next/image는 이미지를 자동으로 적절한 크기로 조정하고 필요한 경우에는 이미지를 WebP 또는 AVIF 형식으로 변환하여 더 작은 용량으로 압축할수 있으며 기본적으로 레이지 로딩을 지원하여 페이지의 성능르 향상 시킨다`,
		post: [
			{
				type: ComponentType.KEYWORD,
				value: `next/Image`,
			},
			{
				type: ComponentType.NORMAL,
				value: `next/image는 이미지를 자동으로 적절한 크기로 조정하고 필요한 경우에는 이미지를 WebP 또는 AVIF 형식으로 변환하여 더 작은 용량으로 압축할수 있으며 기본적으로 레이지 로딩을 지원하여 페이지의 성능르 향상 시킨다`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이는 페이지 스크롤 시에 화면에 보이는 이미지만 로드되고, 나머지 이미지는 필요할 때까지 로드되지 않는다는 이점이 있다.`,
			},
		],
	},
	{
		id: 36,
		title: '[독서] 스키너의 심리상자 열기 - 행동과학',
		date: '2025-03-04 11:09:21',
		folder: Folder.READINGNOTES,
		tag: ['스키너의 심리상자 열기'],
		preview: `한 생명체가 어떻게 학습을 하고 우리가 그 학습 결과를 어떻게 예측 통제할 수 있는가에 관한 수량화가 가능한 데이터를 만들어 냈다.`,
		post: [
			{
				type: ComponentType.KEYWORD,
				value: `행동과학`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `
				[페이지 26] </br>
				한 생명체가 어떻게 학습을 하고 우리가 그 학습 결과를 어떻게 <b>예측 통제</b>할 수 있는가에 관한 <b>수량화가 가능한 데이터</b>를 만들어 냈다. 행동의 예측과 통제라는 성과와 더불어 <b>통계학 분포도와 막대 그래프 그리고 수학이 동반되는 진정한 의미의 행동과학</b>이 탄생한 것이었다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `감상평`,
			},
			{
				type: ComponentType.NORMAL,
				value: `생명체의 학습을 수량화하고 행동을 예측, 통제할 수 있다는 이 글은 인간의 복잡한 심리나 선택까지도 데이터로 풀어내고 싶었던 것은 아닐까란 생각이 들었다. 개인적 견해로는 모든 인간의 행동이 계산 될 수 있다고는 생각지 되지 않으며 어느 일정 부분에서는 긍정적인 작용이나 부정적인 작용에 의히 심리적 통제가 가능할것 같다는 생각이 들지만 인간의 심리적 조작은 충분히 여러가지 상황에 의해 반응하기 때문에 그 모든 상황을 통제 하는 것은 불가능 하지 않을까란 생각이 들었다. 그 외에 이 내용이 현실에서 어떻게 적용될 수 있을지(예: 교육, 심리학, AI 개발 등)에 대해 한번쯤 연관지어 풀어낼 수 있는 긍정적 방향이 있을까 고민도 든다.
`,
			},
		],
	},
	{
		id: 37,
		title: '[TECH-QA] 이벤트 루프',
		date: '2025-03-04 13:34:21',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript', 'TECH-QA'],
		preview: `자바스크립트 이벤트 루프는 싱글 스레드 환경에서 비동기 작업으로 동시성을 지원하는 메커니즘입니다. 이벤트 루프는 이벤트 처리, 콜백실행, 태스크 큐 관리 등을 담당하여 비동기 작업을 효율적으로 처리 합니다. 요청된 비동기 작업이 완료되면 콜백이 태스크 큐로 이동하고 콜스택이 빈 상태가 되면 이벤트 루프는 큐에서 첫번째 콜백을 꺼내와 콜스택에 넣어주고 콜스택에서 콜백함수를 실행 합니다. 이 과정을 반복하여 비동기 작업을 순차적으로 처리 합니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `자바스크립트 이벤트 루프는 <b>싱글 스레드 환경(single-threaded) 
</b>에서 <b>비동기 작업</b>으로 <b>동시성을 지원하는 메커니즘</b>입니다. 이벤트 루프는 이벤트 처리, 콜백실행, 태스크 큐 관리 등을 담당하여 비동기 작업을 효율적으로 처리 합니다. 요청된 비동기 작업이 완료되면 콜백이 태스크 큐로 이동하고 콜스택이 빈 상태가 되면 이벤트 루프는 큐에서 첫번째 콜백을 꺼내와 콜스택에 넣어주고 콜스택에서 콜백함수를 실행 합니다. 이 과정을 반복하여 비동기 작업을 순차적으로 처리 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `코드 예제 1`,
			},
			{
				type: ComponentType.CODE,
				value: `console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("3");
    })
    .then(() => {
        console.log("4");
    });

console.log("5");`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `출력`,
			},
			{
				type: ComponentType.CODE,
				value: `1
5
3
4
2`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `설명`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `"1"과 "5"는 동기 코드로 먼저 실행.
Promise의 then은 Microtask Queue에서 순차 실행 ("3", "4").

setTimeout은 Task Queue에서 마지막에 실행 ("2")
`,
			},

			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `setTimeout은 지연 시간이 비록 <b>0ms</b>라도 Microtask가 우선`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<img style="border-radius:15px" src="https://blog.kakaocdn.net/dn/bfVyEB/btsvNysLSVD/Qg3G7SIl2KrYMdfslBw50k/img.gif">`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `코드 예제 2`,
			},
			{
				type: ComponentType.CODE,
				value: `console.log("시작");

// setTimeout으로 비동기 작업 추가 (Task Queue로 이동)
setTimeout(() => {
    console.log("setTimeout 실행 (5초 후)");
}, 5000);

// Promise로 비동기 작업 추가 (Microtask Queue로 이동)
Promise.resolve()
    .then(() => {
        console.log("Promise 실행");
    });

// 무거운 동기 작업 (Call Stack에서 바로 실행)
for (let i = 0; i < 3; i++) {
    console.log("동기 작업 \${i}");
}

console.log("끝");`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `실행 순서와 설명`,
			},
			{
				type: ComponentType.NORMAL,
				value: `프로그램을 실행하면 다음과 같은 출력이 순차적으로 나타납니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `시작
동기 작업 0
동기 작업 1
동기 작업 2
끝
Promise 실행
(5초 후) setTimeout 실행 (5초 후)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `console.log("시작"): Call Stack에 쌓이고 바로 실행되어 출력.

setTimeout: 비동기 함수로, 5초 후 실행될 콜백이 Task Queue에 추가됨.

Promise.resolve().then(): Promise는 Microtask Queue에 추가됨 (Microtask는 Task Queue보다 우선순위가 높음).

for 루프: 동기 코드로 Call Stack에서 즉시 실행, "동기 작업 0, 1, 2" 출력.

console.log("끝"): Call Stack에 쌓이고 바로 실행.

Call Stack이 비어짐: 이벤트 루프가 Microtask Queue를 확인하고 Promise의 콜백을 실행 ("Promise 실행" 출력).

5초 후: 이벤트 루프가 Task Queue에서 setTimeout의 콜백을 가져와 실행 ("setTimeout 실행" 출력).

`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `이벤트 루프의 동작 요약`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `동기 코드는 즉시 Call Stack에서 실행됩니다.

비동기 작업은 Task Queue(예: setTimeout) 또는 Microtask Queue(예: Promise)에 들어가 대기합니다.

이벤트 루프는 Call Stack이 비어 있을 때 큐에서 작업을 꺼내 실행하며, Microtask Queue가 Task Queue보다 우선순위가 높습니다.
`,
			},
			{
				type: ComponentType.NORMAL,
				value: `관련게시물 [자바스크립트 런타임] : ${
					process.env.NODE_ENV === 'development'
						? 'http://localhost:3000/'
						: 'https://nam-yeun-hwa.github.io/'
				}posts/38`,
			},
			{
				type: ComponentType.NORMAL,
				value: `참고 유투브 : https://www.youtube.com/watch?v=eiC58R16hb8`,
			},
		],
	},
	{
		id: 38,
		title: '[TECH-QA] 자바스크립트 런타임',
		date: '2025-03-05 12:35:21',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript', 'TECH-QA'],
		preview: `자바스크립트는 싱글 스레드로 동작하지만, 비동기 작업을 효율적으로 처리하기 위해 아래 구성 요소들이 상호작용합니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `자바스크립트는 싱글 스레드로 동작하지만, 비동기 작업을 효율적으로 처리하기 위해 아래 구성 요소들이 상호작용합니다.`,
			},
			{
				type: ComponentType.KEYWORD,
				value: `Call Stack,Heap,Web API,Task Queue (Macro Task Queue),Microtask Queue,Event Loop`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>Call Stack</b> : 실행 중인 함수 호출을 관리.
				<b>Heap</b> : 메모리 할당을 관리.
				<b>Web API:</b> : 비동기 작업을 처리(브라우저 제공).
				<b>Task Queue (Macro Task Queue)</b> : 비동기 작업의 콜백 대기열.
				<b>Microtask Queue</b> : 우선순위가 높은 비동기 작업 대기열..
				<b>Event Loop</b> : 스택과 큐 사이의 작업 이동을 조정.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Call Stack (호출 스택)`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `현재 실행 중인 함수 호출을 추적합니다. `,
			},
			{
				type: ComponentType.NORMAL,
				value: `싱글 스레드이므로 한 번에 하나의 작업만 순서대로 처리합니다. Heap에서 데이터를 참조하며 동기 코드를 실행하고 비동기 작업은 Web API로 넘기고, 스택은 바로 다음 작업을 처리합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `function a() { b(); }`,
			},
			{
				type: ComponentType.NORMAL,
				value: `a와 b가 스택에 순차적으로 쌓였다가 제거됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Heap (힙)`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `객체와 데이터가 저장되는 메모리 공간입니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `주로 동적으로 할당된 메모리(예: 객체, 배열, 함수 등)를 관리합니다. 구조화되지 않은 메모리 영역으로, 변수나 함수의 실제 데이터가 저장됩니다. 가비지 컬렉션(Garbage Collection)이 주기적으로 사용되지 않는 메모리를 정리합니다.Call Stack에서 함수가 호출될 때, 함수의 변수나 객체는 Heap에 저장되고, 스택은 그 참조만 가집니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `let obj = { name: "myName" };`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위 코드에서 obj는 스택에 참조로 저장되고, { name: "myName" }는 Heap에 저장되며 비동기 작업에서 생성된 객체(예: Promise 객체)도 Heap에 저장되며, 이후 Microtask Queue나 Task Queue에서 참조됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Web API`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `setTimeout, fetch, DOM 이벤트 등 비동기 작업을 처리합니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `브라우저가 제공하며, 자바스크립트 엔진 외부에 존재합니다. Call Stack에서 비동기 함수 호출 시, Web API로 작업을 위임하며 작업 완료 후 콜백을 Task Queue 또는 Microtask Queue에 넣어준다.`,
			},
			{
				type: ComponentType.CODE,
				value: `setTimeout(() => {}, 1000)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `1초 후 콜백을 Task Queue에 추가해준다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Task Queue (Macro Task Queue)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Web API에서 완료된 비동기 작업(예: setTimeout, setInterval, I/O)의 콜백이 대기하는 큐입니다. (FIFO 방식) 이벤트 루프가 Call Stack이 비었을 때 Task Queue에서 작업을 가져와 실행 할수 있도록 합니다. Microtask Queue보다 우선순위가 낮습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Microtask Queue (마이크로 큐)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Promise의 .then, .catch, async/await, queueMicrotask 등 우선순위가 높은 비동기 작업의 콜백이 대기하는 큐입니다. (FIFO 방식) Task Queue와 별도로 관리되며, Microtask는 Call Stack이 비었을 때 즉시 실행되며, Task Queue보다 먼저 처리됩니다. 이벤트 루프는 한 번의 "틱(tick)"에서 모든 Microtask를 처리한 후 Task Queue로 넘어간다. Heap에 저장된 Promise 객체가 해결(resolve)되면, 해당 콜백이 Microtask Queue로 이동한다. `,
			},
			{
				type: ComponentType.CODE,
				value: `console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");`,
			},
			{
				type: ComponentType.NORMAL,
				value: `출력: Start → End → Promise → Timeout </br>
이유: Microtask Queue(Promise)가 Task Queue(setTimeout)보다 먼저 처리됨.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Event Loop (이벤트 루프)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Call Stack, Microtask Queue, Task Queue를 감시하며 작업을 적절히 스택으로 이동시킵니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `동작 순서`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Call Stack이 비었는지 확인.
Microtask Queue에 작업이 있으면 모두 처리(Heap에서 데이터 참조).
Task Queue에서 작업을 하나씩 꺼내 실행.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Heap에 저장된 데이터와 큐에 대기 중인 콜백을 연결하며, 싱글 스레드 환경에서 비동기 작업을 조율한다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `자바스크립트 런타임 전체 흐름`,
			},
			{
				type: ComponentType.CODE,
				value: `console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
let obj = { message: "Heap" };
console.log(obj.message);`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `Heap`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Heap: { message: "Heap" } 객체가 Heap에 저장되고, obj는 스택에서 참조한다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `Call Stack`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `console.log("Start") 실행 후 제거.
setTimeout 호출 → Web API로 이동.
Promise.resolve().then 호출 → Promise 객체는 Heap에, .then 콜백은 Microtask Queue로.
console.log(obj.message) 실행 후 제거.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `Web API`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `setTimeout이 0초 후 콜백을 Task Queue에 추가.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `Event Loop`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Call Stack 비었음 → Microtask Queue에서 Promise 콜백 실행.
Task Queue에서 Timeout 콜백 실행.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `출력`,
			},
			{
				type: ComponentType.CODE,
				value: `Start → Heap → Promise → Timeout`,
			},
			{
				type: ComponentType.NORMAL,
				value: `자바스크립트의 싱글 스레드 환경은 Call Stack으로 동기 작업을 처리하고, Heap에서 메모리를 관리하며, Web API, Task Queue, Microtask Queue, Event Loop가 협력하여 비동기 작업을 효율적으로 수행합니다. 특히 Microtask Queue는 Promise와 같은 작업을 우선 처리하며, Heap은 모든 데이터의 기반을 제공합니다. 이 구조 덕분에 자바스크립트는 UI 반응성을 유지하면서 복잡한 비동기 작업을 처리할 수 있습니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `관련게시물 [이벤트 루프]: ${
					process.env.NODE_ENV === 'development'
						? 'http://localhost:3000/'
						: 'https://nam-yeun-hwa.github.io/'
				}posts/37`,
			},
		],
	},
	{
		id: 39,
		title:
			'[독서] 스키너의 심리상자 열기 - 변동 강화 계획(variable schedules of reinforcement)',
		date: '2025-03-06 11:09:21',
		folder: Folder.READINGNOTES,
		tag: ['스키너의 심리상자 열기', '독서'],
		preview: `한 생명체가 어떻게 학습을 하고 우리가 그 학습 결과를 어떻게 예측 통제할 수 있는가에 관한 수량화가 가능한 데이터를 만들어 냈다.`,
		post: [
			{
				type: ComponentType.KEYWORD,
				value: `변동 강화 계획(variable schedules of reinforcement)`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `[페이지 26] </br><b>변동 강화 계획(variable schedules of reinforcement)</b> 이라고 명명한 실험을 계속 해 나갔다. 그리고 마침내 무엇보다 중요한 발견을 했다. 그는 동물들이 지랫대를 누를 때 부 정기적으로 음식을 주었다, 대부분의 경우에는 음식이 나오지 않았고 아주 가끔식 가령 40번을 누르거나 60번을 눌러야 음식이 나왔다, 직관적으로 보면 보상을 아무 때나 주거나 드물게 주면 좌절감이 생겨 행동이 소멸될 것 같지만 실제로는 그렇지 않았다. 스키너는 음식이라는 보상을 간헐적으로 줄 때 쥐들이 그 결과와 무관하게 지렛대를 계속 누른다는 사실을 알아냈다. 보상이 비저이적으로 이루어질 때 행동이 소멸되기가 가장 어렵다는 사실을 발견했다.</br></br>
				보상이 지속적으로 생기지 않는데도 어리석은 행동을 계속하는 이유가 무엇인지, 왜 남자들은 위험할 정도까지 주식 투자를 하는가? 그것은 소위 간헐적 강화라는 것으로 스키너는 그 메커니즘과 우연성이 가진 강방석을 여실히 보여 주었다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `감상평`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이 실험은 단순히 동물의 행동을 관찰하는 데서 그치지 않고, 인간의 행동 패턴과 심리까지 연결 지을 수 있는 깊은 통찰을 제공한다. 특히 보상이 일정하지 않고 간헐적으로 주어질 때 행동이 더 강하게 지속된다는 점은, 인간은 비합리적인 선택을 하는 동물이라는 점이라고 봐도 되는 걸까? </br></br>
				
				예를 들면 언급된 주식 투자처럼 사람들은 손실의 위험을 알면서도 간헐적으로 찾아오는 큰 보상(수익)을 기대하며 위험한 선택을 하거나 연애에서의 집착 처럼 어떤 행동을 통해 보상을 받았던 쾌감 도파민을 느끼는 행위를 잊지 못하고 간헐적인 보상에도 그 행위를 집착하는 것일까? 안정적인 회로보다는 긴장감을 꾸준하게 느끼게 했을때의 회로가 더 인간에게 쾌감을 줘서일까?</br></br>

				이 내용을 통해 인간은 합리적인 사고 보다는 감각적인 또는 감성적인 사고(과거에 느꼇던 경험)에 좀 더 많은 영향을 받는 것 같는 것 같고 스키너의 심리상자 열기와 연관 시킨다면 과거에 보상을 받았던 순간의 쾌감을 잊지 못해 그 감정을 다시 느끼려는 경향은 합리적인 사고 보다는 감각적인 쾌감이 인간에게는 좀 더 강하게 작용하는 것일까?</br></br>

				우리의 일상이 합리적 판단보다는 감정정 사고에 더 영향을 받고 판단을 내리고 있는 것은 아닌지, 한 번쯤 돌아볼 필요가 있겠다.`,
			},
		],
	},
	{
		id: 40,
		title: '[TECH-QA] 리액트의 useCallback와 useMemo',
		date: '2025-03-06 12:37:21',
		folder: Folder.REACT,
		tag: ['TECH-QA', 'React'],
		preview: `useCallback과 useMemo는 둘 다 ReactHooks 입니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `useCallback과 useMemo는 둘 다 ReactHooks 입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `useCallback`,
			},
			{
				type: ComponentType.NORMAL,
				value: `useCallback은 콜백함수를 메모이제이션하여 불 필요한 렌더링을 방지 합니다. useCallback은 특정 함수를 새로 만들지 않고 재사용 하고 싶을때 사용하는 훅입니다. 
				
				의존성 배열(dependency array)이 변경되지 않는 한 동일한 함수의 인스턴스를 반환합니다. 주로 자식 컴포넌트에 콜백 함수를 전달할 때, 불필요한 리렌더링을 방지하기 위해 사용됩니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const memoizedCallback = useCallback(() => {
  // 함수 로직
}, [의존성1, 의존성2]);`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `자식 컴포넌트에 props로 전달되는 함수가 매번 새로 생성되지 않도록 방지.
예를 들어, 버튼 클릭 핸들러나 이벤트 콜백을 자식 컴포넌트에 전달할 때 유용.`,
			},
			{
				type: ComponentType.CODE,
				value: `import React, { useState, useCallback } from 'react';

function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  // useCallback 없이 함수를 정의하면 매 렌더링마다 새 함수가 생성됨
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // 의존성 배열이 빈 경우, 함수는 처음 생성된 후 재사용됨

  return (
    <div>
      <p>Count: {count}</p>
      <Child onClick={handleClick} />
    </div>
  );
}`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `여기서 handleClick은 useCallback으로 감싸져 있어, Parent가 리렌더링되더라도 동일한 함수 참조를 유지합니다. </br>따라서 Child 컴포넌트는 불필요하게 리렌더링되지 않습니다(단, React.memo와 함께 사용하면 더 효과적).`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `useMemo`,
			},
			{
				type: ComponentType.NORMAL,
				value: `useMemo는 전달된 함수가 실행되고 반환된 결과를 메모이제이션하며 일반적으로 계산 비용이 높은 값을 메모이제이션하여 불필요한 재계산을 방지 합니다. 의존성 배열이 변경되지 않으면 이전에 계산된 값(계산된 결과를 캐싱)을 재사용하여 성능을 최적화합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const memoizedValue = useMemo(() => {
  // 계산 로직
  return 결과값;
}, [의존성1, 의존성2]);`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `복잡한 연산(예: 배열 필터링, 데이터 가공 등)의 결과를 캐싱.
렌더링 중 불필요한 계산을 피하고 싶을 때.`,
			},
			{
				type: ComponentType.CODE,
				value: `import React, { useState, useMemo } from 'react';

function ExpensiveComponent() {
  const [number, setNumber] = useState(1);

  // 비용이 큰 계산을 시뮬레이션
  const computeExpensiveValue = (num) => {
    console.log('Computing...');
    return num * 1000; // 간단한 예시로 곱셈 사용
  };

  // useMemo로 계산 결과를 메모이제이션
  const expensiveResult = useMemo(() => computeExpensiveValue(number), [number]);

  return (
    <div>
      <p>Result: {expensiveResult}</p>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    </div>
  );
}`,
			},
			{
				type: ComponentType.NORMAL,
				value: `여기서 expensiveResult는 number가 변경될 때만 새로 계산되고, 그렇지 않으면 이전 값을 재사용합니다. Computing... 로그는 number가 바뀔 때만 출력됩니다.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `두 훅 모두 성능 최적화를 위한 도구이지만, 남용하면 코드가 복잡해질 수 있으니 정말 필요한 상황(예: 자주 리렌더링되거나 계산 비용이 큰 경우)에만 사용하는 것이 좋습니다.`,
				promptTypeProps: 'DANGER',
			},
		],
	},
	{
		id: 41,
		title:
			'[독서] 스키너의 심리상자 열기 - 스키너 박사가 실험을 통해 도출해낸 추론 : 인간에게 자유 의지가 없다',
		date: '2025-03-06 15:32:21',
		folder: Folder.READINGNOTES,
		tag: ['스키너의 심리상자 열기', '독서'],
		preview: `스키너 박사가 실험을 통해 도출해낸 추론은 인간에게 자유 의지가 없다는 이론인데 인간이 오로지 강화물에 의해 지배된다는 내용에서 자유의지가 없다는 것이 무엇일까`,
		post: [
			{
				type: ComponentType.KEYWORD,
				value: `인간에게 자유 의지가 없다.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `[페이지 31] </br>스키너 박사가 실험을 통해 도출해낸 추론은 어떻습니까? </br>인간에게 자유 의지가 없다는 것 말입니다. </br>우리가 오로지 강화물에 의해 지배된다는 그의 이런을 믿으시나요?"</br>
케이건 교수가 물었다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `감상평`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위 내용에서 인간에게 자유의지가 없다는 것은 스키너는 인간의 행동이 주로 외부 환경에서 오는 자극과 그에 따른 결과(특히 강화물, 즉 보상이나 처벌)에 의해 결정된다고 보았다고 할수 있으며 그는 이를 "조작적 조건화"(operant conditioning)라는 개념으로 설명했는다. 이는 특정 행동이 뒤따르는 결과에 의해 반복되거나 억제된다는 뜻이다. </br></br>
				
				스키너가 "인간에게 자유 의지가 없다"고 말하는 것은 전통적인 의미의 자유 의지, 즉, 인간이 외부 영향 없이 독립적으로 선택하고 행동할 수 있다는 관념을 부정하는 것이다. 그의 관점에서는 우리가 "자유롭게" 결정한다고 느끼는 순간조차도 사실은 과거의 경험과 강화물(예: 보상받았던 행동, 처벌받았던 행동)에 의해 형성된 결과일 뿐이라는 것이다. </br></br>예를 들어, 우리가 어떤 선택을 할 때 "내가 원해서 했다"고 생각하지만, 그 선택이 이전에 어떤 행동이 긍정적 결과를 가져왔는지(혹은 부정적 결과를 피하게 했는지)에 따라 이미 조건화 된 것이라고 보는 것이다.

				쉽게 말해, 인간이 자라온 환경적 요인과 학습된 패턴에 의해 통제된다는 주장이다. 스키너는 이런 관점에서 인간의 행동을 예측하고 통제할 수 있다고 믿었다. </br></br>
나의 생각은 이렇다. 인간의 성격과 내면등은 어릴적 유년기에 형성된 자아에 의해 대부분 결정이 되는 것이라고 생각되며 그렇게 유년기에 학습된 패턴에 따라 성인이 된 인간의 자아속에 이미 잠재되어 합리적이고 논리적인 사고를 할때에도 충분한 영향을 준다고 생각되며 그것은 인간의 논리를 담당하는 뇌의 영역이 아닌 감각을 담당하는 뇌의 무의식 부분에서 판단되어 진다고 생각이 든다. 어쩌면 인간은 과거의 경험으로부터 생각의 넓이를 제한받거나 앞으로의 미래까지 영향을 줄지도 모르겠단 생각이 들었다.</br></br>

또한 유년기의 조건화가 학습된 인간의 경우라면 "긍정적인 조건화"냐 "부정적인 조건화냐"에 따라 성인이 된 후 생각의 확장이 달라질것 같다고 생각했다. 예를 들어, 어릴 때 긍정적 강화(칭찬, 격려)를 받은 사람은 성인이 되어서도 새로운 가능성을 탐구하거나 도전하려는 경향이 강할 수 있고, 반대로 부정적 강화(처벌, 억압)를 주로 받은 사람은 사고가 경직되거나 방어적으로 변할 수 있다는 것이다. </br></br>

결론적으로 유년기 시절 조건화에 따라 학습된 부정적 자아를 가지고 잇는 성인일지라도 긍정적인 전환이 가능할것 이라고 생각했다. 스스로 무언가를 판단 내릴때 과거에 내가 조건화되어 학습한 부분에 대해 우선 스스로 인정하는 것이 첫번째라 생각했고 긍정적으로 전환할 수 있는 여러가지 경우를 생각하도록 학습화 한다면 충분의 다른 차원의 생각의 문의 열릴 것이라 생각한다. 예를 들면 부정적 조건화(실패에 대한 두려움)로 인해 소극적이던 사람이 "실패도 배움의 일부"라는 긍정적 프레임으로 사고를 전환하도록 자신을 훈련한다면, 그건 새로운 자유의 차원을 열어가는 과정이 될 수 있다고 생각 한다.`,
			},
		],
	},
	{
		id: 42,
		title: '[TECH-QA] 리액트에서 map 사용시 key를 사용하는 이유',
		date: '2025-03-07 12:49:21',
		folder: Folder.REACT,
		tag: ['TECH-QA', 'React'],
		preview: `리액트에서 map을 사용할 때 각 항목에 고유한 키(key)를 제공해야 하는 이유는 성능 및 리렌더링 관련 문제를 방지하기 위함입니다.`,
		post: [
			{
				type: ComponentType.KEYWORD,
				value: `성능 최적화, 리렌더링 관련 방지 문제`,
			},
			{
				type: ComponentType.NORMAL,
				value: `리액트에서 map을 사용할 때 각 항목에 고유한 키(key)를 제공해야 하는 이유는 성능 최적화와 리렌더링 관련 문제를 방지하기 위함입니다. </br></br>
				
				고유한 키를 제공하면 리액트가 <b>가상 DOM(Virtual DOM)에서 각 항목을 정확히 식별</b>할 수 있어, 데이터의 변경 사항을 효율적으로 비교하고 업데이트할 수 있습니다. <U>즉, 변경된 요소만 다시 렌더링하고 나머지 요소는 그대로 유지하여 불필요한 리렌더링을 줄입니다.</U></br></br>


반면, 키를 제공하지 않으면 리액트는 기본적으로 배열의 인덱스를 키로 사용합니다. 하지만 인덱스를 키로 사용하는 것은 <b>리스트의 순서가 변경되거나 항목이 추가/삭제될 때 문제가 발생</b>할 수 있는데 예를 들어, 항목의 순서가 바뀌면 인덱스가 해당 항목의 고유성을 보장하지 못해 리액트가 잘못된 요소를 업데이트하거나 전체 목록을 다시 렌더링하게 될 가능성이 높아집니다. `,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `이는 성능 저하뿐만 아니라 UI의 일관성을 해칠 수 있는 버그를 유발할 수 있습니다.`,
				promptTypeProps: 'DANGER',
			},
			{
				type: ComponentType.NORMAL,
				value: `
따라서 키(Key)로는 리스트 내에서 고유하고 안정적인 값(예: 데이터베이스의 ID나 UUID)을 사용하는 것이 권장됩니다. 임시로 생성된 값이나 변동성이 높은 값은 피해야 하며, 키가 고유하지 않으면 리액트가 경고를 출력할 수도 있습니다. 이를 통해 리액트의 재조정(reconciliation) 과정이 최적화되고, 사용자 경험과 애플리케이션 성능이 향상됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `왜 인덱스를 키로 사용하면 문제가 생기는가?`,
			},
			{
				type: ComponentType.NORMAL,
				value: `React에서 map으로 리스트를 렌더링할 때 각 항목에 키를 제공하지 않으면, React는 기본적으로 배열의 인덱스(0, 1, 2, ...)를 키로 사용합니다. 이 인덱스는 리스트의 위치를 나타내므로, 리스트의 항목이 고정되어 있고 순서가 절대 변하지 않는다면 문제가 없을 수 있습니다. 하지만 리스트에 항목이 추가되거나 삭제되거나 순서가 변경될 때, 인덱스는 더 이상 해당 항목의 고유성을 보장하지 못하게 됩니다. 이는 React의 재조정(reconciliation) 과정에서 혼란을 일으킵니다. </br></br> 예를 들어, [A, B, C]라는 리스트가 있다고 가정하고, 각 항목의 키가 인덱스인 경우: A(key=0), B(key=1), C(key=2).

여기서 B가 삭제되면 리스트는 [A, C]가 되고, 키는 A(key=0), C(key=1)로 바뀝니다.

원래 C의 키는 2였는데, 이제 1로 바뀌었습니다. React는 키를 기준으로 항목을 식별하므로, C가 새로운 항목인지, 기존 항목인지 혼란스러워할 수 있습니다. 이로 인해 불필요한 리렌더링이 발생하거나 상태(state)가 엉뚱한 항목에 연결될 수 있습니다. </br></br>

같은 리스트 [A, B, C]에서 순서가 [B, A, C]로 바뀌었다고 해봅시다. </br>
인덱스를 키로 사용하면: 원래는 A(key=0), B(key=1), C(key=2)였지만, 이제 B(key=0), A(key=1), C(key=2)가 됩니다. </br>

React 입장에서는 키 0이 A에서 B로, 키 1이 B에서 A로 바뀐 것으로 보입니다. 이는 항목 자체가 바뀌지 않았음에도 불구하고 React가 이를 새로운 항목으로 오해하게 만들어, DOM을 불필요하게 업데이트하거나 컴포넌트의 상태(예: 입력 필드 값)를 잘못된 항목에 연결할 수 있습니다. </br></br>


리스트 항목이 상태(예: 체크박스 선택 여부)를 가지고 있다면, 인덱스를 키로 사용하면 항목의 위치가 바뀔 때 상태가 엉뚱한 항목에 붙을 수 있습니다. 예를 들어, A에 체크가 되어 있었는데 순서가 바뀌면 체크가 B로 이동해버리는 문제가 생길 수 있습니다.

`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: ` 인덱스를 키로 사용하면 리스트의 항목이 추가되거나 삭제될 때 키 값이 다시 변경되기 때문에 문제가 발생합니다. 인덱스는 항목의 본질적인 고유성을 나타내는 것이 아니라 단순히 리스트 내에서의 위치만을 나타내기 때문입니다. </br>React는 키를 통해 "이 항목이 이전과 동일한 항목인가?"를 판단하는데, 인덱스는 그 기준으로 부적합합니다.`,
				promptTypeProps: 'WARNING',
			},
			{
				type: ComponentType.NORMAL,
				value: `이 문제를 피하려면 리스트 내에서 고유하고 안정적인 값(예: 데이터베이스의 ID, UUID 등)을 키로 사용해야 합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const items = [
  { id: "a1", name: "A" },
  { id: "b2", name: "B" },
  { id: "c3", name: "C" }
];

return (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이렇게 하면 순서가 바뀌거나 항목이 추가/삭제되어도 id는 변하지 않으므로 React가 각 항목을 정확히 추적할 수 있습니다.`,
			},
		],
	},
	{
		id: 43,
		title:
			'[독서] 스키너의 심리상자 열기 - 두뇌 속에 존재하는 중요한 두 가지 학습시스템',
		date: '2025-03-08 14:11:21',
		folder: Folder.READINGNOTES,
		tag: ['스키너의 심리상자 열기', '독서'],
		preview: `하버드 대학의 스테판 코슬린(Stephen Kosslyn) 심리학 교수는 이렇게 말한다. "제 생각으로는 스키너 박사의 이론이 다시 등장할 겁니다. 요즘 과학자들은 스키너 박사가 연구한 신경물질(nenual substrates)에 관한 새롭고 흥미진진한 연구를 진행하고 있습니다.`,
		post: [
			{
				type: ComponentType.KEYWORD,
				value: `시냅스(synaps),기저 신경절(basal ganglia),전두엽 피질(frontal cortex)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `하버드 대학의 스테판 코슬린(Stephen Kosslyn) 심리학 교수는 이렇게 말한다. "제 생각으로는 스키너 박사의 이론이 다시 등장할 겁니다. 요즘 과학자들은 스키너 박사가 연구한 신경물질(nenual substrates)에 관한 새롭고 흥미진진한 연구를 진행하고 있습니다." </br></br>이어 <b>코슬린 교수</b>는 두뇌 속에 존재하는 중요한 <b>두 가지 학습시스템</b>에 관하여 증거를 들며 계속 설명했다. 하나는 두뇌 깊숙한 곳에 거미줄처럼 연결된 시냅스(synaps:신경 세포의 연결 부위)의 집합체로 습관이 새겨지는 부위인 기저 신경절(basal ganglia)이고 또 하나는 인간의 이성과 야망이 앞뒤로 연결되어 있는 커다랗게 불룩솟은 주름투성이의 전두엽 피질(frontal cortex)이다.
				`,
			},

			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `[페이지 32]</br>신경학자의 가정에 따르면 우리는 전두엽 피질을 통해 독립적으로 사고하고 과거에 비추어 미래를 상상하며, 계획을 세우는 방법을 배운다. 또한 모든 창의성과 놀라운 탈선이 이곳에서 비롯된다. 하지만 코슬린 교수의 의견은 이렇다. 우리의 인식 가운데 일부분만이 전두엽 피질에 의해 중재되고 그 밖의 학습은 상당 부분 습관에 의해 이루어 집니다. 스키너 박사는 실험을 통해 그러한 습관들의 신경 물질을 우리로 하여금 발견하게 해주었지요.
				`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `감상평`,
			},
			{
				type: ComponentType.NORMAL,
				value: `처음에 나는 코슬린 교수가 갑자기 기저 신경절에 대해 언급한 것은 왜일까? 라는 의문이 들었고 그 부분에서 기존 신경학자들은 전두엽 피질(frontal cortex)의 인간 학습시스템에 많은 초점을 두어 강조하고 있었는데
				
				스테판 코슬린(Stephen Kosslyn) 교수는 전두엽 피질의 역할뿐만 아니라 기저 신경절(basal ganglia)의 중요성을 강조함으로써, <b>인간의 학습과 인식 과정</b>에서 이 두 영역(전두엽 피질과 기저 신경절)의 상호작용과 균형을 재조명하려는 관점을 제시 하려는 것으로 보았다.</br></br>

				전두엽 피질의 의식적 중재를 부정하는 것이 아니라, 인간의 뇌가 의식적 사고(전두엽 피질)와 무의식적 습관(기저 신경절)을 동시에 활용하는 복합적인 시스템임을 강조하려는 것으로 보인다.
</br></br>
				예를들어 새로운 기술을 배울 때는 전두엽 피질이 적극적으로 작동하지만, 그 기술이 익숙해지면 기저 신경절이 이를 습관으로 전환하여 효율적으로 처리한다.
				창의적 문제 해결은 전두엽 피질에서 시작될 수 있지만, 반복된 경험과 패턴 인식(기저 신경절의 역할)이 이를 뒷받침할 수 있다고 생각하면 된다. </br></br>이는 스키너의 행동주의 이론을 현대 신경과학의 맥락에서 재해석하려는 시도로, 뇌의 두 영역이 상호보완적으로 작동한다는 관점을 제시한 것이라 보았다.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `위에서  전두엽 피질(frontal cortex) 설명시 인간의 <b>이성과 야망</b>이 앞뒤로 연결 되어 있다는 내용은 "이성"은 <b>논리적 사고</b>, 계획, 문제 해결과 같은 의식적 기능을 뜻하고, "야망"은 목표 지향적 행동이나 동기 부여와 관련된 <b>감정적·인지적 요소</b>를 의미할 가능성으로 해석 한다.`,
				promptTypeProps: 'TIP',
			},
		],
	},
	{
		id: 44,
		title: '[독서] 스키너의 심리상자 열기 - 이름을 밝히기를 꺼려한 한 정보원',
		date: '2025-03-11 16:11:21',
		folder: Folder.READINGNOTES,
		tag: ['스키너의 심리상자 열기', '독서'],
		preview: `이름을 밝히기를 꺼려한 한 정보원이 내게 말했다. "박사는 너무 욕심이 많았어요. 자신이 찾아낸 한 가지 발견을 온 세상에 적용 시키려고 했죠. 그러다가 돌부리에 걸려 넘어진 겁니다."`,
		post: [
			{
				type: ComponentType.KEYWORD,
				value: `환원주의`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이름을 밝히기를 꺼려한 한 정보원이 내게 말했다. "박사는 너무 욕심이 많았어요. 자신이 찾아낸 한 가지 발견을 온 세상에 적용 시키려고 했죠. 그러다가 돌부리에 걸려 넘어진 겁니다." 우리를 질리게 만드는 것은 그의 탐욕뿐이 아니다.
				`,
			},

			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `[페이지 36]</br>그는 상자라는 새로운 장치를 고안하면서 <b>인간의 자유에 대해 무한한 자부심을 품고 있던 서구 사상에 과감히 맞서는 의문을 제기함과 동시에 인간의 자유가 얼마나 견고한가에 관하여 엄청난 의구심을 품었다.</b> 환원주의에 대한 우리의 두려움, 실제로 인간이란 자동화된 일련의 반응에 불과하다는 우리의 의구심은 많은 사람들의 생각처럼 산업화 시대의 산물이 아니다. 그것은 훨씬 더 오래전부터 존재해온 방식이다. 오이디푸스가 치밀하게 짜여진 자신의 운명에 분노하고, 길가메시가 신이 짜놓은 계획에서 벗어나기 위해 안간힘을 쓴 이래로 <b>우리 인간들은 자신의 행동을 얼마나 주체적으로 지휘할 수 있는가의 문제에 의문을 품어 왔으며, 그것을 심각하게 걱정해 왔다.</b> 그리고 스키너의 상자는 새로운 광채를 발하는 20세기 기계들의 그림자 속에 영원히 반복되는 이러한 근심들을 담아낸 데모나 그릇이었다.
				`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `감상평`,
			},
			{
				type: ComponentType.NORMAL,
				value: `우선 위 내용을 읽고 스키너는 인간은 자유롭지 않다라는 의심을 심어주었고 의심으로 인해 우리 무의식에 불안을 내제 시켜준것이 아닌가? 라는 생각이 들었다. 하지만 어찌 생각해 보면 우리는 태어난 이후로 자유라는 이데올로기를 학습하였기 때문에 자유라는 것에 집착하고 있는 것은 아닐까? 꼭 자유의지안에서 살아야만 내가 나 다울수 있고 그게 나의 권리인 것일까? 우리는 이미 과거에 학습된 이념을 토대로 생각하고 있기 때문에 이런 반항심(?)이 나타나고 있는 것은 아닐까 라고 생각 하였다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `스키너의 관점이 전적으로 불안을 유발했다고 보기는 어려울 수도 있다. 오히려 그의 이론은 인간이 환경을 조정함으로써 더 나은 삶을 설계할 수 있다는 낙관적인 가능성을 제시하기 때문이다. 문제는, 그의 환원주의적 접근이 인간의 복잡한 내면(감정, 의식, 창의성 등)을 지나치게 단순화했다는 비판에서 불안이 비롯된 것일지도 모른다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `근대 이후의 계몽주의는 개인의 자유와 자율성을 인간 존재의 핵심 가치로 내세웠고 우리는 교육, 문화, 사회를 통해 "나는 자유로워야 한다"는 믿음을 내면화하며 자랐다. 이는 자연스러운 본성이 아니라 학습된 이념일 가능성이 크다고 생각한다.
흥미롭게도, 이런 관점은 고대 신화 속 오이디푸스나 길가메시 이야기와도 연결된다. 그들은 운명이라는 외부의 힘에 저항하며 자유를 갈망했지만, 결국 그들의 이야기는 운명의 틀 안에서 완성된다. 우리가 자유에 집착하는 이유는 어쩌면 자유가 본질적으로 우리에게 주어진 것이 아니라, 끊임없이 쟁취해야 하는 이상(理想)처럼 느껴지기 때문일까? </br></br>
`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>환원주의(reductionism)</b></br>환원주의는 복잡한 현상이나 개념을 더 단순한 구성 요소로 분해하여 설명하려는 접근 방식을 말한다. 철학, 과학, 심리학 등 다양한 분야에서 사용되며, 기본적으로 "전체는 부분들의 합"이라는 전제에서 출발한다. 환원주의는 복잡한 것을 이해하기 쉽게 만들고, 분석 가능한 단위로 나눠 탐구할 수 있게 해주는 강력한 도구로 여겨지지만, 동시에 전체의 특성이나 맥락을 간과할 수 있다는 비판도 받는다.`,
				promptTypeProps: 'TIP',
			},
		],
	},
	{
		id: 45,
		title: '[TECH-QA] 자바스크립트 비동기 함수',
		date: '2025-03-13 11:40:33',
		folder: Folder.JAVASCRIPT,
		tag: ['TECH-QA', 'JavaScript'],
		preview: `자바스크립트는 단일 스레드(Single-threaded) 언어로, 한 번에 하나의 작업만 처리할 수 있다. 이는 코드가 순차적으로 실행된다는 의미인데, 만약 모든 작업을 동기적으로 처리한다면 시간이 오래 걸리는 작업(예: 서버 요청, 파일 읽기)이 끝날 때까지 프로그램 전체가 멈춰버릴 수 있다.`,
		post: [
			{
				type: ComponentType.KEYWORD,
				value: `지연 작업을 효율적으로 처리하여 응답성 향상으로 사용자 경험을 개선, 자원을 최적화(성능 최적화)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `자바스크립트는 단일 스레드(Single-threaded) 언어로, 한 번에 하나의 작업만 처리할 수 있다. 이는 코드가 순차적으로 실행된다는 의미인데, 만약 모든 작업을 동기적으로 처리한다면 시간이 오래 걸리는 작업(예: 서버 요청, 파일 읽기)이 끝날 때까지 프로그램 전체가 멈춰버릴 수 있다. 자바스크립트에서는 이런 문제를 해결하기 위해 비동기 함수를 사용하는데 이는 시간 지연 작업을 효율적으로 처리하고, 사용자 경험을 개선하며, 자원을 최적화 할수 있게 해준다. 이러한 특성 덕분에 비동기 프로그래밍은 현대 웹 개발에서 필수적인 요소로 자리 잡았으며, Promise와 async/await를 활용하면 더욱 강력하고 깔끔한 코드를 작성할 수 있다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `시간 지연 작업 처리에 대해 응답성 향상`,
			},
			{
				type: ComponentType.NORMAL,
				value: `네트워크 요청(예: API 호출), 파일 입출력, 타이머(setTimeout) 등은 결과를 즉시 얻을 수 없는 작업이다. 동기 방식으로 처리하면 응답이 올 때까지 프로그램이 대기 상태에 빠지게 된다.</br></br>

예를들면 사용자가 웹사이트에서 버튼을 눌렀을 때 서버에서 데이터를 가져오는 데 3초가 걸린다면, 동기 방식에서는 3초 동안 브라우저가 멈춰 사용자 경험이 나빠지는 경험이 있다.</br></br>
위와 같은 상황에서 비동기 함수는 시간이 오래 걸리는 작업을 기다리지 않고, 다른 작업을 <b>병렬적으로 수행</b>할 수 있어
사용자가 회원가입 버튼을 눌렀을 때 서버에 데이터를 전송하고 응답을 기다리는 동안 "로딩 중" 메시지를 표시하며, 사용자가 화면을 스크롤하거나 다른 버튼을 클릭할 수 있게 해준다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `사용자 경험(UX) 개선`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위에서도 이야기 했지만 비동기 처리를 통해 시간이 걸리는 작업을 백그라운드에서 실행하여, 그 동안 사용자가 다른 인터랙션을 계속할 수 있도록 해준다.예를 들면 유튜브에서 동영상 로딩 중에도 사용자가 댓글을 읽거나 좋아요를 누를 수 있는 이유가 비동기 처리 덕분이다.
`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `자원 효율성`,
			},
			{
				type: ComponentType.NORMAL,
				value: `작업이 완료되기를 기다리는 동안 CPU와 메모리를 유휴 상태로 두지 않고, 다른 작업을 수행할 수 있어 자원을 효율적으로 활용할수 있다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `현실적인 애플리케이션 요구사항`,
			},
			{
				type: ComponentType.NORMAL,
				value: `현대 웹 애플리케이션은 다중 작업, 즉  데이터 로드, 이미지 렌더링, 사용자 입력 처리을 동시에 처리해야 하는데, 이를 비동기 방식으로만 구현할 수 있다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `가독성과 유지보수성 개선 aync/await`,
			},
			{
				type: ComponentType.NORMAL,
				value: `async/await는 ES2017(ECMAScript 2017)에서 도입된 비동기 작업 처리 문법으로, 비동기 코드를 보다 간결하고 직관적으로 작성할 수 있게 해준다. 기존의 콜백 함수를 연속적으로 호출하는 방식은 가독성이 떨어지고 로직 수정이 어려운 "콜백 지옥(callback hell)" 문제를 일으킬 수 있는데 async/await는 이러한 문제를 해결하며, 비동기 작업을 동기 코드처럼 사용할 수 있다.
`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `async 키워드로 정의된 함수는 항상 Promise 객체를 반환한다.

async 함수 내부에서 사용되며, 비동기 작업(Promise)이 완료될 때까지 기다린 후 결과를 반환한다.`,
			},
			{
				type: ComponentType.CODE,
				value: `// 콜백 방식
getData(function (data) {
  processData(data, function (result) {
    saveData(result, function (response) {
      console.log(response);
    });
  });
});

// async/await 방식
async function handleData() {
  const data = await getData();
  const result = await processData(data);
  const response = await saveData(result);
  console.log(response);
}`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>에러 처리</b>: try/catch 문을 사용해 비동기 작업 중 발생한 오류를 깔끔하게 처리할 수 있다.
`,
			},
			{
				type: ComponentType.CODE,
				value: `async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    console.log('사용자 데이터:', data);
  } catch (error) {
    console.error('에러 발생:', error);
  }
}

fetchUserData();`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위 코드에서 fetch는 비동기적으로 데이터를 가져오는 함수이다. await를 사용해 응답이 완료될 때까지 기다린 후, JSON 데이터를 파싱한다. 에러가 발생하면 catch 블록에서 처리된다. async/await 방식이 훨씬 읽기 쉽고 디버깅도 간편해진다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `Promise란`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Promise는 비동기 작업을 다루기 위한 객체로, 작업의 성공(resolve) 또는 실패(reject) 상태를 명확히 관리할 수 있고 비동기 작업의 흐름을 체계적으로 처리하는 데 유용합니다. `,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `구성`,
			},
			{
				type: ComponentType.NORMAL,
				value: `new Promise 생성자를 통해 정의되며, 내부에서 resolve 또는 reject 함수를 호출합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const myPromise = new Promise((resolve, reject) => {
  // 비동기 작업 시뮬레이션 (예: 2초 후 결과 반환)
  setTimeout(() => {
    const success = true; // 성공 여부를 시뮬레이션
    if (success) {
      resolve("작업이 성공적으로 완료되었습니다!"); // 성공 시 resolve 호출
    } else {
      reject("작업이 실패했습니다."); // 실패 시 reject 호출
    }
  }, 2000);
});

// Promise 사용
myPromise
  .then((result) => {
    console.log(result); // 2초 후: "작업이 성공적으로 완료되었습니다!"
  })
  .catch((error) => {
    console.error(error); // 실패 시 출력
  });`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `상태`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `pending : 비동기 작업이 아직 완료되지 않은 상태
				fulfilled : 비동기 작업이 성공적으로 완료된 상태
				reject : 비동기 작업이 실패한 상태`,
			},
			{
				type: ComponentType.CODE,
				value: `function simulateAsyncTask(delay, shouldSucceed) {
  return new Promise((resolve, reject) => {
    console.log("상태: pending - 작업이 시작되었으며 아직 완료되지 않았습니다.");

    setTimeout(() => {
      if (shouldSucceed) {
        resolve("작업이 성공적으로 완료되었습니다!");
        // 상태: fulfilled - 작업이 성공적으로 끝난 상태
      } else {
        reject(new Error("작업이 실패했습니다."));
        // 상태: rejected - 작업이 실패한 상태
      }
    }, delay);
  });
}

// 1. 성공 케이스 (fulfilled 상태로 전환)
const successPromise = simulateAsyncTask(2000, true);
console.log("Promise 생성 직후:", successPromise); // Promise { <pending> }

successPromise
  .then((result) => {
    console.log("상태: fulfilled -", result); // 2초 후: "작업이 성공적으로 완료되었습니다!"
    console.log("Promise 상태 확인:", successPromise); // Promise { "작업이 성공적으로 완료되었습니다!" }
  })
  .catch((error) => {
    console.error("에러:", error.message);
  });

// 2. 실패 케이스 (rejected 상태로 전환)
const failPromise = simulateAsyncTask(1500, false);
console.log("Promise 생성 직후:", failPromise); // Promise { <pending> }

failPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("상태: rejected -", error.message); // 1.5초 후: "작업이 실패했습니다."
    console.log("Promise 상태 확인:", failPromise); // Promise { <rejected> Error: 작업이 실패했습니다. }
  });`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `메서드`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `.then(): 성공 시 호출.
.catch(): 실패 시 호출.
`,
			},
			{
				type: ComponentType.CODE,
				value: `function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // 성공 여부 시뮬레이션
      if (success) {
        resolve('데이터 로드 성공');
      } else {
        reject('데이터 로드 실패');
      }
    }, 2000);
  });
}

fetchData()
  .then((result) => console.log(result)) // 2초 후: "데이터 로드 성공"
  .catch((error) => console.error(error)); // 실패시 호출`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Promise 객체는 비동기 작업의 성공/실패를 처리하며 .then()과 .catch()로 결과를 핸들링합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `async/await와 Promise의 차이`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `에러 처리`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>Promise </b>: .catch()로 실패를 처리.
<b>async/await</b>: try/catch로 에러를 핸들링.
`,
			},
			{
				type: ComponentType.CODE,
				value: `// Promise 방식
function getData() {
  fetch('https://api.example.com/data')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

// async/await 방식
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `확장성과 병렬 처리`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Promise.all을 사용하면 여러 비동기 작업을 병렬로 처리하고 결과를 한 번에 받을 수 있다. 여러 API에서 데이터를 동시에 가져와야 할 때, Promise.all을 사용해 모든 요청이 완료된 후 결과를 처리한다.`,
			},
			{
				type: ComponentType.CODE,
				value: `async function fetchMultipleData() {
  const [userData, postData] = await Promise.all([
    fetch('https://api.example.com/users'),
    fetch('https://api.example.com/posts'),
  ]);
  console.log(await userData.json(), await postData.json());
}`,
			},
		],
	},
	{
		id: 46,
		title: '[TECH-QA] 자바스크립트 호이스팅과 실행 컨텍스트',
		date: '2025-03-18 15:33:33',
		folder: Folder.JAVASCRIPT,
		tag: ['TECH-QA', 'JavaScript'],
		preview: `자바스크립트는 코드를 한줄 한줄 실행하기에 앞서 선언된 변수와 함수 클래스 등의 선언문을 찾아 런타임 이전에 한번 실행해 미리 메모리에 올려놓습니다. 이를 호이스팅이라고 합니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `자바스크립트의 호이스팅(hoisting)은 코드를 한 줄 한 줄 실행하기에 앞서, 선언된 변수, 함수, 클래스 등의 선언문을 코드의 최상단으로 끌어올려 런타임 이전에 한 번 실행해 메모리에 미리 올려놓는 과정을 의미합니다. 이는 자바스크립트 엔진이 코드를 실행하기 전에 실행 컨텍스트(Execution Context)를 생성하며 변수와 함수 선언을 처리하는 방식에서 비롯됩니다. 호이스팅 덕분에 개발자는 코드의 물리적 위치와 상관없이 변수나 함수를 사용할 수 있지만, 이로 인해 예상치 못한 동작이 발생할 수도 있어 주의가 필요합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `변수 호이스팅`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>var 키워드로 선언된 변수</b>는 호이스팅 과정에서 변수 선언과 동시에 undefined로 초기화됩니다. 즉, 변수가 선언된 줄 이전에 해당 변수를 호출하더라도 에러가 발생하지 않고 undefined 값을 반환합니다. 이는 var가 선언(Declaration)과 초기화(Initialization)가 동시에 이루어지기 때문입니다. </br></br>
				반면, <b>let과 const 키워드로 선언된 변수</b>는 호이스팅이 발생하기는 하지만, 선언(Declaration)과 초기화(Initialization)가 동시에 이루어지지 않습니다. let과 const로 선언된 변수는 실행 컨텍스트 내의 <b>선언적 환경 레코드(Declarative Environment Record)</b>에 등록됩니다. 이는 실행 컨텍스트의 생성 단계에서 변수는 선언 되었으나, 초기화는 실제 코드 실행 시점(변수가 선언된 시점)에서 초기화가 이루어 집니다. </br></br>

변수가 선언된 시점부터 실제 초기화가 이루어질 때까지의 구간을 <b>TDZ(Temporary Dead Zone, 임시 사각지대)</b>라고 부릅니다. 이 구간에서 변수를 참조하려고 하면 메모리가 아직 할당되지 않았기 때문에 ReferenceError가 발생합니다.

`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `함수 선언과 호이스팅`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>함수 선언(Function Declaration)</b>의 경우, 변수와는 다른 방식으로 호이스팅됩니다. 함수 선언은 선언과 초기화, 그리고 함수 본문 전체가 함께 메모리에 올라가기 때문에 함수가 선언된 줄 이전에 호출하더라도 정상적으로 동작합니다. 이는 함수 선언이 실행 컨텍스트의 생성 단계에서 완전히 처리되기 때문입니다. 단, 함수 표현식(Function Expression)으로 작성된 경우에는 다릅니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>함수 표현식(Function Expression)</b>은 변수에 함수를 할당하는 방식이므로, <u>사용된 변수 키워드(var, let, const)</u>에 따라 동작이 달라집니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `bar(); // TypeError: bar is not a function

var bar = function() {
  console.log("This is bar");
};`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위 예시에서 bar는 var로 선언되었으므로 undefined로 초기화된 상태에서 함수 호출이 시도되어 에러가 발생합니다. 이는 사용된 변수 선언 키워드(var, let, const)의 초기화 규칙을 따르기 때문입니다. 다만, 발생하는 에러의 종류는 키워드에 따라 달라집니다. `,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>객체 환경 레코드(Object Environment Record)</b>: 주로 전역 스코프나 with 문에서 사용되며, 변수와 함수가 객체의 속성처럼 저장됩니다.</br>
<b>선언적 환경 레코드(Declarative Environment Record)</b>: 함수 스코프나 블록 스코프에서 사용되며, let, const와 같은 변수가 저장됩니다.
`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `실행 컨텍스트(Execution Context)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `실행 컨텍스트(Execution Context)는 자바스크립트에서 코드가 실행되는 환경을 정의하고 관리하는 내부적인 데이터 구조입니다. 자바스크립트 엔진이 실행 컨텍스트를 생성한다는 것은 코드 실행을 준비하기 위해 필요한 모든 정보를 설정하는 과정을 의미이기도 합니다.
자바스크립트 엔진이 코드를 실행할 때, 해당 코드가 올바르게 동작할 수 있도록 변수, 함수, 스코프, this 바인딩 등을 추적하고 관리하기 위해 실행 컨텍스트를 생성합니다.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `쉽게 말해, 실행 컨텍스트는 <b>현재 실행 중인 코드와 그 코드를 실행하기 위한 환경 정보</b>를 담고 있는 <b>일종의 컨테이너</b>라고 볼 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `생성 단계(Creation Phase)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `실행 컨텍스트(Execution Context) 생성 단계(Creation Phase)에서는 코드가 실제로 실행되기 전에 실행 컨텍스트를 초기화합니다. 변수, 함수 선언, 함수의 인자 등이 컨텍스트에 저장됩니다. ES6 이후로는 환경 레코드(Environment Record)라는 개념으로 확장되었습니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `var로 선언된 변수는 undefined로 초기화됩니다.
let과 const는 선언만 되고 초기화는 나중에 이루어집니다(TDZ).
함수 선언은 전체가 메모리에 올라가 바로 사용 가능해집니다.
`,
			},
			{
				type: ComponentType.NORMAL,
				value: `현재 컨텍스트에서 접근 가능한 외부 변수들을 스코프 체인(Scope Chain)에 연결합니다. 이는 중첩된 함수에서 상위 스코프를 참조할 수 있게 합니다. 현재 실행 중인 코드에서 this가 가리킬 객체가 결정됩니다. 함수 호출 방식(예: 메서드 호출, 일반 함수 호출 등)에 따라 달라집니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `실행 단계(Execution Phase)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `실행 컨텍스트(Execution Context) 실행 단계(Execution Phase)에서는 생성 단계가 완료되면 코드가 한 줄씩 실행됩니다. 이 단계에서 변수에 값이 할당(Assignment)되고, 함수가 호출되며, 실제 로직이 수행됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `실행 컨텍스트의 종류`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>전역 실행 컨텍스트(Global Execution Context)</b>: 전역 스코프에서 실행되는 코드를 위한 컨텍스트입니다. 프로그램이 시작될 때 하나만 생성되며, 전역 객체(브라우저에서는 window, Node.js에서는 global)와 연결됩니다.

<b>함수 실행 컨텍스트(Function Execution Context)</b>: 함수가 호출될 때마다 생성됩니다. 각 함수 호출은 독립적인 실행 컨텍스트를 가지며, 함수가 끝나면 해당 컨텍스트는 스택에서 제거됩니다.

<b>Eval 실행 컨텍스트(Eval Execution Context)</b>: eval() 함수가 실행될 때 생성됩니다(드물게 사용됨).

`,
			},

			{
				type: ComponentType.KEYWORD,
				value: `컨텍스트(this)를 제어하는 함수 call(), 컨텍스트(this)를 제어하는 함수 apply(), 컨텍스트(this)를 제어하는 함수 bind() `,
			},
		],
	},
	{
		id: 47,
		title: '[TECH-QA] 자바스크립트 클로저',
		date: '2025-03-20 10:51:33',
		folder: Folder.JAVASCRIPT,
		tag: ['TECH-QA', 'JavaScript'],
		preview: `함수가 선언될 때 자동으로 생성되는 렉시컬 환경에 대한 설명입니다. 렉시컬 환경은 스코프 체인을 형성하고 스코프 체인은 함수가 선언될 때의 모든 변수와 함수를 포함하는 렉시컬 스코프를 형성 합니다. 외부함수가 실행 되고 반환된 후에도 외부함수의 범위 내의 내부 함수에 체이닝을 할 수 있는 함수입니다. 정보를 은닉하기 위해서 주로 사용합니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `함수가 선언될 때 자동으로 생성되는 렉시컬 환경에 대한 설명이다.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `클로저는 함수가 자신이 <b>선언된 환경을 기억</b>하고, 그 환경에 있는 <b>변수나 데이터를 계속 사용</b>할 수 있게 해주는 메커니즘이다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `조금 더 풀어서 설명해보면
자바스크립트에서 함수는 단순히 코드 덩어리가 아니라, 그 함수가 만들어질 때 주변 환경(스코프)이 만들어지고 이 주변 환경을 "렉시컬 스코프(lexical scope)"라고 부른다. 함수가 어디서 선언되었는지에 따라 접근할 수 있는 변수들이 결정되는데 </br>클로저는 바로 이 렉시컬 스코프를 활용해서, <u>외부 함수가 실행을 마치고 사라진 뒤에도 내부 함수가 그 외부 함수의 변수에 접근할 수 있게 만드는 것이다.</u>
예를 들어서, 클로저는 아래와 같이 작동한다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `외부함수 내부에 함수가 존재하는 예제`,
			},
			{
				type: ComponentType.CODE,
				value: `function greetMaker(name) {

  let greeting = "안녕, " + name + "!"; // 외부 함수의 변수
  
  function sayHello() {
    console.log(greeting); // 내부 함수에서 외부 변수 사용
  }

  return sayHello; // 내부 함수 반환
}

const greetToMin = greetMaker("민수"); // "안녕, 민수!"가 저장됨
greetToMin(); // "안녕, 민수!" 출력`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위코드 에서 greetMaker가 실행을 끝내면 일반적으로 greeting 변수는 사라질 것 같지만, 클로저 덕분에 sayHello가 그 변수를 계속 기억하고 있다. 그래서 greetToMin()을 호출하면 "안녕, 민수!"가 출력되는 것이다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `클로저의 멋진 점은 이런 특성을 활용해서 <b>데이터를 보호</b>하거나, <b>특정 상태를 유지</b>하는 데 사용할 수 있다는 점이 있다..`,
			},
			{
				type: ComponentType.CODE,
				value: `function createCounter() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`,
			},
			{
				type: ComponentType.NORMAL,
				value: `여기서 count는 createCounter 함수 밖에서는 접근할 수 없지만, <b>반환된 함수가 클로저로 count를 기억하고 있어서</b> 값을 계속 증가시킬 수 있죠. 이런 식으로 클로저는 개인적인 공간을 만들어주는 역할을 한다.
즉, 클로저는 함수와 그 함수가 접근할 수 있는 환경이 함께 묶여서, 유연하면서도 강력한 코드를 작성할 수 있게 해주는 자바스크립트의 핵심 기능 중 하나이다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `실행 컨텍스트와 렉시컬 스코프`,
			},
			{
				type: ComponentType.NORMAL,
				value: `먼저, 실행 컨텍스트는 자바스크립트 코드가 실행될 때 만들어지는 환경이다. 이 환경에는`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `변수 객체(variable object) 
				스코프 체인(scope chain)
				그리고 this 값`,
			},
			{
				type: ComponentType.NORMAL,
				value: `같은 정보가 포함돼 있다. 함수가 호출될 때마다 새로운 실행 컨텍스트가 생성되는데, 이건 스택 형태로 쌓여서 현재 실행 중인 코드와 그 주변 환경을 관리한다.
여기서 중요한 건 렉시컬 스코프인데 렉시컬 스코프는 함수가 어디서 선언되었는지에 따라 그 함수가 접근할 수 있는 변수의 범위가 정해진다. 즉, 함수가 작성된 위치에 따라 "정적으로" 스코프가 결정된다는 뜻이다. 이 렉시컬 스코프는 실행 컨텍스트가 만들어질 때 함수의 환경을 기억하는 데 핵심적인 역할을 한다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `스코프와 스코프 체인`,
			},
			{
				type: ComponentType.NORMAL,
				value: `스코프는 어떤 변수에 접근할 수 있는 유효범위로 코드 어디서든 참조 할 수 있는 전역스코프와 함수자신과 하위함수에서만 참조할 수 있는 지역스코프가 있다. 함수 안에서 선언된 변수는 해당 함수에서만 사용할수 있으며 전역변수에 영향을 끼칠 수 없다. 
				위에서 말한 스코프 체인은 함수가 선언된 렉시컬 스코프를 기반으로, 변수에 접근할 때 따라가는 일종의 "탐색 경로"이다. 자바스크립트는 내부 함수에서 참조할 변수가 현재 스코프에 없으면, 그 상위 스코프로 범위를 넓혀 가며 찾아 올라가는데 실행 컨텍스트 안에 저장된 스코프 체인이 바로 이 과정을 가능하게 해줍니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `클로저의 탄생`,
			},
			{
				type: ComponentType.NORMAL,
				value: `클로저는 내부 함수가 외부 함수의 변수에 접근하는 상황에서 나타난다. 외부 함수가 실행을 마치고 실행 컨텍스트가 스택에서 제거되더라도, <b>내부 함수는 외부 함수의 렉시컬 환경을 참조할 수 있다.</b> 
				
				이게 가능한 이유는 내부 함수가 스코프 체인을 통해 외부 함수의 변수가 저장된 환경을 계속 "기억"하고 있기 때문이고 자바스크립트 엔진은 변수나 함수가 어떤 스코프에서 여전히 참조되고 있는 경우, 그 데이터를 메모리에서 제거하지 않고 유지하도록 설계되어 있다.
`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `가비지 컬렉션과 참조`,
			},
			{
				type: ComponentType.NORMAL,
				value: `자바스크립트 엔진(예: V8 엔진 같은 경우)에는 가비지 컬렉터(Garbage Collector, GC)가 있어서 더 이상 사용되지 않는 메모리를 정리해준다. 가비지 컬렉터는 기본적으로 "도달 가능성(reachability)"이라는 개념을 기준으로 동작한다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `어떤 데이터가 코드에서 더 이상 도달(참조)될 수 없으면, 그 데이터는 메모리에서 해제(garbage collected)될 대상이 된다.
반대로, 어떤 데이터가 여전히 참조되고 있으면 메모리에 유지된다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `클로저의 경우, 내부 함수가 외부 함수의 렉시컬 환경을 스코프 체인을 통해 참조하고 있으면, 그 렉시컬 환경과 그 안에 있는 변수들은 "도달 가능"한 상태로 간주된다. 그래서 가비지 컬렉터가 이 메모리를 정리하지 않고 남겨둔다.`,
			},
			{
				type: ComponentType.CODE,
				value: `function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  return inner;
}

const closure = outer();
closure(); // 10 출력`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `여기서 outer가 끝난 후에도 closure 변수가 inner 함수를 참조하고 있다.
inner는 스코프 체인을 통해 outer의 렉시컬 환경(그 안에 x = 10 포함)을 참조하고 있다.
자바스크립트 엔진은 closure가 살아있는 한, inner가 참조하는 x와 그 렉시컬 환경이 도달 가능하다고 판단해서 메모리에서 제거하지 않는다.

`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `렉시컬 환경`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `렉시컬 환경의 구성 요소`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `환경 레코드(Environment Record): 변수, 함수 선언, 매개변수 등이 저장됨.
외부 렉시컬 환경 참조(Outer Reference): 상위 스코프의 렉시컬 환경을 가리킴.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `스코프 체인(Scope Chain)과 렉시컬 환경`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `스코프 체인은 렉시컬 환경이 직접 가지고 있는 건 아니고 렉시컬 환경의 "외부 참조"를 통해 스코프 체인이 만들어진다.

스코프 체인은 실행 컨텍스트가 실행될 때, 현재 렉시컬 환경과 그 외부 참조를 연결하면서 형성되는 동적인 체인이라고 볼 수 있다. 즉, 렉시컬 환경은 스코프 체인 자체를 "가지고 있다"고 표현하기보다는 "스코프 체인을 가능하게 하는 구조"이다.
`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `렉시컬 스코프(Lexical Scope)와 렉시컬 환경`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `렉시컬 환경은 함수가 선언된 위치에 따라 정적으로 결정되며 함수가 선언될 때 그 주변 환경을 캡처해서 렉시컬 스코프를 만든다.
`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `this 값과 실행컨텍스트`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `실행 컨텍스트는 렉시컬 환경(Lexical Environment), 변수 객체(Variable Object), 그리고 this 바인딩을 포함하는 렉시컬 환경보다 더 큰 구조이다. 렉시컬 환경은 그 안에서 변수와 스코프만 다루고, this는 함수가 "어떻게 호출되었는지"에 따라 동적으로 결정 한다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `예제로 확인`,
			},
			{
				type: ComponentType.CODE,
				value: `function outer() {
  let x = 10;
  function inner() {
    console.log(x, this);
  }
  return inner;
}

const closure = outer.call({ name: "test" });
closure(); // 10, { name: "test" } 가져오지만, 이건 렉시컬 환경이 this를 포함해서가 아니라 화살표 함수 자체의 특성 때문이다.
`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>렉시컬 환경</b>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `outer의 렉시컬 환경: { x: 10, inner: 함수 }, 외부 참조는 전역.
inner의 렉시컬 환경: 로컬 변수 없음, 외부 참조는 outer의 렉시컬 환경.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>스코프 체인</b>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `inner 실행 시 inner → outer → 전역으로 연결.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>this</b>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `outer.call로 { name: "test" }가 바인딩됨. 이건 렉시컬 환경이 아니라 실행 컨텍스트에서 결정.`,
			},
		],
	},
	{
		id: 48,
		title: `[English] I'm sure 패턴 1`,
		date: '2025-03-21 12:21:33',
		folder: Folder.ENGLISH,
		tag: ['English'],
		preview: `"I'm sure you did a good job. 난 네가 잘했을 거라고 확신해"`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `case 1`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>I'm sure you did a good job.</b></br>
				 "난 네가 잘했을 거라고 확신해" 
				`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `문장 분석`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `I'm sure → 나는 확신해
you did → 네가 ~을 했어 (do의 과거형)
a good job → 좋은 일, 잘한 일
`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `그런데 good 앞에 왜 a가 붙을까?`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `"job"은 <b>가산명사</b>라서 <b>단수</b>로 쓰일 때는 반드시 <b>관사(a/an/the)</b>가 필요합니다.</br></br>

✅ "a good job" (O) → "좋은 하나의 일"</br>
❌ "good job" (X) → 문법적으로 틀림 (명사 앞에 관사가 없어서)</br></br>

✅ "a nice day" → (하루라는 명사는 가산명사)</br>
"Have a nice day!" (좋은 하루 보내!)</br></br>
✅ "a big mistake" → (실수도 가산명사)</br>
"That was a big mistake." (그건 큰 실수였어.)`,
				promptTypeProps: 'TIP',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `case 2`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>I'm sure things will work out.</b></br>
				 "나는 확실해, 모든 일이 잘 풀릴 거야."
				`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `문장 분석`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `I'm sure → "나는 확신해" 또는 "나는 확실해"
things → "일" 또는 "상황" (여기서는 상황을 의미)
will work out → "잘 해결될 것이다" / "잘 풀릴 것이다"
`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `case 3`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>I'm certain that learning English is a good thing for my future.</b></br>
				"나는 영어를 배우는 것이 내 미래에 좋은 일이라고 확신해."
				`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `문장 분석`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `I'm certain that~ → "~을 확신해" (확신의 정도가 높음, "I'm sure"보다 더 강한 확신을 나타냄)
learning English → "영어를 배우는 것" (동명사 사용)
is a good thing → "좋은 일이다"
for my future → "내 미래를 위해"
`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `그런데 동명사(Gerund)란 무엇일까?`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `동명사는 동사의 원형에 -ing를 붙여서 명사처럼 사용하는 형태입니다. </br>
즉, 동사의 성질(행동)을 가지면서도 문장에서 <b>주어, 목적어, 보어</b> 역할을 합니다.`,
				promptTypeProps: 'TIP',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `동명사의 주어 역할`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Swimming is good for health. → <u>수영하는 것</u>은 건강에 좋다. 
Learning English is fun. → <u>영어를 배우는 것</u>은 재미있다.
`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `동명사의 목적어 역할`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `I enjoy reading books. → 나는 <u>책 읽는 것</u>을 즐긴다.
She finished writing the report. → 그녀는 <u>보고서를 작성하는 것</u>을 끝냈다.
`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `동명사를 <b>목적어</b>로 취하는 대표적인 <b>동사</b></br>
 enjoy, finish, avoid, consider, mind, suggest, recommend 등`,
				promptTypeProps: 'TIP',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `동명사의 보어 역할`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `My favorite hobby is painting. → 내가 가장 좋아하는 취미는 그림 그리기이다.
The hardest part of the job is dealing with customers. → 그 일에서 가장 어려운 부분은 고객을 상대하는 것이다.
`,
			},
		],
	},
	{
		id: 49,
		title: `[생셩형 AI] midjourney - 스타일 코드`,
		date: '2025-03-23 15:35:33',
		folder: Folder.GENERATIVEAI,
		tag: ['midjourney'],
		preview: `미드저니(Midjourney)의 퍼스널라이즈(Personalize) 탭에서 프로파일(Profile)과 무드보드(Moodboard)는 모두 사용자의 취향을 반영해 AI 이미지 생성을 개인화하는 도구지만, 그 목적과 사용 방식에서 차이가 있습니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `미드저니(Midjourney)의 퍼스널라이즈(Personalize) 탭에서 프로파일(Profile)과 무드보드(Moodboard)는 모두 사용자의 취향을 반영해 AI 이미지 생성을 개인화하는 도구지만, 그 목적과 사용 방식에서 차이가 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `프로파일 (Profile)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `프로파일은 사용자의 미적 취향을 학습한 개인화된 스타일 설정입니다. 미드저니가 <b>사용자가 선호하는 시각적 스타일을 파악</b>해 이미지 생성 시 이를 반영합니다. 여러 프로젝트에 걸쳐 <b>"나만의 기본 스타일"</b>을 적용하고 싶을 때 유용합니다. 예를 들어, "나는 항상 선명하고 화려한 색감을 좋아해"라는 취향을 반영하고 싶다면 프로파일을 사용하세요.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `결과적으로 추상적이고 일반적인 취향(예: 밝은 색상, 강한 선, 사실적인 묘사 등)을 반영한 결과물이 생성됩니다.`,
				promptTypeProps: 'TIP',
			},
			{
				type: ComponentType.STRINGLIST,
				value: `사용자가 미드저니 웹사이트에서 이미지 쌍을 비교하며 선호하는 이미지를 선택(랭킹)하면, AI가 이를 기반으로 사용자의 스타일을 학습합니다.
최소 <b>40번의 랭킹</b>을 해야 <b>프로파일이 활성화</b>
약 <b>200번</b> 정도면 스타일이 <b>안정적</b>으로 자리잡고
<b>2,000번</b>에 가까워질수록 <b>매우 정교</b>해집니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `a futuristic city --p [프로파일 코드]`,
			},
			{
				type: ComponentType.NORMAL,
				value: `프로파일 코드에 따라 사용자의 취향에 맞춘 미래 도시 이미지가 생성됩니다. 사용자의 전반적인 미적 성향을 반영하므로, 다양한 프롬프트에 걸쳐 일관된 스타일을 유지할 수 있습니다. `,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `무드보드 (Moodboard)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `사용자가 직접 업로드하거나 선택한 이미지를 기반으로 <b>특정 스타일이나 분위기를 정의</b>하는 도구입니다. 프로젝트별로 특화된 시각적 방향성을 설정하는 데 유용하고 <b>프로젝트별 특정 테마나 컨셉</b>에 맞춘 결과물이 필요할 때 적합합니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `사용자가 <b> 1장 이상의 이미지 업로드</b>하여 구체적인 이미지에서 영감을 받아 스타일을 학습하므로, 결과물이 <b>더 직접적</b>이고 프로젝트 맞춤형입니다.
예를 들어, 빈티지 포스터 이미지를 업로드하면 그 스타일에 맞춘 결과물이 나옵니다.
`,
			},
			{
				type: ComponentType.CODE,
				value: `a cozy cabin in the woods --p [무드보드 코드]`,
			},
			{
				type: ComponentType.NORMAL,
				value: `무드보드에 포함된 이미지의 분위기와 스타일을 반영한 아늑한 오두막 이미지가 생성됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `혼합 사용`,
			},
			{
				type: ComponentType.CODE,
				value: `a cyberpunk street --p [프로파일 코드] --p [무드보드 코드]`,
			},
			{
				type: ComponentType.NORMAL,
				value: `사용자의 기본 취향과 무드보드의 구체적 스타일이 결합된 이미지가 생성됩니다.`,
			},
		],
	},
	{
		id: 50,
		title: `[생셩형 AI] midjourney - 필수 명령어`,
		date: '2025-03-24 11:02:33',
		folder: Folder.GENERATIVEAI,
		tag: ['midjourney'],
		preview: `미드저니(Midjourney)는 AI를 활용해 텍스트 프롬프트로 이미지를 생성하는 도구로, 디스코드에서 작동합니다. 아래는 미드저니에서 가장 필수적이고 자주 사용되는 명령어와 그 설명입니다. 이 명령어들은 초보자부터 고급 사용자까지 유용하게 활용할 수 있습니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `--ar (Aspect Ratio)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `생성되는 이미지의 가로세로 비율을 설정합니다. 기본값은 1:1(정사각형)입니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `a futuristic cityscape --ar 16:9`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `16:9 비율의 가로로 긴 미래 도시 이미지를 생성. 
				--ar 4:3, --ar 2:3 등 원하는 비율로 조정 가능`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `--v (Version)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `미드저니의 모델 버전을 지정합니다. 최신 버전일수록 품질이 향상됩니다(2025년 3월 기준, V6가 최신).`,
			},
			{
				type: ComponentType.CODE,
				value: `a medieval castle --v 6`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `V6 모델로 더 정교한 중세 성 이미지를 생성.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `버전을 지정하지 않으면 기본 설정이 적용`,
				promptTypeProps: 'TIP',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `--q (Quality)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이미지의 품질을 조정합니다. 값은 0.25, 0.5, 1, 2로 설정 가능하며, 숫자가 높을수록 더 높은 해상도와 디테일을 제공합니다(단, 생성 시간이 길어질 수 있음).`,
			},
			{
				type: ComponentType.CODE,
				value: `a detailed dragon --q 2`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `고품질의 디테일한 용 이미지 생성.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `--no`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이미지에서 제외하고 싶은 요소를 지정합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `a forest landscape --no people`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `사람 없는 숲 풍경을 생성.
				여러 요소를 제외하려면 --no trees, water처럼 쉼표로 구분하세요.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `만약 <b>변화를 작게</b> 하고 싶다면 --iw를 2 이상으로 올리거나(최대 2), <b>"no changes"</b>를 더 강조하세요.
				변화 최소화: 프롬프트에 "minimal edits", "preserve original details" 같은 표현을 추가하면 원본 손실을 더 줄일 수 있습니다.`,
				promptTypeProps: 'TIP',
			},
		],
	},
	{
		id: 51,
		title: `[TECH-QA] 이벤트 버블링(Event Bubbling)과 이벤트 캡쳐링(Event Capturing)`,
		date: '2025-03-24 15:02:33',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript', 'TECH-QA'],
		preview: `이벤트 버블링(Event Bubbling)은 HTML에서 이벤트가 발생했을 때, 해당 이벤트가 발생한 요소에서 시작하여 상위 요소로 점진적으로 전파되는 현상을 의미합니다. 이는 DOM(Document Object Model)의 계층 구조를 따라 이벤트가 처리되는 기본 동작 방식입니다. `,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `이벤트 버블링(Event Bubbling)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이벤트 버블링(Event Bubbling)은 HTML에서 이벤트가 발생했을 때, 해당 이벤트가 발생한 요소에서 시작하여 상위 요소로 점진적으로 전파되는 현상을 의미합니다. 이는 DOM(Document Object Model)의 계층 구조를 따라 이벤트가 처리되는 기본 동작 방식입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `이벤트 버블링의 동작 원리`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이벤트 버블링은 사용자가 특정 요소에서 이벤트를 발생시켰을 때(예: 버튼 클릭), <b>해당 요소에서 이벤트가 처리된 후 부모 요소로 이벤트가 전달되는 과정</b>입니다. 예를 들어, <div> 안에 <button>이 있고 버튼을 클릭하면, 먼저 <button>에서 이벤트가 처리되고, 그 다음 <div>로 이벤트가 전파됩니다. 이 과정은 DOM 트리의 최상위 요소(보통 document나 window)에 도달할 때까지 계속됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `이벤트 위임(Event Delegation)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이벤트 버블링을 활용하면 이벤트 위임을 구현할 수 있습니다. 이벤트 위임은 개별 하위 요소마다 이벤트 핸들러를 등록하는 대신, <b>공통 부모 요소에 하나의 핸들러를 등록하여 하위 요소에서 발생한 이벤트를 처리하는 방식</b>입니다. 이는 코드 효율성을 높이고, 동적으로 추가된 요소에도 이벤트 처리를 적용할 수 있게 해줍니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `이벤트 전파 방지`,
			},
			{
				type: ComponentType.NORMAL,
				value: `때로는 이벤트가 <b>상위 요소로 전파되는 것을 막고 싶을 때</b>가 있습니다. 이를 위해 이벤트 객체의 stopPropagation() 메서드를 사용하면 이벤트가 더 이상 버블링 또는 캡쳐링되지 않도록 중지할 수 있습니다. 단, stopPropagation()은 이벤트 전파만 막을 뿐, 기본 동작(예: 링크 클릭 시 페이지 이동)을 막지는 않습니다. 기본 동작을 막으려면 preventDefault()를 추가로 사용해야 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `HTML 구조`,
			},
			{
				type: ComponentType.CODE,
				value: `<div id="parent">
  <button id="child1">버튼 1</button>
  <button id="child2">버튼 2</button>
</div>`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `JavaScript 코드`,
			},
			{
				type: ComponentType.CODE,
				value: `// 부모 요소에 이벤트 핸들러 등록 (이벤트 위임)
document.getElementById('parent').addEventListener('click', function(event) {
  console.log('부모 요소에서 이벤트 감지:', event.target.id);
  
  // 특정 조건에서 이벤트 전파 중지
  if (event.target.id === 'child1') {
    console.log('child1 클릭 시 전파 중지');
    event.stopPropagation();
  }
});

// 개별 요소에 핸들러 추가 (비교용)
document.getElementById('child1').addEventListener('click', function() {
  console.log('child1에서 직접 처리');
});`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `버블링 확인`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `"버튼 1"(child1)을 클릭하면 먼저 child1에 등록된 핸들러가 실행되어 "child1에서 직접 처리"가 출력됩니다.
이후 이벤트가 부모(parent)로 버블링되어 "부모 요소에서 이벤트 감지: child1"이 출력됩니다.
추가로 stopPropagation()이 호출되므로 더 이상 상위로 전파되지 않습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `이벤트 위임 확인`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `"버튼 2"(child2)를 클릭하면 child2에는 개별 핸들러가 없지만, 부모 요소에 등록된 핸들러가 이를 감지해 "부모 요소에서 이벤트 감지: child2"를 출력합니다.
이를 통해 개별 버튼마다 핸들러를 등록하지 않아도 부모에서 모든 클릭 이벤트를 처리할 수 있음을 알 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `실제 활용 예시`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `예를 들어, 동적으로 버튼이 추가되는 리스트가 있다고 가정할 때, 각 버튼에 핸들러를 추가하는 대신 부모 <ul> 요소에 핸들러를 등록하면 새로 추가된 버튼도 자동으로 처리됩니다.`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `이벤트 캡쳐링(Event Capturing)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이벤트 캡쳐링(Event Capturing)은 이벤트가 최상위 요소에서 시작해 하위 요소로 내려가는 방식으로, 버블링과는 반대 방향으로 작동합니다. HTML에서는 기본적으로 버블링이 주로 사용되지만, 필요에 따라 캡쳐링도 활용할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `캡쳐링 사용 예제`,
			},
			{
				type: ComponentType.CODE,
				value: `document.getElementById('parent').addEventListener('click', function() {
  console.log('캡쳐링 단계에서 감지');
}, { capture: true }); // 캡쳐링 모드 활성화`,
			},
			{
				type: ComponentType.NORMAL,
				value: `{ capture: true } 옵션을 추가하면 이벤트가 캡쳐링 단계에서 처리됩니다. 이 경우, 부모에서 먼저 이벤트가 감지된 후 자식으로 전달됩니다.`,
			},
		],
	},
	{
		id: 52,
		title: `[TECH-QA] Flex와 Grid 비교`,
		date: '2025-03-25 15:15:33',
		folder: Folder.HTMLCSS,
		tag: ['JavaScript', 'TECH-QA'],
		preview: `flex는 주로 단일 축(1차원)을 기준으로 레이아웃을 구성하는 데 사용됩니다. 이는 수평(가로) 또는 수직(세로) 방향 중 하나를 중심으로 아이템을 정렬하며, 유연한 크기 조정과 간단한 배치에 적합합니다. `,

		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `Flex (Flexbox)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `단일 방향(행 또는 열)으로 아이템을 배치.
아이템의 크기가 동적으로 변할 수 있어 반응형 디자인에 유리.
간단한 정렬과 공간 분배에 강력.
`,
			},
			{
				type: ComponentType.CODE,
				value: `<!DOCTYPE html>
<html>
<head>
<style>
  .flex-container {
    display: flex;
    justify-content: space-between; /* 아이템 간 간격을 균등하게 분배 */
    background-color: #f0f0f0;
  }
  .flex-item {
    background-color: #4CAF50;
    color: white;
    padding: 20px;
    margin: 10px;
    text-align: center;
  }
</style>
</head>
<body>
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item">3</div>
  </div>
</body>
</html>


`,
				codePreviewProps: true,
			},

			{
				type: ComponentType.NORMAL,
				value: `위 예제에서 .flex-container는 display: flex를 통해 가로 방향으로 아이템을 배치합니다. justify-content: space-between 속성은 아이템 사이의 공간을 균등하게 나누어 배치합니다. 결과적으로 세 개의 박스가 수평으로 나란히 정렬됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `Grid`,
			},
			{
				type: ComponentType.NORMAL,
				value: `grid는 2차원 그리드 시스템을 구성하는 데 사용되며, 수평(가로)과 수직(세로) 방향 모두를 고려한 레이아웃을 설계할 수 있습니다. 각 셀의 크기를 미리 정의하여 일관된 구조를 유지하며, 복잡한 레이아웃에 적합합니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `행(row)과 열(column)을 모두 정의 가능.
셀 크기를 고정하거나 비율로 설정하여 일정한 구조 유지.
레이아웃 변화가 적은 정적인 디자인에 적합.
`,
			},
			{
				type: ComponentType.CODE,
				value: `<!DOCTYPE html>
<html>
<head>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 100px 100px 100px; /* 3열, 각 100px */
      grid-template-rows: 80px 80px; /* 2행, 각 80px */
      gap: 10px; /* 셀 간 간격 */
      background-color: #f0f0f0;
    }
    .grid-item {
      background-color: #2196F3;
      color: white;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
  </div>
</body>
</html>
`,
				codePreviewProps: true,
			},

			{
				type: ComponentType.NORMAL,
				value: `위 예제에서는 grid-container가 2x2 그리드 구조를 형성합니다. grid-template-columns: 1fr 1fr로 두 개의 열을 동일한 비율로 나누고, grid-template-rows로 행 높이를 100px로 고정했습니다. gap 속성으로 셀 사이에 10px 간격을 추가했습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `Grid는 반응형에 적합한가?`,
			},
			{
				type: ComponentType.NORMAL,
				value: `grid는 반응형 디자인에 매우 강력한 도구입니다. 미리 정의된 구조를 유지한다는 점은 고정된 레이아웃에 유리하다는 의미일 뿐, 반응형으로 동적으로 조정하는 데도 탁월합니다. CSS Grid는 다음과 같은 기능을 통해 반응형을 지원합니다`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>fr 단위</b>: 유연한 비율로 열/행 크기를 정의.
<b>minmax() 함수</b>: 최소/최대 크기를 설정해 콘텐츠에 따라 적응.
<b>auto-fit / auto-fill</b>: 열 개수를 화면 크기에 따라 자동으로 조정.
<b>미디어 쿼리</b>: 화면 크기에 따라 그리드 구조를 변경.
`,
			},
			{
				type: ComponentType.CODE,
				value: `<!DOCTYPE html>
<html>
<head>
<style>
  .grid-container2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
  }

.item {
  background-color: lightgreen;
  padding: 20px;
  text-align: center;
}

@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: 1fr; /* 작은 화면에서는 1열로 */
  }
}
</style>
</head>
<body>
 <div class="grid-container2">
  <div class="item">아이템 1</div>
  <div class="item">아이템 2</div>
  <div class="item">아이템 3</div>
  <div class="item">아이템 4</div>
  <div class="item">아이템 5</div>
  <div class="item">아이템 6</div>
 </div>
</body>
</html>
`,
				codePreviewProps: true,
			},

			{
				type: ComponentType.STRINGLIST,
				value: `<b>auto-fit</b>: 사용 가능한 공간에 따라 열을 자동으로 채움.
<b>minmax(150px, 1fr)</b>: 각 열의 최소 너비는 150px, 최대는 남은 공간을 비율로 나눔.
<b>결과</b>: 화면이 넓으면 여러 열로 배치되고, 좁아지면 열이 줄어듦.
화면 너비가 600px 이하일 때 1열로 강제 전환.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `큰 화면에서는 아이템이 여러 열로 나열되고, 작은 화면에서는 자동으로 한 열로 정렬되어 반응형 레이아웃이 구현됨.`,
			},
		],
	},
	{
		id: 53,
		title: `[TECH-QA] 자바스크립트에서 this와 명시적 바인딩 (call, apply, bind)`,
		date: '2025-03-26 11:26:33',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript', 'TECH-QA'],
		preview: `자바스크립트에서 this의 값은 함수가 호출될 때 결정되며, 호출 방식에 따라 다르게 작동합니다. 아래에서 주요 경우와 예제를 통해 설명하겠습니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `자바스크립트에서 this의 값은 함수가 호출될 때 결정되며, 호출 방식에 따라 다르게 작동합니다. 아래에서 주요 경우와 예제를 통해 설명하겠습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `전역 컨텍스트에서의 this`,
			},
			{
				type: ComponentType.NORMAL,
				value: `함수가 전역 스코프에서 호출될 때, this는 전역 객체를 가리킵니다. 브라우저에서는 window, Node.js에서는 global입니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `console.log(this); // 브라우저에서 실행 시: Window 객체

function sayHello() {
  console.log(this);
}
sayHello(); // Window 객체 (전역 호출)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `"use strict" 모드에서는 전역 호출 시 this가 undefined로 설정됩니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `"use strict";

function sayThis() {
  console.log(this);
}

sayThis(); // undefined`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `객체 메서드에서의 this`,
			},
			{
				type: ComponentType.NORMAL,
				value: `호출되는 함수가 객체의 메서드일때, this는 해당 객체를 가리킵니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const person = {
  name: "Alice",
  greet: function() {
    console.log(this.name);
  }
};

person.greet(); // "Alice" (this는 person 객체를 가리킴)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `하지만 함수를 객체에서 분리해 호출하면 this가 객체를 잃어버립니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const person = {
  name: "Hannah",
  sayName: function() {
    console.log(this.name);
  }
};

const func = person.sayName;
func(); // undefined (this는 전역 객체 Window를 가리킴)`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `내부 함수에서의 this 문제`,
			},
			{
				type: ComponentType.NORMAL,
				value: `일반 함수 안에 또 다른 일반 함수가 있을 경우, 내부 함수의 this는 외부 함수의 this를 자동으로 상속하지 않습니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const obj = {
  name: "Kate",
  outer: function() {
    console.log(this.name); //Kate
    function inner() {
      console.log(this.name); //undefined (this는 Window)
    }
    inner();
  }
};

obj.outer();
// 출력:
// Outer this: Kate
// Inner this: undefined (this는 Window)`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `해결방법`,
			},
			{
				type: ComponentType.NORMAL,
				value: `객체 메서드에서의 this를 변수에 저장하여 사용하는 방법`,
			},
			{
				type: ComponentType.CODE,
				value: `const obj = {
  name: "Kate",
  outer: function() {
    const self = this;
    function inner() {
      console.log(self.name); // Inner this: Kate
    }
    inner();
  }
};

obj.outer(); // Inner this: Kate`,
			},
			{
				type: ComponentType.NORMAL,
				value: `객체 메서드에서의 this를 사용할수 있는 bind() 사용법`,
			},
			{
				type: ComponentType.CODE,
				value: `const obj = {
  name: "Kate",
  outer: function() {
    const inner = function() {
      console.log(this.name);
    }.bind(this);
    inner();
  }
};

obj.outer(); // Inner this: Kate`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `생성자 함수에서의 this`,
			},
			{
				type: ComponentType.NORMAL,
				value: `new 키워드로 생성자 함수를 호출하면, this는 새로 생성된 객체를 가리킵니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `function Car(model) {
  this.model = model;
}

const myCar = new Car("Tesla");

console.log(myCar.model); // "Tesla"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `명시적 바인딩 (call, apply, bind)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `call, apply, bind를 사용하면 this를 명시적으로 설정할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `call 예제`,
			},
			{
				type: ComponentType.CODE,
				value: `function introduce(age) {
  console.log(this.name, age);
}

const user = { name: "Bob" };

introduce.call(user, 25); // "Bob, 25"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `apply 예제`,
			},
			{
				type: ComponentType.CODE,
				value: `function introduce(age) {
  console.log(this.name, age);
}

const user = { name: "Bob" };

introduce.apply(user, [30]); // "Bob 30"`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `호출 시점에 <b>this를 동적</b>으로 결정해야 하는 상황에서는 <b>call</b>이나 <b>apply</b>가 매우 유용합니다.`,
				promptTypeProps: 'TIP',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `bind 예제`,
			},
			{
				type: ComponentType.CODE,
				value: `function introduce(age) {
  console.log(this.name, age);
}

const user = { name: "Bob" };

const boundIntroduce = introduce.bind(user);

boundIntroduce(35); // "Bob 35"`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `화살표 함수에서의 this(가장 간단한 해결책)`,
			},
			{
				type: ComponentType.CODE,
				value: `const obj = {
  name: "Charlie",
  sayName: function() {
    const arrowFunc = () => console.log(this.name);
    arrowFunc();
  }
};

obj.sayName(); // "Charlie" (this는 obj를 가리킴)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `화살표 함수는 this를 lexical scope(정적 범위)에서 가져옵니다. 즉, 함수가 정의된 위치의 상위 스코프에서 this를 상속받습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `일반 함수(외부 스코프의 this를 저장) `,
			},
			{
				type: ComponentType.CODE,
				value: `const obj2 = {
  name: "David",
  sayName: function() {
    const self = this;
    const normalFunc = function() {
      console.log(self.name);
    };
    normalFunc();
  }
};

obj2.sayName(); // "David"`,
			},
			{
				type: ComponentType.NORMAL,
				value: `self 변수에 외부 스코프의 this를 저장하여 내부 함수에서 사용합니다.

이 세 가지 방법 모두 동일한 결과를 제공하며, "David"를 출력합니다. 가장 현대적이고 간결한 접근법은 첫 번째 화살표 함수 방법을 사용하는 것입니다. 상황에 따라 적절한 방법을 선택할 수 있습니다:`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `화살표 함수: 간결하고 직관적
bind(): 명시적 바인딩 필요 시
self 변수: 오래된 코드와의 호환성이나 특정 상황에서`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `이벤트 핸들러에서의 this`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이벤트 핸들러로 함수가 호출되면, this는 일반적으로 이벤트가 발생한 DOM 요소를 가리킵니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `document.querySelector("button").addEventListener("click", function() {
  console.log(this); // <button> 요소
});`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `화살표 함수를 사용한 이벤트 핸들러에서의 this`,
			},
			{
				type: ComponentType.CODE,
				value: `document.querySelector("button").addEventListener("click", () => {
  console.log(this); // Window 객체 (상위 스코프의 this)
});`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `결과적으로`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `전역 호출: window (strict 모드에서는 undefined).
객체 메서드: 호출한 객체.
명시적 바인딩: call, apply, bind로 지정한 객체.
이벤트 핸들러: 이벤트가 발생한 요소.
생성자 함수: 새로 생성된 객체.
내부 함수: 호출 방식에 따라 결정 (보통 전역 객체).`,
			},
			{
				type: ComponentType.NORMAL,
				value: `일반 함수는 호출 방식에 따라 this가 유연하게 변한다는 점에서 화살표 함수와 대비됩니다. 화살표 함수는 상위 스코프의 this를 고정적으로 사용하지만, 일반 함수는 호출 시점에 따라 달라지므로 주의가 필요합니다. 추가 질문이 있으면 말씀해주세요!`,
			},
		],
	},
	{
		id: 54,
		title: `[English] I'm sure 패턴 2`,
		date: '2025-03-26 22:33:33',
		folder: Folder.ENGLISH,
		tag: ['English'],
		preview: `"I'm sure that a lot of Koreans use social networking sites these days 전 대학원 진학하는 것에 대해 확신하고 있지 않아요"`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `case 1`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>I'm sure that a lot of Koreans use social networking sites these days</b></br>
				 "나는 요즘 많은 한국인들이 소셜 네트워킹 사이트를 사용한다고 확신해" 
				`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `문장 분석`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `I'm sure that~ → ~라고 확신해
				a lot of Koreans → 많은 한국인들
				use social networking sites → 소셜 네트워킹 사이트를 사용하다.
				these days → 요즘
`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `- 만약 "lot of Koreans"라고 쓰면 문법적으로 맞지 않습니다. "lot"은 그 자체로 막연한 명사이기 때문에, <b>관사(a)</b>나 다른 <b>한정사(the, this 등)</b>가 없으면 자연스럽지 않고 의미가 모호해집니다.</br>
- 예외적으로 <b>lots of Koreans</b>처럼 "lots"가 사용될 수 있는데, 이는 <u>"a lot of"보다 약간 더 구어체이며, "a"가 생략된 형태로 이해할 수 있습니다.</u>`,
				promptTypeProps: 'TIP',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `case 2`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>I'm not sure about going to graduate school.</b></br>
				 "나는 대학원에 가는 것에 대해 확신이 없어."
				`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `문장 분석`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `I'm not sure → 확신이 없어
				about → 에 대해
				going to graduate school → 대학원에 가는 것`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>going</b>은 <b>가다라는 동작</b>을 <b>동명사(gerund) 형태</b>로 사용해 명사처럼 기능하게  합니다. </br>graduate school은 "대학원"을 뜻하는 단어입니다.`,
				promptTypeProps: 'TIP',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `case 3`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>I'm not sure what to say.</b></br>
				 "나는 무엇을 말해야 할지 확신이 없어."
				`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `문장 분석`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `I'm not sure → 확신이 없어
				what to say → 무엇을 말해야 할지`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>to say</b>는 <b>말하다</b>라는 <b>동작</b>을 <b>부정사(to + 동사 원형) 형태</b>로 사용해 what의 구체적인 대상을 설명한다.
<b>what to say</b> 전체는 I'm not sure의 <b>보어 역할</b>을 한다.`,
				promptTypeProps: 'TIP',
			},
		],
	},
	{
		id: 55,
		title: `[TECH-QA] 브라우저 저장소`,
		date: '2025-03-27 14:59:33',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript', 'TECH-QA'],
		preview: `쿠키는 웹 브라우저에서 클라이언트 측 데이터를 저장하는 전통적인 방법으로, 주로 사용자 인증(예: 로그인 세션 유지)이나 간단한 설정 저장에 사용됩니다. 하지만 몇 가지 단점이 있습니다`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `쿠키(Cookie)의 특징과 단점`,
			},
			{
				type: ComponentType.NORMAL,
				value: `쿠키는 웹 브라우저에서 <u>클라이언트 측 데이터를 저장</u>하는 전통적인 방법으로, 주로 사용자 인증(예: 로그인 세션 유지)이나 간단한 설정 저장에 사용됩니다. 하지만 몇 가지 단점이 있습니다`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `용량 제한: 쿠키는 저장 용량이 약 4KB로 매우 작아 대량의 데이터를 저장하기 어렵습니다.
보안 취약성: 쿠키는 기본적으로 암호화되지 않으므로, 데이터가 평문으로 전송되거나 저장될 경우 제3자가 쉽게 접근할 수 있어 정보 도난(예: XSS 공격 등)의 위험이 있습니다.
만료 기간 관리: 쿠키는 key-value 형태로 데이터를 저장하며, 개발자가 직접 만료 기간을 설정해야 합니다. 만료 기간이 지나면 자동으로 삭제되지만, 이 과정이 복잡하거나 관리가 소홀해질 수 있습니다.
네트워크 부하: 쿠키는 HTTP 요청마다 서버로 자동 전송되므로, 불필요한 데이터 전송이 발생해 성능 저하를 유발할 수 있습니다.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>쿠키를 사용한 사용자 인증, 특히 로그인 세션 유지에 대해 설명하자면, 이는 웹 애플리케이션에서 사용자가 로그인 상태를 유지할 수 있도록 하는 일반적인 방법 중 하나입니다.</b></br></br>
				- <b>로그인 요청</b>: 사용자가 웹사이트에 아이디와 비밀번호를 입력해 로그인하면, 서버는 해당 자격 증명을 확인합니다. 인증이 성공하면 서버는 사용자에게 <u>고유한 세션 ID를 생성</u>합니다.</br></br>
- <b>쿠키 생성 및 저장</b>: <u>서버는 이 세션 ID를 포함한 쿠키를 생성해 사용자의 브라우저로 보냅니다.</u> 브라우저는 이 쿠키를 로컬에 저장합니다. 이 쿠키는 보통 "세션 쿠키"로 설정되며, 브라우저가 닫히면 자동으로 삭제되거나(임시 세션), 만료 날짜가 설정된 경우 그때까지 유지됩니다(영속 세션).</br></br>
- <b>세션 유지</b>: 이후 사용자가 웹사이트의 다른 페이지를 방문할 때마다,<u>브라우저는 저장된 쿠키를 요청 헤더에 포함시켜 서버로 보냅니다.</u> 서버는 이 쿠키의 세션 ID를 확인해 사용자가 이미 인증된 사용자인지 판단하고, 별도의 로그인 없이 접근을 허용합니다.</br></br>`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `
<b>쿠키 보안 고려사항</b></br></br>
- <b>HttpOnly</b>: 쿠키에 HttpOnly 속성을 설정하면 자바스크립트를 통한 접근을 차단해 <b>XSS(크로스 사이트 스크립팅) 공격을 방지</b>할 수 있습니다.</br></br>
- <b>Secure</b>: Secure 속성을 추가하면 HTTPS 연결에서만 쿠키가 전송되어 데이터 도청을 방지합니다.</br></br>
- <b>SameSite</b>: 이 속성으로 쿠키가 동일 출처 요청에만 전송되도록 설정해 <b>CSRF(크로스 사이트 요청 위조) 공격</b>을 줄일 수 있습니다.
<b>로그아웃</b>: 사용자가 로그아웃하면 서버는 해당 세션 ID를 무효화하고, 브라우저의 쿠키를 삭제하거나 만료시켜 세션을 종료합니다.`,
				promptTypeProps: 'TIP',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `웹 스토리지(Web Storage)의 등장`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `로컬 스토리지 (Local Storage)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `특징: 데이터를 클라이언트(브라우저)에 영구적으로 저장합니다. 사용자가 데이터를 삭제하거나 브라우저 캐시를 지우지 않는 한 유지됩니다.
용도: 자동 로그인 토큰이나 사용자 선호 설정(예: 다크 모드)을 저장하는 데 유용.
용량: 약 5~10MB로, 쿠키보다 훨씬 큰 데이터를 저장할 수 있습니다.
장점: 만료 기간을 별도로 설정할 필요가 없어 관리가 간편합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `세션 스토리지 (Session Storage)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `특징: 브라우저 탭이 닫히면 데이터가 자동으로 삭제됩니다. 즉, 세션 단위로만 데이터를 유지합니다.
용도: 임시 데이터 저장(예: 폼 입력 데이터, 비로그인 장바구니)이나 보안이 중요한 일회성 정보에 적합합니다.
용량: 로컬 스토리지와 동일하게 5~10MB를 지원합니다.
장점: 세션이 종료되면 자동으로 데이터가 사라지므로, 민감한 정보의 노출 위험이 줄어듭니다.`,
			},
			{
				type: ComponentType.TABLE,
				value: ``,
				tables: {
					header: [
						{
							accessorKey: 'Category',
							header: '항목',
						},
						{
							accessorKey: 'Cookie',
							header: '쿠키',
						},
						{
							accessorKey: 'LocalStorage',
							header: '로컬 스토리지',
						},
						{
							accessorKey: 'SessionStorage',
							header: '세션 스토리지',
						},
					],
					contents: [
						{
							category: '저장 기간',
							cookie: '만료 기간 설정 필요',
							localStorage: '영구 저장 (수동 삭제 전까지)',
							sessionStorage: '세션 종료 시 삭제',
						},
						{
							category: '용량',
							cookie: '약 4KB',
							localStorage: '약 5~10MB',
							sessionStorage: '약 5~10MB',
						},
						{
							category: '보안',
							cookie: '암호화 없음, 도난 위험',
							localStorage: '서버로 자동 전송 안 됨',
							sessionStorage: '서버로 자동 전송 안 됨',
						},
						{
							category: '사용 예',
							cookie: '세션 관리, 간단한 설정',
							localStorage: '자동 로그인, 사용자 설정',
							sessionStorage: '임시 데이터, 폼 입력 유지',
						},
					],
				},
			},
			{
				type: ComponentType.NORMAL,
				value: `쿠키는 용량이 작고 보안에 취약하며, 만료 기간 설정과 네트워크 부하라는 단점을 안고 있습니다. 이를 보완하기 위해 로컬 스토리지는 영구 저장을, 세션 스토리지는 임시 저장을 제공하며, 더 큰 용량과 간편한 관리를 지원합니다. 웹 개발자는 데이터의 성격과 보안 요구사항에 따라 쿠키와 웹 스토리지를 적절히 선택해 사용할 수 있습니다.
`,
			},
		],
	},
	{
		id: 56,
		title: `[TECH-QA] 타입스크립트`,
		date: '2025-03-31 14:07:33',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript', 'TECH-QA'],
		preview: `타입스크립트는 자바스크립트 기반의 언이이며 자바스크립트의 상위확정전입니다. 정적타입으로 컴파일 단계에서 오류를 포착할수 있는 장점이 있고 강력한 객체지향 프로그래밍을 지원합니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `타입스크립트는 자바스크립트 기반의 언이이며 자바스크립트의 상위확정전입니다. 정적타입으로 컴파일 단계에서 오류를 포착할수 있는 장점이 있고 강력한 객체지향 프로그래밍을 지원합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `타입스크립트 특징`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>타입스크립트의 가장 큰 특징은 정적 타입 시스템을 도입했다는 점입니다.</b></br> 이는 변수, 함수, 객체 등의 타입을 코드 작성 단계에서 명시적으로 정의해 줍니다. 이렇게 정의된 타입은 <u>컴파일 단계에서 오류를 포착</u>할 수 있도록 도와주며, <u>런타임에서 발생할 수 있는 잠재적인 버그를 사전에 줄이는 데 큰 장점이 있습니다.</u></br></br>

				<b>타입스크립트는 강력한 객체지향 프로그래밍을 지원합니다.</b></br> 클래스(Class), 인터페이스(Interface), 제네릭(Generics), 모듈(Module)과 같은 기능을 제공하여 <u>대규모 애플리케이션 개발 시 코드의 구조를 더 체계적으로 관리할 수 있게 합니다.</u></br>예를 들어, 인터페이스를 사용하면 객체의 구조를 명확히 정의할 수 있고, 제네릭을 통해 재사용 가능하면서도 타입 안전성을 보장하는 코드를 작성할 수 있습니다.</br></br>

				<b>타입스크립트는 ES6(ECMAScript 2015) 및 <b>그 이후의 최신 자바스크립트 기능을 기본적으로 지원</b>합니다.</b></br> 자바스크립트로 작성된 코드를 실행하기 위해 바벨(Babel)과 같은 별도의 트랜스파일러를 사용할 필요 없이, 타입스크립트 자체적으로 최신 ECMAScript 문법을 기존 자바스크립트 엔진에서 실행 가능한 코드로 변환해줍니다. 이는 개발 워크플로우를 단순화하고 생산성을 높이는 데 기여합니다.</br></br>

				<b>명시적인 정적 타입 지정은 코드의 가독성을 크게 향상시키며, 특히 협업 환경에서 다른 개발자가 코드를 이해하고 유지보수하는 데 도움을 줍니다.</b></br> 예를 들어, 함수의 매개변수나 반환값에 타입을 명시하면 해당 함수가 어떤 데이터를 다루는지 바로 알 수 있어 디버깅 과정도 훨씬 수월해집니다. 게다가 타입스크립트는 타입 추론(Type Inference) 기능을 제공하여, 개발자가 모든 타입을 직접 명시하지 않더라도 컴파일러가 문맥을 통해 타입을 자동으로 추론하게 함으로써 편리함과 안전성을 동시에 제공합니다.</br>`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>타입추론이란?</b></br>
				<b>변수 선언에서의 타입 추론</b>: 변수를 초기화할 때 값을 할당하면, 타입스크립트는 해당 값의 타입을 기반으로 변수의 타입을 추론합니다.</br>
				<b>함수 반환 타입 추론</b>:함수의 반환값을 명시적으로 타입으로 선언하지 않아도, 타입스크립트는 함수 내부의 로직을 분석해 반환 타입을 추론합니다.</br>
				<b>객체 리터럴에서의 타입 추론</b>:객체를 생성할 때 각 속성의 타입을 명시하지 않아도, 초기화된 값에 따라 타입이 추론됩니다.`,
				promptTypeProps: 'TIP',
			},
			{
				type: ComponentType.NORMAL,
				value: `추가적으로, 타입스크립트는 방대한 생태계를 자랑합니다. <b>타입 정의 파일(.d.ts)</b>을 통해 기존 자바스크립트 라이브러리(예: React, Lodash 등)와의 통합이 용이하며, 커뮤니티에서 제공하는 DefinitelyTyped 프로젝트를 통해 수많은 라이브러리의 타입 정의를 쉽게 가져와 사용할 수 있습니다. 이로 인해 타입스크립트는 프론트엔드(React, Angular, Vue.js)와 백엔드(Node.js) 개발 모두에서 널리 사용되며, 현대 웹 개발에서 필수적인 도구로 자리 잡았습니다.

결론적으로, 타입스크립트는 자바스크립트의 유연성을 유지하면서도 정적 타입의 안정성과 객체지향 프로그래밍의 강력함을 더한 언어로, 코드 품질을 높이고 대규모 프로젝트를 효율적으로 관리하려는 개발자들에게 이상적인 선택입니다.`,
			},
		],
	},
	{
		id: 57,
		title: `[TECH-QA] 타입 정의 파일(.d.ts) `,
		date: '2025-03-31 14:43:33',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript', 'TECH-QA'],
		preview: `타입스크립트는 자바스크립트 기반의 언이이며 자바스크립트의 상위확정전입니다. 정적타입으로 컴파일 단계에서 오류를 포착할수 있는 장점이 있고 강력한 객체지향 프로그래밍을 지원합니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `interface나 type으로 정의하여 쓸수 있는데 d.ts로 사용하는 이유 대하여`,
			},
			{
				type: ComponentType.NORMAL,
				value: `타입스크립트에서 interface나 type을 사용해 타입을 정의할 수 있는데도 .d.ts 파일을 사용하는 이유는 사용 목적과 맥락의 차이에 있습니다. .d.ts 파일은 주로 <b>선언 파일(Declaration File)</b>로서 특정한 역할을 수행하며, 일반적인 interface나 type 정의와는 다른 상황에서 유용합니다. 아래에서 .d.ts를 사용하는 이유와 그 장점을 구체적으로 설명하겠습니다.
				`,
				promptTypeProps: 'TIP',
			},
			{
				type: ComponentType.STRINGLIST,
				value: `자바스크립트와의 통합: 기존 자바스크립트 코드나 외부 라이브러리에 타입을 추가할 때.
선언과 구현 분리: 타입 정의를 별도로 관리하고 런타임 코드에 영향을 주지 않으려 할 때.
글로벌 타입 제공: 프로젝트 전체에서 사용할 공통 타입을 전역적으로 선언할 때.
라이브러리 배포: 타입스크립트 사용자를 위해 타입 정의를 제공할 때.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `반면, 프로젝트 내부에서만 타입을 정의하고 사용할 때는 interface나 type을 .ts 파일에 작성하는 것이 더 간단하고 적합합니다. .d.ts는 특히 외부와의 인터페이스를 다룰 때 빛을 발하는 도구라고 볼 수 있습니다.`,
			},
			// 			{
			// 				type: ComponentType.HEADING, headingType:'h4',
			// 				value: `자바스크립트와 타입스크립트 간의 연결성 제공`,
			// 			},
			// 			{
			// 				type: ComponentType.STRINGLIST,
			// 				value: `<b>상황</b>: 프로젝트에서 자바스크립트로 작성된 기존 코드(예: 라이브러리, 모듈)를 타입스크립트에서 사용해야 할 때.
			// <b>문제</b>: 자바스크립트는 타입 정보가 없으므로, 타입스크립트에서 이를 사용할 때 any 타입으로 취급되어 타입 안정성이 떨어집니다.
			// <b>해결</b>: .d.ts 파일을 작성하여 자바스크립트 코드에 타입 정보를 추가하면, 타입스크립트가 이를 인식해 타입 검사를 수행할 수 있습니다.`,
			// 			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `간단한 자바스크립트 함수에 타입 정의 추가`,
			},
			{
				type: ComponentType.NORMAL,
				value: `기존 자바스크립트 파일에 타입이 없는 상황을 가정하고, .d.ts 파일로 타입을 제공하는 예제입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `자바스크립트 파일 (math.js)`,
			},
			{
				type: ComponentType.CODE,
				value: `function add(a, b) {
  return a + b;
}

module.exports = { add };`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `타입 선언 파일 (math.d.ts)`,
			},
			{
				type: ComponentType.CODE,
				value: `export function add(a: number, b: number): number;`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `타입스크립트에서 사용 (app.ts)`,
			},
			{
				type: ComponentType.CODE,
				value: `import { add } from "./math";

const result = add(5, 3); // result는 number 타입으로 추론됨
console.log(result); // 8

// add("5", "3"); // 오류: 'string' 타입은 'number' 타입에 할당할 수 없음`,
			},
			{
				type: ComponentType.NORMAL,
				value: `math.js는 타입 정보가 없는 자바스크립트 파일이지만, math.d.ts에서 add 함수의 매개변수와 반환 타입을 정의해줍니다. 타입스크립트는 이 선언 파일을 참조하여 타입 검사를 수행하며, 잘못된 타입 사용 시 오류를 발생시킵니다. 타입정의는 컴파일 시 타입 체크에 사용되고 자바스크립트로 변환된 런타임 코드에는 타입이 직접 포함되지 않습니다. 실제 실행되는 로직만 남습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `Lodash와 같은 외부 라이브러리 통합`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Lodash는 인기 있는 자바스크립트 유틸리티 라이브러리입니다. 타입스크립트에서 이를 사용하려면 @types/lodash와 같은 타입 정의 패키지를 설치하거나 직접 .d.ts 파일을 작성할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `Lodash 설치`,
			},
			{
				type: ComponentType.CODE,
				value: `npm install lodash
npm install --save-dev @types/lodash //타입 정의 설치 (DefinitelyTyped 제공)`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `타입스크립트에서 사용`,
			},
			{
				type: ComponentType.CODE,
				value: `import _ from "lodash";

const numbers = [1, 2, 3, 4];
const sum = _.sum(numbers); // sum은 number 타입으로 추론됨
console.log(sum); // 10

// _.sum("not an array"); // 오류: 'string'은 'ArrayLike<number>' 타입에 할당할 수 없음`,
			},
			{
				type: ComponentType.NORMAL,
				value: `@types/lodash 패키지는 Lodash의 모든 함수에 대한 타입 정의를 제공합니다. 예를 들어, _.sum은 숫자 배열을 받아 숫자를 반환하는 함수로 타입이 정의되어 있으며, 타입스크립트는 이를 기반으로 타입 검사를 수행합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `React 컴포넌트와 통합`,
			},
			{
				type: ComponentType.NORMAL,
				value: `React는 자바스크립트로 작성된 라이브러리지만, 타입스크립트에서 사용하려면 타입 정의가 필요합니다.</br> @types/react와 @types/react-dom을 통해 이를 해결할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `React 설치`,
			},
			{
				type: ComponentType.CODE,
				value: `npm install react react-dom
npm install --save-dev @types/react @types/react-dom`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `타입스크립트로 React 컴포넌트 작성`,
			},
			{
				type: ComponentType.CODE,
				value: `import React from "react";
import ReactDOM from "react-dom";

interface Props {
  name: string;
}

const Greeting: React.FC<Props> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

ReactDOM.render(<Greeting name="Alice" />, document.getElementById("root"));

// <Greeting name={123} /> // 오류: 'number' 타입은 'string' 타입에 할당할 수 없음`,
			},
			{
				type: ComponentType.NORMAL,
				value: `@types/react는 React의 타입 정의를 제공하며, React.FC와 같은 타입을 통해 함수형 컴포넌트의 props 타입을 정의할 수 있습니다. name props가 string으로 정의되었으므로, 숫자를 전달하면 컴파일 오류가 발생합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `React에 커스텀 타입을 추가하고 싶다면 커스텀 .d.ts로 확장 (선택적)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `만약 React에 커스텀 타입을 추가하고 싶다면, 다음과 같이 custom.d.ts 파일을 작성할 수 있습니다. 이 경우 customProp을 React 컴포넌트에서 타입 안전하게 사용할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `custom.d.ts`,
			},
			{
				type: ComponentType.CODE,
				value: `declare module "react" {
  interface CustomComponentProps {
    customProp: boolean;
  }
}`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `CustomComponent.tsx`,
			},
			{
				type: ComponentType.CODE,
				value: `import React from "react";

const CustomComponent: React.FC<CustomComponentProps> = ({ customProp }) => {
  return <div>{customProp ? "Yes" : "No"}</div>;
};

export default CustomComponent;`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `App.tsx`,
			},
			{
				type: ComponentType.CODE,
				value: `import React from "react";
import CustomComponent from "./CustomComponent";

const App: React.FC = () => {
  return (
      <CustomComponent customProp={true} />
  );
};

export default App;`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `커스텀 .d.ts로 확장`,
			},
			{
				type: ComponentType.NORMAL,
				value: `타입스크립트가 인식하지 못하는 타입이나 타입스크립트 내에서 사용할 타입들을 정의 할때 예로 <b>svg 파일</b>을 타입스크립트에서 불러올 수 있게 하도록 custom.d.ts 파일을 생성해준다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `custom.d.ts`,
			},
			// 			{
			// 				type: ComponentType.CODE,
			// 				value: `declare module '*.svg'{
			//     import * as React from 'react';

			//     export const ReactComponent:React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string}>;

			//     const src:string;
			//     exprot default src;

			// }`,
			// 			},
			{
				type: ComponentType.CODE,
				value: `declare module "*.svg" {
  import * as React from "react";

  interface CustomSVGProps {
    title?: string;
  }

  // SVG 컴포넌트의 전체 props 타입 정의
  type SVGComponentProps = React.SVGProps<SVGSVGElement> & CustomSVGProps;

  // ReactComponent를 함수형 컴포넌트로 선언
  export const ReactComponent: React.FunctionComponent<SVGComponentProps>;

  // SVG 파일의 기본 내보내기로 문자열 URL 정의
  const path: string;
  export default path;
}`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이 선언을 사용하면 SVG 파일을 다음과 같이 가져와 활용할 수 있습니다`,
			},
			{
				type: ComponentType.CODE,
				value: `import { ReactComponent as Icon } from "./icon.svg";
import iconPath from "./icon.svg";

const App: React.FC = () => (
  <div>
    <Icon width="50" height="50" fill="blue" title="My Icon" />
    <img src={iconPath} alt="Icon" width="50" height="50" />
  </div>
);`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Icon은 SVGComponentProps 타입을 기반으로 타입 검사가 이루어지며, title은 옵셔널로 사용 가능합니다.
iconPath는 string 타입으로 이미지 소스로 활용됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `구현 코드와 타입 정의의 분리`,
			},
			{
				type: ComponentType.NORMAL,
				value: `타입 정의와 실제 구현 코드를 분리하고 싶을 때, .d.ts 파일은 선언만 포함하고 이는 런타임에 영향을 주지 않습니다. 반면 .ts 파일에 interface나 type과 함께 구현 코드를 섞으면 컴파일 시 자바스크립트 코드로 변환되어 런타임에 포함됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `.ts 파일에 모두 작성(math.ts)`,
			},
			{
				type: ComponentType.CODE,
				value: `interface MathOperation {
  (a: number, b: number): number;
}
const add: MathOperation = (a, b) => a + b;
export { add };`,
			},
			{
				type: ComponentType.NORMAL,
				value: `math.ts 컴파일 결과: interface는 사라지고 구현 코드만 남음.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `math.d.ts`,
			},
			{
				type: ComponentType.CODE,
				value: `export interface MathOperation {
  (a: number, b: number): number;
}
export const add: MathOperation;`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `math.js`,
			},
			{
				type: ComponentType.CODE,
				value: `const add = (a, b) => a + b;
module.exports = { add };
export const add: MathOperation;`,
			},
			{
				type: ComponentType.NORMAL,
				value: `선언과 구현을 분리하면 실제 실행되는 로직(구현)은 별도의 소스 파일에 두고 <b>타입 정의는 주로 컴파일 타임에 사용되어 코드의 정합성을 확인하거나 개발자에게 힌트를 주는 역할</b>을 하지만, <u>런타임에 실행되는 기계어 코드나 프로그램의 동작에는 직접적인 영향을 미치지 않습니다.</u>  타입 정의만 공유하거나 재사용하기 쉬워집니다. 특히 외부 라이브러리와 통합할 때 유용합니다.`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `interface/type과 .d.ts의 차이점 요약`,
			},
			{
				type: ComponentType.TABLE,
				value: ``,
				tables: {
					header: [
						{
							accessorKey: 'Feature',
							header: '특징',
						},
						{
							accessorKey: 'Scope',
							header: '사용범위',
						},
						{
							accessorKey: 'ImplementationInclusion',
							header: '구현 포함 여부',
						},
						{
							accessorKey: 'ModuleIntegration',
							header: '모듈 통합',
						},
						{
							accessorKey: 'GlobalDeclaration',
							header: '전역 선언',
						},
						{
							accessorKey: 'Purpose',
							header: '목적',
						},
					],
					contents: [
						{
							Feature: 'interface / type',
							Scope: '타입스크립트 코드 내부에서만 유효',
							ImplementationInclusion: '.ts 파일 내에서 구현과 함께 사용 가능',
							sessionStorage: '외부 모듈의 타입 수정 불가',
							GlobalDeclaration: 'import/export 필요',
							Purpose: '프로젝트 내 타입 정의',
						},
						{
							Feature: '.d.ts 파일',
							Scope: '자바스크립트와 타입스크립트 연결 가능',
							ImplementationInclusion: '선언만 포함, 구현은 별도 파일에서',
							sessionStorage: 'declare module로 외부 모듈 타입 정의 가능',
							GlobalDeclaration: '전역 타입 정의 가능 (declare 사용)',
							Purpose: '외부 코드와의 인터페이스 역할',
						},
					],
				},
			},
		],
	},
	{
		id: 58,
		title: `[TECH-QA] 컴파일(Compile)과 빌드(Build) 그리고 React 웹팩(Webpack)과 바벨(Babel)`,
		date: '2025-04-02 13:58:33',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript', 'TECH-QA', 'React'],
		preview: `"Build"와 "컴파일"은 소프트웨어 개발에서 자주 사용되는 용어인데, 서로 관련이 있지만 약간 다른 개념을 가리킵니다. 한국어로 자연스럽게 설명해볼게요.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `컴파일 (Compile)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `컴파일은 소스 코드를 사람이 작성한 <b>고급 프로그래밍 언어(예: C, Java, Python 등)에서 컴퓨터가 이해할 수 있는 저급 언어(기계어 또는 바이트코드)로 변환</b>하는 과정을 뜻합니다. 이 작업은 컴파일러(Compiler)라는 도구가 수행합니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `예를 들어, C 언어로 작성된 코드를 컴파일하면 실행 가능한 파일(예: .exe)이 만들어집니다.
<u>문법 오류</u>나 <u>타입 오류</u> 같은 문제가 있으면 컴파일러가 이를 잡아내고 <b>에러 메시지를 출력</b>합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `빌드 (Build)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `빌드는 컴파일을 포함한 더 큰 프로세스를 의미합니다. <b>소프트웨어를 실행하거나 배포할 수 있는 상태</b>로 만드는 전체 작업을 빌드라고 부릅니다. 빌드 과정에는 보통 이런 단계들이 포함되며 단순히 코드를 번역하는 것뿐만 아니라, 프로젝트 전체를 준비하는 과정이라고 볼 수 있습니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `1.<b>컴파일</b> : 소스 코드를 기계어로 변환.
2.<b>링킹(Linking)</b> : 여러 소스 파일이나 라이브러리를 하나로 연결.
3.<b>테스트</b> : 자동화된 테스트 실행 (경우에 따라).
4.<b>패키징</b> : 실행 파일이나 배포 가능한 파일(예: .jar, .apk) 생성.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `요약해보자면`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>컴파일</b>: 코드 번역 과정 (부분).
<b>빌드</b>: 컴파일 + 추가 작업까지 포함한 전체 준비 과정.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `리액트 빌드(Build)도구`,
			},
			{
				type: ComponentType.NORMAL,
				value: `리액트(React)에서 주로 사용되는 빌드 도구들은 프론트엔드 개발에서 코드 번들링, 트랜스파일링, 최적화 등을 담당하며, 개발 경험과 배포 효율성을 높여줍니다. 아래에 리액트 프로젝트에서 많이 사용되는 대표적인 빌드 도구들을 설명 하겠습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `웹팩(Webpack)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `웹팩은 프로젝트의 구조를 분석하여 자바스크립트 모듈을 비롯한 관련 리소스(예: CSS, 이미지, 폰트 등)를 찾아내고, 이를 브라우저에서 실행할 수 있는 하나의 번들(Bundle)로 묶고 패킹하는 <b>모듈 번들러(Module Bundler)</b>입니다.
				모듈 번들러란, 개발 과정에서 여러 개로 나뉘어 있는 파일들(모듈들)을 하나로 통합해 주는 도구이자 라이브러리로, 이를 통해 코드의 의존성을 관리하고 효율적으로 배포할 수 있게 도와줍니다.</br></br>

예를 들어, 웹페이지를 구성하기 위해 자바스크립트, 스타일시트, 이미지 등 수많은 파일이 필요할 때, 브라우저가 이 파일들을 서버에 개별적으로 요청하면 로딩 시간이 길어지고 성능이 저하될 수 있습니다. <b>웹팩</b>은 이런 문제를 해결하기 위해 모든 리소스를 하나의 파일(또는 필요에 따라 몇 개의 파일)로 압축하고 최적화합니다. 이렇게 번들링된 결과물은 요청 횟수를 줄이고, 코드 크기를 최소화하며, 브라우저에서 더 빠르게 실행될 수 있도록 만듭니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>의존성 관리</b> : 웹팩은 프로젝트 내 모듈 간의 의존성을 파악합니다. 예를 들어, import나 require로 연결된 파일들을 추적해 필요한 코드만 포함시키고, <b>사용되지 않는 코드는 제외(트리 쉐이킹)</b>할 수 있습니다.
<b>로더(Loader)</b> : 자바스크립트 외에도 CSS(css-loader), 이미지(file-loader), TypeScript(ts-loader) 등 다양한 파일 형식을 처리할 수 있게 해주는 확장 기능이 있습니다.
<b>플러그인(Plugins)</b> : 번들링 과정에서 추가 작업을 수행할 수 있도록 지원합니다. 예를 들어, HtmlWebpackPlugin은 HTML 파일을 자동 생성하고, UglifyJsPlugin은 코드를 압축합니다.
<b>개발 편의성</b> : webpack-dev-server를 통해 실시간으로 코드 변경을 반영하는 핫 리로딩(Hot Reloading)을 제공해 개발 속도를 높여줍니다.
<b>최적화</b> : 프로덕션 환경에서는 <b>코드 분할(Code Splitting)</b>을 통해 필요한 부분만 로드하거나, 캐싱을 활용해 성능을 개선할 수 있습니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `리액트 프로젝트에서 웹팩은 JSX를 일반 자바스크립트로 변환(Babel과 함께 사용)하고, 컴포넌트와 스타일, 기타 자원을 하나로 묶어 배포 가능한 형태로 만드는 데 자주 사용됩니다. 특히 Create React App은 웹팩을 기반으로 설정이 미리 되어 있어, 개발자가 직접 설정하지 않아도 바로 사용할 수 있게 해줍니다.

결론적으로, 웹팩은 단순히 파일을 묶는 것을 넘어, 현대 웹 개발에서 필수적인 코드 최적화와 성능 개선을 담당하는 강력한 도구입니다. 다만, 설정이 복잡할 수 있다는 단점 때문에 최근에는 Vite나 Parcel 같은 대안도 주목받고 있죠.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `바벨(Babel)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `바벨은 모든 실행 환경에서 자바스크립트가 정상적으로 동작할 수 있도록 해주는 <b>자바스크립트 컴파일러(Transpiler)</b>입니다. `,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `주로 최신 자바스크립트 문법(예: ES6/ES2015 이상)을 구형 브라우저에서도 실행 가능한 ES5 코드로 변환해 주는 역할을 합니다. 
				리액트의 JSX나 TypeScript(TS)와 같은 특수 문법을 일반 자바스크립트로 변환하며, 
				특정 브라우저에서 지원되지 않는 최신 기능을 사용할 수 있게끔 코드를 재구성해 줍니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `트랜스파일링(Transpiling)의 의미`,
			},
			{
				type: ComponentType.NORMAL,
				value: `바벨은 엄밀히 말해 "컴파일러"라기보다는 "트랜스파일러"로 불립니다. 이는 소스 코드를 다른 언어로 바꾸는 대신, 같은 자바스크립트 언어 내에서 최신 문법을 구형 문법으로 변환하는 과정을 뜻하기 때문입니다. 예를 들어, const나 화살표 함수(=>) 같은 ES6 문법을 ES5의 var와 일반 함수로 바꿔줍니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>ES6+ 변환</b>: let, const, async/await, 모듈(import/export) 등 최신 자바스크립트 기능을 구형 환경에 맞게 변환.
<b>JSX 지원</b>: 리액트에서 사용하는 JSX 문법(예: <div>Hello</div>)을 React.createElement() 같은 자바스크립트 코드로 변환.
<b>TypeScript 지원</b>: .ts나 .tsx 파일을 자바스크립트로 변환하며, 타입 체크는 별도로 TypeScript 컴파일러(tsc)에 맡김.
<b>폴리필(Polyfill)</b>: 바벨 자체는 문법만 변환하지만, @babel/polyfill이나 core-js와 함께 사용하면 Promise, Array.includes 같은 최신 API도 구형 브라우저에서 동작하게 추가 가능.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `작동 방식`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `파싱(Parsing): 소스 코드를 읽어 추상 구문 트리(AST)로 변환.
변환(Transforming): 플러그인과 프리셋(Preset)을 통해 AST를 수정(예: ES6 → ES5).
생성(Generating): 수정된 AST를 기반으로 최종 자바스크립트 코드를 출력.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `플러그인과 프리셋`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `바벨은 모듈화된 구조로, 특정 변환 작업을 플러그인(예: @babel/plugin-transform-arrow-functions)으로 추가할 수 있습니다.
프리셋은 여러 플러그인을 묶은 세트로, @babel/preset-env는 타겟 브라우저에 맞춰 필요한 변환만 적용해 효율성을 높여줍니다. 리액트용으로는 @babel/preset-react가 JSX 처리를 담당합니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `리액트 개발에서 바벨은 필수적입니다. JSX를 브라우저가 이해할 수 있는 코드로 바꿔주고, 최신 자바스크립트 기능을 사용하면서도 다양한 브라우저 호환성을 보장해 줍니다. Create React App이나 Vite 같은 도구는 바벨을 기본으로 내장하고 있어 설정 없이도 바로 사용 가능합니다. </br>결론적으로, 바벨은 자바스크립트 개발에서 "호환성의 다리" 역할을 하며, 특히 리액트처럼 최신 기술을 사용하는 환경에서 없어서는 안 될 도구입니다. 웹팩이나 Vite 같은 빌드 도구와 함께 사용되며, 개발자가 최신 기능을 자유롭게 쓰면서도 모든 사용자를 지원할 수 있게 해줍니다.`,
			},
		],
	},
	{
		id: 59,
		title: `[TECH-QA] HTTP와 HTTPS`,
		date: '2025-04-01 14:44:33',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript', 'TECH-QA'],
		preview: `TTP는 서버 클라이언트 모델을 따라 데이터를 주고받기 위한 프로토콜이다. HTTPS는 HTTP에 데이터 암호화가 추가된 프로토콜이다. 공개키 개인키 암호화 방식을 통해 데이터를 암호화한다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `HTTP와 HTTPS`,
			},
			{
				type: ComponentType.NORMAL,
				value: `HTTP(HyperText Transfer Protocol)는 클라이언트(예: 웹 브라우저)와 서버 간에 데이터를 주고받기 위한 규약으로, 주로 텍스트, 이미지, 쿼리 등을 전송하는 데 사용됩니다. 그러나 HTTP는 데이터가 평문(plain text)으로 전송되기 때문에, 네트워크 상에서 제3자가 데이터를 가로채면 쉽게 내용을 볼 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `평문(plain text) 전송 예시`,
			},
			{
				type: ComponentType.NORMAL,
				value: `예) 로그인시 사용자가 HTTP를 사용하는 웹사이트(예: http://example.com)에서 로그인 양식을 작성하고 "아이디: user123, 비밀번호: pass456"을 입력한 뒤 제출 버튼을 누릅니다. 이 데이터는 HTTP 요청으로 서버에 전송되며, 네트워크 상에서 다음과 같이 표시됩니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `POST /login HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded

username=user123&password=pass456`,
			},
			{
				type: ComponentType.NORMAL,
				value: `공공 와이파이 같은 네트워크에서 해커가 패킷 스니핑 도구(예: Wireshark)를 사용하면 이 데이터를 그대로 볼 수 있습니다. 즉, "user123"과 "pass456"이 암호화 없이 노출됩니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `예) 사용자가 HTTP 사이트에서 검색 쿼리를 입력하거나 개인정보를 URL 파라미터로 전달합니다. 예를 들어, http://example.com/search?ssn=123-45-6789와 같이 주민등록번호를 포함한 요청을 보냅니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `GET /search?ssn=123-45-6789 HTTP/1.1
Host: example.com`,
			},
			{
				type: ComponentType.NORMAL,
				value: `네트워크를 감시하는 제3자는 물론, 서버 로그나 브라우저 기록에도 이 민감한 정보가 그대로 남을 수 있습니다. HTTP는 암호화가 없기 때문에 중간자 공격(Man-in-the-Middle Attack)에 취약합니다. 예를 들어, 공공 와이파이에서 HTTP를 통해 로그인 정보를 전송하면 해커가 이를 가로채 비밀번호나 개인정보를 탈취할 수 있습니다. 반면 HTTPS는 이런 위험을 크게 줄여줍니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `HTTPS(HyperText Transfer Protocol Secure)는 HTTP에 <b>SSL/TLS(Secure Sockets Layer/Transport Layer Security) 프로토콜을 추가</b>해 보안성을 강화한 버전입니다. SSL/TLS는 데이터를 암호화하고, <b>서버의 신원을 인증하며, 데이터 무결성을 보장</b>합니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `HTTPS를 사용하면 위 데이터가 암호화되어 전송되므로, 가로채더라도 해독할 수 없는 난수처럼 보입니다(예: a8f5g9h2...). HTTP의 평문 전송은 단순히 속도와 편리함을 제공하지만, 보안이 중요한 현대 인터넷 환경에서는 점차 사용이 줄어드는 이유이기도 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `공개키/개인키 암호화 방식의 작동 원리`,
			},
			{
				type: ComponentType.NORMAL,
				value: `HTTPS에서 사용하는 공개키(Public Key)와 개인키(Private Key)는 <b>비대칭 암호화 방식의 핵심</b>입니다. 공개키는 누구나 접근할 수 있으며 데이터를 암호화하는 데 사용되고, <b>개인키는 서버만이 가지고 있어 암호화된 데이터를 복호화</b>하는 데 사용됩니다. 이 과정에서 클라이언트와 서버는 초기 연결 시 <b>대칭키(예: AES)</b>를 교환하는데, 이를 위해 공개키 암호화가 사용됩니다. 이후 실제 데이터 전송은 더 빠른 대칭키 암호화로 이루어집니다. 이 "하이브리드 암호화" 방식은 보안성과 효율성을 동시에 충족합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `속도 차이에 대한 추가 설명`,
			},
			{
				type: ComponentType.NORMAL,
				value: `HTTPS가 HTTP보다 느리다고 언급되었는데, 이는 암호화와 복호화 과정에서 약간의 계산 오버헤드가 발생하기 때문입니다. 하지만 현대 하드웨어와 최적화된 SSL/TLS 프로토콜 덕분에 <b>속도차이는 미미</b>하며, 사용자 경험에 큰 영향을 주지 않는 경우가 많습니다. 또한 <u>HTTP/2나 HTTP/3 같은 최신 프로토콜은 HTTPS와 함께 사용되며 성능을 오히려 향상</u>시키기도 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `인증서 발급과 비용의 현실`,
			},
			{
				type: ComponentType.NORMAL,
				value: `HTTPS를 사용하려면 CA(Certificate Authority, 인증 기관)에서 <b>SSL/TLS 인증서</b>를 발급받아야 합니다. 과거에는 인증서가 유료였지만, 현재는 <u>Let’s Encrypt 같은 무료 인증서 제공 서비스가 널리 사용되며 비용 부담이 크게 줄었습니다.</u> 다만, 대규모 사이트나 특정 보안 요구사항이 있는 경우(예: EV 인증서)에는 여전히 유료 인증서를 선택하기도 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `HTTP와 HTTPS의 사용 사례 구체화`,
			},
			{
				type: ComponentType.NORMAL,
				value: `HTTPS는 개인정보(로그인 정보, 신용카드 번호 등)를 다룰 때 필수적이지만, 단순 정보 조회 사이트(예: 공개 위키 페이지, 정적 콘텐츠)에서는 HTTP로도 충분 합니다. `,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `그러나 구글 크롬 같은 브라우저는 HTTP 사이트에 "보안되지 않음(Not Secure)" 경고를 표시하며, SEO(검색 엔진 최적화)에서도 HTTPS가 유리하다는 점에서 HTTPS로 전환하는 추세가 강합니다.`,
				promptTypeProps: 'INFO',
			},
			{
				type: ComponentType.NORMAL,
				value: `2025년 3월 기준으로 대부분의 웹사이트는 HTTPS를 표준으로 채택하고 있습니다. 이는 사용자 신뢰도를 높이고, 데이터 보안을 강화하며, 브라우저 정책에 부합하기 위함입니다. 따라서 새로운 사이트를 구축하거나 기존 사이트를 유지한다면, 비용과 상관없이 HTTPS를 사용하는 것이 권장됩니다.`,
			},
		],
	},
	{
		id: 60,
		title: `[TECH-QA] JWT(JSON Web Token) 인증 방식`,
		date: '2025-04-02 15:44:33',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript', 'TECH-QA', 'JWT', 'CSRF', 'XSS'],
		preview: `JWT(JSON Web Token)는 웹에서 사용자 인증을 위해 널리 사용되는 토큰 기반 인증 방식입니다. JWT는 세 가지 주요 부분으로 구성되며, 각 부분은 점(.)으로 구분됩니다`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `JWT(JSON Web Token)는 웹에서 사용자 인증을 위해 널리 사용되는 <b>토큰 기반 인증 방식</b>입니다. JWT는 세 가지 주요 부분으로 구성되며, 각 부분은 점(.)으로 구분됩니다 `,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Header(헤더)
	Payload(페이로드)
	Signature(서명)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이를 <u>Base64 URL 인코딩 방식</u>으로 <u>직렬화</u>하여 <b>헤더 . 페이로드 . 서명 형태의 문자열</b>로 표현됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `Header`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `토큰의 유형(보통 "JWT")
				서명에 사용된 알고리즘을 정의(예: HMAC SHA256, RSA 등)`,
			},
			{
				type: ComponentType.CODE,
				value: `{
  "alg": "HS256",
  "typ": "JWT"
}`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `Payload`,
			},
			{
				type: ComponentType.NORMAL,
				value: `사용자 인증에 필요한 정보(클레임, Claims)를 포함합니다. 여기에는 사용자 ID, 권한, 발급 시간(iat), 만료 시간(exp) 등 표준 클레임과 함께 개발자가 추가한 커스텀 클레임이 들어갈 수 있습니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `{
  "sub": "user123",
  "name": "John Doe",
  "iat": 1712016000,
  "exp": 1712023200
}`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `Signature`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Header와 Payload를 조합한 후 서버의 비밀 키(secret key)를 사용해 서명한 값입니다. 이 서명은 토큰의 무결성을 보장하며, 클라이언트가 토큰을 위조하거나 변조했는지 확인하는 데 사용됩니다. 서명 생성 과정은 다음과 같습니다`,
			},
			{
				type: ComponentType.CODE,
				value: `HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>서버의 비밀 키</b></br>
				- 서버의 비밀 키(secret key)는 서버 애플리케이션이 설계되고 배포되는 단계에서 생성되거나 설정됩니다.</br>
				- JWT를 생성하고 검증하기 위해 서버 측에서 미리 설정되고 관리되는 고정된 값입니다. </br>
				- 이 키는 JWT의 Signature 부분을 생성하고, 나중에 토큰의 유효성을 검증할 때 사용됩니다.
				`,
				promptTypeProps: 'TIP',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `장점`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>상태 비저장(Stateless)</b>: 사용자 인증정보를 서버나 세션스토리지에 유지할 필요가 없어 확장성이 뛰어나고, 분산 시스템에서 유리합니다.
<b>단일 토큰으로 인증</b> : 사용자 인증에 필요한 정보를 토큰 자체에 담고 있어 클라이언트 측에서 들어오는 요청만으로 유효성 검사를 합니다. API 호출 시마다 헤더(Authorization: Bearer <token>)에 포함시켜 간단히 인증을 처리할 수 있습니다.
<b>호환성</b> : JSON 기반이므로 다양한 플랫폼과 언어에서 쉽게 파싱하고 사용할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `단점 및 고려사항`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>수정 및 폐기 불가</b> : 한 번 발급된 JWT는 만료 전까지 유효하며 중간에 무효화하기 어렵습니다. 이를 보완하려면 Refresh Token을 함께 사용해 짧은 유효기간의 Access Token을 주기적으로 갱신하는 방식이 일반적입니다.
<b>토큰 탈취 위험</b> : 토큰이 클라이언트에 저장되므로(주로 브라우저의 localStorage나 cookie), XSS(Cross-Site Scripting) 공격에 노출될 가능성이 있습니다. 이를 방지하려면 <b>HTTPS를 사용하고, 토큰을 HttpOnly, Secure 속성이 설정된 쿠키에 저장</b>하는 것이 좋습니다.
<b>Payload 노출</b> : JWT의 Payload는 암호화되지 않고 Base64로 인코딩만 되어 있어 누구나 디코딩해 내용을 볼 수 있습니다. 따라서 민감한 정보(예: 비밀번호)는 절대 포함시키지 않아야 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `토큰 탈취 위험`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>HttpOnly</b></br>
				HttpOnly는 쿠키에 붙이는 속성 중 하나로,
JavaScript에서 해당 쿠키에 접근하지 못하게 막는 기능입니다.</br></br>
<b>Secure</b></br>HTTPS에서만 전송되게 하는 속성 입니다.</br></br>
<b>SameSite</b></br>CSRF 방지를 위해 쿠키가 어떤 상황에서 자동으로 브라우저에 전송될지를 제한하는 속성입니다.</br>SameSite=Strict 설정일때에는 쿠키가 동일 출처 요청에만 전송되도록 설정합니다.
				`,
				promptTypeProps: 'INFO',
			},
			{
				type: ComponentType.CODE,
				value: `Set-Cookie : sessionId=abc123; Secure; HttpOnly; SameSite=Strict
				
//JavaScript로 접근 불가
console.log(document.cookie); // "" (빈 문자열 출력)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>JWT를 쿠키에 저장할 때</b> : 클라이언트는 이 토큰을 JavaScript로 읽을 수 없고, 브라우저가 자동으로 서버 요청에 포함시켜 인증을 처리합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `Set-Cookie: token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMTIzIn0.서명; Path=/; Secure; HttpOnly`,
			},
			{
				type: ComponentType.NORMAL,
				value: `HTTPOnly는 쿠키를 클라이언트 측 스크립트로부터 보호하는 간단하면서도 강력한 보안 메커니즘입니다. 특히 인증 관련 데이터를 쿠키에 저장할 때 필수적으로 고려해야 하며, Secure와 SameSite 속성과 함께 사용하면 웹 애플리케이션의 보안을 더욱 강화할 수 있습니다. 다만, 클라이언트 측에서 토큰을 직접 다뤄야 하는 경우에는 대안(예: Authorization 헤더)을 고려해야 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `유효기간 설정의 중요성`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `유효기간(exp)을 짧게 설정하는 것은 보안을 강화하는 핵심 방법입니다. 예를 들어, Access Token은 15분~1시간, Refresh Token은 하루 정도로 설정하는 경우가 많습니다. 유효기간이 길면 토큰이 유출되었을 때 악용될 시간이 늘어나므로, 짧은 주기로 갱신하며 보안과 편의성을 균형 있게 유지하는 것이 중요합니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `JWT는 인증 외에도 권한 부여(Authorization)나 정보 교환(예: SSO, Single Sign-On)에도 사용됩니다. 예를 들어, OAuth 2.0 프레임워크에서 ID 토큰으로 활용되기도 합니다.

결론적으로, JWT는 서버 부하를 줄이고 효율적인 인증을 가능하게 하지만, 보안 설계(짧은 유효기간, Refresh Token 도입, HTTPS 필수 등)를 신중히 고려해야 효과적으로 사용할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `로그인 과정에서의 JWT`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `사용자의 자격 증명(예: ID, 비밀번호)을 확인합니다.
인증이 성공하면, 서버는 미리 설정된 비밀 키를 사용해 JWT를 생성합니다.
생성된 JWT(헤더.페이로드.서명 형태)는 사용자에게 반환됩니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `여기서 발행되는 것은 JWT 자체이며, 비밀 키는 그 과정에서 사용되는 도구일 뿐입니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `비밀 키: my-secret-key (서버에 고정적으로 저장됨)
JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIzIn0.서명값`,
			},
		],
	},
	{
		id: 61,
		title: `[TECH-QA] 프로토타입(Prototype)과 프로토타입체이닝`,
		date: '2025-04-10 16:54:33',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript', 'TECH-QA', 'Prototype'],
		preview: `자바스크립트에서 프로토타입(prototype)이란 객체가 생성될 때 그 객체를 만드는 데 사용된 원형, 즉 템플릿 역할을 하는 프로토타입 객체를 의미합니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `프로토타입(prototype)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `프로토타입(prototype)이란 객체가 생성될 때 그 객체를 만드는 데 사용된 원형, 즉 <b>템플릿 역할</b>을 하는 프로토타입 객체를 의미합니다. 모든 자바스크립트 객체는 이 프로토타입 객체와 연결되어 있으며, 이 연결은 객체의 숨겨진 속성인 <span class="point">__proto__</span>  (proto 속성)를 통해 참조됩니다. 이 <span class="point">__proto__</span> 속성은 <b>해당 객체가 어떤 프로토타입 객체를 기반</b>으로 만들어졌는지를 가리키는 링크 역할을 합니다. 따라서 프로토타입은 객체와 그 원형 객체를 연결하는 핵심적인 메커니즘이라고 볼 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `기본 객체의 __proto__`,
			},
			{
				type: ComponentType.CODE,
				value: `// 빈 객체 생성
const obj = {};

console.log(obj.__proto__); // [Object: null prototype] {} (Object.prototype)

console.log(obj.__proto__.__proto__); // null`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `obj는 기본 객체로, Object 생성자를 통해 만들어졌습니다.</br>
obj.__proto__는 <b>Object.prototype을 참조</b>합니다. 이는 <b>모든 기본 객체의 프로토타입</b>입니다.</br>
Object.prototype의 __proto__는 null로, 프로토타입 체인의 끝을 나타냅니다.`,
				promptTypeProps: 'INFO',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `배열 객체의 __proto__`,
			},
			{
				type: ComponentType.CODE,
				value: `const arr = [1, 2, 3];

console.log(arr.__proto__); // [Array: null prototype] [] (Array.prototype)

console.log(arr.__proto__.__proto__); // [Object: null prototype] {} (Object.prototype)

console.log(arr.__proto__.__proto__.__proto__); // null`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `arr는 배열 객체로, Array 생성자를 통해 만들어졌습니다.
arr.__proto__는 Array.prototype을 참조하며, 배열 관련 메서드(push, pop 등)가 이 프로토타입에 정의되어 있습니다.
Array.prototype의 __proto__는 Object.prototype을 참조합니다. 따라서 배열도 기본적으로 객체의 속성을 상속받습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `커스텀 객체와 생성자 함수`,
			},
			{
				type: ComponentType.CODE,
				value: `// 생성자 함수 정의
function Person(name) {
  this.name = name;
}

// Person.prototype에 메서드 추가
Person.prototype.sayHello = function () {
  console.log("Hello, I'm \${this.name}");
};

// 객체 생성
const person = new Person("Alice");

// person의 __proto__ 확인
console.log(person.__proto__); // Person { sayHello: [Function (anonymous)] } (Person.prototype)

// Person.prototype의 __proto__ 확인
console.log(person.__proto__.__proto__); // [Object: null prototype] {} (Object.prototype)

// 프로토타입 체인을 따라 메서드 호출
person.sayHello(); // Hello, I'm Alice`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Person은 생성자 함수로, new Person()으로 생성된 person 객체의 __proto__는 Person.prototype을 참조합니다.
Person.prototype에는 sayHello 메서드가 정의되어 있으므로, person은 이 메서드를 상속받아 사용할 수 있습니다.
Person.prototype.__proto__는 Object.prototype을 참조하며, 체인은 결국 null로 끝납니다.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `__proto__는 비표준 속성이지만, 대부분의 브라우저에서 디버깅 용도로 접근 가능합니다. </br> 실제 코드에서는 Object.getPrototypeOf(obj)를 사용하는 것이 권장됩니다.`,
				promptTypeProps: 'TIP',
			},
			{
				type: ComponentType.CODE,
				value: `console.log(Object.getPrototypeOf(person) === Person.prototype); // true`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `__proto__는 객체와 프로토타입 간의 연결을 보여주며, 이를 통해 프로토타입 체이닝이 동작합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `프로토타입 체인(prototype chain)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `프로토타입 체인(prototype chain)에 대해 살펴보면, 객체의 __proto__ 속성이 또 다른 객체의 프로토타입을 참조하고, 그 참조된 프로토타입 객체의 __proto__가 다시 또 다른 프로토타입을 참조하는 식으로 연쇄적으로 이어진 구조를 말합니다. 이 체인은 최종적으로 Object.prototype이라는 기본 프로토타입 객체에 도달 할 때까지 이어지며, 그 끝에는 __proto__가 null인 지점이 존재합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `프로토타입 체이닝(prototype chaining)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이러한 프로토타입 체인을 활용하여 자바스크립트는 속성이나 메서드를 검색하는데, 이를 프로토타입 체이닝(prototype chaining)이라고 합니다. 예를 들어, 객체에서 특정 속성이나 메서드를 호출하려 할 때, 자바스크립트 엔진은 먼저 그 객체 자체에서 해당 속성을 찾습니다. 만약 찾지 못하면 __proto__를 통해 연결된 프로토타입 객체로 이동하여 검색을 계속하고, 이 과정을 체인을 따라 끝까지 반복합니다. 이렇게 체인을 따라가며 속성을 탐색하는 방식이 프로토타입 체이닝의 핵심입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `프로토타입 기반 상속(prototype-based inheritance)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `자바스크립트에서 객체는 자신의 프로토타입 객체로부터 속성과 메서드를 "상속"받아 사용할 수 있습니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>동적 연결</b>: 객체는 __proto__를 통해 프로토타입 객체와 연결되며, 이 연결은 런타임에 동적으로 속성이나 메서드를 참조할 수 있게 합니다.
<b>공유</b>: 프로토타입에 정의된 속성이나 메서드는 해당 프로토타입을 상속받는 모든 객체가 공유합니다. 즉, 각 객체마다 새로 생성되지 않고 프로토타입에서 참조됩니다.
<b>체인 구조</b>: 상속은 단일 객체 수준에서 끝나는 것이 아니라, 프로토타입 체인을 따라 여러 단계로 이어질 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `객체를 통해 상속으로 이해하는 예시`,
			},
			{
				type: ComponentType.CODE,
				value: `// 부모 역할을 할 프로토타입 객체
const animal = {
  eat: function() {
    console.log("\${this.name} is eating!");
  }
};

// 자식 객체 생성 및 상속 설정
const dog = {
  name: "Dog"
};
Object.setPrototypeOf(dog, animal);

// 상속받은 메서드 호출
dog.eat(); 
// 출력: "Dog is eating!"

// 프로토타입 확인
console.log(dog.__proto__ === animal); 
// 출력: true`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `dog 객체는 animal 객체를 프로토타입으로 상속받았습니다.
dog 자체에는 eat 메서드가 없지만, __proto__를 통해 animal의 eat 메서드를 상속받아 사용할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `생성자 함수를 통한 상속 예시`,
			},
			{
				type: ComponentType.CODE,
				value: `// 부모 생성자 함수
function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function() {
  console.log("\${this.name} is eating!");
};

// 자식 생성자 함수
function Dog(name) {
  Animal.call(this, name); // Animal의 속성 상속
}
Object.setPrototypeOf(Dog.prototype, Animal.prototype); // 프로토타입 상속

// 객체 생성
const myDog = new Dog("Max");

// 상속받은 메서드 호출
myDog.eat(); 
// 출력: "Max is eating!"

// 프로토타입 체인 확인
console.log(myDog.__proto__ === Dog.prototype); 
// 출력: true
console.log(myDog.__proto__.__proto__ === Animal.prototype); 
// 출력: true`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Dog는 Animal의 프로토타입을 상속받아 eat 메서드를 사용할 수 있습니다.
Animal.call(this, name)으로 <b>name 속성을 상속</b>받고, Object.setPrototypeOf로 프로토타입 체인을 연결해 <b>메서드까지 상속</b>받았습니다.
이는 전통적인 상속처럼 "부모(Animal)로부터 자식(Dog)이 기능을 물려받는다"는 개념으로 이해할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `상속으로 볼 수 있는 이유`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>속성과 메서드 재사용</b>: 객체가 프로토타입에서 속성과 메서드를 물려받아 사용하므로, 코드 중복을 줄이고 재사용성을 높이는 상속의 목적을 충족합니다.
<b>계층 구조</b>: 프로토타입 체인을 통해 부모-자식 관계와 유사한 계층 구조를 형성합니다.
<b>확장 가능성</b>: 프로토타입에 새로운 기능을 추가하면 이를 상속받는 모든 객체가 그 기능을 사용할 수 있어, 상속의 유연성을 보여줍니다.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>주의할 점</b></br>
				자바스크립트의 상속은 클래스 기반 언어처럼 고정된 계층 구조를 따르지 않고, 객체 간의 동적 연결(__proto__)에 의존합니다.
상속받은 속성이나 메서드는 실제로 객체 자체에 복사되는 것이 아니라 참조되는 것이므로, <b>프로토타입을 수정하면 모든 상속받은 객체에 영향을 미칩니다.</b>`,
				promptTypeProps: 'WARNING',
			},
		],
	},
	{
		id: 62,
		title: `[TECH-QA] 리액트 리렌더링`,
		date: '2025-04-12 15:34:33',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript', 'TECH-QA', 'react', '리렌더링'],
		preview: `리액트에서 리렌더링(re-rendering)은 컴포넌트가 다시 그려지는 과정입니다. 즉, 어떤 변화가 발생했을 때, 리액트가 해당 컴포넌트(혹은 그 자식들 포함)를 다시 실행해서 UI를 업데이트하는 걸 말합니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `리액트에서 리렌더링(re-rendering)은 컴포넌트가 다시 그려지는 과정입니다. 즉, 어떤 변화가 발생했을 때, 리액트가 해당 컴포넌트(혹은 그 자식들 포함)를 다시 실행해서 UI를 업데이트하는 걸 말합니다. 리렌더링이 너무 많이 발생하면 성능에 부정적인 영향을 줄 수 있습니다. 특히 대규모 애플리케이션이나 자주 렌더링되는 컴포넌트에서는 주의가 필요합니다. 그래서 이번 글에서는 리액트 리렌더링에 대해 이야기 해보려고 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `언제 리렌더링이 발생할까요?`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `state가 변경될 때
				props가 변경될 때
				context 값이 변경될 때
				부모 컴포넌트가 리렌더링되면 자식도 리렌더링`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위와 같은 경우에 리액트 컴포넌트에서는 리렌더링이 발생합니다. 한 컴포넌트에 여러가지 스테이트들이 존재하고 UI에서는 여러 인터렉션(버튼 클릭, 입력, 체크박스 등)이 발생하며 스테이드 값들이 변경될때 컴포넌트는 리렌더링 되고 있다고 생각하면 됩니다.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `리렌더링된다고 해서 DOM 전체를 다시 그리는 건 아닙니다. 리액트는 "Virtual DOM"을 이용해서 변경된 부분만 최소한으로 UI를 업데이트 하며 컴포넌트에 있는 함수들은 새로 생성됩니다. 예를 들면 아래 코드를 보시면 이해 하실 수 있습니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return <button onClick={handleClick}>{count}</button>;
};
`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위 함수가 리렌더링이 일어나면 `,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `버튼 클릭 → setCount 호출 → count 값 변경

변경된 state로 인해 MyComponent() 함수 전체가 다시 실행됨

count, handleClick, JSX 등이 다시 계산됨

Virtual DOM에서 변화 비교 후, 실제 DOM은 필요한 부분만 업데이트됨`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위와 같은 일이 이루어 집니다. 여기에서 UI는 최소한으로 부분 업데이트 되며 handleClick 함수는 새로 생성됩니다. 새로 생성된다 함은 함수 객체 자체가 메모리에 새로 만들어지는 것입니다. `,
			},
			{
				type: ComponentType.CODE,
				value: `const handleClick = () => setCount(count + 1);`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위 코드는 함수 표현식(= 함수 리터럴)이기 때문에 이 줄이 실행될 때마다 새로운 함수 객체가 메모리에 만들어집니다. </br> 코드로 확인해 보겠습니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const MyComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  useEffect(() => {
    console.log("handleClick 함수가 새로 만들어졌어요!");
  }, [handleClick]);

  return <button onClick={handleClick}>{count}</button>;
};
`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `버튼을 누르면 setCount로 상태가 바뀌고,

컴포넌트가 다시 렌더링됨,

그러면 handleClick도 새로 생성됨,

따라서 useEffect가 실행됨 → 콘솔에 로그 출력!`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `그럼 왜 리렌더링 때마다 새로 생성될까요?`,
			},
			{
				type: ComponentType.NORMAL,
				value: `리액트 함수형 컴포넌트는 결국 함수이자, 매번 실행되는 실행 단위입니다. 여기서 컴포넌트가 호출되면, 그 내부의 handleClick = () => { ... }도 다시 실행되는 것입니다.
그래서 이 때마다 새로운 함수 객체가 생성되는 것이라고 볼 수 있습니다. 그럼 조금 더 들어가서 리액트 컴포넌트가 리렌더링이 덜 되도록 하는 방법에 대해 생각해 보도록 하겠습니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `한 컴포넌트에서 여러 기능을 가지고 여러 스테이트들을 관리하던 것을 훅에서 스테이트 값이나 상태 값을 관리하고, 컴포넌트는 순수하게 인터렉션만 처리하도록 설계된 경우, 해당 컴포넌트는 스테이트 변경에 따른 리렌더링을 피할 수 있습니다. 하지만 이게 보장되려면 몇 가지 조건과 주의점이 필요합니다. 아래에서 이 상황을 자세히 분석하고, 왜 리렌더링이 일어나지 않을 수 있는지, 그리고 어떤 경우에 주의해야 하는지 설명하겠습니다. 코드를 통해 살펴 보겠습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `[커스텀 훅] usePdfController.js`,
			},
			{
				type: ComponentType.CODE,
				value: `const usePdfController = () => {
  const [file, setFile] = useState(null);
  const pdfInputRef = useRef(null);

  const handlePDFChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return { file, pdfInputRef, handlePDFChange };
};`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `[자식 컴포넌트] FileUpload.jsx (인터랙션만 처리)`,
			},
			{
				type: ComponentType.CODE,
				value: `const FileUpload = ({ onChange, InputRef, children }) => {
  return (
    <label>
      {children}
      <input type="file" ref={InputRef} onChange={onChange} style={{ display: 'none' }} />
    </label>
  );
};
`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `[부모 컴포넌트] StampController.jsx`,
			},
			{
				type: ComponentType.CODE,
				value: `const StampController = () => {
  const { file, pdfInputRef, handlePDFChange } = usePdfController();

  return (
    <div>
      <FileUpload InputRef={pdfInputRef} onChange={handlePDFChange}>
        PDF 업로드
      </FileUpload>
      {file?.name && <div>{file.name}</div>}
    </div>
  );
};`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>스테이트 관리</b>: 스테이트는 커스텀 훅(예: usePdfController) 또는 스토어(예: useCanvasStore)에서 관리.
<b>인터랙션 컴포넌트</b>: 특정 컴포넌트(예: FileUpload, Button)는 사용자 인터랙션(클릭, 파일 선택 등)만 처리하고, 스테이트나 상태 값을 직접 소유하지 않음.
<b>인터랙션 처리</b>: 인터랙션은 훅이나 스토어에서 제공하는 함수(예: handlePDFChange, handleDownload)를 호출.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `자식 컴포넌트 <FileUpload/> 리렌더링`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `스테이트 소유 여부`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `자식 컴포넌트 FileUpload은 자체 스테이트를 가지지 않습니다. 따라서 FileUpload 내부에서 useState나 useReducer로 인해 리렌더링이 발생할 가능성이 없습니다.
스테이트는 usePdfController에서 관리되며, file 변경은 StampController 같은 부모 컴포넌트에 영향을 줍니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `Props 안정성`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `자식 컴포넌트 FileUpload가 받는 props(예: onChange, InputRef)가 변경되지 않는 한, React는 이 컴포넌트를 리렌더링하지 않습니다.
FileUpload가 props로 받는 handlePDFChange가 메모이제이션되지 않으면, StampController가 리렌더링될 때마다 handlePDFChange는 <b>새로운 함수 참조가 생성</b>되어 FileUpload의 props가 변경된 것으로 간주되어 자식 컴포넌트 FileUpload는 리렌더링 됩니다. 이를 피하기 위해 <u>커스텀 훅 usePdfController에서 handlePDFChange를 메모이제이션(useCallback)하여, 함수가 매 렌더링마다 동일한 참조를 유지</u>하도록 합니다.
`,
			},
			{
				type: ComponentType.CODE,
				value: `// usePdfController.js
// ★★★커스텀 훅 내부에서 useCallback 사용
  const handlePDFChange = useCallback((event) => {
  const selectedFile = event.target.files[0];
  setFile(selectedFile);
}, []);`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `InputRef는 useRef로 생성된 참조로, 렌더링 간에 변경되지 않습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `부모 컴포넌트의 리렌더링 영향 `,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `부모 컴포넌트 StampController가 자주 리렌더링되면, 자식 컴포넌트 FileUpload도 기본적으로 리렌더링됩니다. 
				React는 부모가 리렌더링되면 자식도 렌더링 시도
				이를 피하기 위해서는 자식 컴포넌트인 FileUpload을 React.memo로 감싸줍니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const FileUpload = ({ onChange, InputRef, children }) => {
  console.log('FileUpload rendered');
  return (
    <label>
      {children}
      <input type="file" ref={InputRef} onChange={onChange} style={{ display: 'none' }} />
    </label>
  );
};
export default React.memo(FileUpload);`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `이렇게 하면 onChange, InputRef, children이 변경되지 않는 한 FileUpload은 리렌더링되지 않습니다. 부모컴포넌트 StampController가 file 상태 변경으로 리렌더링되더라도, 자식 컴포넌트 FileUpload가 React.memo로 감싸져 있다면 props가 변경되지 않는 한 리렌더링을 건너뜁니다`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `React.memo는 props의 얕은 비교(shallow comparison)를 수행해 props가 변경되지 않는 한 컴포넌트의 리렌더링을 방지합니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `인터랙션의 경우 (예: 파일 선택)은 handlePDFChange를 호출하고, 이는 usePdfController의 file 상태를 변경합니다. 하지만 이 변경은 StampController의 렌더링에만 직접 영향을 주고, FileUpload은 스테이트를 소유하지 않으므로 간접적인 리렌더링을 피할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `<FileUpload/> Children Props 변경`,
			},
			{
				type: ComponentType.NORMAL,
				value: `FileUpload의 children(예: "PDF 업로드")이 동적으로 생성되거나 매번 새로운 참조를 가지면, React.memo를 사용하더라도 리렌더링될 수 있습니다. children이 정적이거나 메모이제이션된 값을 사용하도록 합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `<FileUpload InputRef={pdfInputRef} onChange={handlePDFChange}>
  PDF 업로드
</FileUpload>`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `<FileUpload/> 같은 자식 컴포넌트가 스토어 상태를 직접 구독하지 않도록 하여 리렌더링을 방지 한다.`,
			},
			{
				type: ComponentType.CODE,
				value: `// 잘못된 예
const FileUpload = ({ onChange, InputRef, children }) => {
  const { file } = useCanvasStore(); // 스토어 구독
  return <input type="file" ref={InputRef} onChange={onChange} />;
};

// 올바른 예
const FileUpload = ({ onChange, InputRef, children }) => {
  return <input type="file" ref={InputRef} onChange={onChange} />;
};`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `리렌더링이 되지 않는 조건을 지켜는 방법`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `컴포넌트가 자체 스테이트를 소유하지 않고 커스텀 훅으로 관리.
				컴포넌트가 스토어나 Context를 직접 구독하지 않고 커스텀 훅으로 관리하도록 함.
전달된 props(함수, 참조, 값)가 메모이제이션되어 전달 받도록 하기.
컴포넌트가 React.memo로 감싸져 있어 부모 리렌더링의 영향을 받지 않음.`,
			},
		],
	},
	{
		id: 63,
		title: `[TECH-QA] 원시값과 참조형`,
		date: '2025-04-12 22:48:33',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript', 'TECH-QA'],
		preview: `자바스크립트에서 원시값(Primitive Values)과 참조형(Reference Types)의 동작 방식, 그리고 이들의 불변성(Immutability)과 가변성(Mutability)에 대한 설명입니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `자바스크립트에서 원시값(Primitive Values)과 참조형(Reference Types)의 동작 방식, 그리고 이들의 불변성(Immutability)과 가변성(Mutability)에 대해 설명 해 보겠습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `원시값 (Primitive Values)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>정의</b> : 원시값은 더 이상 쪼갤 수 없는 기본 데이터 타입으로, 자바스크립트에서는 undefined, null, boolean, number, bigint, string, symbol이 이에 해당합니다.
<b>복제 방식</b> : 다른 변수에 원시값을 복사할 때, 해당 값이 그대로 복사되어 새로운 변수에 저장됩니다. 이때 메모리 주소 개념은 관여하지 않고, <b>단순히 값만 복사</b>됩니다.
<b>불변성</b> : 원시값은 불변값입니다. 값을 변경하려고 하면, 기존 메모리 공간의 값을 수정하는 대신 새로운 메모리 공간에 새로운 값을 저장하고, 변수가 참조하던 메모리 주소를 변경합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `let a = 10; // a는 숫자 10을 저장
let b = a;  // b에 a의 값 10을 복사 (독립적인 메모리 공간)

console.log(a); // 10
console.log(b); // 10

b = 20; // b에 새로운 값 20을 할당 (새로운 메모리 공간 사용)
console.log(a); // 10 (a는 여전히 10을 참조)
console.log(b); // 20`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `b = a를 실행하면, a의 값 10이 복사되어 b에 저장됩니다. 이때 <b>a와 b는 각각 독립적인 메모리 공간</b>을 가리킵니다.
b = 20으로 값을 변경하면, b는 새로운 메모리 공간에 20을 저장하고 그 주소를 참조합니다. a는 영향을 받지 않습니다.
원시값은 불변적이므로, a나 b의 값을 직접 수정하는 대신 새로운 값을 메모리에 할당합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `참조형 (Reference Types)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>정의</b> : 참조형은 <span class="point">객체(Object)</span>, <span class="point">배열(Array)</span>, <span class="point">함수(Function)</span> 등으로, 여러 값을 하나의 단위로 묶은 데이터 타입입니다.
<b>복제 방식</b> : 참조형은 값이 담긴 <b>메모리 주소를 복제</b>합니다. 즉, 변수는 실제 데이터(객체)가 저장된 메모리 주소를 가리키며, 복사 시 이 주소를 복사합니다. <span class="point">따라서 복사된 변수는 원본 객체와 동일한 메모리 주소를 참조</span>합니다.
<b>가변성</b> : 참조형은 가변값입니다. 객체가 저장된 메모리 공간은 수정 가능하며, 변수는 해당 객체를 직접 변경할 수 있습니다. 객체의 프로퍼티를 추가, 갱신, 삭제할 수 있습니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `let obj1 = { name: "Alice", age: 25 }; // obj1은 객체의 메모리 주소를 참조
let obj2 = obj1; // obj2는 obj1과 동일한 메모리 주소를 참조

console.log(obj1); // { name: "Alice", age: 25 }
console.log(obj2); // { name: "Alice", age: 25 }

// obj2를 통해 객체 수정
obj2.age = 30;
obj2.city = "Seoul"; // 동적으로 프로퍼티 추가

console.log(obj1); // { name: "Alice", age: 30, city: "Seoul" }
console.log(obj2); // { name: "Alice", age: 30, city: "Seoul" }

// 프로퍼티 삭제
delete obj1.city;

console.log(obj1); // { name: "Alice", age: 30 }
console.log(obj2); // { name: "Alice", age: 30 }`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `obj2 = obj1은 obj1이 참조하는 객체의 메모리 주소를 obj2에 복사합니다. 따라서 obj1과 obj2는 동일한 객체를 가리킵니다.
obj2.age = 30 또는 obj2.city = "Seoul"로 객체를 수정하면, 동일한 메모리 공간을 참조하는 obj1에도 변경 사항이 반영됩니다.
참조형은 가변적이므로, 객체의 프로퍼티를 동적으로 추가(city), 갱신(age), 삭제(delete obj1.city)할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `원시값 vs 참조형 비교`,
			},
			{
				type: ComponentType.TABLE,
				value: ``,
				tables: {
					header: [
						{
							accessorKey: 'feature',
							header: '특징',
						},
						{
							accessorKey: 'primitive',
							header: '원시값 (Primitive)',
						},
						{
							accessorKey: 'reference',
							header: '참조형 (Reference)',
						},
					],
					contents: [
						{
							feature: '데이터 타입',
							primitive: 'number, string, boolean 등',
							reference: 'object, array, function 등',
						},
						{
							feature: '복제 방식',
							primitive: '값 자체 복사',
							reference: '메모리 주소 복사',
						},
						{
							feature: '변경 가능성',
							primitive: '불변 (새로운 값으로 교체)',
							reference: '가변 (객체 내부 수정 가능)',
						},
						{
							feature: '메모리 동작',
							primitive: '새로운 메모리 공간 생성',
							reference: '동일한 메모리 공간 공유',
						},
						{
							feature: '예시',
							primitive: 'let x = 5; x = 10;',
							reference: 'let obj = {a: 1}; obj.a = 2;',
						},
					],
				},
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `참조형의 깊은 복사(Deep Copy)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `참조형의 기본 복사는 얕은 복사(Shallow Copy)로, 동일한 객체를 참조하게 됩니다. 객체를 독립적으로 복사하려면 깊은 복사가 필요합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `얕은 복사 vs 깊은 복사`,
			},
			{
				type: ComponentType.CODE,
				value: `// 얕은 복사
let original = { name: "Bob", info: { age: 40 } };
let shallowCopy = Object.assign({}, original);

shallowCopy.name = "Charlie";
shallowCopy.info.age = 50;

console.log(original); // { name: "Bob", info: { age: 50 } } (info는 여전히 공유됨)
console.log(shallowCopy); // { name: "Charlie", info: { age: 50 } }

// 깊은 복사
let deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.name = "David";
deepCopy.info.age = 60;

console.log(original); // { name: "Bob", info: { age: 50 } } (변경되지 않음)
console.log(deepCopy); // { name: "David", info: { age: 60 } }`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `얕은 복사(Object.assign)는 최상위 프로퍼티만 복사하고, 중첩 객체(info)는 여전히 원본과 공유됩니다.
깊은 복사(JSON.parse(JSON.stringify()))는 객체 전체를 새로 생성하여 독립적인 복사본을 만듭니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `원시값 활용`,
			},
			{
				type: ComponentType.CODE,
				value: `function updateScore(score) {
    score = score + 10; // 새로운 메모리 공간에 값을 저장
    return score;
}

let playerScore = 50;
console.log(updateScore(playerScore)); // 60
console.log(playerScore); // 50 (원본 값은 변경되지 않음)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `원시값은 함수 내부에서 수정해도 원본에 영향을 주지 않습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `참조형 활용`,
			},
			{
				type: ComponentType.CODE,
				value: `function updateProfile(profile) {
    profile.age += 1; // 동일한 객체를 직접 수정
    profile.city = "Busan"; // 동적 프로퍼티 추가
}

let user = { name: "Eve", age: 28 };
updateProfile(user);

console.log(user); // { name: "Eve", age: 29, city: "Busan" }`,
			},
			{
				type: ComponentType.NORMAL,
				value: `참조형은 함수 내부에서 수정하면 원본 객체가 변경됩니다. user 원본 객체가 { name: "Eve", age: 28 } 에서 { name: "Eve", age: 29, city: "Busan" } 으로 변경 됨`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>원시값</b>: 값 자체를 복사, 불변, 재할당 시 새로운 메모리 공간 사용.
<b>참조형</b>: 메모리 주소를 복사, 가변, 객체 내부를 직접 수정 가능 (프로퍼티 추가/갱신/삭제).
원시값은 독립적이고 안전하지만 수정이 제한적이며, 참조형은 유연하지만 공유 메모리로 인해 주의가 필요합니다.
깊은 복사를 통해 참조형의 독립적인 복사가 가능합니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `자바스크립트에서 깊은 복사(Deep Copy)를 하는 방법은 여러 가지가 있습니다. 상황에 따라 간단한 객체부터 복잡한 객체까지 처리할 수 있습니다. 아래에 대표적인 방법과 예제를 정리해 보겠습니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `구조적 복제 (Structured Clone)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `structuredClone()은 브라우저 환경(Node.js 17+ 또는 최신 브라우저)에서 제공되는 깊은 복사를 위한 네이티브 메서드입니다. 이 방법은 JSON 방식보다 더 다양한 데이터 타입(예: Date, Map, Set 등)을 처리할 수 있습니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `// 원본 객체
let original = {
  name: "Bob",
  info: { age: 50, date: new Date() },
  hobbies: ["reading", "gaming"]
};

// 깊은 복사 (structuredClone 사용)
let deepCopy = structuredClone(original);

// 복사본 수정
deepCopy.name = "David";
deepCopy.info.age = 60;
deepCopy.hobbies.push("coding");

console.log(original);
// 출력: { name: "Bob", info: { age: 50, date: [Date] }, hobbies: ["reading", "gaming"] }

console.log(deepCopy);
// 출력: { name: "David", info: { age: 60, date: [Date] }, hobbies: ["reading", "gaming", "coding"] }`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `structuredClone()은 객체와 그 하위 구조를 완전히 독립적으로 복사합니다.
원본 객체의 info.age나 hobbies 배열이 수정되지 않음을 확인할 수 있습니다.
Date 객체도 별도의 인스턴스로 복사되며, JSON 방식과 달리 손실 없이 복사됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `재귀 함수를 사용한 깊은 복사`,
			},
			{
				type: ComponentType.NORMAL,
				value: `직접 깊은 복사를 구현하는 방법으로, 객체와 배열을 재귀적으로 순회하며 복사합니다. 이 방법은 커스터마이징이 가능하고, 특정 데이터 타입을 추가로 처리할 수 있습니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `// 깊은 복사 함수
function deepCopy(obj) {
  // 원시값이거나 null인 경우 그대로 반환
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // 배열인 경우
  if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item));
  }

  // 객체인 경우
  const copy = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}`,
			},
			{
				type: ComponentType.CODE,
				value: `
// 원본 객체
let original = {
  name: "Bob",
  info: { age: 50 },
  hobbies: ["reading", "gaming"]
};

// 깊은 복사
let deepCopy = deepCopy(original);

// 복사본 수정
deepCopy.name = "David";
deepCopy.info.age = 60;
deepCopy.hobbies.push("coding");

console.log(original);
// 출력: { name: "Bob", info: { age: 50 }, hobbies: ["reading", "gaming"] }

console.log(deepCopy);
// 출력: { name: "David", info: { age: 60 }, hobbies: ["reading", "gaming", "coding"] }`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `deepCopy 함수는 재귀적으로 객체의 모든 프로퍼티를 복사합니다.
배열과 객체를 구분하여 처리하며, 원시값은 그대로 반환합니다.
이 방식은 JSON 방식의 한계를 극복하고, 함수나 undefined 같은 값도 커스터마이징하여 처리할 수 있습니다(필요 시 추가 로직 구현 가능).`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `Lodash 라이브러리의 _.cloneDeep`,
			},
			{
				type: ComponentType.NORMAL,
				value: `실제 프로젝트에서는 Lodash 같은 라이브러리를 사용하는 경우가 많습니다. Lodash의 _.cloneDeep 메서드는 깊은 복사를 간편하게 수행하며, 다양한 데이터 타입을 안전하게 처리합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `// Lodash를 사용하기 위해 필요 (HTML에서는 CDN 또는 모듈로 임포트)
// 예: <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>

// 원본 객체
let original = {
  name: "Bob",
  info: { age: 50 },
  hobbies: ["reading", "gaming"]
};

// 깊은 복사 (Lodash 사용)
let deepCopy = _.cloneDeep(original);

// 복사본 수정
deepCopy.name = "David";
deepCopy.info.age = 60;
deepCopy.hobbies.push("coding");

console.log(original);
// 출력: { name: "Bob", info: { age: 50 }, hobbies: ["reading", "gaming"] }

console.log(deepCopy);
// 출력: { name: "David", info: { age: 60 }, hobbies: ["reading", "gaming", "coding"] }`,
			},

			{
				type: ComponentType.STRINGLIST,
				value: `_.cloneDeep은 Lodash 라이브러리의 깊은 복사 메서드로, 복잡한 객체 구조를 안전하게 복사합니다.
JSON 방식보다 다양한 데이터 타입(예: 함수, RegExp, Map)을 지원하며, 성능도 최적화되어 있습니다.
실제 프로젝트에서 신뢰할 수 있는 방법 중 하나입니다.`,
			},
			{
				type: ComponentType.TABLE,
				value: ``,
				tables: {
					header: [
						{
							accessorKey: 'method',
							header: '방법',
						},
						{
							accessorKey: 'advantage',
							header: `장점`,
						},
						{
							accessorKey: `disadvantage`,
							header: `단점`,
						},
					],
					contents: [
						{
							method: 'JSON.parse(JSON.stringify())',
							advantage: '간단하고 별도 라이브러리 불필요',
							disadvantage:
								'undefined, 함수, Date 등 일부 데이터 타입 손실 가능',
						},
						{
							method: 'structuredClone()',
							advantage: '네이티브 API, 다양한 데이터 타입 지원, 손실 없음',
							disadvantage:
								'브라우저/Node.js 버전 의존성 (구형 환경에서 동작하지 않을 수 있음)',
						},
						{
							method: '재귀 함수 (deepCopy)',
							advantage: '커스터마이징 가능, 모든 데이터 타입 처리 가능',
							disadvantage:
								'직접 구현해야 하며, 복잡한 객체에서 성능 고려 필요',
						},
						{
							method: 'Lodash _.cloneDeep',
							advantage:
								'신뢰성 높음, 다양한 데이터 타입 지원, 테스트 완료된 라이브러리',
							disadvantage: '외부 라이브러리 의존성 추가 필요',
						},
					],
				},
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `복잡한 객체(중첩 객체, 배열, Date, Map 포함)를 사용한 예제`,
			},
			{
				type: ComponentType.CODE,
				value: `// 원본 객체 (복잡한 구조)
let original = {
  name: "Bob",
  info: {
    age: 50,
    birthday: new Date("1975-01-01"),
    address: { city: "Seoul", country: "Korea" }
  },
  hobbies: ["reading", { type: "gaming", level: "pro" }],
  metadata: new Map([["id", 123], ["active", true]])
};

// 깊은 복사
let deepCopy = structuredClone(original);

// 복사본 수정
deepCopy.name = "David";
deepCopy.info.age = 60;
deepCopy.info.address.city = "Busan";
deepCopy.hobbies[1].level = "expert";
deepCopy.metadata.set("id", 456);

console.log(original);
// 출력: {
//   name: "Bob",
//   info: { age: 50, birthday: [Date 1975-01-01], address: { city: "Seoul", country: "Korea" } },
//   hobbies: ["reading", { type: "gaming", level: "pro" }],
//   metadata: Map { "id" => 123, "active" => true }
// }

console.log(deepCopy);
// 출력: {
//   name: "David",
//   info: { age: 60, birthday: [Date 1975-01-01], address: { city: "Busan", country: "Korea" } },
//   hobbies: ["reading", { type: "gaming", level: "expert" }],
//   metadata: Map { "id" => 456, "active" => true }
// }`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `중첩 객체(address), 배열 내 객체(hobbies[1]), Date, Map 등 다양한 데이터 타입이 포함된 복잡한 객체를 복사했습니다.
structuredClone은 모든 수준에서 독립적인 복사본을 생성하여 원본이 수정되지 않음을 보여줍니다.`,
			},
		],
	},
	{
		id: 64,
		title: `[TECH-QA] CSRF(Cross-Site Request Forgery)와 XSSCross-Site Scripting`,
		date: '2025-04-14 22:48:33',
		folder: Folder.JAVASCRIPT,
		tag: ['JavaScript', 'TECH-QA', 'XSS', 'CSRF'],
		preview: `CSRF 공격은 <b>사용자의 인증 정보를 악용</b>하여 의도하지 않은 요청을 서버에 보내는 공격입니다. 이를 방어하기 위한 주요 방법은 다음과 같습니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `CSRF 토큰 이란`,
			},
			{
				type: ComponentType.NORMAL,
				value: `CSRF 토큰은 크로스 사이트 요청 위조(Cross-Site Request Forgery, CSRF) 공격을 방어하기 위해 사용되는 고유한 랜덤 문자열입니다. 서버에서 생성되어 사용자 세션과 연결되며, 클라이언트가 서버에 요청(예: 폼 제출, AJAX 호출)을 보낼 때 이 토큰을 함께 전송하여 요청의 유효성을 검증합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `CSRF 토큰의 일반적인 흐름`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `서버에서 CSRF 토큰 생성`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `사용자가 웹 애플리케이션에 접속하면, 서버는 해당 사용자 세션에 고유한 CSRF 토큰을 생성합니다.
이 토큰은 서버의 세션에 저장됩니다(예: 세션 ID와 연계된 서버 메모리, 데이터베이스, 또는 캐시).
서버 세션은 사용자마다 고유하며, 서버가 관리하는 상태 저장소입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `클라이언트로 CSRF 토큰 전달`,
			},
			{
				type: ComponentType.NORMAL,
				value: `서버는 생성한 CSRF 토큰을 클라이언트(프론트엔드)로 전송합니다. 이는 보통 다음과 같은 방식으로 이루어집니다:`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `HTML 폼의 숨겨진 필드(<input type="hidden" name="_csrf" value="토큰값">)로 포함.
AJAX 요청을 위해 HTTP 헤더(예: X-CSRF-Token)로 전달.
쿠키로 전송(단, 쿠키 자체는 CSRF 방지에 직접 사용되지 않음).`,
			},
			{
				type: ComponentType.NORMAL,
				value: `클라이언트는 이 토큰을 받아서 저장합니다. 이 저장은 주로 프론트엔드의 메모리(예: JavaScript 변수)나 HTML 폼에 일시적으로 유지되며, 프론트엔드의 세션 스토리지나 로컬 스토리지에 저장하는 경우는 드뭅니다(보안상 권장되지 않음).`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `클라이언트가 요청 전송`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `사용자가 폼을 제출하거나 AJAX 요청을 보낼 때, <b>클라이언트는 CSRF 토큰을 요청에 포함</b>시킵니다.
예: <b>POST 요청의 바디에 _csrf 필드로 포함</b>되거나, <b>헤더에 X-CSRF-Token으로 추가</b>됨.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `서버에서 CSRF 토큰 검증`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `서버는 클라이언트로부터 받은 CSRF 토큰을 서버 세션에 저장된 토큰과 비교합니다.
토큰이 일치하면 요청이 유효한 것으로 간주하고 처리합니다.
토큰이 일치하지 않거나 없으면 요청을 거부(예: 403 Forbidden 응답).`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `세션 유지 및 토큰 갱신`,
			},
			{
				type: ComponentType.NORMAL,
				value: `요청이 성공적으로 처리된 후, 서버는 필요에 따라 새로운 CSRF 토큰을 생성하여 세션에 저장하고 클라이언트에 전달합니다.
이는 보안을 강화하기 위해 토큰을 일회성 또는 주기적으로 갱신하는 방식입니다.`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `예시`,
			},
			{
				type: ComponentType.CODE,
				value: `<form method="POST" action="/update-profile">
  <span class="point"><input type="hidden" name="_csrf" value="abc123xyz789"></span>
  <input type="text" name="username">
  <button type="submit">저장</button>
</form>`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `예제: JavaScript (Fetch API)`,
			},
			{
				type: ComponentType.CODE,
				value: `<!DOCTYPE html>
<html>
<head>
    <title>CSRF AJAX Example</title>
    <!-- CSRF 토큰을 메타 태그로 포함 -->
    <meta name="csrf-token" content="3f9a8b2c-7e5d-4a1b-9c0f-1234567890ab">
</head>
<body>
    <button onclick="submitData()">Submit via AJAX</button>

    <script>
        function submitData() {
            // 메타 태그에서 CSRF 토큰 가져오기
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

            fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': csrfToken // CSRF 토큰을 헤더에 추가
                },
                body: JSON.stringify({ username: 'john' })
            })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
        }
    </script>
</body>
</html>`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<meta name="csrf-token" content="...">는 서버에서 생성한 CSRF 토큰을 프론트엔드에 전달하는 일반적인 방법입니다.
JavaScript에서 fetch를 사용하여 POST 요청을 보낼 때, X-CSRF-Token 헤더에 토큰을 추가합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `POST /submit HTTP/1.1
Host: example.com
Content-Type: application/json
X-CSRF-Token: 3f9a8b2c-7e5d-4a1b-9c0f-1234567890ab`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `HTTP 요청 헤더`,
			},
			{
				type: ComponentType.CODE,
				value: `POST /submit HTTP/1.1
Host: example.com
Content-Type: application/json
X-CSRF-Token: 3f9a8b2c-7e5d-4a1b-9c0f-1234567890ab`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `요청 바디`,
			},
			{
				type: ComponentType.CODE,
				value: `{"username":"john"}`,
			},
			{
				type: ComponentType.NORMAL,
				value: `서버는 _csrf 값이 세션의 토큰과 일치하는지 확인 후 요청을 처리합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `CSRF 토큰의 중요성`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>공격 방어</b>: 공격자가 사용자의 인증 쿠키를 악용해 위조 요청을 보내더라도, CSRF 토큰이 없으면 서버가 요청을 거부합니다.
<b>간단한 구현</b>: 대부분의 웹 프레임워크(예: Spring, Django, Laravel)는 CSRF 토큰 생성 및 검증 기능을 기본 제공합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `추가 고려사항`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>보안</b>: 토큰이 노출되지 않도록 HTTPS를 사용하고, GET 요청에 포함시키지 않습니다.
<b>사용성</b>: AJAX 요청에서는 헤더로 토큰을 전송하는 방식이 일반적입니다.
<b>SameSite 쿠키와 조합</b>: CSRF 토큰 외에 SameSite 속성을 쿠키에 설정하면 추가적인 보호를 제공합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `쿠키 속성 설정(SameSite)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `쿠키에 SameSite 속성을 설정하여 동일 출처(Same-Origin) 또는 제한된 조건에서만 쿠키가 전송되도록 합니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>Strict</b>: 동일 도메인에서만 쿠키 전송 가능.
<b>Lax</b>: 동일 도메인 외의 GET 요청(예: 링크 이동)에서만 쿠키 전송 가능.
<b>None</b>: 모든 요청에서 쿠키 전송(단, HTTPS와 Secure 속성 필수)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<span class="point">SameSite=Lax</span> 는 대부분의 CSRF 방어에 적합하며, 사용자 경험을 해치지 않으면서 보안을 강화합니다. <span class="point">SameSite=Strict</span>는 더 강력하지만, 외부 링크를 통한 접근 시 쿠키가 전송되지 않아 기능적 제약이 있을 수 있습니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>HTTP 메서드 제한</b>: 상태 변경 요청(예: 돈 이체, 계정 수정)은 POST, PUT, DELETE와 같은 메서드만 허용하고, GET 요청은 상태 변경을 유발하지 않도록 설계합니다.
			<b>Referer/Origin 헤더 검증</b>: 요청의 출처를 확인하여 신뢰할 수 있는 도메인에서만 요청을 허용합니다. 단, Referer 헤더는 브라우저 설정에 따라 누락될 수 있으므로 보조적 수단으로 사용합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `XSS 공격 이란`,
			},
			{
				type: ComponentType.NORMAL,
				value: `XSS 공격은 악성 스크립트를 웹 페이지에 삽입하여 사용자의 브라우저에서 실행되도록 만드는 공격입니다. 이를 방어하기 위한 방법은 다음과 같습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `입력 값 유효성 검증 및 특수문자 이스케이프`,
			},
			{
				type: ComponentType.NORMAL,
				value: `사용자로부터 입력받은 데이터(예: 텍스트, URL, JSON 등)의 유효성을 검증하고, HTML, JavaScript, SQL 등에서 실행 가능한 특수문자(<span class="point"> <, >, ", ', &</span> 등)를 이스케이프 처리합니다.`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				value: `<b>이스케이프 처리란?</b></br>
				사용자가 <script>alert('악성 코드')</script>를 입력했다고 가정한다면</br>
				- <b>이스케이프 처리 전</b>: 브라우저가 이를 JavaScript로 실행하여 경고창이 표시됨(XSS 공격 성공).</br>
				- <b>이스케이프 처리 후</b>: [ < → &amp;lt; ] [ > → &ampgt; ] 로 변환되어 <script>가 텍스트로 표시됨(악성 코드 실행 방지).`,
			},
			{
				type: ComponentType.NORMAL,
				value: `사용자가 입력한 데이터(예: 텍스트 필드, 쿼리 파라미터)를 서버 또는 클라이언트에서 받으면 입력 데이터에 포함된 특수 문자를 안전한 문자(예: <)로 변환하여 변환된 데이터를 HTML, JavaScript 등의 문맥에서 출력하여 브라우저가 이를 코드가 아닌 텍스트로 처리하도록 함.`,
			},
			{
				type: ComponentType.CODE,
				value: `<!-- 입력: <script>alert('XSS')</script> --> 
<!-- 이스케이프 처리 후 출력 -->
&lt;script&gt;alert(&#39;XSS&#39;)&lt;script&gt;`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `브라우저는 위를 <script>alert('XSS')</script>로 표시하며, 실행하지 않음.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `클라이언트와 서버 모두에서 입력 검증을 수행해야 하며 서버에서는 데이터베이스 저장 전, 클라이언트에서는 사용자 경험을 위해 검증합니다. 예를 들어,  <script>는 <span class="point">&amplt;script&ampgt;</span>로 변환하여 렌더링 시 실행되지 않도록 합니다. 라이브러리(예: DOMPurify, OWASP Java Encoder)를 사용하면 이스케이프 처리가 더 안전합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `CSP(Content Security Policy) 설정`,
			},
			{
				type: ComponentType.NORMAL,
				value: `서버에서 HTTP 응답 헤더에 CSP를 설정하여 허용된 스크립트, 스타일, 이미지 등의 출처를 제한합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `Content-Security-Policy: script-src 'self' https://trusted.cdn.com;`,
			},
			{
				type: ComponentType.NORMAL,
				value: `CSP는 인라인 스크립트(<script>alert('xss')</script>)나 외부 출처의 악성 스크립트 실행을 차단합니다. 'strict-dynamic', 'nonce', 'hash'와 같은 옵션을 사용하면 더 세밀한 제어가 가능합니다. 그러나 CSP 설정은 신중히 설계해야 하며, 기존 코드와의 호환성 문제를 테스트해야 합니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: ``,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>출력 이스케이프</b>: 데이터를 렌더링할 때 문맥(HTML, 속성, JavaScript, CSS, URL 등)에 맞게 이스케이프 처리합니다. 예: HTML 속성에는 더블쿼테이션(")를 &ampquot;로 변환.
			<b>안전한 API 사용</b>: innerHTML 대신 textContent나 setAttribute를 사용해 스크립트 실행을 방지합니다.
			<b>쿠키 보호</b>: HttpOnly 속성을 쿠키에 설정하여 JavaScript에서 쿠키에 접근하지 못하도록 제한합니다.
			<b>프레임워크 보안</b>: React, Angular 등 현대 프레임워크는 기본적으로 XSS 방어를 제공하지만, dangerouslySetInnerHTML 같은 기능을 사용할 때는 주의가 필요합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `HTTPS를 통한 통신 보안`,
			},
			{
				type: ComponentType.NORMAL,
				value: `HTTP는 데이터가 평문으로 전송되어 도청 및 조작에 취약합니다. HTTPS는 <b>SSL/TLS</b>를 통해 통신을 암호화하여 보안을 강화합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `HTTPS 적용`,
			},
			{
				type: ComponentType.NORMAL,
				value: `HSTS는 웹 브라우저에게 해당 사이트는 항상 HTTPS로만 접속해야 한다고 지시하는 보안 기능입니다. 한 번 브라우저가 이 헤더를 받으면, 이후엔 자동으로 HTTP 요청을 HTTPS로 업그레이드합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `HSTS 헤더 예시`,
			},
			{
				type: ComponentType.NORMAL,
				value: `서버에서 다음과 같은 헤더를 응답에 추가합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `Strict-Transport-Security: max-age=31536000; includeSubDomains`,
			},
			{
				type: ComponentType.NORMAL,
				value: `HTTPS는 데이터 무결성과 기밀성을 보장하며, CSRF와 XSS 공격에서 쿠키나 토큰이 탈취되는 것을 방지합니다. HSTS는 중간자 공격(MITM)을 줄이는 데 효과적입니다. 또한, 최신 TLS 버전(예: TLS 1.3)과 강력한 암호화 알고리즘을 사용하는 것이 중요합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `추가 보안 고려사항`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>인증서 관리</b>: 신뢰할 수 있는 인증 기관(CA)에서 발급받은 SSL/TLS 인증서를 사용하고, 만료 전에 갱신합니다.
			<b>혼합 콘텐츠 방지</b>: HTTPS 페이지에서 HTTP 리소스(이미지, 스크립트 등)를 로드하지 않도록 주의합니다. 브라우저는 혼합 콘텐츠를 차단하거나 경고를 표시할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `종합적인 보안 전략`,
			},
			{
				type: ComponentType.NORMAL,
				value: `CSRF와 XSS 방어는 단일 기법에 의존하지 않고, 여러 방어 계층을 조합하여 적용하는 심층 방어(Defense-in-Depth) 전략이 필요합니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>개발 단계</b>: 코드 리뷰, 보안 라이브러리 사용, OWASP 가이드라인 준수.
			<b>배포 단계</b>: 보안 헤더 설정(CSP, HSTS, X-Frame-Options 등), 취약점 스캔.
			<b>운영 단계</b>: 로그 모니터링, WAF(Web Application Firewall) 도입, 정기적인 보안 패치.`,
			},
		],
	},
	{
		id: 65,
		title: `[TECH-QA] 리액트에서 XSS 방어`,
		date: '2025-04-15 11:08:33',
		folder: Folder.JAVASCRIPT,
		tag: ['react', 'TECH-QA', 'XSS'],
		preview: `React는 기본적으로 XSS(크로스 사이트 스크립팅) 공격을 방어하기 위한 강력한 메커니즘을 제공합니다. React의 설계 자체가 XSS 취약점을 줄이도록 만들어져 있으며, 이를 통해 사용자 입력이나 동적 데이터를 안전하게 렌더링할 수 있습니다. 하지만 특정 상황에서는 주의가 필요합니다. 아래에서 React의 XSS 방어 메커니즘과 주의사항을 정리하겠습니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `React는 기본적으로 XSS(크로스 사이트 스크립팅) 공격을 방어하기 위한 강력한 메커니즘을 제공합니다. React의 설계 자체가 XSS 취약점을 줄이도록 만들어져 있으며, 이를 통해 사용자 입력이나 동적 데이터를 안전하게 렌더링할 수 있습니다. 하지만 특정 상황에서는 주의가 필요합니다. 아래에서 React의 XSS 방어 메커니즘과 주의사항을 정리하겠습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `React의 기본 XSS 방어 메커니즘`,
			},
			{
				type: ComponentType.NORMAL,
				value: `React는 JSX와 내부 렌더링 방식 덕분에 XSS 공격을 방지하는 몇 가지 기본 기능을 제공합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `자동 이스케이프 처리`,
			},
			{
				type: ComponentType.NORMAL,
				value: `React는 JSX에서 동적 데이터를 렌더링할 때, 기본적으로 HTML 특수 문자를 이스케이프 처리합니다. 예를 들어, <, >, & 같은 문자는 <span class="point">&amplt; &ampgt; &ampamp;</span> 로 변환되어 텍스트로 표시됩니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `function App() {
  const userInput = "<script>alert('XSS')</script>";
  return <div>{userInput}</div>;
}`,
			},
			{
				type: ComponentType.NORMAL,
				value: `브라우저에 <span class="point"><script>alert('XSS')</script></span> 가 이스케이프 처리 후 <span class="point">&amplt;script&ampgt;alert('XSS')&amplt;/script&ampgt;</span>  텍스트로 표시되며, 스크립트는 실행되지 않음. React는 {} 내부의 문자열을 textContent로 처리하여 HTML로 해석되지 않도록 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `JSX의 안전한 구조`,
			},
			{
				type: ComponentType.NORMAL,
				value: `JSX는 HTML처럼 보이지만, 실제로는 JavaScript 객체로 컴파일됩니다. 따라서 사용자가 입력한 데이터가 직접 HTML로 삽입되지 않고, React가 관리하는 DOM API를 통해 안전하게 렌더링됩니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<div>{userInput}</div>는 React.createElement로 변환되어 안전하게 처리됨.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `속성 이스케이프`,
			},
			{
				type: ComponentType.NORMAL,
				value: `HTML 속성(예: value, href)에 동적 데이터를 삽입할 때도 React는 특수 문자를 이스케이프하여 악성 코드(예: javascript:alert('XSS'))가 실행되지 않도록 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `안전하지 않은 dangerouslySetInnerHTML 사용.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `스크립트 실행 가능하여 XSS 취약하다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const userInput = "<script>alert('XSS')</script>";
return <div dangerouslySetInnerHTML={{ __html: userInput }} />;`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `안전한 방법 dangerouslySetInnerHTML 사용`,
			},
			{
				type: ComponentType.NORMAL,
				value: `사용자 입력을 삽입하기 전에 반드시 DOMPurify 같은 라이브러리로 정화(sanitize).`,
			},
			{
				type: ComponentType.CODE,
				value: `import DOMPurify from "dompurify";
const userInput = "<script>alert('XSS')</script>";
const sanitized = DOMPurify.sanitize(userInput);
return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<script> 태그가 제거되거나 이스케이프되어 안전하게 렌더링.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `React에서 XSS 방어를 강화하는 방법`,
			},
			{
				type: ComponentType.NORMAL,
				value: `React의 기본 방어에 더해 추가적인 보안 조치를 적용하면 더 안전한 애플리케이션을 만들 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `사용자 입력 검증`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `클라이언트와 서버에서 입력 데이터를 검증하여 예상치 못한 형식(예: 스크립트 태그, 특수 문자)을 차단.
예: 이메일 입력은 이메일 형식이 맞는지 확인.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `DOMPurify 사용`,
			},
			{
				type: ComponentType.NORMAL,
				value: `DOMPurify는 입력된 HTML 문자열을 분석하고, 안전하지 않은 요소를 제거하거나 변환하여 XSS 공격을 방지합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `<script>alert('XSS')</script>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `"" (빈 문자열, <script> 태그 완전 제거).
이유: <script>는 기본적으로 화이트리스트에 없음.`,
			},
			{
				type: ComponentType.CODE,
				value: `<img src="x" onerror="alert('XSS')">`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `출력: <img src="x">
이유: onerror 속성은 위험하므로 제거, src는 유지.`,
			},
			{
				type: ComponentType.CODE,
				value: `<a href="javascript:alert('XSS')">Click</a>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `출력: <a>Click</a> 또는 <a href="#">Click</a> (구성에 따라 다름).
이유: javascript: 프로토콜은 차단됨.`,
			},
			{
				type: ComponentType.CODE,
				value: `<div>Hello <b>World</b></div>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `출력: <div>Hello <b>World</b></div>
이유: <div>, <b>는 안전한 태그로 화이트리스트에 포함.`,
			},
			{
				type: ComponentType.CODE,
				value: `<style>body { background: url(javascript:alert('XSS')); }</style>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `출력: <style>body { background: url(about:blank); }</style> 또는 "".
이유: 위험한 CSS 표현식 제거.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `Content Security Policy(CSP)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `서버에서 CSP 헤더를 설정하여 허용된 스크립트만 실행되도록 제한.`,
			},
			{
				type: ComponentType.CODE,
				value: `Content-Security-Policy: script-src 'self' https://trusted.cdn.com;`,
			},
			{
				type: ComponentType.NORMAL,
				value: `React 앱에서는 인라인 스크립트를 최소화하고, nonce나 strict-dynamic을 활용.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `안전한 API 사용`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `innerHTML 대신 textContent 또는 setAttribute 사용.
React의 기본 렌더링 방식을 따르고, 직접 DOM 조작을 피함.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `HTTPS 사용`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `데이터 전송 시 HTTPS를 사용하여 데이터 탈취를 방지.
React 앱은 보통 HTTPS로 배포되므로, 서버 설정에서 확인.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `서버 측 방어`,
			},
			{
				type: ComponentType.NORMAL,
				value: `React는 클라이언트 측 프레임워크이므로, 서버에서도 XSS 방어를 적용(예: 입력 검증, 출력 이스케이프).`,
			},
		],
	},
	{
		id: 66,
		title: `[TECH-QA] 브라우저 렌더링 과정`,
		date: '2025-04-17 12:06:33',
		folder: Folder.JAVASCRIPT,
		tag: ['브라우저', 'TECH-QA'],
		preview: `브라우저의 HTML 렌더링은 웹 페이지를 화면에 표시하기 위해 브라우저가 HTML, CSS, JavaScript 등의 리소스를 처리하고 시각적으로 표현하는 과정입니다. 이 과정은 브라우저의 렌더링 엔진(예: Chrome의 Blink, Firefox의 Gecko, Safari의 WebKit)에 의해 수행되며, 여러 단계로 나눌 수 있습니다. 아래에서 이 과정을 자세히 설명하겠습니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `브라우저의 HTML 렌더링은 <b>웹 페이지를 화면에 표시</b>하기 위해 브라우저가 <b>HTML, CSS, JavaScript 등의 리소스를 처리하고 시각적으로 표현하는 과정</b>입니다. 이 과정은 브라우저의 렌더링 엔진(예: Chrome의 Blink, Firefox의 Gecko, Safari의 WebKit)에 의해 수행되며, 여러 단계로 나눌 수 있습니다. 아래에서 이 과정을 자세히 설명하겠습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `브라우저 렌더링 과정의 개요`,
			},
			{
				type: ComponentType.NORMAL,
				value: `브라우저는 HTML 문서를 받아 화면에 렌더링하기 위해 다음 주요 단계를 거칩니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `HTML 파싱 및 DOM 생성
CSS 파싱 및 CSSOM 생성
렌더 트리(Render Tree) 생성
레이아웃(Layout, Reflow)
페인팅(Painting)
컴포지팅(Compositing, 선택적)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이 과정은 <b>Critical Rendering Path(CRP, 중요 렌더링 경로)</b>라고 불리며, 웹 페이지 로딩 속도와 사용자 경험에 직접적인 영향을 미칩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `HTML 파싱 및 DOM 생성`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>HTML 파싱</b>: 브라우저는 서버로부터 받은 HTML 파일을 바이트 단위로 읽어 문자를 해석하고, 이를 토큰(예: 태그, 속성, 텍스트)으로 변환합니다. 이 토큰들은 트리 구조로 조직화됩니다.
<b>DOM(Document Object Model) 생성</b>: 파싱된 HTML은 계층적 트리 구조인 DOM으로 변환됩니다. DOM은 HTML 요소와 그 관계를 나타내는 객체 모델로, 각 요소는 노드로 표현됩니다.</br> - 예) <span class="point">&lt;div>&lt;p>Hello&lt;/p>&lt;/div>는 &lt;div>와 &lt;p>가 부모-자식 관계로 DOM 트리에 추가됩니다.</span> `,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `비동기 리소스 처리: HTML 파싱 중 &lt;script>, &lt;img>, &lt;link> 등의 외부 리소스를 만나면 브라우저는 해당 리소스를 병렬적으로 요청합니다. 단, &lt;script> 태그는 기본적으로 파싱을 차단(blocking)할 수 있으므로 async 또는 defer 속성을 사용하는 것이 일반적입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `CSS 파싱 및 CSSOM 생성`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>CSS 파싱</b>: HTML 파싱과 병렬적으로, 브라우저는 &lt;link> 태그나 &lt;style> 태그를 통해 CSS 파일 또는 스타일을 읽습니다. CSS도 토큰화되고 파싱되어 트리 구조로 변환됩니다.
<b>CSSOM(CSS Object Model) 생성</b>: 파싱된 CSS는 CSSOM이라는 트리 구조로 저장됩니다. CSSOM은 각 요소에 적용될 스타일 규칙(예: color, margin)을 정의합니다.
CSS는 계층적이며, 상속과 우선순위(예: !important, 선택자 특이성)에 따라 스타일이 결정됩니다.
<b>렌더링 차단</b>: CSS는 렌더링을 차단하는 리소스입니다. CSSOM이 완성되기 전에는 화면 렌더링이 시작되지 않으므로, CSS 파일을 최적화(예: 최소화, 인라인 CSS 사용)하는 것이 중요합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `렌더 트리(Render Tree) 생성`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>DOM과 CSSOM 결합</b>: 브라우저는 DOM과 CSSOM을 결합하여 <b>렌더 트리를 생성</b>합니다. 렌더 트리는 화면에 실제로 표시될 요소들만 포함합니다.</br> - 예) display: none이 적용된 요소나 <head> 내부의 메타데이터는 렌더 트리에 포함되지 않습니다.
렌더 트리는 각 노드에 대해 스타일 정보(예: 색상, 크기)와 구조적 정보를 포함합니다.
<b>렌더 트리의 역할</b>: <u>렌더 트리는 레이아웃 단계에서 요소의 크기와 위치를 계산</u>하는 데 사용됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `레이아웃(Layout, Reflow)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>박스 모델 기반 계산</b>: 렌더 트리의 각 노드는 <b>CSS 박스 모델(콘텐츠, 패딩, 테두리, 마진)을 기반</b>으로 <u>크기와 위치를 계산</u>합니다.
<b>뷰포트 기준 배치</b>: 브라우저는 뷰포트(화면 크기)를 기준으로 요소의 정확한 위치(x, y 좌표)와 크기(width, height)를 결정합니다.</br> - 예: position: absolute는 부모 요소를 기준으로, float는 주변 콘텐츠 흐름에 따라 배치됩니다.
<b>리플로우(Reflow)</b>: 레이아웃 계산은 초기 렌더링뿐만 아니라 DOM이나 CSS 변경(예: JavaScript로 스타일 변경, 창 크기 조정) 시에도 발생할 수 있습니다. 리플로우는 성능에 큰 영향을 미치므로 최소화해야 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `페인팅(Painting)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>픽셀 변환</b>: 레이아웃 단계에서 계산된 <b>렌더 트리를 기반으로, 브라우저는 각 요소를 화면의 픽셀로 변환</b>합니다.</br> - 색상, 그림자, 텍스트, 이미지 등 시각적 스타일이 적용됩니다.
<b>레이어(Layer)</b>: 복잡한 페이지에서는 요소를 여러 레이어로 나누어 페인팅합니다. </br>예) transform이나 opacity를 사용하는 요소는 별도의 레이어로 처리될 수 있습니다.
<b>GPU 가속</b>: 현대 브라우저는 <b>GPU를 활용해 페인팅을 가속화</b>합니다. <b>CSS 속성 중 will-change를 사용</b>하면 특정 요소의 렌더링을 최적화할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `will-change를 사용한 CSS 애니메이션 최적화`,
			},
			{
				type: ComponentType.CODE,
				value: `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>will-change 예시</title>
  <style>
    .box {
      width: 100px;
      height: 100px;
      background-color: #3498db;
      position: relative;
      transition: transform 0.3s ease;
      /* 브라우저에 transform 변경을 미리 알림 */
      will-change: transform;
    }

    .box:hover {
      transform: translateX(200px); /* 마우스 호버 시 이동 */
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>`,
				codePreviewProps: true,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>will-change</b>: transform;: 브라우저에 .box 요소의 transform 속성이 변경될 것임을 알려, 해당 요소를 GPU 레이어로 승격시켜 렌더링을 가속화합니다.
<b>효과</b>: 마우스를 .box 위에 올리면 요소가 부드럽게 200px 오른쪽으로 이동합니다. will-change로 인해 브라우저는 이 변환을 미리 준비하여 렌더링 성능을 최적화합니다.
<b>주의사항</b> </br> - will-change를 과도하게 사용하면 메모리 사용량이 증가할 수 있으므로, 실제로 애니메이션이나 변경이 빈번한 요소에만 적용하세요. </br> - 애니메이션이 끝난 후에는 will-change를 제거하는 것이 좋습니다(예: JavaScript로 동적으로 추가/제거).`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `스크롤 애니메이션`,
			},
			{
				type: ComponentType.CODE,
				value: `.scroll-element {
  position: fixed;
  top: 0;
  will-change: transform;
  transition: transform 0.5s ease;
}

/* JavaScript로 스크롤 시 transform 변경 */
document.addEventListener('scroll', () => {
  document.querySelector('.scroll-element').style.transform = "translateY(\${window.scrollY}px)";
});`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이 경우, will-change: transform은 스크롤에 따른 요소 이동을 GPU로 처리하여 부드러운 렌더링을 보장합니다. will-change는 GPU 가속을 활용해 애니메이션이나 전환 성능을 개선하지만, 적절히 사용해야 리소스 낭비를 피할 수 있습니다. 위 예시는 transform에 초점을 맞췄지만, opacity, scroll-position 등 다른 속성에도 적용 가능합니다.`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `컴포지팅(Compositing, 선택적)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>레이어 합성</b>: 페인팅된 레이어를 최종적으로 합쳐 화면에 표시합니다. 컴포지팅은 GPU를 활용해 빠르게 수행됩니다.
<b>애니메이션 최적화</b>: transform이나 opacity 같은 속성은 레이아웃이나 페인팅을 유발하지 않고 컴포지팅 단계에서만 처리되므로 성능이 좋습니다.
<b>성능 고려</b>: 컴포지팅은 리플로우나 리페인팅보다 비용이 적으므로, 애니메이션에 적합한 속성을 사용하는 것이 중요합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `박스 모델과의 연관성`,
			},
			{
				type: ComponentType.NORMAL,
				value: `CSS 박스 모델은 렌더링 과정, 특히 레이아웃 단계에서 핵심적인 역할을 합니다`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `각 HTML 요소는 박스 모델(콘텐츠, 패딩, 테두리, 마진)을 기반으로 사각형 박스로 계산됩니다.
레이아웃 단계에서 브라우저는 박스 모델의 속성(width, height, margin, padding, border)을 사용해 요소의 크기와 위치를 결정합니다.
box-sizing 속성은 박스 크기 계산 방식(content-box vs border-box)을 정의하며, 레이아웃의 예측 가능성에 영향을 미칩니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `다음은 간단한 HTML과 CSS로 렌더링 과정을 보여주는 예제입니다:`,
			},
			{
				type: ComponentType.CODE,
				value: `<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      width: 200px;
      height: 100px;
      margin: 20px;
      padding: 10px;
      border: 5px solid blue;
      background-color: lightgray;
    }
  </style>
</head>
<body>
  <div>Hello, World!</div>
</body>
</html>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>HTML 파싱</b>: &lt;div>와 텍스트가 DOM 트리로 변환됩니다.
<b>CSS 파싱</b>: 스타일이 CSSOM으로 변환됩니다.
<b>렌더 트리</b>: &lt;div>와 스타일이 결합된 렌더 트리가 생성됩니다.
<b>레이아웃</b>: 박스 모델을 기반으로 &lt;div>의 크기(230px × 130px, content-box 기준)와 위치가 계산됩니다.
<b>페인팅</b>: &lt;div>의 배경색, 테두리, 텍스트가 화면에 그려집니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `추가 고려사항`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>Progressive Rendering</b>: 브라우저는 모든 리소스가 로드되기 전에 부분적으로 렌더링을 시작할 수 있습니다. 이를 통해 사용자에게 더 빠르게 콘텐츠를 보여줄 수 있습니다.
<b>Web Vitals</b>: Google의 Core Web Vitals(LCP, FID, CLS)는 렌더링 성능을 측정하는 지표로, 최적화 목표로 사용됩니다. </br></br> - <b>LCP(Largest Contentful Paint)</b>: 주요 콘텐츠 렌더링 시간. </br> - <b>FID(First Input Delay)</b>: 사용자 입력에 대한 응답성. </br> - <b>CLS(Cumulative Layout Shift)</b>: 레이아웃 이동의 안정성.`,
			},
		],
	},
	{
		id: 67,
		title: `[TECH-QA] 리플로우(Reflow)와 리페인트(Repaint)는 브라우저의 렌더링 과정`,
		date: '2025-04-17 14:07:33',
		folder: Folder.JAVASCRIPT,
		tag: ['브라우저', 'TECH-QA', 'Reflow', 'Repaint', '리플로우', '리페인트'],
		preview: `리플로우(Reflow)와 리페인트(Repaint)는 브라우저의 렌더링 과정에서 발생하는 두 가지 중요한 단계로, 웹 페이지의 시각적 업데이트와 관련이 있습니다. 이들은 DOM이나 CSS의 변경으로 인해 요소의 레이아웃이나 스타일이 수정될 때 브라우저가 화면을 다시 그리는 과정에서 발생합니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `리플로우(Reflow)와 리페인트(Repaint)는 브라우저의 렌더링 과정에서 발생하는 두 가지 중요한 단계로, 웹 페이지의 시각적 업데이트와 관련이 있습니다. 이들은 <u>DOM이나 CSS의 변경으로 인해 요소의 레이아웃이나 스타일이 수정될 때 브라우저가 화면을 다시 그리는 과정</u>에서 발생합니다. 먼저 브라우저의 렌더링 과정을 설명하겠습니다. 브라우저 렌더링은 웹 페이지를 화면에 표시하기 위해 여러 단계를 거칩니다. 아래는 주요 단계를 간단히 설명한 내용입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `브라우저 렌더링 과정`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `DOM 및 CSSOM 생성`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `HTML을 파싱하여 DOM(Document Object Model) 트리를 생성합니다.
CSS를 파싱하여 CSSOM(CSS Object Model) 트리를 생성합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `렌더 트리(Render Tree) 생성`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `DOM과 CSSOM을 결합하여 실제 화면에 표시할 요소들로 구성된 렌더 트리를 만듭니다. 표시되지 않는 요소(예: display: none)는 포함되지 않습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `레이아웃(Layout, Reflow)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `렌더 트리의 각 요소의 위치와 크기를 계산합니다. 이 과정에서 뷰포트 크기, 요소의 스타일 등이 반영됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `페인트(Paint, Repaint)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `계산된 렌더 트리를 기반으로 픽셀 단위로 화면에 그리는 과정을 수행합니다. 색상, 이미지, 텍스트 등이 포함됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `컴포지팅(Compositing)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `페인트된 레이어를 합성하여 최종 화면을 렌더링합니다. GPU를 활용하여 레이어 이동, 변형(예: transform: translateX(100px)) 등을 효율적으로 처리합니다.`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `리플로우(Reflow)란?`,
			},
			{
				type: ComponentType.NORMAL,
				value: `리플로우는 브라우저가 요소의 <b>레이아웃(크기, 위치 등)</b>을 다시 계산하는 과정입니다. 이는 렌더 트리의 구조나 요소의 기하학적 속성(예: 너비, 높이, 위치)이 변경될 때 발생합니다. 리플로우는 레이아웃 단계에서 수행되며, 변경된 요소뿐만 아니라 그에 영향을 받는 다른 요소(예: 부모, 자식, 형제 요소)의 레이아웃도 재계산할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `리플로우의 비용`,
			},
			{
				type: ComponentType.NORMAL,
				value: `리플로우는 계산량이 많아 성능에 큰 영향을 미칩니다. 특히, 변경된 요소가 다른 요소(예: 부모나 자식)에 영향을 미치면 전체 렌더 트리 또는 큰 부분을 재계산해야 할 수 있습니다.
페이지가 복잡하거나 요소가 많을수록 리플로우 비용이 증가합니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `기하학적 속성 변경: width, height, margin, padding, border, top, left, position 등.
박스 모델 관련 속성 변경: box-sizing, display (예: block → none).`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `리페인트(Repaint)란?`,
			},
			{
				type: ComponentType.NORMAL,
				value: `리페인트는 요소의 시각적 스타일(예: 색상, 배경, 그림자 등)이 변경되었을 때, 브라우저가 해당 요소를 화면에 다시 그리는 과정입니다. 리페인트는 페인팅 단계에서 수행되며, 레이아웃(예: 크기나 위치) 변경 없이 스타일만 업데이트합니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `color, background-color, box-shadow, border-color, visibility 등.
opacity 변경 (단, GPU 가속이 적용되면 리페인트를 피할 수 있음).`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `리페인트의 비용`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `리페인트는 리플로우보다 계산 비용이 적습니다. 레이아웃을 재계산하지 않고 픽셀만 다시 그리기 때문입니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `그러나 페이지에 많은 요소가 있거나 복잡한 스타일(예: 그림자, 그라디언트)이 적용된 경우 리페인트도 성능에 영향을 줄 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `리플로우와 리페인트의 관계`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>리플로우 → 리페인트</b>: 리플로우는 레이아웃을 변경하므로, 레이아웃이 바뀐 요소는 다시 그려져야 하므로 리페인트가 발생합니다.
<b>리페인트만 발생</b>: 레이아웃에 영향을 주지 않는 스타일 변경(예: color, background)은 리페인트만 유발합니다.
<b>컴포지팅</b>: <span class="point">현대 브라우저에서는 transform이나 opacity 같은 속성 변경은 레이아웃이나 페인팅 없이 컴포지팅 단계에서 처리됩니다. 이는 리플로우와 리페인트를 모두 피할 수 있어 성능이 뛰어납니다.</span> `,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `리플로우와 리페인트의 예시`,
			},
			{
				type: ComponentType.NORMAL,
				value: `다음은 React 컴포넌트에서 버튼 클릭 시 박스의 스타일을 변경하여 리플로우와 리페인트를 유발하는 예제입니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `// src/App.jsx
				
import { useState } from 'react';

function App() {
  const [boxStyle, setBoxStyle] = useState({
    width: '200px',
    height: '100px',
    margin: '20px',
    backgroundColor: 'lightblue',
  });

  const changeStyle = () => {
    setBoxStyle({
      width: '300px', // 리플로우 유발 (레이아웃 변경)
      height: '150px', // 리플로우 유발
      margin: '30px', // 리플로우 유발
      backgroundColor: 'lightgreen', // 리페인트 유발
    });
  };

  return (
    <div>
      <h1>리플로우와 리페인트 예제</h1>
      <div style={boxStyle}>
        테스트 박스
      </div>
      <button onClick={changeStyle}>스타일 변경</button>
    </div>
  );
}

export default App;`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>리플로우 유발</b> : width, height, margin 변경은 요소의 레이아웃을 수정하므로 리플로우가 발생합니다. 이는 박스 모델의 크기와 위치를 재계산합니다.
<b>리페인트 유발</b> : backgroundColor 변경은 레이아웃에 영향을 주지 않으므로 리페인트만 발생합니다. 하지만 위에서 리플로우가 발생했으므로 리페인트는 포함됩니다.
<b>문제점</b> </br> - 여러 스타일 변경이 개별적으로 적용되면 React의 상태 업데이트로 인해 불필요한 리렌더링이 발생할 수 있습니다. </br> - 레이아웃 변경은 성능 비용이 크므로 빈번한 변경 시 사용자 경험이 저하될 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				value: `컴포지팅 활용 및 React 최적화`,
				headingType: 'h2',
			},
			{
				type: ComponentType.NORMAL,
				value: `이 예제는 리플로우와 리페인트를 최소화하기 위해 <b>transform과 같은 컴포지팅 속성을 사용</b> 하고, React의 렌더링 최적화 기법을 적용합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `// src/App.jsx

import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [isTransformed, setIsTransformed] = useState(false);
  const [isColorChanged, setIsColorChanged] = useState(false);

  const toggleTransform = useCallback(() => {
    setIsTransformed((prev) => !prev);
  }, []);

  const toggleColor = useCallback(() => {
    setIsColorChanged((prev) => !prev);
  }, []);

  return (
    <div>
      <h1>최적화된 리플로우/리페인트 예제</h1>
      <div
        className={"box \${isTransformed ? "transformed" : ""} \${
          isColorChanged ? "color-changed" : ""
        }"}
      >
        테스트 박스
      </div>
      <button onClick={toggleTransform}>위치 이동 (Transform)</button>
      <button onClick={toggleColor}>색상 변경</button>
    </div>
  );
}

export default App;`,
			},
			{
				type: ComponentType.CODE,
				value: `/* src/App.css */
.box {
  width: 200px;
  height: 100px;
  margin: 20px;
  background-color: lightblue;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.transformed {
  transform: translateX(100px); /* 컴포지팅만 유발 */
}

.color-changed {
  background-color: lightgreen; /* 리페인트만 유발 */
}`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `컴포지팅 활용`,
			},
			{
				type: ComponentType.NORMAL,
				value: `transform: translateX(100px)는 레이아웃이나 픽셀을 다시 계산하지 않고 GPU를 활용해 컴포지팅 단계에서 처리됩니다. 이는 리플로우와 리페인트를 피합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `리페인트만 유발`,
			},
			{
				type: ComponentType.NORMAL,
				value: `background-color 변경은 리페인트만 유발하며, 레이아웃에 영향을 주지 않습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `React 최적화`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>클래스 기반 스타일 변경</b>: style 객체를 직접 변경하는 대신 CSS 클래스를 토글하여 리렌더링 비용을 줄입니다.
<b>CSS 애니메이션</b>: transition 속성을 사용해 부드러운 애니메이션을 구현하며, 브라우저의 최적화(GPU 가속)를 활용합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `브라우저 개발자 도구 활용`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Chrome DevTools의 Performance 탭에서 리플로우와 리페인트를 기록하여 어떤 속성이 성능 병목을 일으키는지 확인.
Rendering 탭에서 "Paint Flashing"을 활성화하면 리페인트 영역을 시각적으로 확인 가능.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `Core Web Vitals 고려`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<span class="point">리플로우</span>는 <b>CLS(Cumulative Layout Shift)를 유발</b>할 수 있으므로, 레이아웃 이동을 최소화.
<span class="point">리페인트</span>는 <b>LCP(Largest Contentful Paint)에 영향</b>을 줄 수 있으므로, 중요한 콘텐츠의 렌더링을 최적화 하여 사용 하도록 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `라이브러리 사용`,
			},
			{
				type: ComponentType.NORMAL,
				value: `React에서 애니메이션을 위해 framer-motion이나 react-spring 같은 라이브러리를 사용하면 컴포지팅을 자동으로 활용 가능합니다.`,
			},
		],
	},
	{
		id: 68,
		title: `[TECH-QA] 애니메이션 분석 (Reflow와 Repaint 이론)`,
		date: '2025-04-22 12:54:33',
		folder: Folder.JAVASCRIPT,
		tag: [
			'브라우저',
			'TECH-QA',
			'Reflow',
			'Repaint',
			'리플로우',
			'리페인트',
			'웹성능 최적화',
		],
		preview: `웹 애니메이션 이미지를 보고 전체적인 흐름에 따라 리플로우 리페인트 쟁크현상 병목현상등을 알아보고 이해하는 시간을 가지려고 합니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `웹 애니메이션 이미지를 보고 전체적인 흐름에 따라 리플로우 리페인트 쟁크현상 병목현상등을 알아보고 이해하는 시간을 가지려고 합니다.`,
			},
			{
				type: ComponentType.IMAGE_LOADER,
				value: `리플로우(Reflow)란?`,
				imageloader: {
					imgPath: 'ImageOptimizationSample1.jpg',
					alt: '이미지최적화 샘플1',
					width: '55%',
					round: '12px',
				},
			},
			{
				type: ComponentType.NORMAL,
				value: `그래프를 클릭하거나 페이지에 들어서면 애니메이션이 실행되는 페이지이다.`,
			},
			{
				type: ComponentType.IMAGE_LOADER,
				value: ``,
				imageloader: {
					imgPath: 'ImageOptimizationSample2.jpg',
					alt: '이미지최적화 샘플2',
					width: '80%',
					round: '12px',
				},
			},
			{
				type: ComponentType.NORMAL,
				value: `위의 이미지에서 Timings는 그래프를 클릭 할때마다 리액트 함수가 실행되는 타이밍을 보여주고 있으며 그 타이밍에 맞춰 브라우저에 화면을 그리는 작업을 수행하는 내용을 아래 에서 확인 할 수 있다.`,
			},
			{
				type: ComponentType.IMAGE_LOADER,
				value: ``,
				imageloader: {
					imgPath: 'ImageOptimizationSample3.jpg',
					alt: '이미지최적화 샘플3',
					width: '80%',
					round: '12px',
				},
			},
			{
				type: ComponentType.NORMAL,
				value: `Timings 아래 부분을 확대해 보았다. 애니메이션을 변경될때마다 브라우저에 렌더링 하는 과정을 반복하는 것을 확인 할 수 있다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `➀ 스타일을 다시 계산하고 (dom tree, cssom tree를 생성하고 렌더 트리를 새로 생성 과정)
➁ 레이아웃 과정
③ 페인트 과정
④ 레이어 합성 과정`,
			},
			{
				type: ComponentType.NORMAL,
				value: `5번의 경우 점선이 그어져 있는데 이 점선은 브라우저 화면에 렌더링 화면이 노출되어야 하는 시점이다. 하지만 마지막 레이어 합성과정이 완료 되지 않은 상태로 보여 진다.

위와 같은 현상이 일어나면 프레임이 드랍되거나 쟁크 현상이 일어나 애니메이션이 매끄럽지 않다.

이럴때는 reflow을 일으키는 속성들 사용 보다는 repaint를 일으키는 속성이나 layout, paint 단계를 건너띌수 있는 transform 속성을 사용 하는 것이 좋다.
`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Reflow, Repaint를 피하여 CSS 애니메이션 최적화하기`,
			},
			{
				type: ComponentType.CODE,
				value: `.style_ani{
    position: absolute;
    left: 0;
    top: 0;
    width: \${({ width }) => width}%;
    transition: width 1.5s ease;
    height: 100%;
    background: \${({ isSelected }) => isSelected ? 'rgba(126, 198, 81, 0.7)' : 'rgb(198, 198, 198)'};
    z-index: 1;}`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위 css는 width값을 이용하여 애니메이션을 적용하는 리액트의 스타일 컴포넌트이다. 이 내용을 scaleX 속성을 이용하여 변경하여 Reflow, Repaint 피하고 GPU 도움 받아 렌더링 하도록 변경한다.`,
			},
			{
				type: ComponentType.CODE,
				value: `.style_ani{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    transform: scaleX(\${props => props.width / 100});
    transform-origin: center left;
    transition: width 1.5s ease;
    height: 100%;
    background: \${({ isSelected }) => isSelected ? 'rgba(126, 198, 81, 0.7)' : 'rgb(198, 198, 198)'};
    z-index: 1;`,
			},
			{
				type: ComponentType.NORMAL,
				value: `scaleX의 축은 가운데를 기준으로 스케일이 변경되기 때문에 transform-origin 속성을 추가하여 세로는 가운데로 가로는 왼쪽으로 스케일이 변경 되도록 수정한다.

또 애니메이션이 transform에 적용되도록 transition 속성의 값을 transform으로 변경하여 준다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `애니메이션 Reflow에서 GPU사용으로 변경 후`,
			},
			{
				type: ComponentType.IMAGE_LOADER,
				value: ``,
				imageloader: {
					imgPath: 'ImageOptimizationSample4.png',
					alt: '이미지최적화 샘플4',
					width: '80%',
					round: '12px',
				},
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `FPS`,
			},
			{
				type: ComponentType.NORMAL,
				value: `웹 브라우저는 호출 스택에 실행 컨텍스트가 존재하는 동안, 즉 실행 중인 함수가 존재하는 동안에는 먹통이 되어 버립니다. 브라우저는 60 프레임으로 애니메이션을 렌더링 하고 있는데 그래프의 애니메이션이 뚝뚝 끊기는 현상은 애니메이션을 렌더링 하는데 60 프레임을 넘어가 프레임 드롭 현상이 나타나는 것입니다. 이는 사용자 경험에 악영향을 미칠 수 있습니다.

따라서, 브라우저에서 동작하는 JavaScript 코드, 특히 사용자와의 상호작용을 위한 코드를 작성할 때에는 코드의 실행 시간이 얼마나 될지를 항상 염두에 두어야 합니다.`,
			},
			{
				type: ComponentType.IMAGE_LOADER,
				value: ``,
				imageloader: {
					imgPath: 'ImageOptimizationSample5.jpg',
					alt: '이미지최적화 샘플5',
					width: '80%',
					round: '12px',
				},
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Reflow 영역의 그래프`,
			},
			{
				type: ComponentType.NORMAL,
				value: `Reflow가 일어난 영역에서는 보라색과 초록색 등 메인 쓰레드의 역할이 매우 활발한 것을 볼 수 있다.`,
			},
			{
				type: ComponentType.IMAGE_LOADER,
				value: ``,
				imageloader: {
					imgPath: 'ImageOptimizationSample6.jpg',
					alt: '이미지최적화 샘플6',
					width: '80%',
					round: '12px',
				},
			},
			{
				type: ComponentType.NORMAL,
				value: `출처 : 
https://www.inflearn.com/course/lecture?courseSlug=%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%A6%AC%EC%95%A1%ED%8A%B8-1&unitId=48065&tab=curriculum`,
			},
		],
	},
	{
		id: 69,
		title: `[TECH-QA] 이미지 Preloading, 아미지 caching`,
		date: '2025-05-03 14:20:05',
		folder: Folder.JAVASCRIPT,
		tag: ['웹성능최적화', 'TECH-QA'],
		preview: `화면에 모든 리소스들이 마운트 되었을때 자바스크립트의 new Image()를 사용하여 이미지를 미리 로드하여 캐싱하여 준다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `화면에 모든 리소스들이 마운트 되었을때 자바스크립트의 new Image()를 사용하여 이미지를 미리 로드하여 캐싱하여 준다.`,
			},
			{
				type: ComponentType.CODE,
				value: `useEffect(()=> {
  const img = new Image();
  img.src = '이미지주소';
},[])`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `이미지에 cache-control 속성 확인`,
			},
			{
				type: ComponentType.IMAGE_LOADER,
				value: ``,
				imageloader: {
					imgPath: 'preloading1.jpg',
					alt: '브라우저 cache-control 이미지',
					width: '80%',
					round: '12px',
				},
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `캐싱 상태를 네트워크 패널에서 확인`,
			},
			{
				type: ComponentType.IMAGE_LOADER,
				value: ``,
				imageloader: {
					imgPath: 'preloading2.jpg',
					alt: '브라우저 cache-control 상태',
					width: '80%',
					round: '12px',
				},
			},
			{
				type: ComponentType.NORMAL,
				value: `처음 이미지를 한번 new Image()로 로딩하고 이미지의 cache-control 상태에 따라 다음번 이미지를 불러올때는 이미지가 캐싱되어 로딩하는 깜빡임 없이 바로 화면에 뜨는 것을 확인 할 수 있다.
`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `(참고)브라우저 캐시 비우기 및 강력 새로고침 활용하기`,
			},
			{
				type: ComponentType.IMAGE_LOADER,
				value: ``,
				imageloader: {
					imgPath: 'preloading3.jpg',
					alt: '브라우저 캐시 비우기 및 강력 새로고침 이미지',
					width: '80%',
					round: '12px',
				},
			},
			{
				type: ComponentType.NORMAL,
				value: `출처
https://www.inflearn.com/course/lecture?courseSlug=%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%A6%AC%EC%95%A1%ED%8A%B8-1&unitId=48067&tab=curriculum`,
			},
		],
	},
	{
		id: 71,
		title: `[TECH-QA] 모달을 통해 알아보는 동적 임포트(Dynamic Import)와 지연 로딩(Lazy Loading)을 활용 및 팩토리패턴`,
		date: '2025-05-04 17:14:33',
		folder: Folder.JAVASCRIPT,
		tag: ['브라우저', 'TECH-QA', '웹성능최적화', '팩토리패턴'],
		preview: `화면에서 쿨락헌 순간 모달에 관련된 파일들을 불러오고 모달에 관련된 파일들이 모두 불러와지면 Javascript를 Evaluate하고 모달이 뜨도록 코드를 실행하고 모달이 오픈된다.`,
		post: [
			{
				type: ComponentType.IMAGE_LOADER,
				value: ``,
				imageloader: {
					imgPath: 'lazyLoading_1.jpg',
					alt: 'lazyLoading_1 단점',
					width: '80%',
					round: '12px',
				},
			},
			{
				type: ComponentType.NORMAL,
				value: `Lazy loading시 화면에서 클락한 순간 모달에 관련된 파일들을 불러오고 모달에 관련된 파일들이 모두 불러와지면 Javascript를 Evaluate하고 모달이 뜨도록 코드를 실행하고 모달이 오픈된다.

즉 최초 로딩 시점에서는 페이지 로딩이 빨라졌지만 모달을 띄울때는 오히려 성능이 더 느려진것을 볼 수 있다.
`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `컴포넌트 preload로 성능 개선하기`,
			},
			{
				type: ComponentType.NORMAL,
				value: `버튼을 눌러 모달을 열기 전에 미리 모달과 관련된 코드들을 로드해 놓는다. 모달에 관련된 코드는 미리 로드가 되었으므로 클릭한 순간에 바로 모달의 화면을 확인 할 수 있다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `버튼위에 마우스를 올려 놨을때 모달을 로딩 하는 방법`,
			},
			{
				type: ComponentType.CODE,
				value: `const handlerMouseEnter = () => {
  const lazyModalComponent = import('./components/ImageModal');
}`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `최초 페이지 로드에서 중요 파일들의 로드가 완료 된후 모달 로딩`,
			},
			{
				type: ComponentType.NORMAL,
				value: `중요 파일들의 컴포넌트가 모두 마운트 된 후에 모달을 import 해주도록 한다.`,
			},
			{
				type: ComponentType.CODE,
				value: `useEffect(()=> {
  const lazyModalComponent = import('./components/ImageModal');
},[])`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `여러 컴포넌트를 프리로드 해줘야 할 경우`,
			},
			{
				type: ComponentType.NORMAL,
				value: `매번 import를 써주기는 번거로울때 팩토리 패턴으로 함수를 만들어서 사용하도록 하는 방법.`,
			},
			{
				type: ComponentType.CODE,
				value: `function lazyWidthPreload(importFunction){
  const Component = React.lazy(importFunction);
  Component.preload = importFunction;
  return Component;
}

const lazyImageModal = lazyWidthPreload(() =>  import('./components/ImageModal'));

useEffect(()=> {
  lazyImageModal.preload(); 
},[])`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `1. lazyWidthPreload 함수`,
			},
			{
				type: ComponentType.CODE,
				value: `function lazyWidthPreload(importFunction) {
  const Component = React.lazy(importFunction);
  Component.preload = importFunction;
  return Component;
}`,
			},
			{
				type: ComponentType.NORMAL,
				value: `React의 React.lazy를 확장하여, 컴포넌트를 지연 로딩하면서도 필요할 때 미리 로드(preload)할 수 있도록 기능을 추가합니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>importFunction</b>: 동적 임포트를 위한 함수 (예: () => import('./someComponent')).
<b>React.lazy(importFunction)</b>: 주어진 importFunction을 사용해 컴포넌트를 지연 로딩하도록 설정합니다. 이로 인해 컴포넌트는 처음 렌더링 시 로드되지 않고, <b>필요할 때 비동기적으로 로드</b>됩니다.
Component.preload = importFunction: Component에 preload 메서드를 추가하여, 개발자가 원할 때 해당 컴포넌트를 미리 로드할 수 있도록 합니다.
return Component: 지연 로딩 컴포넌트를 반환하며, preload 메서드가 추가된 상태입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `2. lazyImageModal 생성`,
			},
			{
				type: ComponentType.CODE,
				value: `const lazyImageModal = lazyWidthPreload(() => import('./components/ImageModal'));`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>설명</b>: lazyWidthPreload를 사용하여 ./components/ImageModal 컴포넌트를 지연 로딩하도록 설정합니다.
<b>결과</b>: lazyImageModal은 React.lazy로 생성된 지연 로딩 컴포넌트이며, 추가로 preload 메서드를 통해 ImageModal을 미리 로드할 수 있습니다.
<b>장점</b>: 초기 번들 크기를 줄이고, ImageModal이 필요할 때만 로드하여 성능을 최적화합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `3. useEffect로 preload 호출`,
			},
			{
				type: ComponentType.CODE,
				value: `useEffect(() => {
  lazyImageModal.preload();
}, []);`,
			},
			{
				type: ComponentType.NORMAL,
				value: `컴포넌트가 마운트될 때 lazyImageModal의 preload 메서드를 호출하여 ImageModal 컴포넌트를 미리 로드합니다. 사용자가 곧 ImageModal을 열 가능성이 높은 경우, 미리 로드하여 사용자 경험을 개선할 수 있습니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `useEffect는 컴포넌트가 마운트된 후 실행되며, 의존성 배열 []를 사용하므로 한 번만 실행됩니다.
<span class="point">lazyImageModal.preload()</span>: ImageModal 컴포넌트를 비동기적으로 로드하여, 이후 렌더링 시 지연 없이 사용할 수 있도록 준비합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `정리`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>지연 로딩</b>: React.lazy를 통해 ImageModal 컴포넌트를 초기 로드에서 제외하여 페이지 로딩 속도를 향상시킵니다. 웹 앱이 로드될 때 ImageModal은 로드되지 않음 (초기 로딩 속도 개선).
<b>미리 로드</b>: preload 메서드를 통해 필요한 시점에 컴포넌트를 미리 로드하여, 사용자가 컴포넌트를 요청할 때 대기 시간을 줄입니다. 컴포넌트 마운트 시 useEffect가 lazyImageModal.preload()를 호출하여 ImageModal을 백그라운드에서 로드.
<b>성능 최적화</b>: 초기 번들 크기를 줄이고, 필요한 컴포넌트만 로드하며, 사용자 인터랙션에 따라 동적으로 리소스를 관리합니다. 사용자가 ImageModal을 열 때, 이미 로드된 컴포넌트가 즉시 렌더링되어 부드러운 경험 제공.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Suspense`,
			},
			{
				type: ComponentType.NORMAL,
				value: `React.lazy로 로드된 컴포넌트를 렌더링하려면 <Suspense>로 감싸야 하며, 로딩 상태를 처리하기 위해 fallback UI를 제공해야 합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `<Suspense fallback={<div>Loading...</div>}>
  <lazyImageModal />
</Suspense>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>네트워크 상태 고려</b>: preload는 네트워크 요청을 발생시키므로, 네트워크가 느린 환경에서는 타이밍을 조정하거나 조건부로 호출하는 것이 좋습니다.
<b>의존성 배열</b>: useEffect의 []는 한 번만 실행되도록 보장하지만, 특정 조건에 따라 preload를 호출하려면 의존성을 추가할 수 있습니다.`,
			},
		],
	},
	{
		id: 72,
		title: `[TECH-QA] Text Compression`,
		date: '2025-05-18 09:59:33',
		folder: Folder.JAVASCRIPT,
		tag: ['브라우저', 'TECH-QA', '웹성능최적화'],
		preview: `웹 페이지를 로드 할때는 그에 필요한 리소스 들도 같이 다운로드 받습니다. 대표적으로 HTML, JS, CSS 와 같은 텍스트들로 이루어진 리소스들이 있는데요.
		이 리소스들의 사이즈가 클수록 페이지의 로딩속도는 느려질 수 밖에 없습니다.
		이런 문서들의 사이즈를 줄이기 위한 여러가지 방법 중 Text Compression을 소개해 보려고 합니다.
`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `웹 페이지를 로드 할때는 그에 필요한 리소스 들도 같이 다운로드 받습니다. 대표적으로 HTML, JS, CSS 와 같은 텍스트들로 이루어진 리소스들이 있는데요.
		이 리소스들의 사이즈가 클수록 페이지의 로딩속도는 느려질 수 밖에 없습니다.
		이런 문서들의 사이즈를 줄이기 위한 여러가지 방법 중 Text Compression을 소개해 보려고 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: 'Text Compression',
			},
			{
				type: ComponentType.NORMAL,
				value: `서버에서 보내는 리소스를 압축해서 다운로드할 파일들의 용량을 줄여 더 빠른 서비스를 이용 할수 있도록 합니다.`,
			},
			{
				type: ComponentType.IMAGE_LOADER,
				value: ``,
				imageloader: {
					imgPath: 'textCompression_image1.jpg',
					alt: 'textCompression 사용',
					width: '80%',
					round: '12px',
				},
			},
			{
				type: ComponentType.NORMAL,
				value: `웹서비스를 실행하고 네트워크 탭에서 api가 호출되는 부분을 클릭하여 헤더를 살펴 보면 Response Headers의 내용 중  <span class="point">Content-Encoding</span>를 확인 할 수 있습니다. <span class="point">이미지를 확인해 보면 gzip 이라는 인코딩 방식을 통해서 압축</span>되어 있다는 것을 알 수 있습니다.

<b>요청을 보낼 때 클라이언트가 어떤 압축 알고리즘을 수용할 수 있는지 나타내면서 서버에서 이러한 방식으로 압축해달라고 요청하는 의미가 됩니다.</b>

요청을 받으면 서버에서는 클라이언트가 원하는 압축 방식중에서 가능한 알고리즘으로 압축한 뒤에 응답을 보내주고 사용된 압축 알고리즘이 content-encoding 헤더에 명시 하게 됩니다.

이 헤더들의 값으로 gzip, compress, br, deflate 등 압축알고리즘에는 여러가지가 있지만 웹상에서는 일반적으로 GZIP과 Deplate 두가지를 사용 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: 'gzip',
			},
			{
				type: ComponentType.NORMAL,
				value: `gzip 은 유닉스에서 태어난 오픈소스 압축 프로그램 입니다. 알집이나 7zip 에서 사용하는 것과 동일한 Deflate 압축 알고리즘을 사용하지만 하나의 파일만 압축할 수 있기 때문에 주로 tar 프로그램과 함께 사용하곤 합니다. 불편하기 짝이없어 보이는 gzip 압축 프로그램에 주목해야 하는 이유는 gzip 압축이 웹사이트 성능 개선과 밀접한 연관이 있기 때문입니다.

GZIP은 Deplate을 단독으로 사용하는 것보다 더 좋은 압축률을 제공 합니다.

gzip의 압축 알고리즘은 deflate 알고리즘과 같으며 deflate와 비교해서 차이점은 <span class="point"> gzip 포맷은 추가적인 헤더와 체크섬을 사용하여 오류검출에 더 강점이 있습니다.</span>`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: 'gzip을 사용한 텍스트 압축',
			},
			{
				type: ComponentType.NORMAL,
				value: `gzip은 텍스트 파일을 압축하는데 있어서 최상의 성능을 내는 것으로 알려져 있습니다. 우리의 웹사이트는 이미지를 제외한 대부분이 텍스트 콘텐츠로 구성되어 있습니다. 자바스크립트, HTML, CSS, JSON 등 사이트를 구성하는 거의 모든 요소가 텍스트 콘텐츠 입니다.

<span class="point">우리가 사용하는 대부분의 브라우저는 이미 gzip 압축프로그램을 내장하고 있습니다. 게다가 자동으로 gzip 으로 압축된 파일을 해제하는 기능도 탑재하고 있습니다. 즉, 서버에서 gzip 으로 압축된 형태의 텍스트 리소스가 내려오면 브라우저는 자동으로 gzip 압축을 해제하여 페이지를 표시합니다.</span>
`,
			},
			{
				type: ComponentType.NORMAL,
				value: `사실 gzip 인코딩 기능은 HTTP/1.1 명세에 포함되어 있으며 HTTP/1.1 을 지원하는 대부분의 현재의 브라우저는 gzip 으로 압축된 콘텐츠를 사용 가능합니다.

웹 사이트 응답속도 개선에 있어 가장 먼저 적용을 고려해야 하고 또 적용 이후에도 즉각적인 효과를 볼 수 있는 가장 탁월한 수단이 바로 gzip 압축 전송의 적용입니다. 웹서버에 간단한 설정만으로 적용이 가능하고 별다른 사이드 이펙트를 찾기도 어렵습니다. <span class="point">gzip 압축이 영향을 주는 구간이 <b>웹서버와 사용자 브라우저 사이의 네트웍 구간</b>이기 때문에 프로그램의 실행 로직등에는 영향을 주지 않기 때문입니다.</span>`,
			},
			{
				type: ComponentType.NORMAL,
				value: `gzip 압축 전송을 이용하면 사이트 트래픽의 대부분을 점유하는 Big 3 (자바스크립트, CSS, HTML) 요소를 크게는 90% 가까이 압축하여 전송할 수 있기 때문에 네트웍 대역폭 사용량을 크게 감소시킬 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: 'gzip 압축을 적용하는 4가지 방법',
			},
			{
				type: ComponentType.NORMAL,
				value: `사이트에 gzip 압축을 적용하는 방법은 <b>응답할 데이터를 압축하는 작업을 누가 처리하도록 하느냐</b>에 따라서 크게 4가지로 구분 할 수 있습니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Apache 나 Nginx 등 Web서버에서 처리하기
Tomcat 이나 Weblogic 등 어플리케이션 서버(Was)에서 처리하기
Servlet Filter 를 등록하여 처리하기
정적인 파일을 미리 gzip 으로 압축하여 올리기`,
			},
			{
				type: ComponentType.NORMAL,
				value: `일반적으로는 Web 서버에서 처리하도록 하고 있으나, 프로젝트나 사이트의 사정에 따라서는 다른 방법을 고려할 수 도 있습니다. 가령 Web서버와 Was 구간의 대역폭을 확보해야 한다거나 하는 이유로 말이죠.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: 'nginx 에 gzip 으로 컨텐츠 압축 설정하기',
			},
			{
				type: ComponentType.NORMAL,
				value: `압축 설정은 가상 호스트마다 하지 말고 메인 설정 파일(/etc/nginx/nginx.conf) 의 http 블록에 설정하면 전역적으로 적용되므로 편리합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `http {
  include       /etc/nginx/mime.types;
  default_type  application/octet-stream;
    
  # 압축 설정
}`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이 코드는 Nginx 웹 서버의 설정 파일(nginx.conf 또는 관련 설정 파일)에서 HTTP 블록의 일부를 나타냅니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<p><b>include /etc/nginx/mime.types;</b><p>/etc/nginx/mime.types 파일을 포함시켜 Nginx가 파일 확장자에 따라 적절한 <b>MIME 타입을 설정</b>하도록 합니다. 예를 들어 아래와 같이 처리됩니다.
이를 통해 클라이언트(브라우저)가 파일을 올바르게 해석할 수 있습니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `.html 파일은 text/html
				 .jpg 파일은 image/jpeg`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<p><b>default_type application/octet-stream;</b><p>/etc/nginx/mime.types 파일을 포함시켜 Nginx가 파일 확장자에 따라 적절한 <b>MIME 타입을 설정</b>하도록 합니다. 예를 들어 아래와 같이 처리됩니다.
이를 통해 클라이언트(브라우저)가 파일을 올바르게 해석할 수 있습니다.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `MIME 타입을 설정하지 않은 파일이나 알 수 없는 확장자의 파일에 대해 기본적으로 application/octet-stream 타입을 지정합니다.
application/octet-stream은 일반적인 바이너리 파일을 의미하며, 브라우저는 이를 다운로드하거나 기본적으로 처리합니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `제일 먼저 설정할 항목은 gzip on; 으로 컨텐츠 압축 사용을 지시하는 것입니다`,
			},
			{
				type: ComponentType.CODE,
				value: `http {
  gzip on;
  gzip_disable "msie6";
}`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>gzip on;</b>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Gzip 압축을 활성화합니다.
이를 통해 서버가 응답 데이터를 압축하여 클라이언트(브라우저)로 전송하므로, 데이터 전송량을 줄이고 페이지 로드 속도를 개선할 수 있습니다.
압축 대상은 일반적으로 HTML, CSS, JavaScript, JSON, XML 등 텍스트 기반 파일입니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>gzip_disable "msie6";</b>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `특정 사용자 에이전트(브라우저)에 대해 Gzip 압축을 비활성화합니다.
여기서는 "msie6" (Microsoft Internet Explorer 6)을 대상으로 지정하여, 이 브라우저에서는 압축된 콘텐츠를 전송하지 않습니다.
Internet Explorer 6은 Gzip 압축 처리에 버그가 있거나 호환성 문제가 있을 수 있어, 이를 방지하기 위해 압축을 비활성화합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: 'nginx 에 gzip 으로 컨텐츠 압축 설정',
			},
			{
				type: ComponentType.CODE,
				value: `gzip_comp_level 6;
gzip_min_length 500;
gzip_buffers 16 8k;
gzip_proxied any;`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>gzip_comp_level </b>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Gzip 압축 수준을 설정합니다. 값은 1(최소 압축, 빠른 처리)에서 9(최대 압축, 느린 처리)까지 가능합니다.
6은 압축률과 성능 간의 균형이 좋은 중간 수준으로, 기본값이기도 합니다.
높은 압축 수준은 파일 크기를 더 줄이지만 CPU 사용량이 증가합니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>gzip_min_length 500</b>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `압축을 적용할 응답 데이터의 최소 길이를 바이트 단위로 지정합니다.
여기서는 응답 데이터가 500바이트 이상일 때만 Gzip 압축을 적용합니다.
작은 데이터는 압축해도 크기 감소 효과가 미미하므로, 불필요한 CPU 사용을 줄이기 위해 설정합니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>gzip_buffers 16 8k;</b>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Gzip 압축을 처리하기 위해 할당할 메모리 버퍼의 개수와 크기를 지정합니다.
16 8k는 16개의 8KB 버퍼를 사용한다는 의미입니다(총 128KB).
이 설정은 압축 데이터를 처리하는 데 필요한 메모리 공간을 정의하며, 서버의 메모리와 부하에 따라 조정할 수 있습니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>gzip_proxied any;</b>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `프록시된 요청에 대해 Gzip 압축을 적용할 조건을 설정합니다.
any는 모든 프록시 요청(예: CDN, 리버스 프록시 등)에 대해 압축을 활성화합니다.
이는 클라이언트가 아닌 중간 프록시 서버를 통해 요청이 올 때도 압축된 데이터를 전송하도록 보장합니다.
any: 항상 압축합니다.
off: 프락시에서 요청할 경우 압축하지 않습니다.
expired: 요청 헤더에 Expires 가 있고 만료되었을 경우에만 압축합니다.
no-cache: 요청 헤더에 Cache-Control 가 있고 no-cache 일 경우에만 압축합니다.
no-store: 요청 헤더에 Cache-Control 가 있고 no-store 일 경우에만 압축합니다.
`,
			},
			{
				type: ComponentType.NORMAL,
				value: `그 외 가능한 설정은 <a href="http://nginx.org/en/docs/http/ngx_http_gzip_module.html#gzip_proxied">Nginx gzip_proxied Documentation</a>을 참고하세요.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: 'nginx 에 gzip 으로 content type 설정하기',
			},
			{
				type: ComponentType.NORMAL,
				value: `컨텐츠의 유형에 따라 gzip_types 지시자로 압축 여부를 설정할 수 있으며 아래 설정은 일반적으로 많이 사용하는 컨텐츠 유형에 대해 압축하는 예로 가독성을 위해 개행을 적용했습니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `gzip_types
    text/plain
    text/css
    text/js
    text/xml
    text/javascript
    application/javascript
    application/x-javascript
    application/json
    application/xml
    application/rss+xml
    image/svg+xml;`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>gzip_types 지시문</b>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Gzip 압축을 적용할 콘텐츠의 MIME 타입을 정의합니다.
기본적으로 text/html은 항상 압축되므로 이 목록에 포함되지 않아도 됩니다.
이 설정은 gzip on;이 활성화된 경우에만 적용됩니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>지정된 MIME 타입</b>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>text/plain</b>: 일반 텍스트 파일(예: .txt).
<b>text/css</b>: CSS 스타일시트 파일(예: .css).
<b>text/js</b>: JavaScript 파일. 참고: text/js는 비표준 MIME 타입으로, 현대 웹에서는 application/javascript가 권장됩니다. 일부 레거시 시스템에서 사용될 수 있음.
<b>text/xml</b>: XML 형식의 텍스트 파일(예: .xml).
<b>text/javascript</b>: JavaScript 파일. 참고: 과거에 사용되었으나, 현재는 application/javascript로 대체됨.
<b>application/javascript</b>: 현대 표준 JavaScript 파일(예: .js).
<b>application/x-javascript</b>: JavaScript 파일의 비표준/레거시 MIME 타입. 호환성을 위해 포함.
<b>application/json</b>: JSON 데이터 파일(예: .json).
<b>application/xml</b>: XML 형식의 애플리케이션 데이터.
<b>application/rss+xml</b>: RSS 피드(예: RSS XML 파일).
<b>image/svg+xml</b>: SVG 벡터 이미지 파일(예: .svg).`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이 설정은 위 MIME 타입에 해당하는 파일이 클라이언트로 전송될 때 <span class="point"><b>Gzip 압축을 적용하도록 Nginx에 지시</b></span>합니다.
예를 들어 .css, .js, .json, .svg 등의 파일은 압축되어 전송되며, 이는 대역폭을 절약하고 페이지 로드 속도를 개선합니다.
text/js, text/javascript, application/x-javascript는 JavaScript 파일을 다양한 MIME 타입으로 처리하는 브라우저와의 호환성을 보장하기 위해 포함되었습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `주의사항`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>비표준 MIME 타입</b>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `text/js와 application/x-javascript는 비표준이며, 최신 웹 환경에서는 application/javascript만 사용하는 것이 좋습니다. 하지만 레거시 클라이언트를 지원하려면 포함할 수 있습니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>기본값과의 중복</b>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Nginx의 기본 gzip_types에는 text/html이 포함되어 있으므로, 이 설정은 추가적인 MIME 타입을 확장하는 역할을 합니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `<b>압축 효율성</b>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `SVG(image/svg+xml)와 같은 파일은 텍스트 기반이므로 압축 효과가 크지만, 이미 압축된 파일(예: JPEG, PNG)은 gzip_types에 포함시키지 않는 것이 일반적입니다(압축 효과가 미미함).`,
			},

			{
				type: ComponentType.NORMAL,
				value: `<b>gzip_types 설정</b>은 텍스트 기반 파일(CSS, JavaScript, JSON, XML, SVG 등)에 Gzip 압축을 적용하여 데이터 전송 효율성을 높입니다. 다양한 JavaScript MIME 타입을 포함해 호환성을 강화했으며, 특히 웹 애플리케이션에서 자주 사용되는 파일 형식을 대상으로 합니다. 최신 환경에서는 text/js와 같은 비표준 타입을 제거하고 간소화할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: 'nginx 에 gzip 으로 컨텐츠 압축 최종 코드',
			},
			{
				type: ComponentType.CODE,
				value: `http {
# nginx 의 메인 설정 파일인 nginx.conf 의 http 항목에 다음과 같이 설정
include       /etc/nginx/mime.types;
default_type  application/octet-stream;
	
# 압축 설정
gzip  on;
gzip_disable "msie6";


gzip_comp_level 6;
gzip_min_length 1100;
gzip_buffers 16 8k;
gzip_proxied any;

gzip_types
  text/plain
  text/css
  text/js
  text/xml
  text/javascript
  application/javascript
  application/x-javascript
  application/json
  application/xml
  application/rss+xml
  image/svg+xml;
}`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				promptTypeProps: 'WARNING',
				value: `압축을 하는데에도 시간이 조금 걸리지만 압축을 해제 하는 데에도 시간이 조금 걸리기 때문에 모든 파일을 압축하고 압축해제 하는 것 보다는 <b>파일의 크기가 2KB이상일 경우에는 압축을 하는것이 낫고 2KB 이하일 경우에는 압축을 진행하지 않는것이 더 효율적</b> 이라고 합니다.`,
			},
		],
	},
	{
		id: 73,
		title: `[TECH-QA] 훅으로 분리할 이유가 있을까?`,
		date: '2025-06-19 13:52:33',
		folder: Folder.JAVASCRIPT,
		tag: ['React', 'TECH-QA', '리액트'],
		preview: `커스텀 훅(Custom Hook)으로 로직을 분리하는 것은 React 개발에서 상태 관리, 비즈니스 로직, 또는 재사용 가능한 기능을 캡슐화하는 강력한 방법입니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `커스텀 훅(Custom Hook)으로 분리한다는 것은 컴포넌트 내부의 상태 관리(useState), 부수 효과(useEffect), 또는 기타 로직을 별도의 함수(커스텀 훅)로 추출해 <b>컴포넌트와 독립적으로 관리</b>하는 것을 의미합니다. 커스텀 훅은 React의 훅(useState, useEffect 등)을 사용하며, 일반적으로 use로 시작하는 이름을 가집니다.`,
			},
			{
				type: ComponentType.KEYWORD,
				keyworldTitle: '가독성과 유지보수성',
				value: `UI 렌더링과 기능 로직을 분리하여 가독성과 유지보수 향상 `,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `컴포넌트 내부에 상태 관리와 UI 렌더링 로직이 섞여 있으면 코드가 복잡해지고 읽기 어려워집니다.
훅으로 로직을 분리하면 컴포넌트는 JSX와 UI 렌더링에 집중하고, 로직은 별도로 관리되어 가독성이 향상됩니다.`,
			},
			{
				type: ComponentType.KEYWORD,
				keyworldTitle: '재사용성',
				value: `동일한 로직을 여러 컴포넌트에서 사용할 때 `,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `동일한 로직을 여러 컴포넌트에서 사용할 때, 훅으로 분리하면 중복 코드를 줄이고 일관성을 유지할 수 있습니다.
비록 현재 재사용하지 않더라도, 나중에 필요할 가능성을 대비해 분리하는 것이 유리할 수 있습니다.`,
			},
			{
				type: ComponentType.KEYWORD,
				keyworldTitle: '테스트 용이성',
				value: `UI렌더링과 기능 로직은 분리하여 독립적으로 검증 가능`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `훅은 컴포넌트와 독립적으로 테스트할 수 있습니다. UI를 렌더링하지 않고 로직만 검증 가능.
예: useCounter 훅을 테스트할 때, 카운트 증가와 타이머 동작을 별도로 확인할 수 있습니다.`,
			},
			{
				type: ComponentType.KEYWORD,
				keyworldTitle: '기능 별로 분리',
				value: `상태 관리, 데이터 fetching, 이벤트 처리, 캡슐화 `,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `상태 관리, 데이터 fetching, 이벤트 처리 등 특정 기능(관심사)을 훅으로 캡슐화해 컴포넌트의 책임을 줄입니다.
이는 코드의 모듈화와 유지보수성을 높입니다.`,
			},
			{
				type: ComponentType.KEYWORD,
				keyworldTitle: '복잡한 로직 관리',
				value: `로직을 체계적으로 구조화`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `로직이 복잡할수록(예: 여러 useState, useEffect 조합) 컴포넌트 내부에 두면 관리가 어렵습니다. 훅으로 분리하면 로직을 체계적으로 구조화할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `언제 훅으로 분리해야 하나?`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `로직이 복잡하거나 여러 줄의 코드를 차지할 때(예: useEffect와 useState가 조합된 경우).
가독성을 높이고 컴포넌트를 간결하게 유지하고 싶을 때.
테스트를 독립적으로 수행하고 싶을 때.
현재 또는 미래에 로직을 재사용할 가능성이 있을 때.
예) 데이터 fetching, 폼 관리, 타이머, 애니메이션 등.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `분리하지 않아도 되는 경우?`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `로직이 매우 단순할 때(예: 단일 useState로 충분한 경우).
로직이 특정 컴포넌트에 강하게 의존적이고 재사용 가능성이 전혀 없을 때.
추가 파일을 만드는 오버헤드가 로직의 복잡도에 비해 클 때.
예) const [isOpen, setIsOpen] = useState(false); 같은 단순한 상태 관리.`,
			},
		],
	},
	{
		id: 74,
		title: `[TECH-QA] 개방-폐쇄 원칙(Open-Closed Principle, OCP)`,
		date: '2025-07-16 14:16:33',
		folder: Folder.REACT,
		tag: ['TECH-QA'],
		preview: `OCP는 소프트웨어 엔티티(클래스, 모듈, 컴포넌트 등)가 확장에는 열려 있고, 변경에는 닫혀 있어야 한다는 원칙으로, 새로운 기능을 추가할 때 기존 코드를 수정하지 않고 확장할 수 있도록 설계하는 것을 목표로 합니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `OCP를 위반하는 Button 컴포넌트(안티패턴)`,
			},
			{
				type: ComponentType.KEYWORD,
				value: 'OCP 위반,Button 컴포넌트',
			},
			{
				type: ComponentType.NORMAL,
				value: `먼저, 새로운 버튼 variant를 추가할 때마다 기존 코드를 수정해야 하는 안티패턴을 살펴보겠습니다. 이 방식은 OCP를 위반하며 유지보수성을 떨어뜨립니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `// 안티패턴: OCP를 위반하는 Button 컴포넌트
function Button({ variant, children, ...props }) {
  let className = 'button';

  if (variant === 'primary') {
    className += ' button--primary';
  } else if (variant === 'secondary') {
    className += ' button--secondary';
  } else if (variant === 'danger') {
    className += ' button--danger';
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

// 사용 예시
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="danger">Danger Button</Button>`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `문제점`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `새로운 variant (예: success)를 추가하려면 Button 컴포넌트 내부의 if-else 로직을 수정해야 함.
이는 OCP의 "변경에 닫혀 있어야 한다"를 위반.
코드가 복잡해지고, 새로운 요구사항이 생길 때마다 기존 코드 수정이 불가피해짐.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `OCP를 준수하는 리팩터링 ButtonBase 컴포넌트`,
			},

			{
				type: ComponentType.KEYWORD,
				value: 'OCP 준수, ButtonBase 컴포넌트',
			},
			{
				type: ComponentType.NORMAL,
				value: `OCP를 준수하기 위해 ButtonBase라는 기본 컴포넌트를 만들고, 이를 확장하여 다양한 버튼 변형을 생성하는 방식으로 리팩터링합니다. 이를 통해 새로운 variant를 추가할 때 기존 코드를 수정하지 않고도 확장이 가능해집니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `// 기본 컴포넌트 ButtonBase
function ButtonBase({ className, children, ...props }) {
  return (
    <button className={\`button \${className}\`} {...props}>
      {children}
    </button>
  );
}

// 확장된 버튼 컴포넌트들
const PrimaryButton = ({ children, ...props }) => (
  <ButtonBase className="button--primary" {...props}>
    {children}
  </ButtonBase>
);

const SecondaryButton = ({ children, ...props }) => (
  <ButtonBase className="button--secondary" {...props}>
    {children}
  </ButtonBase>
);

const DangerButton = ({ children, ...props }) => (
  <ButtonBase className="button--danger" {...props}>
    {children}
  </ButtonBase>
);

// 사용 예시
<PrimaryButton>Primary Button</PrimaryButton>
<SecondaryButton>Secondary Button</SecondaryButton>
<DangerButton>Danger Button</DangerButton>

// 새로운 SuccessButton 추가 (기존 코드 수정 없이 가능)
const SuccessButton = ({ children, ...props }) => (
  <ButtonBase className="button--success" {...props}>
    {children}
  </ButtonBase>
);`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `장점`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>확장성</b>: 새로운 버튼 변형(예: SuccessButton)을 추가할 때 ButtonBase나 기존 컴포넌트를 수정하지 않아도 됨.
<b>유지보수성</b>: 각 버튼 변형이 독립적이어서 코드가 간결하고 관리하기 쉬움.
<b>OCP 준수</b>: 새로운 기능을 추가하기 위해 기존 코드를 변경하지 않고 확장 가능.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `컴포넌트 합성 패턴 Card 컴포넌트`,
			},

			{
				type: ComponentType.KEYWORD,
				value: '컴포넌트 합성 패턴',
			},
			{
				type: ComponentType.NORMAL,
				value: `OCP를 준수하는 또 다른 방법은 컴포넌트 합성 패턴을 사용하는 것입니다. Card 컴포넌트를 예로 들어, 다양한 콘텐츠를 유연하게 확장할 수 있도록 설계해 보겠습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `기본 Card 컴포넌트`,
			},
			{
				type: ComponentType.CODE,
				value: `function Card({ header, body, footer, ...props }) {
  return (
    <div className="card" {...props}>
      {header && <div className="card-header">{header}</div>}
      {body && <div className="card-body">{body}</div>}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

// 사용 예시
<Card
  header={<h2>Card Title</h2>}
  body={<p>This is the card content.</p>}
  footer={<PrimaryButton>Action</PrimaryButton>}
/>`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `새로운 확장: 이미지 포함 Card`,
			},
			{
				type: ComponentType.CODE,
				value: `const ImageCard = ({ image, ...props }) => (
  <Card
    header={image && <img src={image} alt="Card Image" className="card-image" />}
    {...props}
  />
);

// 사용 예시
<ImageCard
  image="https://example.com/image.jpg"
  body={<p>This is an image card.</p>}
  footer={<SecondaryButton>Learn More</SecondaryButton>}
/>`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `장점`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>유연성</b>: Card 컴포넌트는 다양한 콘텐츠(헤더, 바디, 푸터)를 조합하여 확장 가능.
<b>재사용성</b>: ImageCard와 같은 새로운 컴포넌트를 기존 Card를 활용해 쉽게 생성.
<b>OCP 준수</b>: 새로운 Card 변형을 추가할 때 기존 Card 컴포넌트를 수정할 필요 없음.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `고차 컴포넌트(HOC)를 통한 확장`,
			},

			{
				type: ComponentType.NORMAL,
				value:
					'고차 컴포넌트(HOC)를 사용하면 기존 컴포넌트에 새로운 기능을 추가하여 OCP를 준수할 수 있습니다. 예를 들어, 버튼에 로딩 상태를 추가하는 HOC를 만들어 보겠습니다.',
			},
			{
				type: ComponentType.CODE,
				value: `// HOC: 로딩 상태를 추가
function withLoading(Component) {
  return function LoadingComponent({ isLoading, children, ...props }) {
    return (
      <Component {...props} disabled={isLoading}>
        {isLoading ? 'Loading...' : children}
      </Component>
    );
  };
}

// 로딩 가능한 버튼 생성
const LoadingPrimaryButton = withLoading(PrimaryButton);
const LoadingSecondaryButton = withLoading(SecondaryButton);

// 사용 예시
<LoadingPrimaryButton isLoading={true}>Click Me</LoadingPrimaryButton>
<LoadingSecondaryButton isLoading={false}>Click Me</LoadingSecondaryButton>`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `장점`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>기능 확장</b>: withLoading HOC를 통해 기존 버튼 컴포넌트에 로딩 기능을 추가.
<b>OCP 준수</b>: 기존 PrimaryButton이나 SecondaryButton 코드를 수정하지 않고 새로운 기능 추가 가능.
<b>재사용성</b>: HOC는 다른 컴포넌트에도 적용 가능.`,
			},
		],
	},
	{
		id: 75,
		title: `[TECH-QA] NextAuth.js`,
		date: '2025-07-18 09:32:33',
		folder: Folder.JAVASCRIPT,
		tag: ['NextAuth', 'TECH-QA'],
		preview: `NextAuth.js (현재 Auth.js로 알려짐)는 Next.js 애플리케이션에서 인증을 구현하기 위한 강력한 라이브러리로, 서버와 클라이언트 측 모두에서 세션을 관리할 수 있는 다양한 기능을 제공합니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: '기본 설정',
			},
			{
				type: ComponentType.KEYWORD,
				keyworldTitle: '환경 변수 설정',
				value: 'AUTH_SECRET',
			},
			{
				type: ComponentType.NORMAL,
				value:
					'프로젝트 루트에 .env 파일을 생성하고 필요한 환경 변수를 추가합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `AUTH_SECRET=your-secret-key
AUTH_GITHUB_ID=your-github-client-id
AUTH_GITHUB_SECRET=your-github-client-secret`,
			},
			{
				type: ComponentType.NORMAL,
				value:
					'AUTH_SECRET은 JWT 암호화를 위해 필수입니다. ext-auth에서 AUTH_SECRET은 세션 관리와 JWT(JSON Web Token) 서명을 위해 사용되는 비밀 키(secret key)입니다. 이 환경 변수는 NextAuth.js가 사용자 세션을 안전하게 암호화하고 인증 토큰을 생성하거나 검증할 때 사용됩니다. openssl rand -base64 32 명령어로 생성할 수 있습니다.',
			},
			{
				type: ComponentType.STRINGLIST,
				value: `AUTH_SECRET은 유저별로 생성되거나 전달되지 않습니다.
AUTH_SECRET은 애플리케이션 수준에서 설정되는 단일 비밀 키로, 모든 사용자에 대해 동일하게 사용됩니다. 즉, 개별 유저마다 다른 AUTH_SECRET을 사용할 필요는 없습니다. 이 키는 NextAuth.js가 세션 관리와 JWT 서명을 위해 <span class="point">서버 측에서 사용하는 고정된 값</span>입니다. 이 모든 작업은 서버에서 일관되게 이루어지며, 유저별로 다른 키를 사용할 필요가 없습니다.
<b>JWT 서명</b>: next-auth는 기본적으로 JWT를 사용하여 사용자 세션을 관리합니다. AUTH_SECRET은 JWT를 서명하고 검증하는 데 사용되는 비밀 키로, 이 키가 없거나 잘못되면 토큰이 유효하지 않게 됩니다.
<b>세션 암호화</b>: 세션 데이터(예: 사용자 정보)를 암호화하여 보안을 강화합니다.
<b>CSRF 토큰 보호</b>: next-auth가 CSRF(Cross-Site Request Forgery) 공격을 방지하기 위해 생성하는 토큰에도 이 키가 사용됩니다.
<b>유저별 토큰과 혼동 가능성</b>: 로그인 시 서버는 유저별로 고유한 JWT를 생성합니다. 이 토큰에는 유저의 정보(예: userId, email, role)가 포함되며, <span class="point">AUTH_SECRET을 사용해 서명</span>됩니다. 하지만 AUTH_SECRET 자체는 토큰을 생성/검증하는 데 사용되는 고정된 키일 뿐입니다.
<b>클라이언트로 전달되지 않음</b>: AUTH_SECRET은 절대 클라이언트(브라우저)로 전달되지 않습니다. 이는 서버 내부에서만 사용되는 비밀 값으로, 유저와 직접적인 상호작용이 없습니다.
<b>세션 데이터</b>: NextAuth.js는 세션 데이터를 데이터베이스(옵션) 또는 JWT 자체에 저장할 수 있습니다. 유저별 정보는 이 세션 데이터에 저장되며, AUTH_SECRET은 이 데이터를 암호화하거나 보호하는 데 사용됩니다.
서버는 요청마다 AUTH_SECRET으로 JWT를 검증해 유저를 인증.`,
			},
			{
				type: ComponentType.NORMAL,
				value:
					'값은 안전하고 예측하기 어려운 문자열이어야 하며, 최소 32자 이상의 무작위 문자열을 사용하는 것이 권장됩니다. 예를 들어, 다음 명령어로 생성할 수 있습니다.',
			},
			{
				type: ComponentType.CODE,
				value: 'openssl rand -base64 32',
			},
			{
				type: ComponentType.NORMAL,
				value:
					'App Router를 사용하는 경우, /app/api/auth/[...nextauth]/route.ts 파일에서 설정합니다. 이 파일은 NextAuth가 인증 관련 요청(로그인, 로그아웃, 세션 관리 등)을 처리하는 엔드포인트 역할을 합니다.<br/><br/>만약 Pages Router(/pages)를 사용한다면, /pages/api/auth/[...nextauth].ts 파일에서 비슷한 방식으로 설정하지만, App Router에서는 route.ts 파일을 사용합니다. 또한, App Router에서는 GET, POST 등의 HTTP 메서드를 명시적으로 내보내야 합니다.',
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>App Router</b>: App Router에서는 next-auth의 최신 버전(4.x)을 사용하고, next-auth/middleware를 활용해 보호된 라우트를 설정할 수 있습니다.
<b>미들웨어</b>: 인증이 필요한 페이지를 보호하려면 /app/middleware.ts에서 NextAuth 미들웨어를 설정합니다.
<b>환경 변수</b>: NEXTAUTH_SECRET과 제공자(예: Google, GitHub)의 클라이언트 ID/시크릿은 .env 파일에 설정해야 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: '프로젝트 구조 예시',
			},
			{
				type: ComponentType.CODE,
				value: `my-nextjs-app/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts         # NextAuth 설정 (인증 엔드포인트)
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx            # 커스텀 로그인 페이지
│   │   ├── signup/
│   │   │   └── page.tsx            # 커스텀 회원가입 페이지 (선택)
│   ├── dashboard/
│   │   └── page.tsx                # 보호된 페이지 (인증 필요)
│   ├── layout.tsx                  # 루트 레이아웃
│   ├── page.tsx                    # 홈 페이지
│   └── globals.css                 # 전역 스타일
├── lib/
│   ├── auth.ts                     # NextAuth 설정 (authOptions)
│   └── db.ts                       # 데이터베이스 연결 (예: Prisma)
├── components/
│   ├── Header.tsx                  # 헤더 컴포넌트
│   ├── Footer.tsx                  # 푸터 컴포넌트
│   └── AuthButton.tsx              # 로그인/로그아웃 버튼 컴포넌트
├── public/
│   ├── images/                     # 정적 이미지 파일
│   └── favicon.ico                 # 파비콘
├── middleware.ts                   # NextAuth 미들웨어 (보호된 라우트 설정)
├── .env                            # 환경 변수 (NEXTAUTH_SECRET, Google ID 등)
├── next.config.mjs                 # Next.js 설정
├── tsconfig.json                   # TypeScript 설정 (TypeScript 사용 시)
├── package.json                    # 프로젝트 의존성 및 스크립트
└── README.md                       # 프로젝트 설명`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `/app/(auth)/login/page.tsx : 커스텀 로그인 페이지로, signIn 함수를 호출하거나 UI를 제공합니다. 필요에 따라 회원가입 페이지(/signup) 등을 추가.
/app/dashboard/page.tsx : 인증이 필요한 보호된 페이지. NextAuth 미들웨어로 접근을 제어할 수 있음.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `app/api/auth/[...nextauth]/route.ts`,
			},
			{
				type: ComponentType.NORMAL,
				value: `NextAuth의 인증 엔드포인트를 처리하는 파일입니다. GET, POST 메서드로 NextAuth를 설정합니다. </br>
				 `,
			},
			{
				type: ComponentType.CODE,
				value: `import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
});

export { handlers as GET, handlers as POST };`,
			},
			{
				type: ComponentType.NORMAL,
				value:
					'NextAuth(authOptions)를 호출하여 Google, GitHub 등의 인증 제공자를 처리하며 handlers는 인증 관련 API 엔드포인트를 처리합니다.',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `/lib/auth.js`,
			},
			{
				type: ComponentType.NORMAL,
				value:
					'NextAuth 설정(authOptions)을 정의합니다. GoogleProvider, 세션 콜백, JWT 설정 등을 설정합니다. ',
			},
			{
				type: ComponentType.CODE,
				value: `import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const authResponse = await fetch("/your/endpoint", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });

        if (!authResponse.ok) {
          return null;
        }
        const user = await authResponse.json();
        return user;
      },
    }),
  ],
});
`,
			},
			{
				type: ComponentType.KEYWORD,
				keyworldTitle: '클라이언트 사용법',
				value: 'SessionProvider 사용',
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				promptTypeProps: 'TIP',
				value:
					'클라이언트에서는 next-auth/react의 훅(useSession, signIn, signOut 등)을 사용해 인증 상태를 관리하거나 로그인/로그아웃을 처리합니다.',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: 'app/layout.tsx',
			},
			{
				type: ComponentType.CODE,
				value: `import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}`,
			},
			{
				type: ComponentType.NORMAL,
				value: `App Router에서는 SessionProvider가 클라이언트 컴포넌트이므로, 루트 레이아웃에 직접 추가할 수 없습니다. 별도의 클라이언트 컴포넌트를 만들어야 합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: 'pages/_app.tsx',
			},
			{
				type: ComponentType.CODE,
				value: `
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
`,
			},
			{
				type: ComponentType.KEYWORD,
				keyworldTitle: '클라이언트 사용법',
				value: 'useSession 사용',
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				promptTypeProps: 'TIP',
				value:
					'클라이언트에서는 next-auth/react의 훅(useSession, signIn, signOut 등)을 사용해 인증 상태를 관리하거나 로그인/로그아웃을 처리합니다.',
			},
			{
				type: ComponentType.NORMAL,
				value:
					'클라이언트 컴포넌트에서 useSession 훅을 사용하여 <b>세션 상태</b>를 확인합니다.',
			},
			{
				type: ComponentType.CODE,
				value: `// app/client/page.tsx

"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function ClientPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>로딩 중...</p>;
  if (status === "authenticated") {
    return (
      <>
        <p>{session.user?.name}님으로 로그인됨</p>
        <button onClick={() => signOut()}>로그아웃</button>
      </>
    );
  }

  return (
    <>
      <p>로그인하지 않음</p>
      <button onClick={() => signIn("github")}>GitHub로 로그인</button>
    </>
  );
}
`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `useSession은 data (세션 객체)와 status (loading, authenticated, unauthenticated)를 반환합니다.
signIn과 signOut은 각각 로그인과 로그아웃을 처리합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `세션 업데이트`,
			},
			{
				type: ComponentType.NORMAL,
				value:
					'useSession의 update 메서드를 사용하여 클라이언트 측에서 세션을 업데이트할 수 있습니다.',
			},
			{
				type: ComponentType.CODE,
				value: `// app/client/page.tsx
"use client";

import { useSession } from "next-auth/react";

export default function UpdateSessionPage() {
  const { data: session, update } = useSession();

  const handleUpdate = async () => {
    await update({ name: "새로운 이름" }); // 세션 데이터 업데이트
  };

  return (
    <>
      <p>현재 사용자: {session?.user?.name}</p>
      <button onClick={handleUpdate}>이름 업데이트</button>
    </>
  );
}
`,
			},
			{
				type: ComponentType.NORMAL,
				value: `update 메서드는 서버의 jwt 콜백을 트리거하여 세션 데이터를 갱신합니다.`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `<서버 측 사용법> App Router에서 서버 세션 확인`,
			},
			{
				type: ComponentType.KEYWORD,
				value: 'auth 함수',
			},
			{
				type: ComponentType.NORMAL,
				value:
					'/app/api/auth/[...nextauth]/route.ts에서 내보낸 <span class="point">auth 함수</span>를 사용합니다.',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: 'app/server/page.tsx',
			},

			{
				type: ComponentType.CODE,
				value: `import { auth , GET, POST } from @/app/auth";

export default async function ServerPage() {
  const session = await auth();

  if (!session) {
    return <p>로그인이 필요합니다.</p>;
  }

  return <p>서버에서 확인된 사용자: {session.user?.name}</p>;
}`,
			},
			{
				type: ComponentType.NORMAL,
				value:
					'auth 함수는 서버 컴포넌트, 미들웨어, API 라우트 등에서 사용할 수 있는 통합 메서드입니다.',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: '<서버 측 사용법> Pages Router에서 서버 세션 확인',
			},
			{
				type: ComponentType.NORMAL,
				value: 'Pages Router에서는 getServerSession을 사용합니다.',
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `pages/server.js`,
			},
			{
				type: ComponentType.CODE,
				value: `import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

export default function ServerPage({ session }) {
  if (!session) {
    return <p>로그인이 필요합니다.</p>;
  }

  return <p>서버에서 확인된 사용자: {session.user?.email}</p>;
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  return {
    props: {
      session,
    },
  };
}`,
			},
			{
				type: ComponentType.NORMAL,
				value:
					'getServerSession은 세션 확인 속도가 빠르며, 추가 네트워크 요청을 줄입니다.',
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `미들웨어로 페이지 보호`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `/middleware.ts`,
			},
			{
				type: ComponentType.NORMAL,
				value:
					"NextAuth 미들웨어를 설정하여 특정 경로(예: /dashboard)에 인증이 필요하도록 제한. 예: export { default } from 'next-auth/middleware';",
			},
			{
				type: ComponentType.CODE,
				value: `import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token, // 토큰이 있으면 인증된 것으로 간주
  },
});

export const config = {
  matcher: ["/dashboard/:path*"], // /dashboard 경로와 하위 경로 보호
};
`,
			},
			{
				type: ComponentType.NORMAL,
				value: `/dashboard로 시작하는 모든 경로에 대해 인증을 요구`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `커스텀 로그인 페이지`,
			},
			{
				type: ComponentType.NORMAL,
				value: `기본 로그인 페이지를 커스터마이징하려면 pages 옵션을 사용합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `app/api/auth/[...nextauth]/route.ts`,
			},
			{
				type: ComponentType.CODE,
				value: `export const { handlers, auth } = NextAuth({
  providers: [GitHubProvider({ clientId: process.env.AUTH_GITHUB_ID, clientSecret: process.env.AUTH_GITHUB_SECRET })],
  pages: {
    signIn: "/auth/signin",
  },
});
`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `app/auth/signin/page.tsx`,
			},
			{
				type: ComponentType.CODE,
				value: `import { getProviders, signIn } from "next-auth/react";

export default async function SignIn() {
  const providers = await getProviders();

  return (
    <div>
      <h1>로그인</h1>
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              {provider.name}으로 로그인
            </button>
          </div>
        ))}
    </div>
  );
}
`,
			},
		],
	},
	{
		id: 76,
		title: `[TECH-QA] "TypeScript의 강력한 도구: 유틸리티 타입 활용법"`,
		date: '2025-07-21 11:14:33',
		folder: Folder.TYPESCRIPT,
		tag: ['TECH-QA', 'TypeScript'],
		preview: `TypeScript의 유틸리티 타입(Utility Types)은 기존 타입을 기반으로 새로운 타입을 생성하거나 변환하는 데 사용되는 내장 타입 도구입니다. 이를 통해 코드의 재사용성과 타입 안전성을 높일 수 있습니다. 아래는 주요 유틸리티 타입과 그 설명입니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Partial<t></t>`,
			},
			{
				type: ComponentType.CODE,
				value: `interface User {
  name: string;
  age: number;
}

type PartialUser = Partial<User>;
// PartialUser = { name?: string; age?: number; }`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `객체의 일부 속성만 업데이트하거나 부분적으로 사용할 때 유용.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Required<t></t>`,
			},
			{
				type: ComponentType.CODE,
				value: `interface User {
  name?: string;
  age?: number;
}

type RequiredUser = Required<User>;
// RequiredUser = { name: string; age: number; }`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `타입 T의 모든 속성을 필수(required)로 만듭니다. 선택적 속성을 강제로 필수로 만들 때 사용.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Readonly<t></t>`,
			},
			{
				type: ComponentType.CODE,
				value: `interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
// ReadonlyUser = { readonly name: string; readonly age: number; }`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `타입 T의 모든 속성을 읽기 전용(readonly)으로 만듭니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Pick<T, K>`,
			},
			{
				type: ComponentType.CODE,
				value: `interface User {
  name: string;
  age: number;
  email: string;
}

type PickUser = Pick<User, 'name' | 'age'>;
// PickUser = { name: string; age: number; }`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `타입 T에서 지정된 키 K만 선택하여 새로운 타입을 만듭니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Omit<T, K>`,
			},
			{
				type: ComponentType.CODE,
				value: `interface User {
  name: string;
  age: number;
  email: string;
}

type OmitUser = Omit<User, 'email'>;
// OmitUser = { name: string; age: number; }`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `타입 T에서 지정된 키 K를 제외한 새로운 타입을 만듭니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Record<K, T>`,
			},
			{
				type: ComponentType.CODE,
				value: `type Role = 'admin' | 'user' | 'guest';
type UserRecord = Record<Role, string>;
// UserRecord = { admin: string; user: string; guest: string; }`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `키 타입 K와 값 타입 T로 구성된 객체 타입을 생성합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Exclude<T, U>`,
			},
			{
				type: ComponentType.CODE,
				value: `type MyUnion = 'a' | 'b' | 'c';
type Excluded = Exclude<MyUnion, 'a'>;
// Excluded = 'b' | 'c'`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `타입 T에서 U에 할당 가능한 타입을 제외합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Extract<T, U>`,
			},
			{
				type: ComponentType.CODE,
				value: `type MyUnion = 'a' | 'b' | 'c';
type Extracted = Extract<MyUnion, 'a' | 'b'>;
// Extracted = 'a' | 'b'`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `타입 T에서 U에 할당 가능한 타입만 추출합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `NonNullable<t></t>`,
			},
			{
				type: ComponentType.CODE,
				value: `type Nullable = string | null | undefined;
type NonNullableType = NonNullable<Nullable>;
// NonNullableType = string`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `null 또는 undefined가 포함된 타입을 안전하게 다룰 때 사용.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `ReturnType<t></t>`,
			},
			{
				type: ComponentType.CODE,
				value: `function getUser() {
  return { name: 'Alice', age: 30 };
}

type UserReturn = ReturnType<typeof getUser>;
// UserReturn = { name: string; age: number; }`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `함수 타입 T의 반환 타입을 추출합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Parameters<t></t>`,
			},
			{
				type: ComponentType.CODE,
				value: `function add(a: number, b: string): string {
  return \`\${a}\${b}\`;
}

type AddParams = Parameters<typeof add>;
// AddParams = [number, string]`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `함수 타입 T의 매개변수 타입을 튜플(tuple) 타입으로 정의되었습니다. 튜플은 배열과 유사하지만, 고정된 길이와 각 요소의 타입이 명시적으로 정의된 배열입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Awaited<t></t>`,
			},
			{
				type: ComponentType.CODE,
				value: `type PromiseType = Promise<string>;
type ResolvedType = Awaited<PromiseType>;
// ResolvedType = string`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Promise 타입 T의 해결(resolve) 타입을 추출합니다. 비동기 작업의 결과 타입을 다룰 때 사용.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Uppercase<t> Lowercase<t>, Capitalize<t>, Uncapitalize<t></t></t></t></t>`,
			},
			{
				type: ComponentType.CODE,
				value: `type Greeting = 'hello world';
type UpperGreeting = Uppercase<Greeting>;
// UpperGreeting = 'HELLO WORLD'
type CapitalizedGreeting = Capitalize<Greeting>;
// CapitalizedGreeting = 'Hello world'`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `문자열 리터럴 타입을 대문자, 소문자, 첫 글자 대문자, 첫 글자 소문자로 변환합니다. 문자열 리터럴 타입을 변환할 때 사용.`,
			},
		],
	},
	{
		id: 77,
		title: `[TECH-QA] Intersection Type (&)이란?`,
		date: '2025-07-22 09:35:33',
		folder: Folder.JAVASCRIPT,
		tag: ['브라우저', 'TECH-QA', '웹성능최적화'],
		preview: `화면에서 쿨락헌 순간 모달에 관련된 파일들을 불러오고 모달에 관련된 파일들이 모두 불러와지면 Javascript를 Evaluate하고 모달이 뜨도록 코드를 실행하고 모달이 오픈된다.`,
		post: [
			{
				type: ComponentType.STRINGLIST,
				value: `A & B는 타입 A와 타입 B의 모든 속성을 동시에 만족하는 새로운 타입을 정의합니다.
즉, 결과 타입은 A와 B의 속성을 모두 포함합니다.
예를 들어, AlertModalProps와 React.RefAttributes<HTMLDivElement>를 결합하면, 새로운 타입은 AlertModalProps의 모든 속성과 React.RefAttributes<HTMLDivElement>의 모든 속성을 포함합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `interface AlertModalProps {
  title: string;
  message: string;
  onClose: () => void;
}

const AlertModal = React.forwardRef<HTMLDivElement, AlertModalProps>(
  ({ title, message, onClose }, ref) => {
    return (
      <div ref={ref}>
        <h1>{title}</h1>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }
);

// 타입 정의
type AlertModalComponent = React.ForwardRefRenderFunction<
  HTMLDivElement,
  AlertModalProps & React.RefAttributes<HTMLDivElement>
>;`,
			},
			{
				type: ComponentType.NORMAL,
				value: `여기서 AlertModalProps & React.RefAttributes<HTMLDivElement>는 AlertModalProps의 속성(title, message, onClose)과 React.RefAttributes<HTMLDivElement>의 속성(ref)을 모두 포함하는 타입을 정의합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const modalRef = React.useRef<HTMLDivElement>(null);

<AlertModal
  title="경고"
  message="이것은 경고 메시지입니다."
  onClose={() => console.log("닫기")}
  ref={modalRef}
/>;`,
			},
			{
				type: ComponentType.NORMAL,
				value: `React.RefAttributes<HTMLDivElement>는 ref 속성을 추가로 제공하므로, AlertModalProps에 ref를 직접 포함하지 않고도 ref를 지원할 수 있게 됩니다.`,
			},
		],
	},
	{
		id: 78,
		title: `[TECH-QA] TypeScript에서 객체 리터럴을 불변(immutable)으로 사용하기`,
		date: '2025-07-22 13:35:33',
		folder: Folder.JAVASCRIPT,
		tag: ['TECH-QA'],
		preview: `TypeScript에서 as const를 사용하여 객체 리터럴을 불변(immutable)으로 만드는 예제를 보여드리겠습니다. as const는 객체, 배열, 또는 기본 타입을 읽기 전용(readonly)으로 만들어 타입을 좁히고, 값이 변경되지 않도록 보장합니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `기본 객체 리터럴과 as const`,
			},
			{
				type: ComponentType.CODE,
				value: `const config = {
  apiUrl: "https://api.example.com",
  port: 8080,
  timeout: 5000
} as const;

// 타입: { readonly apiUrl: "https://api.example.com"; readonly port: 8080; readonly timeout: 5000; }

// 값 변경 시도 - 에러 발생
// config.apiUrl = "https://new-url.com"; // 오류: Cannot assign to 'apiUrl' because it is a read-only property.

// 사용 예시
function fetchData(url: string) {
  console.log(\`Fetching from \${url}\`);
}

fetchData(config.apiUrl); // 정상 작동`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `중첩 객체와 as const`,
			},
			{
				type: ComponentType.CODE,
				value: `const userSettings = {
  user: {
    name: "Alice",
    age: 30
  },
  preferences: {
    theme: "dark",
    notifications: true
  }
} as const;

// 타입: { readonly user: { readonly name: "Alice"; readonly age: 30; }; readonly preferences: { readonly theme: "dark"; readonly notifications: true; }; }

// 값 변경 시도 - 에러 발생
// userSettings.user.name = "Bob"; // 오류: Cannot assign to 'name' because it is a read-only property.

// 사용 예시
function displayUser(settings: typeof userSettings) {
  console.log(\`User: \${settings.user.name}, Theme: \${settings.preferences.theme}\`);
}

displayUser(userSettings);`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `배열과 as const`,
			},
			{
				type: ComponentType.CODE,
				value: `const colors = ["red", "green", "blue"] as const;

// 타입: readonly ["red", "green", "blue"]

// 배열 요소 변경 시도 - 에러 발생
// colors[0] = "yellow"; // 오류: Cannot assign to '0' because it is a read-only property.

// 사용 예시
function pickColor(color: typeof colors[number]) {
  console.log(\`Selected color: \${color}\`);
}

pickColor(colors[0]); // 정상 작동: "red"`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `as const의 효과: 객체와 배열의 모든 프로퍼티를 readonly로 만들고, 리터럴 타입으로 좁힙니다. 예를 들어, string 대신 "specific-value"로 타입이 지정됩니다.
불변성 보장: 컴파일 타임에 값 변경을 방지하며, 코드의 안정성을 높입니다.
사용 사례: 상수 데이터, 설정 객체, 열거형(enum) 대체 등에 유용합니다.
제한사항: as const는 객체를 완전히 동결(freeze)하지 않으므로, 런타임에서 Object.freeze와 함께 사용할 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `Object.freeze`,
			},
			{
				type: ComponentType.CODE,
				value: `const frozenConfig = Object.freeze({
  apiUrl: "https://api.example.com",
  port: 8080
}) as const;

// 런타임과 컴파일 타임 모두 불변
// frozenConfig.apiUrl = "new-url"; // 컴파일 에러
// frozenConfig.port = 3000; // 컴파일 에러`,
			},
		],
	},
	{
		id: 79,
		title: `[TECH-QA] TypeScript로 깔끔한 쿼리 문자열 만들기: Record<string, never> 활용법`,
		date: '2025-07-23 18:14:33',
		folder: Folder.JAVASCRIPT,
		tag: ['TECH-QA'],
		preview: `qsStringify와 유사한 기능을 수행하는 새로운 함수 buildQueryString를 TypeScript로 작성한 예제입니다. 이 함수는 입력 객체를 쿼리 문자열로 변환하며, 유효하지 않은 값(null, undefined, 빈 문자열/배열)을 제거합니다. Record<string, never>를 기본 타입으로 사용해 빈 객체를 처리합니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `🚩 Record<string, never> 활용법`,
			},
			{
				type: ComponentType.CODE,
				value: `import { isNil, isArray, isEmpty } from 'lodash';
import qs from 'query-string';

const buildQueryString = <T = Record<string, never>>(params?: T): string => {
  // 유효하지 않은 값(null, undefined, 빈 문자열/배열) 제거
  const cleanedParams = omitBy(params || {}, (val) => {
    if (isNil(val)) return true;
    return isArray(val) && (val as string[]).every((v) => !v);
  });

  // 객체가 비어 있으면 빈 문자열 반환, 아니면 쿼리 문자열 생성
  return isEmpty(cleanedParams) ? '' : \`?$\{qs.stringify(cleanedParams, { arrayFormat: 'comma', encode: false })}\`;
};

// 사용 예제
console.log(buildQueryString()); // ''
console.log(buildQueryString({ name: 'John', age: '25', empty: '' })); // '?name=John,age=25'
console.log(buildQueryString({ items: [], invalid: null })); // ''
console.log(buildQueryString({ tags: ['red', 'blue'], empty: null })); // '?tags=red,blue'`,
			},
			{
				type: ComponentType.NORMAL,
				value: `buildQueryString 함수는 프론트엔드에서 API 요청을 위한 쿼리 문자열을 생성하는 유틸리티 함수입니다. 입력 객체에서 유효하지 않은 값(null, undefined, 빈 문자열, 빈 배열 또는 모든 요소가 빈 값인 배열)을 제거하고, 유효한 데이터만 포함한 쿼리 문자열을 반환합니다. 이는 API 요청을 간결하게 만들고, 서버의 처리 부담을 줄이며, 사용자 경험을 개선하는 데 기여합니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `함수 구조`,
			},
			{
				type: ComponentType.KEYWORD,
				keyworldTitle: '제네릭 타입',
				value: '<T = Record<string،  never>>',
			},
			{
				type: ComponentType.NORMAL,
				value: `T는 입력 파라미터 params의 타입을 나타냅니다.
기본 타입 Record<string, never>는 속성이 없는 빈 객체 {}를 의미합니다.
params가 undefined이거나 전달되지 않을 경우, 빈 객체 {}로 처리되어 함수가 안전하게 동작합니다.`,
			},
			{
				type: ComponentType.KEYWORD,
				keyworldTitle: '파라미터',
				value: 'params?: T',
			},
			{
				type: ComponentType.STRINGLIST,
				value: `params는 선택적이며, 객체 형태로 전달됩니다.
params || {}를 통해 undefined일 경우 빈 객체로 대체됩니다.`,
			},
			{
				type: ComponentType.KEYWORD,
				keyworldTitle: '로직',
				value: 'Lodash의 omitBy',
			},
			{
				type: ComponentType.NORMAL,
				value: `Lodash의 omitBy를 사용해 <span class="point">null, undefined, 빈 문자열</span> 또는 <span class="point">모든 요소가 빈 값인 배열</span>을 제거.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `{ name: "John", empty: null, items: [""] } → <span class="point"> { name: "John" }.</span>`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Lodash의 isEmpty로 정리된 객체가 비어 있는지 확인.
비어 있으면 ' '를 반환.
그렇지 않으면 qs.stringify를 사용해 쿼리 문자열로 변환하고, ?를 접두사로 추가.
arrayFormat: 'comma'는 배열을 쉼표로 구분 (예: tags=red,blue).
encode: false는 URL 인코딩을 비활성화해 가독성을 높임.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `입력 없음`,
			},
			{
				type: ComponentType.CODE,
				value: `buildQueryString(); // 출력: ''`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `params가 undefined이므로 빈 객체 {}로 처리.
omitBy({}, ...)는 빈 객체를 반환, isEmpty가 true이므로 '' 반환.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `유효한 값 포함`,
			},
			{
				type: ComponentType.CODE,
				value: `buildQueryString({ name: 'John', age: '25', empty: '' }); // 출력: '?name=John,age=25'`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `empty: ''는 제거됨.
cleanedParams = { name: 'John', age: '25' }.
qs.stringify로 name=John,age=25를 생성하고, ?를 추가.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `유효하지 않은 값만 포함`,
			},
			{
				type: ComponentType.CODE,
				value: `buildQueryString({ items: [], invalid: null }); // 출력: ''`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `items: []와 invalid: null은 제거됨.
cleanedParams = {}, isEmpty가 true이므로 '' 반환.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `배열 포함`,
			},
			{
				type: ComponentType.CODE,
				value: `buildQueryString({ tags: ['red', 'blue'], empty: null }); // 출력: '?tags=red,blue'`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `empty: null은 제거됨.
cleanedParams = { tags: ['red', 'blue'] }.
qs.stringify로 tags=red,blue를 생성하고, ?를 추가.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `배열 포함`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>효율적인 요청</b>: 불필요한 파라미터를 제거해 네트워크 요청 크기를 줄이고, 서버의 처리 부담을 완화.
<b>타입 안전성</b>: Record<string, never>를 기본 타입으로 사용해 입력이 없거나 빈 객체일 때도 안전하게 처리.
<b>사용자 경험</b>: 간결한 쿼리 문자열은 URL을 깔끔하게 유지하며, 브라우저 히스토리나 공유 링크의 가독성을 높임.
<b>서버 부하 감소</b>: 유효한 데이터만 서버로 전송되므로 서버의 검증 로직이 간소화됨.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `트래픽 관리와의 연관성`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `프론트엔드에서 데이터를 정리하면 불필요한 데이터 전송이 줄어들어 네트워크 트래픽이 감소.
서버는 유효한 데이터만 처리하므로 CPU/메모리 사용량이 줄고, 캐싱 효율성이 향상.
이는 트래픽 스파이크를 간접적으로 방지하며, 전체 시스템 성능을 최적화.`,
			},
		],
	},
	{
		id: 80,
		title: `[TECH-QA] TypeScript Record<string, number> 기본`,
		date: '2025-07-23 09::33',
		folder: Folder.JAVASCRIPT,
		tag: ['TECH-QA'],
		preview: `qsStringify와 유사한 기능을 수행하는 새로운 함수 buildQueryString를 TypeScript로 작성한 예제입니다. 이 함수는 입력 객체를 쿼리 문자열로 변환하며, 유효하지 않은 값(null, undefined, 빈 문자열/배열)을 제거합니다. Record<string, never>를 기본 타입으로 사용해 빈 객체를 처리합니다.`,
		post: [
			{
				type: ComponentType.STRINGLIST,
				value: `Record 유틸리티 타입은 TypeScript에서 제공하는 내장 타입으로, 특정 타입의 키와 값으로 구성된 객체를 정의할 때 사용됩니다
				<b>키(key)</b>: string 타입 (예: "age", "score", "id" 등).
<b>값(value)</b>: number 타입 (예: 42, 100, 3.14 등).
즉, 모든 키가 문자열이고, 모든 값이 숫자인 객체를 나타냅니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const scores: Record<string, number> = {
  math: 95,
  science: 88,
  history: 92
};'`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위 객체는 Record<string, number> 타입에 부합합니다. 키는 math, science, history (모두 string)이고, 값은 95, 88, 92 (모두 number)입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `특징`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>동적 키 허용</b>: 키가 고정되지 않고, 문자열인 어떤 키든 가질 수 있습니다.
<b>값 타입 강제</b>: 모든 값은 number 타입이어야 하며, 다른 타입(예: string, boolean)을 넣으면 컴파일 에러가 발생합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const invalid: Record<string, number> = {
  name: "John" // 에러: "John"은 number가 아님
};`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>빈 객체 가능</b>: Record<string, number> 타입의 객체는 속성이 없어도 유효합니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const empty: Record<string, number> = {};`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `다른 타입과의 비교`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>{ [key: string]: number } 와 동일</b>: Record<string, number>는 인덱스 시그니처 { [key: string]: number }와 같은 의미입니다. 하지만 Record는 더 간결하고 가독성이 좋습니다.
<b>제한된 키 타입</b>: 키를 특정 문자열 리터럴로 제한하려면 Record<"key1" | "key2", number>처럼 사용할 수 있습니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const limited: Record<"width" | "height", number> = {
  width: 100,
  height: 200
  // depth: 50 // 에러: "depth"는 허용되지 않는 키
};`,
			},
			{
				type: ComponentType.NORMAL,
				value: `값 타입 일관성: 모든 값이 number여야 하며, undefined나 null도 허용되지 않습니다 (단, Record<string, number | undefined>처럼 명시적으로 허용 가능).`,
			},
		],
	},
	{
		id: 81,
		title: `[TECH-QA] React에서 SVG 아이콘 다루기: 실용적인 예제와 팁`,
		date: '2025-07-24 12:57:33',
		folder: Folder.JAVASCRIPT,
		tag: ['TECH-QA', 'SVG'],
		preview: `React에서 ref를 부모 컴포넌트에서 생성하여 자식 컴포넌트(예: _Icon)에 전달하고, 이를 통해 SVG와 같은 DOM 요소에 직접 접근하는 이유와 용도를 간단히 설명하겠습니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `ref를 사용하는 이유`,
			},
			{
				type: ComponentType.NORMAL,
				value: `React는 선언적 UI 라이브러리로, 일반적으로 상태와 props를 통해 UI를 관리합니다. 하지만 특정 상황에서는 DOM 요소에 직접 접근해야 할 때가 있습니다. ref는 이를 가능하게 하며, 부모 컴포넌트에서 ref를 생성해 자식 컴포넌트에 전달하면 자식의 DOM 요소(여기서는 <svg>)를 부모에서 조작하거나 정보를 얻을 수 있습니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `ref를 통해 할 수 있는 작업`,
			},
			{
				type: ComponentType.NORMAL,
				value: `_Icon 컴포넌트의 SVG 요소에 ref를 전달하여 부모 컴포넌트에서 수행할 수 있는 작업의 예시입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `DOM 속성/상태 조회`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `SVG 요소의 크기, 위치, 속성 등을 확인.
예: ref.current.getBoundingClientRect()를 호출해 SVG의 화면상 위치나 크기를 확인.
용도: 애니메이션이나 툴팁 위치 계산.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `직접 DOM 조작`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `React 상태 외부에서 SVG의 속성을 동적으로 변경.
예: ref.current.setAttribute('fill', 'red')로 색상을 변경.
용도: React로 처리하기 복잡한 동적 스타일링.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `애니메이션 제어`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `SVG 요소에 애니메이션을 적용하거나 제어.
예: ref.current.animate()를 사용해 CSS/SVG 애니메이션을 트리거.
용도: 아이콘에 클릭 시 깜빡이는 효과 추가.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `포커스 관리`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `SVG 요소에 포커스를 설정하거나 확인.
예: ref.current.focus()로 접근성 개선.
용도: 키보드 내비게이션 지원.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `외부 라이브러리와 통합`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `D3.js, GSAP 같은 라이브러리가 DOM 요소를 직접 조작해야 할 때.
예: ref.current를 라이브러리에 전달해 SVG 경로 애니메이션 적용.
용도: 복잡한 시각화 작업.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `이벤트 처리`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `특정 DOM 이벤트(예: 마우스 오버, 드래그)를 직접 감지.
예: ref.current.addEventListener('mouseover', handleMouseOver).
용도: React의 합성 이벤트로 처리하기 어려운 경우.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `예제`,
			},
			{
				type: ComponentType.CODE,
				value: `import React, { useRef, useEffect } from 'react';
import { _ICon } from './IcArrowLeft';

const ParentComponent = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      // SVG 요소에 접근하여 작업 수행
      console.log('SVG 크기:', svgRef.current.getBoundingClientRect());
      
      // 예: 색상 변경
      svgRef.current.setAttribute('fill', 'purple');
      
      // 예: 클릭 이벤트 추가
      svgRef.current.addEventListener('click', () => {
        alert('SVG 클릭됨!');
      });
    }
  }, []);

  return (
    <div>
      <_ICon
        ref={svgRef}
        size={32}
        color="blue"
        filled={true}
        aria-label="왼쪽 화살표"
      />
    </div>
  );
};

export default ParentComponent;`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>React 철학 준수</b>: React는 DOM 직접 조작을 최소화하도록 권장합니다. 가능하면 상태/props로 UI를 관리하세요.
<b>적절한 사용</b>: ref는 포커스 관리, 애니메이션, 외부 라이브러리 통합 등 필수적인 경우에만 사용하세요.
<b>접근성 고려</b>: SVG에 aria-label 같은 속성을 추가해 접근성을 유지하세요.
<b>ref 전달 방식</b>: _ICon React.forwardRef로 래핑되어 있어야 ref가 SVG 요소에 올바르게 연결됩니다.`,
			},
		],
	},
	{
		id: 82,
		title: `[TECH-QA] class-variance-authority 라이브러리`,
		date: '2025-07-24 14:30:33',
		folder: Folder.JAVASCRIPT,
		tag: ['tailwind', 'style', 'CVA'],
		preview: `CVA는 JavaScript/TypeScript 기반의 오픈소스 라이브러리로, CSS 클래스 이름을 조건에 따라 체계적으로 관리하고 컴포넌트의 다양한 스타일 변형(variants)을 쉽게 정의할 수 있도록 도와줍니다. 특히 Tailwind CSS와 같은 유틸리티 퍼스트 CSS 프레임워크와 함께 사용될 때 유용하며, React, Vue, Angular 등 다양한 프레임워크와 호환됩니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `CVA는 JavaScript/TypeScript 기반의 오픈소스 라이브러리로, CSS 클래스 이름을 조건에 따라 체계적으로 관리하고 컴포넌트의 다양한 스타일 변형(variants)을 쉽게 정의할 수 있도록 도와줍니다. 특히 Tailwind CSS와 같은 유틸리티 퍼스트 CSS 프레임워크와 함께 사용될 때 유용하며, React, Vue, Angular 등 다양한 프레임워크와 호환됩니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `CVA는 컴포넌트의 스타일 변형(예: 버튼의 크기, 색상, 상태 등)을 타입 안전하게 정의하고, 코드의 가독성과 유지보수성을 높이는 데 초점을 맞춘 도구입니다. 예를 들어, 버튼 컴포넌트의 "primary", "secondary" 변형이나 "small", "large" 크기를 간단히 정의하고, 이를 기반으로 클래스 이름을 동적으로 생성할 수 있습니다.cva.style

간단히 말해, CVA는 UI 컴포넌트의 스타일링을 더 구조적이고 선언적으로 관리할 수 있게 해주는 유틸리티 라이브러리입니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `TypeScript와 Tailwind CSS를 사용해 버튼 컴포넌트의 다양한 변형을 정의하는 코드 예제입니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `import { cva } from 'class-variance-authority';

// CVA로 버튼 스타일 변형 정의
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium', // 기본 스타일
  {
   variants: {
       intent: {
       primary: 'bg-blue-500 text-white hover:bg-blue-600',
       secondary: 'bg-gray-500 text-white hover:bg-gray-600',
       danger: 'bg-red-500 text-white hover:bg-red-600',
   },
   size: {
       small: 'px-2 py-1 text-sm',
       medium: 'px-4 py-2 text-base',
       large: 'px-6 py-3 text-lg',
      },
   },
   defaultVariants: {
   	intent: 'primary',
   	size: 'medium',
      },
   }
);

// React 컴포넌트에서 사용
interface ButtonProps {
  intent?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const Button = ({ intent, size, children }: ButtonProps) => {
  return (
    <button className={buttonVariants({ intent, size })}>
      {children}
    </button>
  );
};

// 사용 예시
const App = () => (
 <div>
   <Button intent="primary" size="small">Primary Small</Button>
   <Button intent="secondary" size="medium">Secondary Medium</Button>
   <Button intent="danger" size="large">Danger Large</Button>
   <Button>Default Button</Button> {/* 기본값: primary, medium */}
 </div>
);

export default App;`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `<b>cva 함수</b>: 기본 스타일과 변형(variants)을 정의합니다. 위 예시에서는 intent(버튼 색상)와 size(버튼 크기)를 변형으로 설정했습니다.
<b>변형(variants)</b>: intent와 size에 따라 Tailwind CSS 클래스를 동적으로 적용합니다.
<b>기본값(defaultVariants)</b>: 변형이 지정되지 않을 때 기본적으로 적용될 스타일을 설정합니다.
<b>컴포넌트 사용</b>: Button 컴포넌트는 buttonVariants를 호출해 동적으로 클래스 이름을 생성하고, 이를 <button> 요소에 적용합니다.`,
			},
			{
				type: ComponentType.NORMAL,
				value: `CVA를 사용하면 스타일 변형을 체계적으로 관리할 수 있고, 타입 안전성(TypeScript)을 보장하여 개발자 경험을 향상시킵니다.`,
			},
		],
	},
	{
		id: 83,
		title: `[TECH-QA] ES6+에서 _.omit, _.pick, 객체 디스트럭처링(...rest)`,
		date: '2025-07-25 09:14:33',
		folder: Folder.JAVASCRIPT,
		tag: ['TECH-QA'],
		preview: `odash에서 _.omit과 _.pick은 객체에서 특정 속성을 필터링할 때 사용하는 유틸리티 함수로, 비슷한 목적을 가지지만 동작 방식이 반대입니다. 아래에 차이점을 간단히 설명합니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `_.omit과 유사한 효과`,
			},
			{
				type: ComponentType.NORMAL,
				value: ` lodash에서 <span class="point">_.omit<span>과 </span>_.pick</span>은 객체에서 특정 속성을 필터링할 때 사용하는 유틸리티 함수로, 비슷한 목적을 가지지만 동작 방식이 반대입니다. 아래에 차이점을 간단히 설명합니다. ES6+에서 객체 디스트럭처링(...rest)을 사용해 _.omit과 유사한 효과를 얻을 수 있습니다. 아래는 ...rest를 사용한 예제입니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `const object = { a: 1, b: 2, c: 3 };

// a와 c를 제외한 나머지 속성을 추출
const { a, c, ...rest } = object;

console.log(rest); // { b: 2 }`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: ` ...rest: 객체 디스트럭처링에서 명시적으로 선택한 속성(a, c)을 제외한 나머지 속성을 rest 객체에 수집합니다.
 동작: _.omit(object, ['a', 'c'])와 동일한 결과를 반환.
 장점: Lodash 없이 네이티브 JavaScript로 간단히 구현 가능.
 제한: 제외할 속성을 명시적으로 변수로 선언해야 하므로, 동적으로 속성 목록을 처리하려면 추가 로직이 필요할 수 있습니다.`,
			},

			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `동적 속성 제외 예제`,
			},
			{
				type: ComponentType.CODE,
				value: `const object = { a: 1, b: 2, c: 3 };
const keysToOmit = ['a', 'c'];

const result = Object.fromEntries(
  Object.entries(object).filter(([key]) => !keysToOmit.includes(key))
);

console.log(result); // { b: 2 }`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: 'Object.entries(object)',
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Object.entries는 객체의 키-값 쌍을 배열로 변환합니다.
입력 객체: object = { a: 1, b: 2, c: 3 }
출력: [['a', 1], ['b', 2], ['c', 3]]
각 요소는 [key, value] 형태의 배열입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '.filter(([key]) => !keysToOmit.includes(key))',
			},
			{
				type: ComponentType.STRINGLIST,
				value: `filter 메서드는 배열의 요소를 조건에 따라 걸러냅니다.
[key]는 배열 디스트럭처링을 사용해 각 키-값 쌍에서 key만 추출합니다. (값은 무시됨)
keysToOmit은 제외하려는 키가 담긴 배열, 예: ['a', 'c'].
!keysToOmit.includes(key)는 key가 keysToOmit 배열에 없으면 true를 반환.
예: key = 'a' → keysToOmit.includes('a')는 true이므로 !true는 false → 제외. key = 'b' → keysToOmit.includes('b')는 false이므로 !false는 true → 유지.
필터링 결과: [['b', 2]] (a와 c는 제외됨).`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: 'Object.fromEntries(...)',
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Object.fromEntries는 키-값 쌍 배열을 다시 객체로 변환합니다.
입력: [['b', 2]]
출력: { b: 2 }`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: '결과',
			},
			{
				type: ComponentType.STRINGLIST,
				value: `Object.entries로 객체를 키-값 배열로 변환.
filter로 제외할 키(keysToOmit)를 제외한 항목만 유지.
Object.fromEntries로 필터링된 배열을 다시 객체로 변환.
결과적으로, 지정된 키를 제외한 새로운 객체를 생성.
입력: object = { a: 1, b: 2, c: 3 }, keysToOmit = ['a', 'c']
출력: result = { b: 2 }
이는 _.omit(object, ['a', 'c'])와 동일한 결과를 반환.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `_.pick과 유사한 효과`,
			},
			{
				type: ComponentType.NORMAL,
				value: `_.pick을 대체하려면, 특정 속성만 선택해 새로운 객체를 만드는 방식`,
			},
			{
				type: ComponentType.CODE,
				value: `const object = { a: 1, b: 2, c: 3 };
const keysToPick = ['a', 'c'];

const result = Object.fromEntries(
  Object.entries(object).filter(([key]) => keysToPick.includes(key))
);

console.log(result); // { a: 1, c: 3 }`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `
- ...rest는 _.omit과 유사한 기능을 네이티브로 제공하지만, 동적 속성 처리는 추가 코드 필요.
- Object.entries와 Object.fromEntries를 사용하면 _.omit과 _.pick 모두 유연하게 대체 가능.`,
			},
		],
	},
	{
		id: 84,
		title: `[TECH-QA] Lodash compact 함수`,
		date: '2025-07-28 09:24:33',
		folder: Folder.JAVASCRIPT,
		tag: ['TECH-QA'],
		preview: `compact 함수는 배열에서 falsy 값(null, undefined, false, 0, '', NaN 등)을 제거하여 유효한 객체만 포함하는 새로운 배열을 반환하는 유틸리티 함수입니다. 이는 배열을 정리하거나 필터링할 때 사용됩니다.`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `compact 함수는 <span class="point">배열에서 falsy 값(null, undefined, false, 0, '', NaN 등)을 제거</span>하여 <span class="point">유효한 객체만 포함하는 새로운 배열을 반환</span>하는 유틸리티 함수입니다. 이는 배열을 정리하거나 필터링할 때 사용됩니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `actionButtons={compact([
  { type: 'secondary', label: '취소', action: handleCancel },
  data?.needsExpiry && { type: 'primary_light', label: '확인', action: handleSaveExpiry },
])}`,
			},
			{
				type: ComponentType.NORMAL,
				value: `여기서 compact는 배열 내 두 번째 요소가 조건문(data?.needsExpiry && ...)에 따라 undefined 또는 false가 될 수 있는 경우를 처리합니다. data?.needsExpiry가 false이거나 undefined이면 해당 요소는 제외되고, actionButtons에는 유효한 버튼 객체만 포함됩니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `data.needsExpiry가 true인 경우`,
			},
			{
				type: ComponentType.CODE,
				value: `compact([
  { type: 'secondary', label: '취소', action: handleCancel },
  { type: 'primary_light', label: '확인', action: handleSaveExpiry }
])`,
			},
			{
				type: ComponentType.NORMAL,
				value: `결과: [{ type: 'secondary', label: '취소', action: handleCancel }, { type: 'primary_light', label: '확인', action: handleSaveExpiry }]`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `data.needsExpiry가 false이거나 undefined인 경우`,
			},
			{
				type: ComponentType.CODE,
				value: `compact([
  { type: 'secondary', label: '취소', action: handleCancel },
  undefined // data?.needsExpiry && ...는 falsy이므로 undefined
])`,
			},
			{
				type: ComponentType.NORMAL,
				value: `→ 결과: [{ type: 'secondary', label: '취소', action: handleCancel }]`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `compact는 배열에서 falsy 값을 제거하여 UI 컴포넌트(여기서는 버튼 목록)를 동적으로 렌더링할 때 유효한 데이터만 포함하도록 합니다.
조건부 버튼 렌더링 시 유용하며, 코드의 안정성과 간결성을 유지하는 데 기여합니다.
이 함수는 Lodash의 _.compact와 유사한 역할을 하며, React 같은 프레임워크에서 동적 UI 렌더링에 자주 사용됩니다.`,
			},
		],
	},
	{
		id: 85,
		title: `[TECH-QA] ?? (Nullish Coalescing Operator)와 !! (이중 부정 연산자)`,
		date: '2025-08-04 14:14:14',
		folder: Folder.JAVASCRIPT,
		tag: ['TECH-QA', 'Javascript'],
		preview: `?? (Nullish Coalescing Operator)와 !! (이중 부정 연산자)는 JavaScript에서 완전히 다른 목적으로 사용되는 연산자입니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `!! (이중 부정 연산자)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `값을 불리언(Boolean) 타입(true 또는 false)으로 강제로 변환합니다.
				falsy 값 <span class="point">(false, 0, "", null, undefined, NaN)</span>은 false로 변환됩니다, 
				truthy 값 (falsy 값 외)은 true로 변환됩니다.`,
			},
			{
				type: ComponentType.CODE,
				value: `console.log(!!0);         // false
console.log(!!"");        // false
console.log(!!null);      // false
console.log(!!"netflix"); // true
console.log(!!1);         // true`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `?? (Nullish Coalescing Operator)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `두 값 중 "nullish" <span class="point">null 또는 undefined만 체크하며</span> null과 undefined가 아닌 첫 번째 값을 반환합니다.
				a ?? b 는 a가 null 또는 undefined가 아니면 a를 반환하고, 그렇지 않으면 b를 반환합니다.
				?? 는 null과 undefined만 체크하며, 다른 falsy 값(false, 0, "", NaN)은 nullish로 간주하지 않습니다.
				0은 nullish 값이 아니므로, 0 ?? b는 항상 0을 반환합니다 (b는 무시됨).`,
			},
			{
				type: ComponentType.CODE,
				value: `console.log(0 ?? "default");     // 0 (0은 nullish가 아님)
console.log(null ?? "default");  // "default" (null은 nullish)
console.log(undefined ?? "default"); // "default" (undefined는 nullish)
console.log("" ?? "default");    // "" (빈 문자열은 nullish가 아님)
console.log(false ?? "default"); // false (false는 nullish가 아님)`,
			},
			{
				type: ComponentType.GUIDE_MESSAGE,
				promptTypeProps: 'WARNING',
				value: `<b> ?? (Nullish Coalescing Operator)를 사용할 때 두 번째 값를 반환합니다.<br/></b>
				console.log(null ?? undefined); // undefined <br/>
				console.log(undefined ?? null); // null <br/>
				`,
			},
		],
	},
	{
		id: 86,
		title: `[TECH-QA] createQueryKeys`,
		date: '2026-01-20 15:14:33',
		folder: Folder.LIBRARY,
		tag: ['reactQuery'],
		preview: `createQueryKeys는 TanStack Query (React Query)의 공식 기능이 아니라, 커뮤니티에서 만든 인기 있는 라이브러리인 @lukemorales/query-key-factory 패키지의 함수입니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h2',
				value: `createQueryKeys`,
			},
			{
				type: ComponentType.NORMAL,
				value: `createQueryKeys는 TanStack Query (React Query)의 공식 기능이 아니라, 커뮤니티에서 만든 인기 있는 라이브러리인 @lukemorales/query-key-factory 패키지의 함수입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `주요 기능과 목적`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이 함수는 타입 세이프(Type-safe)하고 구조화된 Query Key Factory를 만들어줍니다. TanStack Query에서 queryKey를 직접 배열로 관리하다 보면 아래와 같은 문제를 해결하기 위해 설계됐어요.`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `키 오타 발생
invalidateQueries 할 때 키를 잘못 기억
타입 추론이 약함
대규모 프로젝트에서 키 관리 어려움`,
			},
			{
				type: ComponentType.CODE,
				value: `import { createQueryKeys } from '@lukemorales/query-key-factory';

export const taskQueries = createQueryKeys('task', {
  // 기본 키 (parent key)
  all: null, // _def: ['task']

  // 상세 조회
  detail: (taskId: string) => ({
    queryKey: [taskId], // 실제 키: ['task', 'detail', taskId]
    // queryFn도 같이 정의 가능
    // queryFn: () => fetchTask(taskId),
  }),

  // 리스트
  list: (filters?: TaskFilters) => ({
    queryKey: filters ? [{ filters }] : [],
  }),
});`,
			},
			{
				type: ComponentType.NORMAL,
				value: `createQueryKeys 에서 task 이것이 부모키이고 , 나머지 아래 detail, list 등등 createQueryKeys 안에 모든 api 통신 사용 키가 존재 합니다.
부모키를 업데이트 하면 하위 쿼리가 다 업데이트 됩니다. createQueryKeys를 쓰는 가장 큰 이유 중 하나가 바로 부모 키(parent key)만 무효화(invalidate)하면 그 아래 모든 하위 쿼리가 자동으로 리패치(refetch)되도록 만드는 것입니다.`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `전체 공지 관련 부모 키`,
			},
			{
				type: ComponentType.CODE,
				value: `all: null, // _def: ['task']
noticeQueries.detail('123') 
// → { queryKey: ['task', 'detail', '123'] }

noticeQueries.all 
// → { _def: ['task'] }  // invalidate할 때 부모 키로 유용

queryClient.invalidateQueries({
  queryKey: noticeQueries.all._def, // ['task'] 전체 무효화
});
// 또는 부분 무효화
queryClient.invalidateQueries({
  queryKey: noticeQueries.detail()._def, // ['task', 'detail']
});`,
			},
		],
	},
	{
		id: 87,
		title: `[TECH-QA] 리베이스 (rebase 중 충돌)`,
		date: '2026-01-20 15:14:14',
		folder: Folder.GIT,
		tag: ['git'],
		preview: `?? (Nullish Coalescing Operator)와 !! (이중 부정 연산자)는 JavaScript에서 완전히 다른 목적으로 사용되는 연산자입니다.`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `rebase 범위 잡기`,
			},
			{
				type: ComponentType.CODE,
				value: `git log --oneline --grep="^chore \[AWS-1280\]"

//커밋내역				
a1b2c3d chore: [AWS-1280] typo
e4f5g6h chore: [AWS-1280] notification ui
i7j8k9l chore: [AWS-1280] project`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `최근 n개의 커밋을 인터랙티브하게 수정`,
			},
			{
				type: ComponentType.CODE,
				value: `git rebase -i HEAD~n`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `에디터로 커밋내역을 열어 수정할 커밋앞의 키워드를 바꿔 준다.`,
			},
			{
				type: ComponentType.CODE,
				value: `pick → reword`,
			},
			{
				type: ComponentType.CODE,
				value: `reword a1b2c3d fix typo
pick e4f5g6h add notification ui
pick i7j8k9l init project`,
			},
			{
				type: ComponentType.HEADING,
				value: `원격에 반영 (해시 변경됨)`,
			},
			{
				type: ComponentType.NORMAL,
				value: `원격에 반영 (해시 변경됨)`,
			},
			{
				type: ComponentType.CODE,
				value: `git push origin 브랜치명 --force-with-lease`,
			},
		],
	},
	{
		id: 88,
		title: `[TECH-QA] Docker-compose`,
		date: '2026-01-26 18:57:14',
		folder: Folder.DOCKER,
		tag: ['DOCKER'],
		preview: `Docker Compose는 여러 개의 Docker 컨테이너를 하나의 애플리케이션처럼 쉽게 정의하고, 실행하고, 관리할 수 있게 해주는 도구입니다.
한 마디로 요약하면 → “여러 컨테이너를 yaml 파일 한 장으로 묶어서 한 번에 띄우고 내리는 편리한 방법”`,
		post: [
			{
				type: ComponentType.NORMAL,
				value: `<b>Docker Compose</b>는 여러 개의 Docker 컨테이너를 <U>하나의 애플리케이션처럼 쉽게 정의하고, 실행하고, 관리할 수 있게 해주는 도구</U>입니다.</br>
한 마디로 요약하면 → “여러 컨테이너를 yaml 파일 한 장으로 묶어서 한 번에 띄우고 내리는 편리한 방법”`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `왜 Docker Compose를 쓰나요? (주요 장점)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `3개 이상부터 매우 편함
				yaml 파일에 한 번만 작성
				자동으로 같은 네트워크 생성 & 서비스 이름으로 접근 가능
				depends_on으로 순서 보장
				docker-compose.yml 하나로 동일 환경 보장
				docker compose down 한 방에 정리`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `기본 사용 흐름 (가장 흔한 패턴)`,
			},
			{
				type: ComponentType.STRINGLIST,
				value: `프로젝트 루트에 docker-compose.yml 파일 만들기
서비스들 정의하기
명령어로 실행`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `가장 많이 쓰는 명령어 Top 5`,
			},
			{
				type: ComponentType.CODE,
				value: `docker compose up -d          # 백그라운드에서 실행
docker compose down           # 모든 컨테이너 + 네트워크 + 볼륨(조건) 정리
docker compose logs -f        # 실시간 로그 보기
docker compose ps             # 현재 상태 확인
docker compose exec 웹 bash   # 특정 컨테이너 안으로 들어가기`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `기본 사용 흐름 (가장 흔한 패턴)`,
			},
			{
				type: ComponentType.CODE,
				value: `# compose.yaml  (최신 프로젝트들은 compose.yaml 라고 쓰는 추세)
services:
  web:                          # 서비스 이름 (내부 DNS로 사용됨)
    image: nginx:alpine
    ports:
      - "8080:80"              # 호스트:컨테이너
    volumes:
      - ./html:/usr/share/nginx/html:ro
    depends_on:
      - api

  api:
    build: ./backend             # 현재 폴더의 Dockerfile로 빌드
    environment:
      - DB_HOST=db
      - DB_USER=app
    depends_on:
      db:
        condition: service_healthy   # 건강할 때까지 기다림 (v2.20+)

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: rootpw
      MYSQL_DATABASE: myapp
    volumes:
      - mysql-data:/var/lib/mysql
    healthcheck:                  # depends_on condition과 함께 자주 사용
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 5s
      timeout: 3s
      retries: 5

volumes:
  mysql-data:                   # 명명된 볼륨 (docker volume ls로 확인 가능)


 postgres:
    image: docker.io/library/postgres:15-alpine
    container_name: postgres
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: postgres
    ports:
      - "25432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: docker.io/library/redis:7-alpine
    container_name: redis
    restart: always
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `자주 쓰이는 주요 키워드 한눈에 정리`,
			},
			{
				type: ComponentType.TABLE,
				value: ``,
				tables: {
					header: [
						{
							accessorKey: 'key',
							header: '키',
						},
						{
							accessorKey: 'content',
							header: '의미',
						},
						{
							accessorKey: 'ex',
							header: '예시',
						},
					],
					contents: [
						{
							key: 'image',
							content: '사용할 이미지',
							header: 'nginx:latest',
						},
						{
							key: 'build',
							content: '직접 빌드할 경로',
							header: '. 또는 ./frontend',
						},
						{
							key: 'ports',
							content: '포트 매핑',
							header: '"3000:3000"',
						},
						{
							key: 'key',
							content: '0.75rem',
							header: '12px',
						},
						{
							key: 'volumes',
							content: '데이터/코드 마운트',
							header: './app:/app',
						},
						{
							key: 'environment',
							content: '환경변수',
							header: `- DEBUG=true
- API_PORT=\${API_PORT}
- POSTGRESQL_USERNAME=\${POSTGRESQL_USERNAME}
- POSTGRESQL_PASSWORD=\${POSTGRESQL_PASSWORD}
- POSTGRESQL_DB=\${POSTGRESQL_DB}`,
						},
						{
							key: 'env_file',
							content: '.env 파일 읽기',
							header: '.env',
						},
						{
							key: 'depends_on',
							content: 'depends_on',
							header: '- db',
						},
						{
							key: 'networks',
							content: '커스텀 네트워크 사용',
							header: 'backend-net',
						},
						{
							key: 'restart',
							content: '자동 재시작 정책',
							header: 'unless-stopped',
						},
						{
							key: 'healthcheck',
							content: '컨테이너 건강 체크',
							header: 'CMD curl -f http://localhost',
						},
					],
				},
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `docker compose 재실행`,
			},
			{
				type: ComponentType.CODE,
				value: `up
docker-compose --env-file .env.local -f docker-compose.yml up

down
docker-compose --env-file .env.local -f docker-compose.yml down

volume (db 포함) 도 다 제거
docker-compose --env-file .env.local -f docker-compose.yml down -v`,
			},
		],
	},
	{
		id: 89,
		title: `[TECH-QA] Google Analytics(GA), Google Ads`,
		date: '2026-01-26 19:35:14',
		folder: Folder.GIT,
		tag: ['git'],
		preview: `이벤트를 추적할 때 사용하는 전역 추적 함수(Global Site Tag) 즉, gtag()는 Google이 제공하는 데이터 전송용 함수로, 사용자의 행동(예: 클릭, 페이지 이동, 구매 등)을 Google Analytics로 보내는 역할`,
		post: [
			{
				type: ComponentType.HEADING,
				headingType: 'h3',
				value: `gtag()`,
			},
			{
				type: ComponentType.NORMAL,
				value: `이벤트를 추적할 때 사용하는 전역 추적 함수(Global Site Tag) 즉, gtag()는 Google이 제공하는 데이터 전송용 함수로, 사용자의 행동(예: 클릭, 페이지 이동, 구매 등)을 Google Analytics로 보내는 역할`,
			},
			{
				type: ComponentType.CODE,
				value: `<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'GA_MEASUREMENT_ID');
</script>`,
			},
			{
				type: ComponentType.HEADING,
				headingType: 'h4',
				value: `예시`,
			},
			{
				type: ComponentType.CODE,
				value: `gtag("event", "click_folder", {
  folder_name: folder.noticeFolderName,
});`,
			},
			{
				type: ComponentType.NORMAL,
				value: `위 코드는 **“click_folder”**라는 이벤트를 Google Analytics로 전송하고,이벤트 파라미터(folder_name)로 클릭한 폴더의 이름을 함께 보냅니다.
즉, Analytics 대시보드에서 “click_folder” 이벤트가 언제, 어떤 폴더 이름으로 발생했는지 확인할 수 있습니다.`,
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

// {
// 	id: 83,
// 	title: `[TECH-QA] Lazy loading, preload`,
// 	date: '2025-05-04 17:14:33',
// 	folder: Folder.JAVASCRIPT,
// 	tag: ['브라우저', 'TECH-QA', '웹성능최적화'],
// 	preview: `화면에서 쿨락헌 순간 모달에 관련된 파일들을 불러오고 모달에 관련된 파일들이 모두 불러와지면 Javascript를 Evaluate하고 모달이 뜨도록 코드를 실행하고 모달이 오픈된다.`,
// 	post: [
// 		{
// 			type: ComponentType.HEADING,
// 			headingType: 'h2',
// 			value: `Lazy loading 단점`,
// 		},
// 		{
// 			type: ComponentType.IMAGE_LOADER,
// 			value: ``,
// 			imageloader: {
// 				imgPath: 'lazyLoading_1.jpg',
// 				alt: 'lazyLoading_1 단점',
// 				width: '80%',
// 				round: '12px',
// 			},
// 		},
// 	],
// },
