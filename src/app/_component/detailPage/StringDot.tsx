import style from './stringlist.module.css';

type Props = {
  list: string;
};

export default function StringDot({ list }: Props) {
  return (
    <ul className={style.ul}>
      {list.split(/\n/).map((value, idx) => {
        if (value)
          return (
            <li className={style.dot} key={idx}>
              {value}
            </li>
          );
      })}
    </ul>
  );
}

// 내일 ul 점 리스트와 넘버 리스트를 만들어 준다,
