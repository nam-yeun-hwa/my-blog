import LanguageConsole from 'app/_component/detailPage/LanguageConsole';
import Prompts from 'app/_component/detailPage/Prompts';
import { ComponentType, IPost } from 'type/post';
import { sortedTotalPostlist } from 'data/post_db';
import Footer from 'app/_component/common/Footer';
import StringDot from 'app/_component/detailPage/ListStyle';
import HeadingString from 'app/_component/detailPage/Heading';
import PostNavigation from './PostNavigation';
import PostUserInfo from './PostUserInfo';
import KeywordWord from '../detailPage/Keyword';
import BasicTypeTable from '../table/BasicTypeTable';
import ImageLoader from './ImageLoader';
import PostDefaultComponent from './PostDefaultComponent';

type Props = {
	postid: string;
};

export default function PostDetail({ postid }: Props) {
	const currentPostId = parseInt(postid, 10);

	const currentPost = sortedTotalPostlist.find(
		post => post.id === currentPostId,
	) as IPost;
	const prevPost = sortedTotalPostlist.find(value => {
		return value.id === currentPostId - 1;
	}) as IPost;
	const nextPost = sortedTotalPostlist.find(value => {
		return value.id === currentPostId + 1;
	}) as IPost;
	const { title, post, date } = sortedTotalPostlist.find(value => {
		return value.id === currentPostId;
	}) as IPost;

	if (!currentPost) return null;

	const componentMap: Record<
		ComponentType,
		(component: IPost['post'][number]) => JSX.Element | null
	> = {
		[ComponentType.GUIDE_MESSAGE]: component => (
			<Prompts
				promptType={component.promptTypeProps}
				detail={component.value}
			/>
		),
		[ComponentType.IMAGE_LOADER]: component => (
			<ImageLoader {...component.imageloader} />
		),
		[ComponentType.CODE]: component => (
			<LanguageConsole code={component.value}>
				{component.codePreviewProps}
			</LanguageConsole>
		),
		[ComponentType.TABLE]: component =>
			component.tables ? (
				<BasicTypeTable
					header={component.tables.header}
					contents={component.tables.contents}
				/>
			) : null,
		[ComponentType.STRINGLIST]: component => (
			<StringDot list={component.value} />
		),
		[ComponentType.KEYWORD]: component => (
			<KeywordWord keyword={component.value} title={component.keyworldTitle} />
		),
		[ComponentType.HEADING]: component => (
			<HeadingString
				headingType={component.headingType}
				headingValue={component.value}
				headingBoldProps={component.headingWeightProps}
			/>
		),
		// 빠진 것들 처리 (fallback으로)
		[ComponentType.NORMAL]: PostDefaultComponent,
		[ComponentType.REFERENCES]: PostDefaultComponent,
	};

	return (
		<>
			<PostUserInfo title={title} date={date} />

			{currentPost.post.map((component, idx) => {
				const { type, ...props } = component;
				const RenderComponent = componentMap[type];
				return <RenderComponent type={type} {...props} key={idx} />;
			})}

			<PostNavigation
				postid={currentPostId}
				prePostTitle={nextPost}
				nextPostTile={prevPost}
				segment="posts"
			/>
			<Footer />
		</>
	);
}

//================================ [1]
// 객체 매핑: 조건문 대신 객체로 컴포넌트 매핑.
// type Scores = Record<string, number>;
// const scores: Scores = {
//   math: 90,
//   english: 85,
// };
// 특정 키 집합에 대해 동일한 값 타입을 강제.
// 예: 모든 키가 string이고 값이 number인 객체.

// IPost['post']는 이 배열 타입을 가리키며, TypeScript에서 배열의 타입은 Array<T> 또는 T[]로 표현됩니다. 여기서 T는 배열 요소의 타입입니다.
// IPost['post'][number]에서 [number]는 post 배열의 단일 요소 타입을 추출하기 위해 사용됩니다.
// 배열의 인덱스는 숫자이므로 [number]는 배열 요소 타입을 얻는 TypeScript의 표준 방식입니다.
// component: IPost['post'][number]는 post 배열의 각 객체를 처리하는 함수의 파라미터 타입을 정의합니다.

//================================ [2]
// enum ComponentType {
//   GUIDE_MESSAGE,
//   IMAGE_LOADER,
//   CODE,
//   // ...
// }
// type ComponentRenderer = Record<
//   ComponentType,
//   (component: any, idx: number) => JSX.Element | null
// >;

// 코드에서 ComponentType (예: GUIDE_MESSAGE, IMAGE_LOADER 등)이 열거형으로 정의되어 있으며, 이를 키로 사용
// 모든 키가 정의된 타입(K : ComponentType)을 따라야 하며, 값은 지정된 타입(T)을 준수

//================================ [3]
// 값 타입 ((component: any, idx: number) => JSX.Element | null):
// 각 키에 해당하는 값은 컴포넌트를 렌더링하는 함수.
// 함수는 component (컴포넌트 데이터)와 idx (인덱스)를 받아 JSX.Element 또는 null을 반환.

//================================ [4]
// Record의 장점 (코드 맥락에서)
// 타입 안전성:
// ComponentType의 모든 값을 키로 강제하여 누락 방지.
// 렌더링 함수의 시그니처를 일관되게 유지.
// 가독성:
// Record를 사용하면 객체의 구조가 명확해지고, 키-값 매핑의 의도가 드러남.
// 확장성:
// 새로운 ComponentType을 추가할 때, componentMap에 해당 키와 렌더링 함수만 추가하면 됨.
// 유지보수성:
// TypeScript가 타입 불일치를 감지하므로, 코드 변경 시 에러를 조기에 발견.

//================================ [5]
// IPost 안에 있는 post 배열 요소의 타입만 따로 떼어내서 사용

// 그럴 때는 IPost 내부의 post 요소 타입을 따로 추출

// type PostContent<T = any> = IPost<T>['post'][number];
// 설명하면:

// IPost<T>['post']는 post 배열 전체를 가리키고,

// IPost<T>['post'][number]는 그 배열 안 요소 하나를 의미해요.
