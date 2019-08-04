import React, { Component } from "react"
import styled from "styled-components"
import Colors from "../styling/styles"
import { Link } from "gatsby"
import Menu from "./Menu"

class Navigation extends Component {
  state = {
    toggle: false,
  }
  handleClick = () => {
    this.setState({
      toggle: !this.state.toggle,
    })
  }
  render() {
    const BtnImg =
      "https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1541745705/johnNelsonPlumbing/icons/menuv2.svg"

    let toggleMobileMenu
    if (this.state.toggle) {
      toggleMobileMenu = <Menu />
    }

    const Logo =
      "https://res.cloudinary.com/dnsdvh13n/image/upload/f_auto/v1539197672/johnNelsonPlumbing/icons/logo.png"

    return (
      <Header>
        <NavBar>
          <SiteLogo to="/">
            <img src={Logo} alt="smiley face logo" />
          </SiteLogo>
          <SiteTitle to="/">
            <h1>{this.props.siteTitle}</h1>
          </SiteTitle>
          <Btn onClick={this.handleClick}>
            <MenuBtn
              src={BtnImg}
              alt="Hamburger by Vector Studio from the Noun Project"
            />
          </Btn>
          <CallBtn href="tel:818-248-4422">
            <p style={{ fontSize: 14 }}>Call Us Today</p>
            <Number>818-248-4422</Number>
          </CallBtn>
        </NavBar>
        {toggleMobileMenu}
      </Header>
    )
  }
}

export default Navigation

const Header = styled.header`
  width: 100vw;
  height: 60px;
`

const SiteLogo = styled(Link)`
  text-decoration: none;
  color: ${Colors.MainBlack};
  /* align-self: flex-end; */
  /* object-fit: fit; */
  /* width: 24px; */
  grid-column: logo;
  img {
    width: 32px;
    @media (min-width: 700px) {
      transform: translateY(3px);
    }
  }
`

const SiteTitle = styled(Link)`
  text-decoration: none;
  color: ${Colors.MainBlack};
  grid-column: title;
  align-self: center;
  /* transform: translateY(5px); */
  h1 {
    font-size: 6vw;
    font-family: "sans-serif";
    @media (min-width: 700px) {
      font-size: 2.4rem;
      transform: translateY(-4px);
    }
  }
`

const NavBar = styled.div`
  width: 100vw;
  /* height: 50px; */
  /* padding: 5px 0; */
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #fff;
  z-index: 3;
  display: grid;
  grid-template-columns:
    [gutter-left] 16px
    [logo] auto
    [title] auto
    [btn] auto
    [gutter-right] 1rem;
  @media (min-width: 649px) {
    grid-template-rows: 40px;
    grid-template-columns:
      [gutter-left] 16px
      [logo] 32px
      [title] auto
      [btn] 32px
      [gutter-right] 1rem;
  }
`

const Btn = styled.button`
  grid-column: btn;
  background: none;
  border: none;
  align-self: center;
  justify-self: end;
  &:focus {
    outline-color: ${Colors.MainRed};
  }
`
const MenuBtn = styled.img`
  width: 24px;
  object-fit: cover;
  position: relative;
`

const CallBtn = styled.a`
  width: 100vw;
  height: 50px;
  grid-column: 1/-1;
  background: ${Colors.MainRed};
  border: none;
  padding: 8px 0;
  color: ${Colors.MainWhite};
  /* box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25); */
  text-decoration: none;
  text-align: center;
  font-family: sans-serif;
  @media (min-width: 649px) {
    display: none;
  }
`

const Number = styled.p`
  font-size: 20px;
  opacity: 0.9;
`
