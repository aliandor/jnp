import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Colors from "./styling/styles"

const Footer = ({ siteTitle }) => (
  <Foot>
    <Info>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{
            height: 24,
            width: 24,
            marginRight: 5,
          }}
          src="https://res.cloudinary.com/dnsdvh13n/image/upload/v1539197672/johnNelsonPlumbing/icons/logo.png"
          alt="john nelson plumbing smiley face logo"
        />
        <SiteName>{siteTitle}</SiteName>
      </div>
      <p style={{ fontSize: "1.125rem" }}>
        2534 Foothill Blvd <br />
        La Crescenta, CA 91214 <br />
        <Phone href="tel: +1-818-248-4422">818-248-4422</Phone>
      </p>
    </Info>

    <Legal>
      <div>
        <Link to="/terms/" style={{ color: "white", textDecoration: "none" }}>
          <p style={{ fontSize: "0.8rem" }}>Privacy Policy | Terms of Use</p>
        </Link>
        <p style={{ fontSize: "0.8rem" }}>Bonded - License# 518842 - Insured</p>
      </div>
    </Legal>
  </Foot>
)

export default Footer

const Foot = styled.footer`
  box-sizing: border-box;
  background: #505050;
  width: 100vw;
  height: 200px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 16px;
  font-family: sans-serif;
  @media (min-width: 649px) {
    /* padding-left: calc(100vw - 90%); */
  }
`

const SiteName = styled.h2`
  font-size: 1.5rem;
  color: rgb(250, 250, 250, 0.9);
  @media (width: 320px) {
    /* iphone 5 */
    font-size: 1.35rem;
  }
`

const Info = styled.div`
  color: rgb(250, 250, 250, 0.9);
  /* color: ${Colors.MainRed}; */
`

const Phone = styled.a`
  text-decoration: none;
  color: snow;
  /* color: ${Colors.MainRed}; */
  font-size: 1.1rem;
  &:hover {
    color: ${Colors.MainYellow};
  }
`

const Legal = styled.div`
  display: flex;
  justify-content: flex-end;
  text-align: right;
  width: 100%;
  color: white;
  padding-right: 2px;
`
