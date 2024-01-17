import Link from 'next/link';
import style from './footer.module.css';

export default function Footer() {
  return (
    <div className={style.footer_container}>
      <nav className={style.footer_nav}>
        <Link href="">이전 게시물</Link>
        <Link href="">다음 게시물</Link>
      </nav>
      <footer className={style.footer}>
        <p className={style.copylight}>
          © 2024 bunny Chung. Some rights reserved.
        </p>
        <p className={style.theme}>Using the theme ...</p>
      </footer>
    </div>
  );
}
