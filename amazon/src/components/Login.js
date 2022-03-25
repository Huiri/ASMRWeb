import React, {useState} from 'react';
import '../styles/Login.css';
import {Link, useNavigate} from 'react-router-dom';
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useNavigate();

    const signOut = e => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

    const signIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            history('/', {replace:true})
    })
        .catch((error) => {
            alert(error.message);
            console.warn(error.message);
    });
    }
    const register = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            if(userCredential){
                history('/', {replace: true});
            }
        })
        .catch((error) => {
            alert(error.message);
            console.warn(error.message);
        });
    }
    
    return (
        <div className="login">
            <Link to ='/'>
            <img className="login_logo" src = 'https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
            </Link>

            <div className="login_container">
                <h1>로그인</h1>
                <form>
                    <h5>이메일</h5>
                    <input value={email} onChange={e=>setEmail(e.target.value)} type = "email"/>
                    <h5>비밀번호</h5>
                    <input value={password} onChange={e=>setPassword(e.target.value)} type = "password"/>
                    <button onClick={signIn} className="login_signInButton">로그인 하기</button>
                </form>
                <p>이용약관에 동의하십니까?</p>
                <button onClick={register} className="login_registerButton">회원가입</button>
            </div>
        </div>
    );
};

export default Login;