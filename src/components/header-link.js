import * as React from 'react'
import { Link } from 'gatsby'

const HeaderLink = (to, label) => (
  <div className="header-link">
    {to && (
      <Link to={to} className="header-link__link">
        {label && label}
      </Link>
    )}
  </div>
)

export default HeaderLink
