import * as React from 'react'
import { Link } from 'gatsby'

const ContactLink = () => (
  <div className="contact-link">
    <Link to="mailto:svenmusicuk@gmail.com" className="contact-link__link">
      Contact
    </Link>
  </div>
)

export default ContactLink
