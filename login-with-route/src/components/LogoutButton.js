import React from 'react';
import {useParams, useLocation, useNavigate} from 'react-router-dom';

const LogoutButton = ({logout}) => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const  handleClick = () => {
        logout();
        navigate(-1)
    }
    return (
        <button onClick={handleClick}>Logout</button>
    );
};

export default LogoutButton;