import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Navigation from './header/Navigation'
import Footer from './footer'
import './styling/reset.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'John Nelson Plumbing Website' },
            { name: 'keywords', content: 'Copper Repipe For Less, Copper Repipe, Plumber, Plumbing, La Cresenta, CA plumber' },
            { name: 'theme-color', content: '#9D1B43'}
          ]}>
          <html lang="en"/>
        </Helmet>
        <Navigation siteTitle={data.site.siteMetadata.title}/>
        <div>
          {children}
        </div>
        <Footer siteTitle={data.site.siteMetadata.title}/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
