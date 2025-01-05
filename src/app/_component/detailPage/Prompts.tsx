import style from './Prompts.module.css';
import cx from 'classnames';

export enum propsPromptsType {
	TIP = 'tip',
	INFO = 'info',
	WARNING = 'warning',
	DANGER = 'danger',
}

type Props = {
	type: propsPromptsType;
	detail: string;
};

export default function Prompts({ type, detail }: Props) {
	return (
		<>
			{type === propsPromptsType.TIP && (
				<blockquote
					className={cx(style.prompt_container, style.prompt, style.prompt_tip)}
				>
					<p
						className={style.detail}
						dangerouslySetInnerHTML={{ __html: detail }}
					></p>
				</blockquote>
			)}
			{type === propsPromptsType.INFO && (
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
			{type === propsPromptsType.WARNING && (
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
			{type === propsPromptsType.DANGER && (
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
