import React from "react"
import styled from "styled-components"
import Colors from "../components/styling/styles"
import Layout from "../components/layout"

const aboutpage = () => (
  <Layout>
    <Wrapper>
      <div>
        <h1>About Us</h1>
        <h3>Trusted & Recommended Since 1986</h3>
        <h3>Copper Repipe Specialist</h3>
      </div>
      <main>
        <p>
          We use only our own highly skilled plumbers and our project manager
          can provide extensive knowledge of each and every project being
          performed. Customer service and satisfaction is #1 priority and is
          never overlooked.
        </p>
        <p>
          John Nelson Plumbing has been your trusted plumber for over 25 years
          because we give:
        </p>
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
        <p>All Work - 100% Guaranteed</p>
        <li>- We Do It Right The First Time!</li>
        <p>Usually on the job within 59 minutes</p>
        <li>- We Value Your Time</li>
        <p>Up Front Pricing</p>
        <li>- Free Written Estimate Before We Start</li>
        <p>No Extra or Overtime Charges</p>
        <li>- Weekends, Holidays, Nights</li>
        <p>Prompt, Professional, Reliable Service</p>
      </section>
      <SecondSection>
        <h3>Experienced Plumbers</h3>
        <li>Copper Repipe Specialists</li>
        <li>
          Copper Repipe 4 LE<span>$$</span>
        </li>
        <li>Sewer and Drain Experts</li>
        <li>Fully Insured</li>
        <li>Full Service Plumbing</li>
      </SecondSection>
    </Wrapper>
  </Layout>
)

export default aboutpage

const Wrapper = styled.div`
  padding: 1rem;
  font-family: sans-serif;
  color: ${Colors.MainBlack};
  div {
    padding: 50px 0 20px 0;
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
    @media (min-width: 700px) {
      padding-top: 10px;
      h1 {
        font-size: 48px;
      }
      h3 {
        font-size: 24px;
      }
    }
  }

  li {
    list-style: circle;
    padding: 2px;
    @media (min-width: 700px) {
      padding: 4px;
      font-size: 24px;
    }
  }
  main {
    grid-column: 1;
    padding-bottom: 10px;
    p {
      padding: 5px 0;
    }
    @media (min-width: 700px) {
      p {
        font-size: 24px;
      }
    }
  }
  section {
    h2 {
      color: ${Colors.MainRed};
      font-size: 1.35rem;
      padding-bottom: 10px;
      @media (min-width: 700px) {
        font-size: 24px;
      }
    }
    p {
      font-weight: 600;
      @media (min-width: 700px) {
        font-size: 24px;
      }
    }
    li {
      font-weight: 400;
      list-style: none;
      padding-bottom: 10px;
    }
  }
`

const SecondSection = styled.section`
  h3 {
    color: ${Colors.MainRed};
    font-size: 1.35rem;
    padding: 10px 0;
    @media (min-width: 700px) {
      font-size: 24px;
    }
  }
  li {
    padding: 0;
    font-weight: 400;
  }
  span {
    color: ${Colors.MainGreen};
    font-size: 24px;
  }
`
