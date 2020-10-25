// 状態をどう変化させるのかを決めるのがReducer

// アプリにあるreducerを結合する
// アプリ内の全Reducerを統合するところ
import { combineReducers } from 'redux'
import events from './events'
// import count from './count'


// ここにreducerを引数として列強すれば結合してくれる
export default combineReducers({ events })
// export default combineReducers({ count })
// ex) export default combinReducers({ foo, bar, baz })
