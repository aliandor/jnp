import React from 'react'
import styled from 'styled-components'

import Colors from './styles'

const CopperRepipePage = () => (
  <CopperPage >
    <PageHeader>
      <PageTitle>Copper Repipe Specialist</PageTitle>
      <HeaderCopy>Copper repiping is the process of refitting exisiting plumbing or pipes.</HeaderCopy>  
    </PageHeader>
    <MainPageCard>
      <MainCardHeader>You may need copper repiping if you,</MainCardHeader>
      <Cards>
        <MainCardRow>
          <Icons    src='https://res.cloudinary.com/dnsdvh13n/image/upload/v1539197662/johnNelsonPlumbing/icons/plumbing.svg' alt='plumbing by mynamepong from the Noun Project'/>
          <MainCardCopy>Have a drop in water pressure</MainCardCopy>
        </MainCardRow>

        <MainCardRow>
          <Icons src='https://res.cloudinary.com/dnsdvh13n/image/upload/v1539197660/johnNelsonPlumbing/icons/tap.svg' alt='tap water by Deemak Daksina from the Noun Project'/>
          <MainCardCopy>Have foul odor coming from your tap</MainCardCopy>
        </MainCardRow>
        
        <MainCardRow>
          <Icons src='https://res.cloudinary.com/dnsdvh13n/image/upload/v1539197659/johnNelsonPlumbing/icons/Pipe-Trap.svg' alt='pipe by Kokota from the Noun Project'/>
          <MainCardCopy>Have pipes that begin to leak</MainCardCopy>
        </MainCardRow>
      </Cards>
     
    </MainPageCard>

    <Buttons>
      <CallToActionBtn>
        Contact Us
      </CallToActionBtn> 
      <LearnMore>
        Learn More
      </LearnMore>
    </Buttons>

  </CopperPage>
)

export default CopperRepipePage

const CardDropShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';

const CopperPage = styled.main`
  width: 100vw;
  max-width: 1000px;
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;

  @media (orientation: landscape) {
    height: 180vh;
  }

  @media (min-width: 800px) {
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 40px;
  }
`;

const PageHeader = styled.div`
  width: 100vw;
  height: 100px;
  max-width: 1000px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;

  background: rgba(255, 255, 255, 0.975);
  box-shadow: ${CardDropShadow};

  @media (min-width: 800px) {
    grid-column: 1 / -1;
  }
`;

const PageTitle = styled.h3`
  color: ${Colors.MainYellow};
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
`;

const HeaderCopy = styled.p`
  color: ${Colors.MainBlack};
  font-family: sans-serif;
  font-size: 18px;
  text-align: center;

  @media (min-width: 500px) {
    text-align: center;
  }
`;

const Cards = styled.div`
  height: 100%;  
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: space-around;

`;

const Icons = styled.img`
  width: 45px;
  height: 45px;


`;
const MainPageCard = styled.div`
  width: 90vw;
  max-width: 460px;
  height: 260px;

  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  background: white;
  box-shadow: ${CardDropShadow};

  @media (orientation: landscape) {
    height: 280px;
  }

  @media (min-width: 800px) {
    grid-column: 2 / 3 ;
  }
`;

const MainCardHeader = styled.h3`
  color: ${Colors.MainBlack};
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;

`;

const MainCardRow = styled.div` 
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  @media (min-width: 500px) {
  
  }
`;

const MainCardCopy = styled.p`
  padding-left: 16px;
  color: ${Colors.MainBlack};
  font-family: sans-serif;
  text-align: left;
  width: 100%;
`;

const Buttons = styled.div`
  height: 140px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  
  @media (min-width: 500px) {
    width: 600px;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }

  @media (orientation: landscape) {
    flex-flow: row nowrap;
    justify-content: space-around;
    width: 75%;  
    padding-bottom: 20px;
  }

  @media (min-width: 800px) {
    flex-flow: row wrap;
    height: 240px;
    width: 270px;
  }
`; 

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

const LearnMore = styled.button`
  height: 50px;
  width: 200px;
  border: none;
  outline-color: ${Colors.MainRed};
  background: white;
  color: ${Colors.MainRed};
  box-shadow: ${CardDropShadow};  
  font-size: 1.5rem;
  font-weight: 400;  
  font-family: sans-serif;  
  cursor: pointer;

  @media (min-width: 1000px) {
    height: 70px;
    font-size: 1.75rem;
    width: 220px;
  }

  &:hover {
    font-weight: bold;
  }

  &:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25)
  }

  @media (orientation: landscape) {
    height: 70px;
    width: 220px;
    font-size: 1.8rem;
  }


`;