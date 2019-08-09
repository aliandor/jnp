import React from "react"
import styled from "styled-components"
import Colors from "./styling/styles"
import { Link } from "gatsby"
import ServiceCard from "./ServiceCard"

const ServicesSection = () => (
  <Cards>
    <ServiceCard>
      <Links to="/copperrepipepage/">
        <img
          src="https://res.cloudinary.com/dnsdvh13n/image/upload/v1565334830/johnNelsonPlumbing/icons/card-faucet.png"
          alt="Water by IconfactoryTeam from the Noun Project"
        />
        <h1>Copper Repipe Specialist</h1>
        <p>
          With copper repiping, your family will experience clean water that
          flows faster and you will be able to use all faucets and fixtures
          comfortably at the same time.
        </p>
      </Links>
    </ServiceCard>
    <ServiceCard>
      <Links to="/aboutpage/">
        <img
          src="https://res.cloudinary.com/dnsdvh13n/image/upload/v1565334830/johnNelsonPlumbing/icons/card-plunger.png"
          alt="Plunger by IconfactoryTeam from the Noun Project"
        />
        <h1>Trusted for over 30 years</h1>
        <p>
          John Nelson Plumbing has been in business since 1986. We are the
          copper re-piping specialists with full service and repair
          capabilities.
        </p>
      </Links>
    </ServiceCard>
    <CardEnd>
      <Links to="/servicespage/">
        <img
          src="https://res.cloudinary.com/dnsdvh13n/image/upload/v1565334830/johnNelsonPlumbing/icons/card-.png"
          alt="wash basin by IconfactoryTeam from the Noun Project"
        />
        <h1>Household Plumbing Needs</h1>
        <p>
          Serving residential and commercial properties all over the southland.
          No project is too small or too big for us. Checkout our services.
        </p>
      </Links>
    </CardEnd>
  </Cards>
)

export default ServicesSection

const Links = styled(Link)`
  text-decoration: none;
  color: ${Colors.MainBlack};
  /* border: 1px solid; */
  display: grid;
  align-items: center;
  justify-items: center;
  grid-row-gap: 1rem;
  padding: 1rem 0;
  background: #fafafa;
  @media (min-width: 700px) {
    width: 50vw;
  }
`

const Cards = styled.div`
  background: rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 2rem 0rem;
  width: 100vw;
  display: grid;
  grid-template-columns: [left-gutter] 16px [cards] auto [right-gutter] 16px;
  grid-gap: 2rem 0;
  align-content: center;
`

const CardEnd = styled(ServiceCard)`
  @media (min-width: 700px) {
  }
`
