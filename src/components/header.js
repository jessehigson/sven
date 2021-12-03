import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import SocialLinks from './social-links'
import ContactLink from './contact-link'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container">
      <SocialLinks />

      <div className="header__logo-container">
        <h1 className="header__logo">
          <Link to="/" className="header__logo-link">
            {siteTitle}
          </Link>
        </h1>
      </div>

      <ContactLink />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
