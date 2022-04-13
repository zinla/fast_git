import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './page_2.css'
import Footer from '../components/Footer';

const Layout = ({ children, data }) => (
  <div>
 
    <Header />
    {children()}
    <Footer data={data}>
      开发react,Email:dnrops@163.com<a href="https://alenandry.github.io">邮箱</a> 可以跟我联系
    </Footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
