import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FooterStyle = styled.div`
background : lightblue;
height: 2rem;
margin-top: auto;
color : white;
font-size : 2rem;
padding : 2rem;
display: flex;
text-decoration: none;
color : white;
p {
    font-size: 1rem;
    margin : 0.4rem;
    
    &:hover {
        color : black;
    }
}

`
const StyledLink = styled(Link)`
text-decoration: none;
color : white;
cursor: pointer;
`

const Footer = () => {
    return (
        <FooterStyle>
            <StyledLink to ="/graduation">
                    <p>졸업작품</p>
            </StyledLink>
            <StyledLink to ="/student">
                     <p>학생소개</p>
            </StyledLink>
            <StyledLink to ="/service">
                  <p>서비스 소개</p>
            </StyledLink>
        </FooterStyle>
    );
};

export default Footer;