import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <hr />

    <div className="footer__container">
      <div className="footer__link header-link">
        <Link
          to="https://linktr.ee/svenmusicuk"
          rel="nofollow noopener"
          target="_blank"
          className="header-link__link"
        >
          Linktree
        </Link>
      </div>

      <div className="footer__link header-link">
        <Link to="mailto:svenmusicuk@gmail.com" className="header-link__link">
          Contact
        </Link>
      </div>

      <span className="footer__copyright">
        © {siteTitle} {new Date().getFullYear()}
      </span>

      <div className="footer__credit">
        Website by{' '}
        <a
          href="https://www.jessehigson.com"
          rel="nofollow noopener"
          target="_blank"
          title="Website by Jesse Higson"
          className="footer__credit-link"
        >
          Jesse Higson
        </a>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
