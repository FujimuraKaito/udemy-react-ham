import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
  // めんどくさい処理はactionで行う
  // この中で非同期処理をしたいがpureなオブジェクトを返さないといけない
  // →それを可能にするためのパッケージredux-thunk
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  dispatch({ type: READ_EVENTS, response })
}




// export const INCREMENT = 'INCREMENT'
// export const DECREMENT = 'DECREMENT'

// // ActionCreaterと呼ばれるもの(Actionを生成する)
// export const increment = () => ({
//   type: 'INCREMENT'
// })

// export const decrement = () => ({
//   type: 'DECREMENT'
// })

