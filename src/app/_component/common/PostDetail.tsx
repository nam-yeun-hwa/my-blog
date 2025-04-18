import style from './postDetail.module.css';
import LanguageConsole from 'app/_component/detailPage/LanguageConsole';
import Prompts, { promptType } from 'app/_component/detailPage/Prompts';
import { ComponentType, IPost } from 'type/post';
import { sortedTotalPostlist } from 'data/post_db';
import Footer from 'app/_component/common/Footer';
import StringDot from 'app/_component/detailPage/ListStyle';
import HeadingString, {
	headingWeightProps,
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
							promptType={
								typeof value.propsType === 'string' &&
								['TIP', 'INFO', 'WARNING', 'DANGER'].includes(value.propsType)
									? (value.propsType as promptType['promptType']) // 타입 단언
									: 'WARNING'
							}
							detail={value.value}
						/>
					);
				if (value.type === ComponentType.CODE)
					return (
						<LanguageConsole
							key={idx}
							code={value.value}
							children={value.children}
						/>
					);

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
							headingBoldProps={
								typeof value.propsType === 'string' &&
								['NORMAL', 'BOLD'].includes(value.propsType)
									? (value.propsType as headingWeightProps['headingBoldProps']) // 타입 단언
									: 'NORMAL'
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
