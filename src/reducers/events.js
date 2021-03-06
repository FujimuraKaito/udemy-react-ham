// Reducerの機能をファイルに分ける？
// actionから渡ってくるのでimportしている？
// 主にstateの状態を変更する核の部分を記述する
// import { INCREMENT, DECREMENT } from '../actions'
import _ from 'lodash'
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
} from '../actions'
import { act } from 'react-dom/test-utils'

// const initialState = { value: 0 }

// Reducerは関数として定義し，引数に現在の状態と受け取るActionの種類をとる
export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      // response.dataはオブジェクトの配列なのでそれをidをキーにして中身のオブジェクトを値にしたオブジェクトにするとアクセスが楽
      // →loadashというパッケージを使用する
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      // action.idは渡されてきたidなので削除するid
      delete events[action.id]
      // スプレッド演算子を使うことで更新後の値を保存する
      return { ...events }
    default:
      return events
  }
}



// export default (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return { value: state.value + 1 }
//     case DECREMENT:
//       return { value: state.value - 1 }
//     default: 
//     // それ以外の名前のactionがきた時は現在の状態を返す
//       return state
//   }
// }


