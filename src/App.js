// ReactはJSXを使うときは必要(for JSX)
import React from 'react';

// functional component
function App() {
  return (
    <React.Fragment>
      {/* returnの中は一つの要素のみ→Vueと同じ */}
      <div className="App">
        {/* classNameはhtmlのclassと一緒 */}
        <h1>Hello, React!</h1>
        <Cat />
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log('this is clicked.')}}></input>
        <input type="text" onChange={() => {console.log('this is changed.')}}></input>
      </div>
    </React.Fragment>
    
  );
}

// こんな漢字の関数型定義もできる
const Cat = () => {
  return <div><h1>Hello, cat!</h1></div>
}


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

export default App;
