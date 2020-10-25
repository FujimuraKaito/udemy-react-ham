import React from 'react';
import ReactDOM from 'react-dom';
// storeを作成するためのパッケージ
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import './index.css';
import reducer from './reducers'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// アプリケーション内部で唯一
// 引数にrecuderを渡す
const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    {/* storeがアプリ内のどこからでも使えるようにする */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
