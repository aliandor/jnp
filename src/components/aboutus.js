import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Colors from './styling/styles'
import { Link } from 'gatsby';

const Aboutus = () => (
  <StaticQuery
  query={graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}
  render={data => (
    <AboutUs>
      <Header>
        <Title>{data.site.siteMetadata.title}</Title>
        <SubTitle>Trusted and Recommended since 1986</SubTitle>
        <Copy>Welcome to Southern California’s the most courteous copper repiping specialists. John Nelson Plumbing has been in business since 1986 serving residential and commercial properties all over the southland. Since then over 7,000 satisfied clients have used our copper repiping plumbing service! No project is too small or too big for us. We are the copper re-piping specialists with full service and repair capabilities. We specialize in <span><Link to='/copperrepipepage'> One Day Copper Repiping.</Link></span>
        </Copy>
      </Header>
    </AboutUs>
  )}
/>
)

export default Aboutus;

const AboutUs = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 
    [left-gutter] 16px 
    [body] 1fr 
    [right-gutter] 16px;

`;
const Header = styled.div`
  grid-column: body;
`;

const Title = styled.h1`
  color: ${Colors.MainRed};
  font-size: 7vw;
  @media(min-width: 700px){font-size: 5vw;}
`;

const SubTitle = styled.h3`
  color: ${Colors.MainYellow};
  font-size: 4vw;
  opacity: 0.7;
  @media(min-width: 700px){font-size: 2.75vw;}
`;

const Copy = styled.p`
  color: ${Colors.MainBlack};
  max-width: 600px;
  font-size: 4.25vw;
  @media(min-width: 700px){font-size: 3vw;}
  span {
    font-weight: 400;
  }
  a {
    text-decoration: none;
    color: ${Colors.MainBlack};
    border-bottom: 3px solid rgba(157,27,76, 0.7);
    font-size: 4.25vw;  
    @media(min-width: 700px){font-size: 3vw;}
`;
