import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Contact from "../components/contact"
import ServicesSection from "../components/services"
import Aboutus from "../components/aboutus"

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <Contact />
      <ServicesSection />
      <Aboutus title="John Nelson Plumbing" />
    </Wrapper>
  </Layout>
)

export default IndexPage

const BackgroundImage =
  "https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1539751208/johnNelsonPlumbing/backgrounds/heroLanding_-_Edited_redv3.svg"

const Wrapper = styled.div`
  width: 100vw;
  max-width: 1600px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @media (min-width: 700px) {
    align-items: flex-start;
    background: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: 40% 100%;
    background-position: 90% 100%;
  }
  @media (min-width: 900px) {
    background-position: 85% 100%;
  }
`
