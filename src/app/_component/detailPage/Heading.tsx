// import style from 'app/_component/common/postDetail.module.css';
import style from './heading.module.css';
import { ComponentType } from 'type/post';

export enum headingBoldProps {
	NORMAL = 'normal',
	BOLD = 'bold',
}

export type HeadingStringProps = {
	headingType: string;
	headingValue: string;
	headingBold: headingBoldProps;
};

export default function HeadingString({
	headingType,
	headingValue,
	headingBold = headingBoldProps.NORMAL,
}: HeadingStringProps) {
	return (
		<>
			{headingType === ComponentType.H1 && (
				<h1 className={style.h1} style={{ fontWeight: headingBold }}>
					{headingValue}
				</h1>
			)}
			{headingType === ComponentType.H2 && (
				<h2 className={style.h2} style={{ fontWeight: headingBold }}>
					{headingValue}
				</h2>
			)}
			{headingType === ComponentType.H3 && (
				<h3 className={style.h3} style={{ fontWeight: headingBold }}>
					{headingValue}
				</h3>
			)}
			{headingType === ComponentType.H4 && (
				<h4 className={style.h4} style={{ fontWeight: headingBold }}>
					📝 {headingValue}
				</h4>
			)}
		</>
	);
}
