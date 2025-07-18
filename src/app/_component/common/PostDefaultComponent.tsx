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
			dangerouslySetInnerHTML={{
				__html: sanitizeHtml(value, {
					allowedTags: ['span', 'b', 'i', 'em', 'strong', 'a', 'br', 'p', 'u'], // span 태그를 허용
					allowedAttributes: {
						span: ['style', 'class'], // span 태그에 허용할 속성
						a: ['href', 'title'],
					},
					allowedStyles: {
						span: {
							// style 속성에서 허용할 CSS 속성
							color: [
								/^#([0-9a-f]{3}){1,2}$/i,
								/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/,
							], // 예: 색상값만 허용
							'font-size': [/^\d+(?:px|em|rem)$/],
						},
					},
				}),
			}}
		/>
	);
}
