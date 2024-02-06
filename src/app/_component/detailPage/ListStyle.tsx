import style from './liststyle.module.css';

type Props = {
  list: string;
};

export default function ListStyle({ list }: Props) {
  return (
    <ul className={style.ul}>
      {list.split(/\n/).map((value, idx) => {
        if (value.trim())
          return (
            <li
              className={style.dot}
              key={idx}
              dangerouslySetInnerHTML={{ __html: value }}
            ></li>
          );
      })}
    </ul>
  );
}
