'use client';

import PostPageing from 'app/_component/PostPageing';
import { store } from 'app/(layoutCase)/_component/store/index';
import { Provider } from 'react-redux';

export default function page() {
  return (
    // <Provider store={store}>
    <PostPageing />
    // </Provider>
  );
}
