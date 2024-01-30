import style from './pageHeading.module.css';

type Props = {
  pageTitle: string;
};

export default function PageHeading({ pageTitle }: Props) {
  return <h1 className={style.h1}>{pageTitle}</h1>;
}
