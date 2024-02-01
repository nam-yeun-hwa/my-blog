import style from './pageHeading.module.css';

type Props = {
  pageTitle: string;
  iconType?: boolean;
};

export default function PageHeading({ pageTitle, iconType }: Props) {
  return (
    <h1 className={style.h1}>
      {iconType && (
        <i className={`far fa-folder-open fa-fw text-muted ${style.ico}`}></i>
      )}

      {pageTitle}
    </h1>
  );
}
