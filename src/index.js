import React from 'react';
import ReactDOM from 'react-dom';
// storeを作成するためのパッケージ，ミドルウェアを使用するためのパッケージ
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';

// アプリケーション内部で唯一
// 引数にrecuderを渡す
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    {/* storeがアプリ内のどこからでも使えるようにする */}
    <Provider store={store}>
      <EventsIndex />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
