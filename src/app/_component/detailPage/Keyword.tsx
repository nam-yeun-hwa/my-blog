'use client';

import { useEffect } from 'react';
import style from './Keyword.module.css';
import classNames from 'classnames';

type Props = {
	title?: string;
	keyword: string;
};

export default function KeywordWord({ keyword, title = '관련 키워드' }: Props) {
	useEffect(() => {
		console.log(title !== '관련 키워드');
	}, [title]);
	return (
		<div className={style.container}>
			<p
				className={classNames(style.keywordTilteNormal, {
					[style.keywordTilte]: title !== '관련 키워드',
				})}
			>
				{title}
			</p>
			<div className={style.keywordContainer}>
				{keyword.split(',').map((string, id) => {
					return (
						<p key={id} className={style.keyword}>
							{string}
						</p>
					);
				})}
			</div>
		</div>
	);
}
