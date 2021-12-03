import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

const Banner = () => (
  <section className="banner">
    <div className="banner__container">
      <h2 className="banner__title">
        <span>Burn</span>
      </h2>
      <h3 className="banner__sub-title">
        <span>Out now</span>
      </h3>
    </div>

    <StaticImage
      src="../images/banner.jpg"
      alt="A promotional shot of the Alternative/Emo band Sven"
      placeholder="blurred"
      className="banner__image"
    />
  </section>
)

export default Banner
