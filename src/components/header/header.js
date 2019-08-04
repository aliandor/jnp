import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';


const Header = ({siteTitle}) => (
  <HeaderBar>
    <Navigation siteTitle={siteTitle} />
  </HeaderBar>
)

export default Header

const HeaderBar = styled.div`
  width: 100vw;
  background: lime;
`;
