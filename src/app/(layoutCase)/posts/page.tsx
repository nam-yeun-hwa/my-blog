'use client';

import PostPageing from 'app/_component/PostPageing';
import { store } from 'app/(layoutCase)/_component/store/index';
import { Provider } from 'react-redux';
export default function posts() {
  return (
    // <Provider store={store}>
    <PostPageing />
    // </Provider>
  );
}

//992px
//1200px
//일때 다르다
