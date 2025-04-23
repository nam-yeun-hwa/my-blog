import sanitizeHtml from 'sanitize-html';
import style from './postDetail.module.css';

type PostDefaultComponentProps = {
	value: string;
};

export default function PostDefaultComponent({
	value,
}: PostDefaultComponentProps) {
	return (
		<div
			className={style.content}
			dangerouslySetInnerHTML={{ __html: sanitizeHtml(value) }}
		/>
	);
}
