'use client';

import Home from 'app/_component/Home';
import { store } from 'app/(layoutCase)/_component/store/index';
import { Provider } from 'react-redux';

export default function page() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
