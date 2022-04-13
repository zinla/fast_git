import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import StripeCheckout from 'react-stripe-checkout'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  handlePurchase = (token) => {
    const amount = 5000
    const description = "My awesome product"

    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount
    }

    fetch('http://localhost:9000/stripe-charge', {
      method: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link className="rotate_logo" to="/"><img src='/images/logo-designcode.svg' width="30" /></Link>
          <Link to="/ds">Data Structure </Link>
          <Link to="/python">Python</Link>
          <Link to="/web">Web Front-end</Link>
          


          {/* <StripeCheckout
            amount={ 5000 }
            image="/images/logo-designcode.svg"
            token={this.handlePurchase}
            stripeKey={'pk_test_4VuxMZhOiYXJlElaTf3qjAXh'}
            >
            <button>登录</button>
          </StripeCheckout> */}
        </div>
      </div>
    )
  }
}

export default Header
