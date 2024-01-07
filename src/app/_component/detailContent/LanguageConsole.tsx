import style from './LanguageConsole.module.css';

export default function LanguageConsole() {
  return (
    <div className={style.code_container}>
      <div className={style.code_header}>
        <span className={style.title} data-label-text="Console">
          <i className={`fas fa-code fa-fw small ${style.ico_title}`}></i>
        </span>
        <button className={style.copy}>
          <i className={`far fa-clipboard ${style.ico_clipboard}`}></i>
        </button>
      </div>
      <div className="highlight"></div>
    </div>
  );
}
