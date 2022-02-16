import React, {useState} from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox'
import {Component} from 'react';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
import Info from './Info';
import Average from './Average';




// function App() {
  // let [글제목, 글제목변경] = useState(['무우너 숙회', '낙지 숙회', '연포탕']);
  // /*[state 데이터, state 데이터 변경 함수
  // useState를 쓰면 [a,b]가 나옴 a : ''안에 작성한 내용 b에는 state 정정해주는 함수
  // 문자,숫자,array,object 다 [변수, 변수] 방식으로 저장 가능 ES6에서 새롭게 추가됨
  
  // state에 데이터 저장하는 이유? : state 변경시 HTML이 자동 재렌더링
  // 자주바뀌는 중요한 데이터는 state로 생성*/
  // let posts = "무우너의 일상 기록"
  // let [따봉, 따봉변경] = useState(0);
  
  // function 제목바꾸기(){
  //   // eslint-disable-next-line no-lone-blocks
  //   {/*var newArray = 글제목;  => 값 공유임
  //    deep copy 값 공유하지 않고 서로 독립적인 값을 가지는 복사 */}
  //   var newArray = [...글제목];
  //   newArray[0] = '무우너 활어회';
  //   글제목변경(newArray);
  //   // eslint-disable-next-line no-lone-blocks
  //   {/* array나 object의 경우 주의!! state의 복사본을 만들어 수정 */}
  // }
  // return (
  //   <div className="App">
  //     <div className="black-nav">
  //       <div>개발 BLOG</div>
  //     </div>
  //     {/*<img src = { logo}/>값을 임포트하고 그 임포트한 이름을 선언*/}
  //     <h4>{posts}</h4>
  //     <button onClick={ 제목바꾸기}>버튼</button>
  //     {/*함수명()은 바로 실행, 함수명만 작성하면 필요할 때 동작*/}
  //     <div className="list">
  //       <h3> {글제목[0]} <span onClick={()=> {따봉변경(따봉+1)}}>👍</span>{따봉}</h3>
  //       {/*무조건 onClick은 c가 대문자일 것 onclick= {}일 것, {함수만}
  //       onClick={클릭될 때 실행할 함수}  onClick={()=>{실행할 내용}}*/}
  //       <p> 1월 28일 발행 </p>
  //       <hr/>
  //     </div>
  //     <div className="list">
  //       <h3> {글제목[1]} </h3>
  //       <p> 1월 29일 발행 </p>
  //       <hr/>
  //     </div>
  //     <div className="list">
  //       <h3> {글제목[2]} </h3>
  //       <p> 1월 30일 발행 </p>
  //       <hr/>
  //     </div>
      // <Modal/>
    //  {/* HTml을 한 단어로 줄여서 쓸 수 있는 리액트의 Component */}
      
    // </div>
  // );
// }

// const App =  () => {
//   return 
  
//   // <MyComponent name ="React" favoriteNumber={1}>리액트</MyComponent>;
// };

function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const App =() => {
  const [visible, setVisible] = useState(false);
  return(
    <div>
      <Info/>
      <Average/>
      <button
      onClick={()=>{
        setVisible(!visible);
      }}>
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr/>
      {visible && <Info/>}
      <Counter/>
    </div>
  )
}
// class App extends Component {
//   state = {
//     color : '#000000'
//   }
//   handleClick= () => {
//     this.setState({
//       color:getRandomColor()
//     })
//   }
//   render(){
//     return(
//       <div>
//         <Info/>
//         <button onClick={this.handleClick}>랜덤색상</button>
//         <ErrorBoundary>
//         <LifeCycleSample color = {this.state.color}/>
//         </ErrorBoundary>
//       <IterationSample/>
//     <ScrollBox ref= {(ref)=>this.scrollBox=ref}/>
//     <button onClick={() => this.scrollBox.scrollToBottom()}>
//       맨 밑으로
//     </button>
//     <Counter/>
//     <EventPractice/>
//     <Say/>
//     <ValidationSample/>
//     <MyComponent/>
//     </div>
//     )
//   }
// }
//component 만들기
//1)반복적인 수행
//2) 자주 변경되는 HTML UI들
//3) 다른 페이지 만들 때

//component 많이 만들 때 단점
//1) state 쓸 때 복잡

/*function Modal(){
  return(
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}*/

//function App이랑 component 위치 같게 만들기
//function App도 일종의 component

export default App;
