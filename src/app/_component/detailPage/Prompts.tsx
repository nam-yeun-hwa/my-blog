import style from './Prompts.module.css';
import cx from 'classnames';

type Props = promptType & {
	detail: string;
};

export type promptType = {
	promptType: 'TIP' | 'INFO' | 'WARNING' | 'DANGER';
};

export default function Prompts({ promptType, detail }: Props) {
	return (
		<>
			{promptType === 'TIP' && (
				<blockquote
					className={cx(style.prompt_container, style.prompt, style.prompt_tip)}
				>
					<p
						className={style.detail}
						dangerouslySetInnerHTML={{ __html: detail }}
					></p>
				</blockquote>
			)}
			{promptType === 'INFO' && (
				<blockquote
					className={cx(
						style.prompt_container,
						style.prompt,
						style.prompt_info,
					)}
				>
					<p
						className={style.detail}
						dangerouslySetInnerHTML={{ __html: detail }}
					></p>
				</blockquote>
			)}
			{promptType === 'WARNING' && (
				<blockquote
					className={cx(
						style.prompt_container,
						style.prompt,
						style.prompt_warning,
					)}
				>
					<p
						className={style.detail}
						dangerouslySetInnerHTML={{ __html: detail }}
					></p>
				</blockquote>
			)}
			{promptType === 'DANGER' && (
				<blockquote
					className={cx(
						style.prompt_container,
						style.prompt,
						style.prompt_danger,
					)}
				>
					<p
						className={style.detail}
						dangerouslySetInnerHTML={{ __html: detail }}
					></p>
				</blockquote>
			)}
		</>
	);
}
