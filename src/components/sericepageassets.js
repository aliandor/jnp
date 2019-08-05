import React from "react"
import styled from "styled-components"
import Colors from "./styling/styles"

const Icons = {
  Drain:
    "https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1542262660/johnNelsonPlumbing/icons/drain.svg",
  Tree:
    "https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1542262658/johnNelsonPlumbing/icons/Tree.svg",
  CopperRepipe:
    "https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1542962877/johnNelsonPlumbing/icons/Pipe-Trap.svg",
  PexPiping:
    "https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1542962877/johnNelsonPlumbing/icons/pexpipingicon.svg",
  BrokenPipe:
    "https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1542262658/johnNelsonPlumbing/icons/Broken-Pipe.svg",
  Checklist:
    "https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1542262660/johnNelsonPlumbing/icons/check-list.svg",
  Cleaning:
    "https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1542962877/johnNelsonPlumbing/icons/Clean.svg",
  Household:
    "https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1542962877/johnNelsonPlumbing/icons/House-Plumbing.svg",
  Repairs:
    "https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1542262658/johnNelsonPlumbing/icons/Wrench.svg",
}
const Alt = {
  Drain: "drain by Chris Henley from the Noun Project",
  Tree: "Tree by Guilherme Furtado from the Noun Project",
  CopperRepipe: "pipe by Hea Poh Lin from the Noun Project",
  PexPiping: "water pipeline by ProSymbols from the Noun Project",
  BrokenPipe: "Broken Pipe by Yazmin Alanis from the Noun Project",
  Checklist: "Checklist by David from the Noun Project",
  Cleaning: "Man holding water jet pump by Gan Khoon Lay from the Noun Project",
  Household: "House Plumbing by WheelieMonkey from the Noun Project",
  Repairs: "Wrench by Daniel Garrett Hickey from the Noun Project",
}
const Copy = {
  Drain: "Drain & Sewer Cleaning",
  Tree: "Tree Roots & Sludge Removal",
  CopperRepipe: "Copper Repipe 4 Less",
  PexPiping: "Pex Piping",
  BrokenPipe: "Broken Pipes, Slab Leaks, & Water Mains",
  Checklist: "In-Pipe Video Inspetion - Thorough Pipe Inspection",
  Cleaning: "Hydro Jet Cleaning - Electric Pipe Locating",
  Household: "Garbage Disposals, Toilets, tubs & Showers",
  Repairs: "Water Heaters- Tankless, Installation, Repair, Replace",
}
const ServiceRow = ({ src, alt, copy }) => (
  <Rows>
    <img src={src} alt={alt} />
    <p>{copy}</p>
  </Rows>
)
const Wrench = ({ src, alt, copy }) => (
  <WrenchRow>
    <img src={src} alt={alt} />
    <p>{copy}</p>
  </WrenchRow>
)

const Services = () => (
  <Wrapper>
    <ServiceRow src={Icons.Drain} alt={Alt.Drain} copy={Copy.Drain} />
    <ServiceRow src={Icons.Tree} alt={Alt.Tree} copy={Copy.Tree} />
    <ServiceRow
      src={Icons.CopperRepipe}
      alt={Alt.CopperRepipe}
      copy={Copy.CopperRepipe}
    />
    <ServiceRow
      src={Icons.PexPiping}
      alt={Alt.PexPiping}
      copy={Copy.PexPiping}
    />
    <ServiceRow
      src={Icons.BrokenPipe}
      alt={Alt.BrokenPipe}
      copy={Copy.BrokenPipe}
    />
    <ServiceRow
      src={Icons.Checklist}
      alt={Alt.Checklist}
      copy={Copy.Checklist}
    />
    <ServiceRow src={Icons.Cleaning} alt={Alt.Cleaning} copy={Copy.Cleaning} />
    <ServiceRow
      src={Icons.Household}
      alt={Alt.Household}
      copy={Copy.Household}
    />
    <Wrench src={Icons.Repairs} alt={Alt.Repairs} copy={Copy.Repairs} />
  </Wrapper>
)

export default Services

const Wrapper = styled.div`
  /* text-align: center; */
`

const Rows = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 1rem;
  &:nth-child(odd) {
    background: #e9e9e9;
  }
  img {
    padding-right: 1rem;
    width: 48px;
    height: auto;
  }
  p {
    color: ${Colors.MainBlack};
    width: 100%;
  }
`
const WrenchRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  background: #e9e9e9;
  padding: 1rem;

  img {
    padding: 0 0.5rem;
    width: 32px;
    height: auto;
  }
  p {
    color: ${Colors.MainBlack};
    width: 100%;
    padding-left: 1rem;
  }
`
