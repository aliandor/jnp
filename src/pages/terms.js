import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

const terms = () =>  (
  <Layout>
  <Wrapper>
    <h2>Legal Notices - Terms of Use</h2> 
    <p>
    Contents/Documents available on this web site
    The contents/documents on this web site are intended for informational use only and may not be altered in any way. Any other use including modification, reproduction, distribution, republication, display, performance or creating derivative works of this website's content is strictly prohibited. 
    </p>

    <h2>Disclaimer</h2>
    <p>
    THE INFORMATION AND MATERIAL CONTAINED ON THIS SITE IS PROVIDED ON AN "AS IS," "AS AVAILABLE" BASIS. THE DOCUMENTS AND RELATED GRAPHICS PUBLISHED ON THIS WEB SITE COULD CONTAIN TECHNICAL INACCURACIES OR TYPOGRAPHICAL ERRORS. JOHN NELSON PLUMBING CO INC MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, REGARDING THE CONTENT INCLUDED ON THIS SITE.
    YOU AGREE THAT JOHN NELSON PLUMBING CO INC WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES, OR DAMAGES FOR LOSS OF PROFITS, REVENUE, DATA OR USE ARISING FROM YOUR ACCESS TO, OR USE OF, THIS WEB SITE AND THE INFORMATION CONTAINED ON THIS SITE. JOHN NELSON PLUMBING CO INC. DOES NOT ENDORSE, OR TAKE RESPONSIBILITY FOR, THE CONTENT OF ANY SITE TO WHICH THIS WEB SITE IS LINKED. THESE LINKS ARE FOR YOUR CONVENIENCE ONLY.
    JOHN NELSON PLUMBING CO INC. RESERVES THE RIGHT TO MAKE CHANGES OR UPDATES TO THIS WEB SITE OR THE PRODUCTS AND PROGRAMS DESCRIBED AT ANY TIME WITHOUT NOTICE.
    </p>

    <h2>Privacy Policy</h2>
    <p>
      This is the web site of John Nelson Plumbing Co. Inc..
    </p>
    <p>
      Our postal address is:	John Nelson Plumbing Co. Inc.
      2520 Foothill Blvd.
      La Crescenta, CA 91214
      We can be reached via e-mail at info@johnnelsonplumbing.com
    </p>
    <p>
      For each visitor to our Web page, our Web server automatically recognizes only the consumer's domain name, but not the e-mail address (where possible).
    </p>
    <p>
      We collect the e-mail addresses of those who communicate with us via e-mail, aggregate information on what pages consumers access or visit, information volunteered by the consumer, such as survey information and/or site registrations.
    </p>
    <p>
      The information we collect is used to improve the content of our Web page, used by us to contact consumers for marketing purposes.
    </p>
    <p>
      With respect to cookies: We do not set any cookies. 
    </p>
    <p>
      If you do not want to receive e-mail from us in the future, please let us know by sending us e-mail at the above address.
    </p>
    <p>
    If you supply us with your postal address on-line you may receive periodic mailings from us with information on new products and services or upcoming events. If you do not wish to receive such mailings, please let us know by calling us at the number provided above, e-mailing us at the above address, writing to us at the above address.
    </p>
    <p>
    Please provide us with your exact name and address. We will be sure your name is removed from the list we share with other organizations 
    </p>
    <p>
    Persons who supply us with their telephone numbers on-line will only receive telephone contact from us with information regarding orders they have placed on-line.
    </p>
    <p>
    Please provide us with your name and phone number. We will be sure your name is removed from the list we share with other organizations 
    With respect to Ad Servers: We do not partner with or have special relationships with any ad server companies. 
    </p>
    <p>
    From time to time, we may use customer information for new, unanticipated uses not previously disclosed in our privacy notice. If our information practices change at some time in the future we will post the policy changes to our Web site to notify you of these changes and provide you with the ability to opt out of these new uses. If you are concerned about how your information is used, you should check back at our Web site periodically.
    </p>
    <p>
    Customers may prevent their information from being used for purposes other than those for which it was originally collected by e-mailing us at the above address.
    </p>    
    <p>
    Upon request we offer visitors the ability to have inaccuracies corrected in contact information.
    </p>
    <p>
    Consumers can have this information corrected by sending us e-mail at the above address, calling us at the above telephone number, writing to us at the above address.
    </p>
    <p>
    With respect to security: We have appropriate security measures in place in our physical facilities to protect against the loss, misuse or alteration of information that we have collected from you at our site.
    </p>
    <p>
    If you feel that this site is not following its stated information policy, you may contact us at the above addresses or phone number, state or local chapters of the Better Business Bureau, The Federal Trade Commission by phone at 202.FTC-HELP (202.382.4357) or electronically at http://www.ftc.gov/ftc/complaint.htm.
    </p>
    <a href='mailto:info@johnnelsonplumbing.com'>
    info@johnnelsonplumbing.com
    </a>
  </Wrapper>
  </Layout>
)

export default terms;

const Wrapper = styled.div`
  height: 100%;
  padding: 0 10px;
  margin-top: 50px;
  text-align: center;
  color: #333;
  h2, p {
    padding-bottom: 1rem;
  }

  h2 {
    color: #9D1B43;
    font-size: 1.25rem;
  }
  a {
    text-decoration: none;
    color: #9D1B43;
  }
  padding-bottom: 1rem;
`;