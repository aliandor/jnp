import React from 'react'
import styled from 'styled-components'
import Colors  from '../styling/styles';
import { Link } from 'gatsby';


const LinkStyle = {
  textDecoration: 'none',
  color: Colors.MainBlack
}

const DesktopMenu = () => (
<div> 
  <MenuPage>
    <Link style={LinkStyle} to='/'>
      <MenuItem>Home</MenuItem>
    </Link>
    <Link style={LinkStyle} to='/copperrepipepage'>
      <MenuItem style={{ color: Colors.MainRed }}>
        <CTA style={{ textAlign: 'center' }}>
        Copper Repipe For Le<Green>$$</Green>
        </CTA>
      </MenuItem>
    </Link>
    <Link style={LinkStyle} to='/contactus/'>
      <MenuItem>Contact Us</MenuItem>
    </Link>
    <Link style={LinkStyle} to='/servicespage/'>
      <MenuItem>Services</MenuItem>
    </Link>
    <Link style={LinkStyle} to='/aboutpage/'>
      <MenuItem>About Us</MenuItem>
    </Link>
  </MenuPage>
</div>
)

export default DesktopMenu;

const CardDropShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';

const MenuPage = styled.nav` 
  /* background: ${Colors.MainWhite};
  z-index: 3;
  position: fixed;
  width: 100%;
  display: grid;  
  top: 40px;
  left: 0;
  right: 0;
  grid-template-columns: repeat(5, auto);
  height: 30px;
  border: none;
  box-shadow: ${CardDropShadow};
  @media (max-width: 648px) {
    display: none;
  }
  @media (min-width: 999px) {
    height: 40px; */
  /* }  */
`;

const Green = styled.span`
  color: ${Colors.MainGreen};

`;

const CTA = styled.p`
  font-size: 1.2rem;
  /* background: blue; */
  /* width: 180px; */
  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  /* width: 100%; */
  height: 100%;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  font-family: sans-serif;
  &:hover {
    color: ${Colors.MainRed}
  }
  @media (min-width: 600px) {
    font-size: 1rem;
  }
  @media (min-width: 999px) {
    align-items: center;
    font-size: 1.2rem;
  }
`;
