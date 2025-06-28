// /* eslint-disable */ //경고메세지 무시

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";

  let [글제목, 성별변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
    "여자옷 변경",
  ]); // State < 자동으로 랜더링됨
  let [logo, setLogo] = useState("ReactBlog");
  /*
  Destructuring문법 : arraylist 
  let [a, c] = [1, 2];  <<  이거 let num = [1, 2]; let a = num[0];
  */

  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      {" "}
      {/*react안은 html처럼 보이지만 JSX이다. > .js파일에서 쓰는 html 대용품 */}
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          성별변경(copy);
        }}
      >
        {" "}
        글수정
      </button>
      <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}{" "}
        </h4>
        <p>6월 28일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>6월 29일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>6월 30일 발행</p>
      </div>

      <Modal/>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
