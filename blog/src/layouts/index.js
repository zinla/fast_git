import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../styles/common.css';

const Layout = ({ children, data }) => (
  <div>
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout


