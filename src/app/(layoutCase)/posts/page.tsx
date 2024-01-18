import Home from 'app/_component/Home';
import PostContextProvider from '../_component/contexts/PostContextProvider';
import Link from 'next/link';

export default function posts() {
  return (
    <PostContextProvider>
      <Home />;
    </PostContextProvider>
  );
}

//992px
//1200px
//일때 다르다
