import style from './postUserInfo.module.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import { GITHUB } from '../constant/constant';

dayjs.locale('ko');
dayjs.extend(relativeTime);

type Props = {
  title: string;
  date: string;
};

export default function PostUserInfo({ title, date }: Props) {
  return (
    <>
      <article className={style.detail}>
        <header>
          <h1 className={style.h1}>{title}</h1>
        </header>
      </article>
      <div className={style.post_meta}>
        <span>
          Posted{' '}
          <time className={style.time}>{dayjs(date).fromNow(true)} </time>
        </span>
        <span className={style.update}>
          Updated{' '}
          <time className={style.time}>{dayjs(date).fromNow(true)}</time>
        </span>
      </div>
      <div>
        <span className={style.post_meta}>
          By{' '}
          <em>
            <Link href={GITHUB.URL} className={style.author}>
              {GITHUB.AUTHOR}
            </Link>
          </em>
        </span>
      </div>
    </>
  );
}
