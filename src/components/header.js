import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container">
      <div className="header__link header-link header-link--left">
        <Link
          to="https://linktr.ee/svenmusicuk"
          rel="nofollow noopener"
          target="_blank"
          className="header-link__link"
        >
          Linktree
        </Link>
      </div>

      <div className="header__logo-container">
        <h1 className="header__logo">
          <Link to="/" className="header__logo-link">
            {siteTitle}
          </Link>
        </h1>
      </div>

      <div className="header__link header-link header-link--right">
        <Link to="mailto:svenmusicuk@gmail.com" className="header-link__link">
          Contact
        </Link>
      </div>
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
