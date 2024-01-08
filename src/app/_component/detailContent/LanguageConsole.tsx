import style from './LanguageConsole.module.css';

export default function LanguageConsole() {
  return (
    <div className={style.console_container}>
      <div className={style.console_header}>
        <span className={style.title} data-label-text="Javascript">
          <i className={`fas fa-code fa-fw small ${style.ico_title}`}></i>
        </span>
        <button className={style.copy}>
          <i className={`far fa-clipboard ${style.ico_clipboard}`}></i>
        </button>
      </div>
      <div className={style.console_content}>
        <pre
          className={style.console_code}
          dangerouslySetInnerHTML={{
            __html: `const info={
  id:1,
  name:'John'
}
            
const nextInfo={
  ...info,
  name: 'Jane'
}
`,
          }}
        ></pre>
      </div>
    </div>
  );
}
