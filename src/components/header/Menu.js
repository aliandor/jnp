import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Colors from "../styling/styles"

const LinkStyle = {
  textDecoration: "none",
  color: Colors.MainBlack,
}

const Menu = () => (
  <Fragment>
    <MenuPage>
      <Link style={LinkStyle} to="/">
        <MenuItem>Home</MenuItem>
      </Link>
      <Link style={LinkStyle} to="/copperrepipepage/">
        <MenuItem style={{ color: Colors.MainRed }}>
          <CTA style={{ textAlign: "center" }}>
            Copper Repipe
            <br /> For Le<Green>$$</Green>
          </CTA>
        </MenuItem>
      </Link>
      <Link style={LinkStyle} to="/contactus/">
        <MenuItem>Contact Us</MenuItem>
      </Link>
      <Link style={LinkStyle} to="/servicespage/">
        <MenuItem>Services</MenuItem>
      </Link>
      <Link style={LinkStyle} to="/aboutpage/">
        <MenuItem>About Us</MenuItem>
      </Link>
      <Link style={LinkStyle} to="/">
        <MenuItem>
          <img
            src="https://res.cloudinary.com/dnsdvh13n/image/upload/v1539197672/johnNelsonPlumbing/icons/logo.png"
            alt="john nelson plumbing smiley face logo"
          />
        </MenuItem>
      </Link>
    </MenuPage>
  </Fragment>
)

export default Menu

const CardDropShadow = "0px 4px 4px rgba(0, 0, 0, 0.25)"

const MenuPage = styled.nav`
  border: 1px solid ${Colors.MainRed};
  background: #fff;
  /* box-sizing: border-box; */
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 2;
  height: calc(100% - 80px);
  max-height: 300px;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px;
  grid-template-rows: repeat(3, 100px);
  @media (min-width: 699px) {
    border: none;
    box-shadow: ${CardDropShadow};
    grid-template-columns: repeat(5, auto);
    grid-template-rows: 50px;
    height: 54px;
    top: 46px;
    right: 0;
    left: 0;
  }
`

const Green = styled.span`
  color: ${Colors.MainGreen};
`

const CTA = styled.p`
  font-size: 1.2rem;
  &:hover {
    font-size: 1.25rem;
  }
  @media (min-width: 699px) {
    font-size: 1rem;
  }
`

const MenuItem = styled.li`
  list-style: none;
  border: 1px solid ${Colors.MainRed};
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  font-family: sans-serif;
  &:hover {
    color: ${Colors.MainYellow};
  }
  @media (min-width: 699px) {
    border: none;
    img {
      width: 32px;
      display: none;
    }
  }
`
