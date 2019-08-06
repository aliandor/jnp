import React, { Fragment } from "react"
// import { Link } from 'gatsby'
import styled from "styled-components"

import Colors from "../components/styling/styles"
import Layout from "../components/layout"

let Today = new Date()
let day = Today.getDate()
let month = Today.getMonth() + 1
let year = Today.getFullYear()
if (day < 10) {
  day = `0${day}`
}
if (month < 10) {
  month = `0${month}`
}

Today = `${year}-${month}-${day}`

const Contact = () => (
  <Layout>
    <Fragment>
      <ContactPage>
        <SiteLabel>
          <Title>Contact Us</Title>
        </SiteLabel>
        <Form name="contact" method="post" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <FormInput>
            <FormLabel for="name">Name</FormLabel>
            <Input
              type="text"
              id="name"
              name="user_name"
              placeholder="Name"
              required
            ></Input>
          </FormInput>
          <FormInput>
            <FormLabel for="phone">Phone</FormLabel>
            <Input
              type="tel"
              id="phone"
              name="user_phone"
              placeholder="Phone"
              required
            ></Input>
          </FormInput>
          <FormInput>
            <FormLabel for="City">City</FormLabel>
            <Input
              type="text"
              id="city"
              name="user_city"
              placeholder="City"
              required
            ></Input>
          </FormInput>
          <FormInput>
            <FormLabel for="e-mail">E-mail</FormLabel>
            <Input
              type="email"
              id="email"
              name="user_email"
              placeholder="E-mail"
              required
            ></Input>
          </FormInput>
          <HomeInfo style={{ marginTop: 25 }}>
            <label for="bathrooms">Number of Bathrooms: </label>
            <select name="bathrooms" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="other">other</option>
            </select>
          </HomeInfo>
          <HomeInfo>
            <label for="story">Number of Stories: </label>
            <select name="story" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="other">other</option>
            </select>
          </HomeInfo>
          <HomeInfo>
            <label for="square-footage">Square Footage: </label>
            <input
              id="square-footage"
              name="square-footage"
              type="number"
              placeholder="Square Footage"
              min="100"
              max="100000"
              required
            />
          </HomeInfo>
          <HomeInfo>
            <label for="year">Year Built: </label>
            <input
              name="year"
              id="year"
              type="number"
              placeholder="Year Built"
              min="1900"
              max="9999"
              required
            />
          </HomeInfo>
          <HomeInfo>
            <label for="foundation">Foundation: </label>
            <select name="foundation" required>
              <option>Slab</option>
              <option>Raised</option>
            </select>
          </HomeInfo>
          <HomeInfo>
            <label for="referred">Referred By: </label>
            <input
              type="text"
              id="referred"
              name="referred"
              placeholder="Referred By.."
            />
          </HomeInfo>
          <HomeInfo>
            <label for="date">Ideal Start Date: </label>
            <input type="date" id="date" name="date" min={Today} />
          </HomeInfo>
          <FormMsg>
            <FormMsgLabel for="msg">Notes</FormMsgLabel>
            <FormMsgInput
              id="msg"
              name="user_message"
              placeholder="Notes.."
            ></FormMsgInput>
          </FormMsg>
          <CTA>
            <CallToActionBtn type="submit">Contact Us</CallToActionBtn>
          </CTA>
        </Form>
      </ContactPage>
    </Fragment>
  </Layout>
)

export default Contact

//title styles start

const SiteLabel = styled.div`
  text-align: center;
  align-self: center;
  margin: -20px 0 10px 0;
  z-index: 1;
  /* background: red; */
  @media (min-width: 649px) {
    grid-column: 1;
    margin-top: 15px;
  }
`

const Title = styled.h2`
  font-size: 1.75rem;
  font-family: "sans-serif";
  font-weight: 600;
  color: #505050;
  position: relative;
  top: 26px;
  @media (min-width: 649px) {
    position: relative;
    /* top: 26px; */
    font-size: 48px;
  }
`
//title styles end

//page styles start

const ContactPage = styled.div`
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 60px 1rem 0 1rem;
  @media (min-width: 700px) {
    padding: 0px 1rem 0 1rem;
  }
  /* background: indianred; */
`
//page styles end

//form styles start
const Form = styled.form`
  /* background: rgba(255, 255, 255, 0.99); */
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 100%;
  top: 0px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0;
  justify-content: center;
`

const FormInput = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  width: 95%;
  /* background: lime; */
  &:focus-within {
    label {
      display: block;
    }
  }
`

const FormLabel = styled.label`
  display: none;
  /* height: 20px; */
  font-size: 0.75rem;
  color: #333;
  font-family: sans-serif;
  position: absolute;
  left: 0;
  top: 15px;
  right: 1px;
`

const Input = styled.input`
  border: 1px solid ${Colors.MainBlack};
  width: 100%;
  height: 24px;
  position: relative;
  margin-top: 1.75rem;
  border: none;
  border-bottom: 1px solid ${Colors.MainBlack};
  &::placeholder {
    color: #444;
    @media (min-width: 700px) {
      font-size: 20px;
    }
  }
  &:focus {
    border-bottom: 2px solid ${Colors.MainRed};
    outline: #fff;
    &::placeholder {
      color: white;
    }
  }
`

const FormMsg = styled.div`
  width: 100%;
  height: 140px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 1rem;
  &:focus-within {
    label {
      display: block;
      color: #333;
      font-size: 0.9rem;
      font-family: sans-serif;
    }
  }
  @media (min-width: 320px) {
    width: 95%;
  }
`

const FormMsgInput = styled.textarea`
  border: 1px solid ${Colors.MainBlack};
  height: 100%;
  margin-top: 10px;
  &::placeholder {
    color: #444;
    padding: 8px;
  }
  &:focus {
    outline: 2px solid ${Colors.MainRed};
    border: none;
    padding: 5px;
    &::placeholder {
      color: white;
    }
  }
`

const FormMsgLabel = styled.label`
  display: none;
  font-size: 0.75rem;
  color: ${Colors.MainBlack};
  position: absolute;
  left: 0;
  top: -8px;
`
//form styles end

const CTA = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  padding: 20px 0;
  /* @media (min-width: 649px) {
    width: 90%;
    height: 50px;
  } */
`

const CallToActionBtn = styled.button`
  height: 50px;
  width: 100%;

  color: ${Colors.MainWhite};
  background: ${Colors.MainRed};
  border: none;
  font-family: sans-serif;
  font-size: 1.55rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: ${Colors.MainRed};
    background: #fff;
    border: 3px solid ${Colors.MainRed};
    /* border: 2px solid ${Colors.MainRed}; */
  }
  &:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media (min-width: 700px) {
    height: 70px;  
  }
`

const HomeInfo = styled.div`
  width: 100%;
  display: flex;
  padding: 0.75rem;
  >:nth-child(odd) {
    /* background: indianred; */
  }
  @media (min-width: 320px) {
      padding: 0.5rem;
    }
  label {
    width: 60%;
    font-family: sans-serif;
    color: #333;
    align-self: flex-end;
    justify-self: flex-end;
    @media (min-width: 320px) {
      font-size: 16px;
    }
    @media (min-width: 700px) {
      font-size: 20px;
    }
  }

  input,
  select {
    width: 40%;
  }
  input {
    border: none;
    background: #e1e1e1;
    /* border-bottom: 1px solid ${Colors.MainBlack}; */
    &:focus {
      outline: ${Colors.MainRed};
    }
  }

  select {
    border: none;
    background: #e1e1e1;
  }
`
