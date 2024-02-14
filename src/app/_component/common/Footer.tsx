import Link from 'next/link';
import style from './footer.module.css';

export default function Footer() {
  return (
    <div className={style.footer_container}>
      <footer className={style.footer}>
        <p className={style.copylight}>
          © 2024 베짱이가 되고 싶은 개미。 Some rights reserved.
        </p>
        <p className={style.theme}>portfolio v1.0.0-alpha.0</p>
      </footer>
    </div>
  );
}
