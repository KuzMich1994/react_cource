import React from 'react';
import styled from 'styled-components';
import logoImg from '../images/logo.svg';
import loginImg from '../images/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: 15px;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const LoginElementIcon = styled.img`
  margin-bottom: 3px;
`;

const LoginElementText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

const LoginElement = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>MrDonald's</H1>
    </Logo>
    <LoginElement>
      <LoginElementIcon src={loginImg} />
      <LoginElementText>войти</LoginElementText>
    </LoginElement>
  </NavBarStyled>
);