// ReactはJSXを使うときは必要(for JSX)
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'


// functional component
function App() {
  const profiles = [
    { name: "Kaito", age: 20 },
    { name: "Hanako", age: 18 },
    { name: "Katsuo" }
  ]
  return (
    <React.Fragment>
      {/* returnの中は一つの要素のみ→Vueと同じ */}
      <div className="App">
        {/* classNameはhtmlのclassと一緒 */}
        <h1>Hello, React!</h1>
        <Cat />
        {
          profiles.map((profile, index) => {
            // 配列の数だけ表示
            // VueのようにkeyがないとDOMに変更が反映される時に困る
            return <User name={profile.name} age={profile.age} key={index} />
          })
        }
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log('this is clicked.')}}></input>
        <input type="text" onChange={() => {console.log('this is changed.')}}></input>

        <Counter></Counter>
      </div>
    </React.Fragment>
    
  );
}

// こんな感じの関数型定義もできる
const Cat = () => {
  return <div><h1>Hello, cat!</h1></div>
}

// props→再利用できる
const User = (props) => {
  return <div><h2>Hi I am {props.name}!, and I am {props.age} years old.</h2></div>
}
// プロパティの初期値を決めることができる
User.defaultProps = {
  age: 1
}
User.propTypes = {
  name: PropTypes.string,
  // ageがrequiredであることを設定する
  age: PropTypes.number.isRequired
}

// カウンターコンポーネント
class Counter extends Component {
  // コンストラクター関数→Counterクラスが作成された時に実行される
  // constructor(props) {
    // super(props)
    // console.log(this.state)
    // this.state = {count: 0}
  // }

  // actionCreaterで同じことを実現しているので不要
  // handlePlusButton = () => {
  //   // stateを変更するときは必ずsetState
  //   // DOMを変更したい時
  //   this.setState({ count: this.state.count + 1 })
  // }
  // handleMinusButton = () => {
  //   this.setState({ count: this.state.count - 1 })
  // }

  render() {
    const props = this.props

    // setStateが実行されるたびcallbackでにrenderが実行される
    return(
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)



// 以下のようにトランスパイルされる(babel)
// function App() {
//   return (
//     React.createElement(
//       "div", 
//       null, 
//       "Hello, React!"
//     )
//   );
// }

// export default App;
