import style from './postDetail.module.css';
import CodeComponentType from 'app/_component/detailPage/LanguageConsole';
import Prompts, { propsPromptsType } from 'app/_component/detailPage/Prompts';
import { ComponentType, IPost } from 'type/post';
import { sortedTotalPostlist } from 'data/post_db';
import Footer from 'app/_component/common/Footer';
import StringDot from 'app/_component/detailPage/ListStyle';
import HeadingString, {
	headingBoldProps,
} from 'app/_component/detailPage/Heading';
import PostNavigation from './PostNavigation';

import PostUserInfo from './PostUserInfo';
import KeywordWord from '../detailPage/Keyword';
import BasicTypeTable from '../table/BasicTypeTable';

type Props = {
	postid: string;
};

export default function PostDetail({ postid }: Props) {
	const currentPostId = parseInt(postid);
	const prePostTitle = sortedTotalPostlist.find(value => {
		return value.id === currentPostId - 1;
	}) as IPost;
	const nextPostTile = sortedTotalPostlist.find(value => {
		return value.id === currentPostId + 1;
	}) as IPost;
	const { title, post, date } = sortedTotalPostlist.find(value => {
		return value.id === currentPostId;
	}) as IPost;
	// createdAt
	return (
		<>
			<PostUserInfo title={title} date={date} />

			{post.map((value, idx) => {
				if (value.type === ComponentType.EMPHASIS)
					return (
						<Prompts
							key={idx}
							type={
								typeof value.propsType === 'string' &&
								Object.values(propsPromptsType).includes(
									value.propsType as propsPromptsType,
								)
									? (value.propsType as propsPromptsType)
									: propsPromptsType.WARNING
							}
							detail={value.value}
						/>
					);
				if (value.type === ComponentType.CODE)
					return <CodeComponentType key={idx} code={value.value} />;
				if (value.type === ComponentType.TABLE)
					return (
						<>
							{value.tables && (
								<BasicTypeTable
									key={idx}
									header={value.tables.header}
									contents={value.tables.contents}
								/>
							)}
						</>
					);
				if (value.type === ComponentType.STRINGLIST)
					return <StringDot key={idx} list={value.value} />;
				if (value.type === ComponentType.KEYWORD) {
					return <KeywordWord key={idx} keyword={value.value} />;
				}
				if (
					value.type === ComponentType.H2 ||
					value.type === ComponentType.H3 ||
					value.type === ComponentType.H4
				) {
					return (
						<HeadingString
							key={idx}
							headingType={value.type}
							headingValue={value.value}
							headingBold={
								typeof value.propsType === 'string' &&
								Object.values(headingBoldProps).includes(
									value.propsType as headingBoldProps,
								)
									? (value.propsType as headingBoldProps)
									: headingBoldProps.NORMAL
							}
						/>
					);
				}
				return (
					<div
						key={idx}
						className={style.content}
						dangerouslySetInnerHTML={{ __html: value.value }}
					/>
				);
			})}
			<PostNavigation
				postid={currentPostId}
				prePostTitle={nextPostTile}
				nextPostTile={prePostTitle}
				segment={'posts'}
			/>
			<Footer />
		</>
	);
}
