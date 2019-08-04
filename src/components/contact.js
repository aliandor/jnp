import React, {Fragment} from 'react'
import styled from 'styled-components'
import Colors from './styling/styles'

const Contact = () => (
  <Fragment>
  <ContactPage>
    <Title>Quickly Contact us Here.</Title>
    <Form name="contact-quick" method="post" data-netlify="true">
    <input type='hidden' name='form-name' value='contact-quick' />
      <Name>
        <FormLabel for='name'>Name</FormLabel>
        <Input id='name' name='name' placeholder='Name' required></Input>
      </Name>
      <Phone>
        <FormLabel for='phone'>Phone eg. 818-111-2222</FormLabel>
        <Input name='phone' id='phone' placeholder='Phone eg. 818-111-2222' pattern='\d{3}-\d{3}-\d{4}' required></Input>
      </Phone>
      <City>
        <FormLabel for='City'>City</FormLabel>
        <Input id='city' name='city' placeholder='City' required></Input>
      </City>
      <Email>
        <FormLabel for='e-mail'>E-mail</FormLabel>
        <Input id='email' name='email' placeholder='E-mail' required></Input>
      </Email>
      <FormMsg>
        <FormMsgLabel for='msg'>Message</FormMsgLabel>
        <FormMsgInput id='msg' name='message' placeholder='Message...' required></FormMsgInput>
      </FormMsg>
      <button type='submit'>Send</button>
    </Form>
  </ContactPage>
  </Fragment>
)

export default Contact

const ContactPage = styled.div`
  width: 100vw;
  padding: 20px 0;
  display: grid;
  grid-template-columns: 
    [left-gutter] 16px 
    [body] 1fr 
    [right-gutter] 16px;
  grid-template-rows: 
    [title] 70px 
    [body] 1fr;
  @media(min-width: 700px) {
    max-width: 450px;
  }
  @media(min-width: 1200px) {
    max-width: 600px;
  }
`;

const Title = styled.h2`
  grid-column: body;
  transform: translateY(40px);
  font-size: 1.5rem;
  opacity: 0.8;
  font-family: 'sans-serif';
`;
  
const Form = styled.form`
  width: 100%;
  grid-column: body;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 
    [name] 1fr 
    [phone] 1fr
    [city] 1fr 
    [email] 1fr 
    [msg] 3fr 
    [btn] 1fr;
  grid-row-gap: 0.5rem;
  button {
    grid-row: btn;
    padding: 0.25rem;
    border: none;
    background: ${Colors.MainRed};
    color: ${Colors.MainWhite};
    font-size: 2rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
    }
    &:active {
    }
  }
`;

const FormInput = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  &:focus-within {
    label { opacity: 1; }
  }

`;
const Name = styled(FormInput)`
  grid-row: name;
`;
const Phone = styled(FormInput)`
  grid-row: phone;
`;
const City = styled(FormInput)`
  grid-row: city;
`;
const Email = styled(FormInput)`
  grid-row: email;
`;

const FormLabel = styled.label`
  opacity: 0;
  transform: translateY(5px);
  font-family: 'sans-serif';
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${Colors.MainRed};
  &::placeholder {
    color: #444;
  }
  &:focus {
    border-bottom: 2px solid ${Colors.MainRed};
    outline: #fff;
    &::placeholder {
      color: white;
    }
  }
`;

const FormMsg = styled.div`
  grid-row: msg;
  padding-bottom: 1.5rem;
  &:focus-within {
    label {
      opacity: 1;
      color: #333;
      font-size: 1rem;
      font-family: sans-serif;
    }
  } 
`;

const FormMsgInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid ${Colors.MainRed};
  &::placeholder {
    padding: 2px;
    color: #444;
  }
  &:focus {
    outline: 2px solid ${Colors.MainRed};
    border: none;
    padding: 5px;
    &::placeholder {
      color: white;
    }
  }
`;

const FormMsgLabel = styled.label`
  opacity: 0;
`;