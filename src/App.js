import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';

  let [글제목,b] = useState('남자 코트 추천') // State < 자동으로 랜더링됨
  let [logo, setLogo] = useState('ReactBlog')
  /*
  Destructuring문법 : arraylist 
  let [a, c] = [1, 2];  <<  이거 let num = [1, 2]; let a = num[0];
  */

  return (
    <div className="App">     {/*react안은 html처럼 보이지만 JSX이다. > .js파일에서 쓰는 html 대용품 */}
      <div className = "black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>6월 28일 발행</p>
      </div>
      <div>
        <h4>{post}</h4>
      </div>
    </div>
  );
}

export default App;
