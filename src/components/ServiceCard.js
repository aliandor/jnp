import React from "react"
import styled from "styled-components"

const ServiceCard = ({ className, children }) => {
  return <Card className={className}>{children}</Card>
}

export default ServiceCard

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  grid-column: cards / right-gutter;
  max-width: 500px;
  text-align: center;
  @media (min-width: 700px) {
    margin: 0 1rem;
  }
  img {
    width: 32px;
  }
  p {
    width: 80%;
  }
`
