import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    
      <SEO title="Home" />
      <div>
        <div className="Hero">
          <div className="Herogroup">
          <h1>Hi,welcome to my blog</h1>
          <p>In this blog I record my lerning process and share with you gays.We will learn python,javascript and data stucture of python and javascript</p>
          <div className="link">
          <Link to="/page-2/">Go to learn data structure</Link>
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
          </div>
          </div>
        </div>
    </div>
  </Layout>
)

export default IndexPage
