import { useState } from 'react';
import './App.css';
import {createStore} from 'redux';
import {Provider, useSelector, useDispatch, connect} from 'react-redux';
//provider 컴포넌트(state를 어떤 컴포넌트들에게 제공할지 울타리를 제공)
// provider의 props로 store라는 값을 정의해주어야 함

// useslecetor 어떤 state 값 사용하고 싶은지 선택
// 함수를 인자로 받음, props 값을 사용하고 싶은곳에서 변수에 할당해줌

// useDispatch state 값 변경하고 싶은 경우 사용
// connect 재사용성을 위한 것

function reducer(currentState, action){
  if(currentState === undefined){
    return{
      number : 1,
    }
  }
  const newState = {...currentState};

  if(action.type === 'PLUS'){
    newState.number++;
  }
  return newState;
}
const store = createStore(reducer);
// import {useDispatch, useSelector} from 'react-redux';

export default function App() {
  // const 꺼내온거= useSelector( (state) => state);
  // const dispatch = useDispatch()
  const [number, setNumber] = useState(1);

  return (
    <div id = "container" className="App">
        {/* <p>님의 처참한 몸무게 : {꺼내온거}</p>
        <button onClick={()=> {dispatch({type : '증가'})}}>더하기</button>
        <button onClick={()=> {dispatch({type : '감소'})}}>빼기</button> */}
        <h1>Root</h1>
        <div id="grid">
          <Provider store={store}>
            <Left1></Left1>
            <Right1></Right1>

          </Provider>

        </div>
    </div>
  );
}

function Left1(props){
  return <div>
    <h1>Left1 : </h1>
    <Left2 ></Left2>
  </div>
}
function Left2(props){
  console.log(2);

  return <div>
    <h1>Left2 : </h1>
    <Left3></Left3>
  </div>
}
function Left3(props){
  // function f(state){
  //   return state.number;
  // }
  console.log(3);

  const number = useSelector(state=>state.number);
  return <div>

    <h1>Left3 : {number}</h1>
  </div>
}
function Right1(props){
  return <div>
    <h1>Right1</h1>
    <Right2></Right2>
  </div>
}
function Right2(props){
  return <div>
    <h1>Right2</h1>
    <Right3></Right3>
  </div>
}
function Right3(props){
  const dispatch = useDispatch();
  return <div>
    <h1>Right3</h1>
    <input type="button" value="+" onClick={()=>{
      dispatch({type : 'PLUS'});
    }}></input>
  </div>
}
