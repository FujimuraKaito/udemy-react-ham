// 状態をどう変化させるのかを決めるのがReducer

// アプリにあるreducerを結合する
// アプリ内の全Reducerを統合するところ
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form' 
import events from './events'
// import count from './count'


// ここにreducerを引数として列強すれば結合してくれる
export default combineReducers({ events, form })
// export default combineReducers({ count })
// ex) export default combinReducers({ foo, bar, baz })
