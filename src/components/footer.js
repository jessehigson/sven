import * as React from 'react'
import PropTypes from 'prop-types'
import SocialLinks from './social-links'
import ContactLink from './contact-link'

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <hr />

    <div className="footer__container">
      <ContactLink />

      <SocialLinks />

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
