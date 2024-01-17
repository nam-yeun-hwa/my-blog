import Home from 'app/_component/Home';
import PostContextProvider from '../_component/contexts/PostContextProvider';
import Link from 'next/link';

export default function posts() {
  return (
    <PostContextProvider>
      <Home />;
      <div style={{ height: '30%' }}>
        {/* <nav className={style.footer_nav}>
          <Link href="">이전 게시물</Link>
          <Link href="">다음 게시물</Link>
        </nav>
        <footer className={style.footer}>
          <p className={style.copylight}>
            © 2024 bunny Chung. Some rights reserved.
          </p>
          <p className={style.theme}>Using the theme ...</p>
        </footer> */}
      </div>
    </PostContextProvider>
  );
}

//992px
//1200px
//일때 다르다
