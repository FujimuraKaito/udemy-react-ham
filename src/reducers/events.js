// Reducerの機能をファイルに分ける？
// actionから渡ってくるのでimportしている？
// 主にstateの状態を変更する核の部分を記述する
// import { INCREMENT, DECREMENT } from '../actions'
import { READ_EVENTS } from '../actions'

// const initialState = { value: 0 }

// Reducerは関数として定義し，引数に現在の状態と受け取るActionの種類をとる
export default (state = {}, action) => {
  switch (action.type) {
    case READ_EVENTS: 
      return state
    default:
      return state
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


