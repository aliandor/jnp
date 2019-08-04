import React from 'react'
import styled from 'styled-components'
import Colors from './styling/styles'
import { Link } from 'gatsby'

const ServicesSection = () => (
  <Cards>
    <ServiceCard>
      <Links to='/copperrepipepage/'>
        <CTA>
          Copper Repipe For Le<Dollar>$$</Dollar>
        </CTA>
      </Links>
    </ServiceCard>
    <ServiceCard>
    <Links to='/servicespage/'>
      <CardTitle>Drain & Sewer Cleaning</CardTitle>      
    </Links>
    </ServiceCard>
    <ServiceCard>
    <Links to='/servicespage/'>
      <CardTitle>Installation and Repairs</CardTitle>     
    </Links>
    </ServiceCard>
  </Cards>
)

export default ServicesSection

const Links = styled(Link)`
  text-decoration: none;
  color: ${Colors.MainBlack};
`;

const Cards = styled.div`
  background: rgba(0,0,0, 0.1);
  padding: 1rem 0;
  width: 100vw;
  height: 230px;
  display: grid;
  grid-template-columns: [left-gutter] 16px [cards] auto [right-gutter] 16px;
  grid-template-rows: repeat(3, 50px);
  grid-gap: 1rem 0;
  align-content: center;
`;

const ServiceCard = styled.div`
  grid-column: cards / right-gutter;
  height: 50px;
  background: #fafafa;
  display: grid;
  place-items: center center;
  @media(min-width: 700px){max-width: 420px;}
  }
`;

const Dollar = styled.span`
  font-size: 7vw;
  font-family: 'sans-serif';
  font-weight: 500;
  color: ${Colors.MainGreen};
  @media(min-width: 700px){
    font-size: 3.5vw;
  }
`;

const CardTitle = styled.h3`
  font-size: 7vw;
  font-family: 'sans-serif';
  font-weight: 500;
  color: ${Colors.MainBlack};
  @media(min-width: 700px){
    font-size: 3.5vw;
  }
`;

const CTA = styled(CardTitle)`
  color: ${Colors.MainRed};
`;