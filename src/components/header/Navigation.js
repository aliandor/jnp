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
          <TopNav>
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
          </TopNav>
          <CallBtn href="tel:818-248-4422">
            <Number>Call Us: 818-248-4422</Number>
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
  /* background: indianred; */
`
const TopNav = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  padding: 0 1rem;
  align-items: center;
`

const SiteLogo = styled(Link)`
  text-decoration: none;
  color: ${Colors.MainBlack};
  align-self: center;
  img {
    transform: translateY(2px);
    width: 24px;
    @media (min-width: 700px) {
      width: 32px;
    }
  }
`

const SiteTitle = styled(Link)`
  text-decoration: none;
  color: ${Colors.MainBlack};
  grid-column: 2;
  justify-self: center;
  width: 100%;
  background: #fff;
  h1 {
    font-size: 6vw;
    text-align: center;
    font-family: "sans-serif";
    @media (min-width: 700px) {
      font-size: 2.4rem;
      transform: translateY(-4px);
    }
  }
`

const NavBar = styled.div`
  width: 100vw;
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
    grid-template-rows: 54px;
    grid-template-columns:
      [gutter-left] 16px
      [logo] 32px
      [title] auto
      [btn] 32px
      [gutter-right] 1rem;
  }
`

const Btn = styled.button`
  background: none;
  border: none;
  &:focus {
    outline-color: ${Colors.MainRed};
  }
`
const MenuBtn = styled.img`
  width: 24px;
  height: 20px;
  /* border: 1px solid; */
  object-fit: contain;
  position: relative;
  transform: translateY(2px);
  @media (min-width: 700px) {
    width: 32px;
  }
`

const CallBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
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
