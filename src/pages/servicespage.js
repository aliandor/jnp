import React from "react"
import styled from "styled-components"
import Colors from "../components/styling/styles"
import { StaticQuery, graphql } from "gatsby"
import Services from "../components/sericepageassets"
import Layout from "../components/layout"

const ServicesPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query ServicePageHeadingQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Heading>
            <h2>{data.site.siteMetadata.title} Services</h2>
            <p>
              We use only our own highly skilled plumbers and our project
              manager can provide extensive knowledge of each and every project
              being performed. Customer service and satisfaction is #1 priority
              and is never overlooked.
            </p>
          </Heading>
          <div>
            <Services />
          </div>
        </>
      )}
    />
  </Layout>
)

export default ServicesPage

const Heading = styled.div`
  padding: 40px 10px 10px 10px;
  h2 {
    font-size: 1.5rem;
    color: ${Colors.MainRed};
    padding-bottom: 10px;
  }
  p {
    width: 90%;
    max-width: 500px;
    color: ${Colors.MainBlack};
  }
  @media (min-width: 699px) {
    padding-top: 40px;
    div {
      padding-left: 10px;
    }
  }
`
