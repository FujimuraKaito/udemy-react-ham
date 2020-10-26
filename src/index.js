import React from 'react';
import ReactDOM from 'react-dom';
// storeを作成するためのパッケージ，ミドルウェアを使用するためのパッケージ
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import * as serviceWorker from './serviceWorker';

// デバッグできる状態にする
const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
// アプリケーション内部で唯一
// 引数にrecuderを渡す
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <React.StrictMode>
    {/* storeがアプリ内のどこからでも使えるようにする */}
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* コンポーネント間の分岐を行う */}
          <Route path="/events/new" component={EventsNew} />
          <Route path="/events/:id" component={EventsShow} />
          <Route exact path="/" component={EventsIndex} />
          <Route exact path="/events" component={EventsIndex} />
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
