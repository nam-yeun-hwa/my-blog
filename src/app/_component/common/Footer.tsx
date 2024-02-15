import Link from 'next/link';
import style from './footer.module.css';
import { GITHUB } from '../constant/constant';

export default function Footer() {
  return (
    <div className={style.footer_container}>
      <footer className={style.footer}>
        <p className={style.copylight}>
          © 2024 {GITHUB.AUTHOR} Some rights reserved.
        </p>
        <p className={style.theme}>portfolio v1.0.0-alpha.0</p>
      </footer>
    </div>
  );
}
