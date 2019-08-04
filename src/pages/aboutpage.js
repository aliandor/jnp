import React from 'react'
import styled from 'styled-components'
import Colors from '../components/styling/styles'
import Layout from '../components/layout'

const aboutpage = () => (
  <Layout>
    <Wrapper>
    <div>
      <h1>About Us</h1>
      <h3>Trusted & Recommended Since 1986</h3>
      <h3>Copper Repipe Specialist</h3>  
    </div>
    <main>
      <p>We use only our own highly skilled plumbers and our project manager can provide extensive knowledge of each and every project being performed. Customer service and satisfaction is #1 priority and is never overlooked.</p>
      <p>John Nelson Plumbing has been your trusted plumber for over 25 years because we give:</p>
      <li>Prompt, Professional Reliable Service</li>    
      <li>Upfront Pricing</li>    
      <li>No Overtime Charges</li>    
      <li>All Work 100% Guaranteed</li>    
      <li>Locally Owned and Operated</li>    
      <li>Full Service Plumber</li>    
      <li>We want to be your plumbers for life!</li>    
    </main>
    <section>
      <h2>Company Profile</h2>
      <p>
        All Work - 100% Guaranteed 
        <li>- We Do It Right The First Time!</li>
        Usually on the job within 59 minutes 
        <li>- We Value Your Time</li>
        Up Front Pricing 
        <li>- Free Written Estimate Before We Start</li>
        No Extra or Overtime Charges 
        <li>- Weekends, Holidays, Nights</li>
        Prompt, Professional, Reliable Service
      </p>
    </section>
    <SecondSection>
      <h3>Experienced Plumbers</h3>
      <li>Copper Repipe Specialists</li>
      <li>Copper Repipe 4 LE<span>$$</span></li>
      <li>Sewer and Drain Experts</li>
      <li>Fully Insured</li>
      <li>Full Service Plumbing</li>
    </SecondSection>
    </Wrapper>
  </Layout>
);

export default aboutpage;

const Background = 'https://res.cloudinary.com/dnsdvh13n/image/upload/v1539115305/johnNelsonPlumbing/backgrounds/contact-vector.jpg';

const Wrapper = styled.div`
  padding-left: 10px;
  font-family: sans-serif;
  color: ${Colors.MainBlack};  
  @media(min-width: 500px) {
    margin-top: 10px;
    padding-left: 5%;
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 200px 100%;
  }
  @media(min-width: 799px) {
    margin-top: 10px;
    padding-left: 5%;
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right bottom;
  }
  @media(min-width: 899px) {
    margin-top: 20px;
    padding-left: 10%;
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right bottom;
  }
  @media(min-width: 945px) {
    margin-top: 50px;
    padding-left: 15%;
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right bottom;
  }
  div {
    padding-top: 40px;
    padding-bottom: 20px;
    img {
      width: 50px;
    }
    h1 {
      color: ${Colors.MainRed};
      font-size: 1.75rem;
    }
    h3 {
      font-size: 0.9rem;
      font-weight: 400;
    }
    @media(min-width: 945px) {
      padding-top: 10px;
      h1 {
        font-size: 2rem;
      }
      h3 {
        font-size: 1rem;
      }
    }
  }

  li {
    list-style: circle;
    padding: 2px;
    @media(min-width: 945px) {
      font-size: 1.12rem;
    }
  }
  main {
    grid-column: 1;
    padding-bottom: 10px;
    @media(min-width: 699px) {
      background: rgba(255, 255, 255, 0.9);
      width: 400px;
    }
    p {
      padding: 5px 0;
      max-width: 400px;
    }
    @media(min-width: 945px) {
      p {
        font-size: 1.12rem;
      }
    }
  }
  section {
    @media(min-width: 699px) {
      background: rgba(255, 255, 255, 0.9);
      width: 400px;
    }
    h2 {
      color: ${Colors.MainRed};
      font-size: 1.35rem;
      padding-bottom: 10px;
    }
    p {
      font-weight: 600;
    }
    li {
      font-weight: 400;
      list-style: none;
      padding-bottom: 10px;
    }
  }
`;

const SecondSection = styled.section`
  h3 {
    color: ${Colors.MainRed};
    font-size: 1.35rem;
    padding: 10px 0;
  }
  li {
    padding: 0;
    font-weight: 400;
  }
  span {
    color: ${Colors.MainGreen};
  }
`;