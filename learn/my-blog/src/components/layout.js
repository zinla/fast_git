
import React from "react"
import PropTypes from "prop-types"
// import Helmet from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Header from "./header"

const Layout = ({ children }) => {
  return (
   
      <div>
         <main>{children}</main>
         <footer>
          
        </footer>
        <Header />
      </div>
   
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
