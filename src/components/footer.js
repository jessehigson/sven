import * as React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="footer__container">
      <span className="footer__copyright">
        © {siteTitle} {new Date().getFullYear()}
      </span>

      <div className="footer__credit-info">
        Website by{" "}
        <a
          href="https://www.jessehigson.com"
          rel="nofollow noopener"
          target="_blank"
          title="Website by Jesse Higson"
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
