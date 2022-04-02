import React, {useState} from 'react';
import {Button, LoginWrap, InputBox, FormField, LoginTitle} from '../styles/Login';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <LoginWrap>
            <LoginTitle>Welcome to ASMR</LoginTitle>
                <FormField>
                    <InputBox type="email" placeholder = "email" value={email}/>
                    <InputBox type="password" placeholder = "password" value={password}/>
                    <Button>login</Button>
                </FormField>
        </LoginWrap>
    );
};

export default Login;