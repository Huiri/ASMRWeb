import React from 'react';
import {ReactComponent as HomeIcon} from '../img/home.svg';
import {ReactComponent as NotificationIcon} from '../img/home.svg';
import {ReactComponent as UserIcon} from '../img/home.svg';
import {HeaderWrap, HeaderIcon, HeaderLogo} from '../styles/Header'; 
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <HeaderWrap>
            <HeaderLogo>
                {/* <img src="" alt=""/> */}
                <Link to="/">
                    <h1>Logo</h1>
                </Link>
            </HeaderLogo>

            <HeaderIcon>
                <p>홈</p>
                {/* <HomeIcon/> */}

                <p>ASMR</p>

                <p>게시판</p>

                <p>알람</p>
                {/* <UserIcon/> */}

                <Link to="/login">
                    <p>로그인</p>
                    {/* <NotificationIcon/> */}
                </Link>
            </HeaderIcon>
        
    
        </HeaderWrap>
    );
};

export default Header;