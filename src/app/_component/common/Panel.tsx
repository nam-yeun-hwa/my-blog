import Link from 'next/link';
import style from './panel.module.css';
import { sortedTotalPostlist, totalPostlist } from 'data/post_db';

/**
 * totalPostlist의 tag[] 문자열을 중복하지 않고 결과값을 리턴
 */
const uniqueTags = Array.from(
  new Set(totalPostlist.flatMap((post) => post.tag)),
);

export default function Panel() {
  return (
    <aside className={style.panel_wrapper}>
      <div className={style.access}>
        <section className={style.access_lastmod}>
          <h2 className={style.panel_heading}>Recently Updated</h2>
          <ul className={style.panel_recently}>
            {sortedTotalPostlist.slice(0, 5).map((value) => {
              return (
                <li key={value.id} className={style.text_truncate}>
                  <Link href={`/posts/${value.id}`}>{value.title}</Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className={style.panel_tag_contain}>
          <h2 className={style.panel_heading}>Trending Tags</h2>
          <div className={style.panel_tag}>
            {uniqueTags.map((value, id) => {
              return (
                value && (
                  <Link key={id} className={style.tag} href={`/tags/${value}`}>
                    {value}
                  </Link>
                )
              );
            })}
          </div>
        </section>
      </div>
    </aside>
  );
}
