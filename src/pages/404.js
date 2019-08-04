import React from 'react'
import Layout from '../components/layout'
import Icon from '../images/404v2.svg'
import styled from 'styled-components'
// import Colors from '../components/styling/styles'

const NotFoundPage = () => (
  <Layout>
    <Page>
      <h1>4<span><img src={Icon}/></span>4</h1>
      <p>The Requested Page Could Not Be Found</p>
    </Page>
  </Layout>
)

export default NotFoundPage

const Page = styled.div`
  height: calc(100vh - 220px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  h1 {
    font-size: 5rem;
    font-weight: 200;
    color: #9D1B43c8;
    img {
      height: 55px;
    }
  }
  p {
    font-family: sans-serif;
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
  }
`;