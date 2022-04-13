import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import './index.css'
import Footer from '../components/Footer';

const Layout = ({ children, data }) => (
  <div>
  
    {children()}
  
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout



// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//         description
//         keywords
//       }
//     }
//   //   allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
//   //     edges {
//   //       node {
//   //         title
//   //         url
//   //         createdAt
//   //       }
//   //     }
//   //   }
//   // }
// `
