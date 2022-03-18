import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const 체중 = 100;
// function reducer(state = 체중, action){
//   return state
// }

function reducer(state = 체중, action){
  if(action.type === '증가'){
    state++;
    return state
  } else if(action.type === '감소'){
    state--;
    return state
  } else {
    return state
  }
}

let store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
