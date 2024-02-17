'use client';

import useCopyClipBoard from 'hook/useCopyClipBoard';
import style from './LanguageConsole.module.css';
import cx from 'classnames';

type Props = {
  code: string;
};

export default function LanguageConsole({ code }: Props) {
  const [isCopy, onCopy] = useCopyClipBoard();

  const onClickClipboardCopy = async () => {
    await onCopy(code);
  };
  // fas fa-check
  return (
    <div className={style.console_container}>
      <div className={style.console_header}>
        <span className={style.title} data-label-text="Javascript">
          <i className={`fas fa-code fa-fw small ${style.ico_title}`}></i>
        </span>
        <button
          className={cx(style.copy, isCopy && style.copied)}
          onClick={onClickClipboardCopy}
        >
          {isCopy && <div className={style.speech_bubble}>Copyied!</div>}

          <i
            className={
              isCopy
                ? `fas fa-check`
                : `far fa-clipboard ${style.ico_clipboard}`
            }
          ></i>
        </button>
      </div>
      <div className={style.console_content}>
        <pre
          className={style.console_code}
          dangerouslySetInnerHTML={{
            __html: code,
          }}
        ></pre>
      </div>
    </div>
  );
}

// onClick={onClickClipboardCopy}와 onClick={() => onClickClipboardCopy()} 차이점
// 1.이벤트 핸들러 바인딩: onClick={onClickClipboardCopy}는 이벤트가 발생할 때 onClickClipboardCopy 함수를 호출하는 것이 아니라, 이벤트 핸들러로 함수를 전달합니다. 이렇게 전달된 함수는 이벤트가 발생할 때 호출됩니다. 반면에 onClick={() => onClickClipboardCopy()}는 이벤트가 발생할 때 익명의 화살표 함수를 호출하고, 이 화살표 함수가 onClickClipboardCopy 함수를 호출합니다.
// 2.함수 호출 시점: onClick={onClickClipboardCopy}는 컴포넌트가 렌더링될 때 onClickClipboardCopy 함수를 호출하지 않고, 이벤트가 발생할 때 호출됩니다. 따라서 이벤트가 발생할 때마다 동일한 함수 인스턴스가 사용됩니다. 반면에 onClick={() => onClickClipboardCopy()}는 매번 렌더링될 때마다 새로운 함수 인스턴스가 생성되므로, 메모리 사용량이 더 많아질 수 있습니다.
// 3.컴포넌트 재렌더링: onClick={onClickClipboardCopy}는 함수가 컴포넌트의 렌더링과 무관하게 이벤트가 발생할 때마다 호출됩니다. 반면에 onClick={() => onClickClipboardCopy()}는 컴포넌트가 재렌더링될 때마다 새로운 함수가 생성되므로, 렌더링 성능에 영향을 줄 수 있습니다.
// 따라서 이벤트 핸들러로 함수를 전달할 때는 가능하면 onClick={onClickClipboardCopy}와 같이 직접 함수를 전달하는 것이 성능적으로 더 좋습니다. 그러나 이벤트 핸들러에 인자를 전달해야하는 경우에는 화살표 함수를 사용하여 새로운 함수를 생성하고 인자를 전달하는 방식을 사용할 수 있습니다.
