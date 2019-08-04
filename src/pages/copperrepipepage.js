import React from 'react'
import styled from 'styled-components'
import Colors from '../components/styling/styles'
import Layout from '../components/layout'

const copperrepipepage = () => (
  <Layout>
    <Page>
      <header>
        <h1>Copper Repipe For Le<span>$$</span></h1>
        <h3>Trusted & Recommended Since 1986</h3>
        <h3><span>EMERGENCY</span> Repair Specialist</h3>
      </header>
      <main>
        <p>
          Copper repiping service is a process of refitting the existing plumbing or pipes in a home or a business. Many older structures were fitted with galvanized pipes as standard building practice. As the galvanized pipes age, the zinc lining they have tends to erode allowing rust to form leading to ‘rusty’ or ‘brown’ colored water and low water pressure coming from the faucets. Once galvanized pipes begin to deteriorate, they need to be replaced. The most preferable method of repair is to replace galvanized pipes with copper pipes, or copper repiping.
        </p>
        <ul>
          <li>ONE DAY SERVICE!</li>
          <li>ALL HOMES COMPLETED IN ONE DAY</li>
          <li>LOW TO MODERATE PRICING</li>
          <li>FIRST RATE COPPER REPIPE SERVICE</li>
          <li>COURTEOUS UNIFORMED SKILLED CREW</li>
          <li>COMBINED CREW EXPERIENCE OVER 10,000</li>
          <li>HOMES AND APARTMENTS</li>
          <li>PROFESSIONAL WALL PATCHING AND CLEAN-UP { /* PROVIDED ON EVERY REPIPE */ }</li> 
          <li>FULLY INSURED</li>
        </ul>
      </main>
      <div>
        <p>FIRST-RATE REPIPE SERVICE:</p>
        <p>MORE THAN  ANYTHING ELSE WE WANT CUSTOMER SATISFACTION</p>
      </div>
    </Page>
  </Layout>
)

export default copperrepipepage;

const Page = styled.div`
  width: 100vw;
  padding: 52px 1rem 1rem 1rem;
  p {
    font-size: 5vw;
  }
  div {
    text-align: center;
    p {
      font-size: 0.9rem;
      @media(min-width: 700px) {
        font-size: 2vw;
      }
    }
  }
  @media(min-width: 700px) {
    p {
      font-size: 3.5vw;
      width: 86vw;
    }
  }
  header {
    padding-bottom: 1rem;
    h1 {
      color: ${Colors.MainRed};
      font-size: 8vw;
      @media(min-width: 320px) {
        font-size: 7.5vw;
      }
      span {
        color: ${Colors.MainGreen};
        font-size: 8vw;
        @media(min-width: 320px) {
          font-size: 7.5vw;
        }
      }
    }
    h3 {
      color: ${Colors.MainBlack};
      font-size: 6vw;
      @media(min-width: 320px) {
        font-size: 4.5vw;
      }    
      span {
        color: ${Colors.MainRed};
        font-size: 6vw;
        @media(min-width: 320px) {
          font-size: 4.5vw;
        }    
      }
    }
  }
  ul {
    padding: 1rem 0 0 1rem;
    @media(min-width: 700px) {
      padding: 2rem 0 0 2.2rem;
    }
    li {
      list-style: circle;
      font-size: 5vw;
      padding: 0.25rem 0;
      @media(min-width: 700px) {
        font-size: 3vw;
    }
  }
`;
