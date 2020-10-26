import React from 'react';
import ReactDOM from 'react-dom';
// storeを作成するためのパッケージ，ミドルウェアを使用するためのパッケージ
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import * as serviceWorker from './serviceWorker';

// アプリケーション内部で唯一
// 引数にrecuderを渡す
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    {/* storeがアプリ内のどこからでも使えるようにする */}
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* コンポーネント間の分岐を行う */}
          <Route exact path="/events/new" component={EventsNew} />
          <Route exact path="/" component={EventsIndex} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
