import React from 'react'
import styled from 'styled-components';

import Colors  from '../styling/styles';
import SiteLogo from '../images/logo.png';

const Logo = ({siteTitle}) => (
  <LogoTitle>
    <Nav>
      <LogoImg src={SiteLogo} alt='john nelson plumbing smiley face logo' />
      <Title>{siteTitle}</Title>
    </Nav>
    <DesktopCallLink>
      <p>Call Now</p>
      <a href='tel:818-248-4422'>(818) 248-4422</a>
    </DesktopCallLink>
  </LogoTitle>
)

export default Logo;

const LogoTitle = styled.div`
  display: flex;
  background: white;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  align-items: end;
  justify-content: flex-start;
  z-index: 2;
`;

const LogoImg = styled.img`
  height: 24px; 
  width: 24px;
`;

const Nav = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding-left: 7px;
`;

const Title = styled.h1`
  color: ${Colors.MainRed};
  font-size: 1.6rem;
  width: 100%;
  overflow: hidden;
  padding-left: 7px;
  overflow: hidden;
  @media (min-width: 320px) and (max-width: 360px) {
    font-size: 22px;
  }
`;

const DesktopCallLink = styled.a`
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  padding-right: 7px;
  padding-top: 7px;
  p {
    color: ${Colors.MainRed};
    font-size: 1rem;
    font-family: sans-serif;
  }
  a {
    text-decoration: none;
    color: ${Colors.MainRed};
    font-size: 1.25rem;
    &:hover{
      color: ${Colors.MainYellow}
    }
  }

  @media (min-width: 300px) and (max-width: 899px) {
    background: ${Colors.MainRed};
    width: 100vw;
    height: 50px;
    position: fixed;
    top: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    p {
    color: white;
    font-size: 1rem;
    font-family: sans-serif;
    }
    a {
    text-decoration: none;
    color: white;
    font-size: 1.25rem;
    }
  }
`;