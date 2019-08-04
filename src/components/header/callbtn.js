import React from 'react'
import styled from 'styled-components'
import Colors from '../styling/styles'

const CTA = () => ( 
  <CallbtnDiv>
    <CallBtn>
      <a href='tel:818-248-4422'>Call Now</a>
    </CallBtn>
  </CallbtnDiv>
);
  
export default CTA;

const CallbtnDiv = styled.div`
  display: flex;
  width: 140px;
  height: 50px;
  border-radius: 45px;
  background: ${Colors.MainRed};
  position: fixed;
  bottom: 10px;
  right: calc(50% - 70px);
  z-index: 1;
  justify-content: center;
  box-shadow: 0px 2px 2px rgba(0,0,0, 0.25);
  
  @media (min-width: 999px) {
    display: none;
  }
  @media (min-height: 100px) and (max-height: 200px) {
    display: none
  }

  @media (min-height: 201px) and (max-height: 399px) {
    display: none;
  }

  @media (orientation: landscape) {
    right: 10px;
    bottom: 10px;
  }    
`;

const CallBtn = styled.button`
  background: none;
  border: none;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 1.5rem;
  }
  &:hover {
   font-weight: 600; 
  }
`;