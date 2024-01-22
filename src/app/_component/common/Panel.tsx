import Link from 'next/link';
import style from './panel.module.css';

export default function Panel() {
  return (
    <aside className={style.panel_wrapper}>
      <div className={style.access}>
        <section className={style.access_lastmod}>
          <h2 className={style.panel_heading}>Recently Updated</h2>
          <ul className={style.panel_recently}>
            <li className={style.text_truncate}>
              <Link href={'url'}>Writing a New Post</Link>
            </li>
            <li className={style.text_truncate}>
              <Link href={'url'}>Getting Started</Link>
            </li>
            <li className={style.text_truncate}>
              <Link href={'url'}>Text and Typography</Link>
            </li>
            <li className={style.text_truncate}>
              <Link href={'url'}>Customize the Favicon</Link>
            </li>
          </ul>
        </section>
        <section className={style.panel_tag_contain}>
          <h2 className={style.panel_heading}>Trending Tags</h2>
          <div className={style.panel_tag}>
            <Link className={style.tag} href="url">
              favicon
            </Link>
            <Link className={style.tag} href="url">
              getting started
            </Link>
            <Link className={style.tag} href="url">
              typography
            </Link>
            <Link className={style.tag} href="url">
              writing
            </Link>
          </div>
        </section>
      </div>
    </aside>
  );
}
