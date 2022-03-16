import {React, useState, useReducer} from 'react';
import styled from 'styled-components'
import {Route, Redirect} from 'react-router-dom';
import { signIn } from '../auth';

const Button = styled.button`
    color : white;
    background : indigo;
    display : flex;
    font-size: 1rem;
`
function reducer(state, action) {
    /* switch(action.type){
       case "INPUT" :*/
        return{
            ...state,
            [action.name] : action.value
        }
        /*case "RESET" :
            return "";
        default :
        throw new Error("Unsupported action type:", action.type);
    }*/

}
const Login = () => {
    const [user, setUser] = useState(null);
    const authenticated = user != null;
    
    const [state, dispatch] = useReducer(reducer, {
        inputId : '',
        inputPw : ''
    });

    const login = ({inputId, inputPw}) => setUser(signIn({inputId, inputPw}));
    const logout = () => setUser(null);

    const {inputId, inputPw} = state;
    
    const onChange = e => {
        dispatch( e.target);

    }
    const hadleClick = () => {
        try {
            login({inputId, inputPw});
        } catch(e) {
            alert("로그인 정보가 일치하지 않거나 존재하지 않습니다.");
        }

    }

   {/*} const { from } = location.state || { from: { pathname: "/" } };
    if (authenticated) return <Redirect to={from} />;
*/}

    return (
        <div>
            <div>
                <input name = "inputId" placeholder = 'id' value={inputId} onChange={onChange}/>
            </div>
            <div>
                 <input name = "inputPw" placeholder = 'password' value={inputPw} onChange={onChange}/>
            </div>
            <Button onClick={hadleClick}>Login</Button>
        </div>
    );
};

export default Login;