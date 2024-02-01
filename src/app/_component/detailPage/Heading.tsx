import style from 'app/_component/common/postDetail.module.css';
import { ComponentType } from 'type/post';

type Props = {
  headingType: string;
  headingValue: string;
};

export default function HeadingString({ headingType, headingValue }: Props) {
  return (
    <>
      {headingType === ComponentType.H1 && (
        <h1 className={style.h1}>{headingValue}</h1>
      )}
      {headingType === ComponentType.H2 && (
        <h2 className={style.h2}>{headingValue}</h2>
      )}
      {headingType === ComponentType.H3 && (
        <h3 className={style.h3}>{headingValue}</h3>
      )}
      {headingType === ComponentType.H4 && (
        <h4 className={style.h4}>📝 {headingValue}</h4>
      )}
    </>
  );
}
