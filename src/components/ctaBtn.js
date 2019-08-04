import React from 'react'
import styled from 'styled-components'

import Colors from './styles'

const CallToAction = () => ( <CallToActionBtn>Contact Us</CallToActionBtn> )

export default CallToAction;

const CardDropShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';

const CallToActionBtn = styled.button`
  height: 50px;
  width: 200px;
  background: ${Colors.MainRed};
  outline-color: ${Colors.MainBlack};
  border: none;
  box-shadow: ${CardDropShadow};
  color: snow;
  font-family: sans-serif;
  font-size: 1.55rem;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    font-weight: 200;
  }

  &:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 1000px) {
    height: 70px;
    width: 220px;
    font-size: 1.75rem;
  }

  @media (orientation: landscape) {
    height: 70px;
    width: 220px;
    font-size: 1.8rem;
  }
`;