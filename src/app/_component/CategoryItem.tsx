import Link from 'next/link';
import style from './categoryItem.module.css';

type Props = {
  category: string;
  count: number;
};

export default function CategoryItem({ category, count }: Props) {
  return (
    <li className={style.list_group_item}>
      <i className={`far fa-folder fa-fw ${style.ico_lsit}`}></i>
      <Link className={style.categories_tit} href={``}>
        {category}
      </Link>
      <span className={style.text_muted}> {`${count}`} post </span>
    </li>
  );
}
