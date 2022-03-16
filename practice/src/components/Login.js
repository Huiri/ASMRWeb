import {React, useState, useEffect} from 'react';
import axios from 'axios'
const Login = () => {

    const [inputId, setInputId] = useState('');
    const [inputPw, setinputPw] = useState('');

    useEffect(()=> {
        console.log(inputId, inputPw);
    }, inputId,inputPw);

    const handleInputId = e => {
        setInputId(e.target.value);
    }
    const handleInputPW = e => {
        setinputPw(e.target.value);
    }
    return (
        <div>
            <input type='text' name='input_id' value={inputId} onChange={handleInputId}/>
            <input type='password' name='input_px' value={inputPw} onChange={handleInputPW}/>
            <button>Login</button>
        </div>
    );
};

export default Login;