// import style from 'app/_component/common/postDetail.module.css';
import style from './heading.module.css';
import { ComponentType } from 'type/post';

export type HeadingWeightProps = 'NORMAL' | 'BOLD';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4';

export type HeadingStringProps = {
	headingType?: HeadingType;
	headingValue: string;
	headingBoldProps?: HeadingWeightProps;
};

export default function HeadingString({
	headingType,
	headingValue,
	headingBoldProps = 'NORMAL',
}: HeadingStringProps) {
	return (
		<>
			{headingType === 'h1' && (
				<h1 className={style.h1} style={{ fontWeight: headingBoldProps }}>
					{headingValue}
				</h1>
			)}
			{headingType === 'h2' && (
				<h2 className={style.h2} style={{ fontWeight: headingBoldProps }}>
					{headingValue}
				</h2>
			)}
			{headingType === 'h3' && (
				<h3 className={style.h3} style={{ fontWeight: headingBoldProps }}>
					{headingValue}
				</h3>
			)}
			{headingType === 'h4' && (
				<h4 className={style.h4} style={{ fontWeight: headingBoldProps }}>
					📝 {headingValue}
				</h4>
			)}
		</>
	);
}
