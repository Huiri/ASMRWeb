import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import {increase, decrease} from '../modules/counter';

const CounterContainer = ({number, increase,decrease}) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
    );
};

//bindActionCreators 유틸 함수 사용
export default connect(
    state => ({
        number : state.counter.number,
    }), 
    // dispatch =>
    //     bindActionCreators(
    //         {
    //             increase, decrease,
    //         },
    //         dispatch,
    //     ),
    {
        //디스패치 함수인 객체 형태
        increase, decrease,
    }
)(CounterContainer);

//connect 함수 내부에 익명 함수 형태로 선언
// export default connect(
//     state => ({
//         number : state.counter.number,
//     }), 
//     dispatch => ({
//         increase : () => dispatch(increase()),
//         decrease : () => dispatch(decrease()),
//     }),
// )(CounterContainer);

// state를 파라미터로 받아오며 현재 스토어가 지닌 상태를 가리킴
// const mapStateToProps = state => ({
//     number : state.counter.number,
// });
// store의 내장 함수 dispatch를 파라미터로 받아옴
// const mapDispatchToProps = dispatch => ({
//     increase : () => {
//         dispatch(increase());
//     },
//     decrease : () => {
//         dispatch(decrease());
//     },
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(CounterContainer);