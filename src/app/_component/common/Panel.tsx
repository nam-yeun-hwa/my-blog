import Link from 'next/link';
import style from './panel.module.css';

export default function Panel() {
  return (
    <div className={style.access}>
      <section className={style.access_lastmod}>
        <h2 className={style.panel_heading}>Recently Updated</h2>
        <ul className={style.panel_content}>
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
      <section>
        <h2 className={style.panel_heading}>Trending Tags</h2>
        <div>
          <Link href="url"></Link>
        </div>
      </section>
    </div>
  );
}
