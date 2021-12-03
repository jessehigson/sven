import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__container">
      <div className="header__social-links social-links">
        <ul className="social-links__list">
          <li className="social-links__list-item">
            <Link
              to="https://www.facebook.com/svenmusicuk"
              className="social-links__link"
              rel="noopener"
              target="_blank"
            >
              Facebook
            </Link>
          </li>

          <li className="social-links__list-item">
            <Link
              to="https://twitter.com/svenmusicuk"
              className="social-links__link"
              rel="noopener"
              target="_blank"
            >
              Twitter
            </Link>
          </li>

          <li className="social-links__list-item">
            <Link
              to="https://www.instagram.com/svenmusicuk/"
              className="social-links__link"
              rel="noopener"
              target="_blank"
            >
              Instagram
            </Link>
          </li>

          <li className="social-links__list-item">
            <Link
              to="https://svenuk.bandcamp.com/"
              className="social-links__link"
              rel="noopener"
              target="_blank"
            >
              Bandcamp
            </Link>
          </li>
        </ul>
      </div>

      <div className="header__logo-container">
        <h1 class="header__logo">
          <Link to="/" className="header__logo-link">
            {siteTitle}
          </Link>
        </h1>
      </div>

      <div className="header__contact">
        <Link
          to="mailto:svenmusicuk@gmail.com"
          className="header__contact-link"
        >
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
