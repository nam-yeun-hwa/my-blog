'use client';

import Home from 'app/_component/Home';
import { store } from 'app/(layoutCase)/_component/store/index';
import { Provider } from 'react-redux';
export default function posts() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

//992px
//1200px
//일때 다르다
