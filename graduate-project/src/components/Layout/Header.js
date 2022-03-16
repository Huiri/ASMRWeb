import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyle = styled.div`

background : lightblue;
color : white;
font-size : 2rem;
margin: 0 auto;
padding : 1rem;
display: flex;
text-decoration: none;
color : white;
p {
    font-size: 1.2rem;
    margin : auto 0 0 auto;
    padding : 1rem;
    
    &:hover {
        color : black;
    }
}

`
const StyledLink = styled(Link)`
text-decoration: none;
color : white;
`
const Header = () => {
    return (
        <>
        <HeaderStyle>
            <StyledLink to ="/">
                    Header
            </StyledLink>
            <StyledLink to ='/login'>
                <p>Login</p>
            </StyledLink>
        </HeaderStyle>
        </>
    );
};

export default Header;