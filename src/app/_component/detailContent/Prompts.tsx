import style from './Prompts.module.css';
import cx from 'classnames';

type Props = {
  type: 'tip' | 'info' | 'warning' | 'danger';
  detail: string;
};

export default function Prompts({ type, detail }: Props) {
  return (
    <>
      {type === 'tip' && (
        <blockquote
          className={cx(style.prompt_container, style.prompt, style.prompt_tip)}
        >
          <p
            className={style.detail}
            dangerouslySetInnerHTML={{ __html: detail }}
          ></p>
        </blockquote>
      )}
      {type === 'info' && (
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
      {type === 'warning' && (
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
      {type === 'danger' && (
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
