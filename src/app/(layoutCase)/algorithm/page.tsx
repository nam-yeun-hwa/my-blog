'use client';

import Home from 'app/_component/Home';
import { store } from 'app/(layoutCase)/_component/store/index';
import { Provider } from 'react-redux';
import AlgorithmPageing from 'app/_component/AlgorithmPageing';
export default function algorithm() {
  return (
    <Provider store={store}>
      <AlgorithmPageing />
    </Provider>
  );
}

//992px
//1200px
//일때 다르다
