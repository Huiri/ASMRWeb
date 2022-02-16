// import React, { Component } from 'react';

// class Counter extends Component {
//     // constructor(props){
//     //     super(props);
//     //     //state의 초깃값 설정하기
//     //     this.state = {
//     //         number : 0,
//     //         fixedNumber : 0
//     //     };
//     // }
//     state = {
//         number : 0,
//         fixedNumber : 0
//     };
//     render() {
//         const {number, fixedNumber} = this.state; //state 조회
//         return (
//             <div>
//                 <h1>{number}</h1>
//                 <h2>바뀌지 않는 값 {fixedNumber}</h2>
//                 <button
//                 //onClick을 통해 버튼이 클릭되었을 대 호출할 함수 지정
//                     onClick={() => {
//                         //this.setState 사요해 state값 변경 가능
//                         this.setState(
//                         {
//                             number : number + 1
//                         },
//                         () =>{
//                             console.log('방금 setState가 호출되엇습니다');
//                             console.log(this.state);
//                         }
//                         )

//                         //this.setState({number:number+1});

//                         // this.setState({number:this.state.number + 1})
//                         // 위에 건 웹 사이트에 바로 반영되지 않음
//                         {/*
//                         this.setState(prevState => {
//                             return {
//                                 number : prevState.number +1
//                             };
//                         });
//                         this.setState(prevState => ({
//                             number:prevState.number + 1
//                         })


//                         //두 코드는 같은 역할을 함
//                         );*/}
//                     }}
//                     >
//                         +1
//                     </button>
            
//             </div>
//         );
//     }
// }

// export default Counter;

import {useReducer} from 'react';
function reducer(state, action) {
    switch(action.type){
        case 'INCREMENT':
            return {value : state.value +1};
        case 'DECREMENT' :
            return {value : state.value -1};
        default :
            return state;
    }
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {value :0});
    return (
        <div>
            <p>현재 카운터 값은<b>{state.value}</b>입니다.</p>
            <button onClick={() => dispatch({type : 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type : 'DECREMENT'})}>-1</button>

        </div>
    );
};

export default Counter;