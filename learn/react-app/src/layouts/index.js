import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import Footer from '../components/Footer';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      
    />
    <Header />
    {children()}
    <Footer data={data}>
      开发者：alen_andry  Email:dnrops@outlook.com <a href="alenandry.github.io">Github</a>
    </Footer>
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
