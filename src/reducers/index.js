// アプリにあるreducerを結合する

import { combineReducers } from 'redux'
import count from './count'


// ここにreducerを引数として列強すれば結合してくれる
export default combineReducers({ count })
// export default combinReducers({ foo, bar, baz })
