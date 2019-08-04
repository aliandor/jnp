import React from 'react'
import styled from 'styled-components'

import Colors from './styles'

const LandingPage = () => (
  <Landing>
    <Tagline>
      Trusted and Recommended<br /> since 1985
    </Tagline>
  </Landing>
)

export default LandingPage



const Landing = styled.header`
  padding-top: 25px;
  width: 100vw;
  max-width: 1000px;
  height: 90vh;
  @media (orientation: landscape) {
    height: 110vh;
  }
`;

const Tagline = styled.h3`
  color: ${Colors.MainYellow};
  text-align: center;
  font-size: 1.75rem;
  font-weight: 300;
`;
