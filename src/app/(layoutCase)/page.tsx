import Home from 'app/_component/Home';
import PostContextProvider from './_component/contexts/PostContextProvider';

export default function page() {
  return (
    <PostContextProvider>
      <Home />;
    </PostContextProvider>
  );
}
