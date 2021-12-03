import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

const Merch = () => (
  <section className="merch">
    <div className="merch__container">
      <div className="merch__top">
        <h4 className="merch__title">Merch</h4>

        <Link
          to="https://svenmusic.bigcartel.com/"
          className="banner__link"
          rel="noopener"
          target="_blank"
        >
          Visit store
        </Link>
      </div>

      <div className="merch__list">
        <div className="merch__list-item merch-item">
          <Link
            to="https://svenmusic.bigcartel.com/"
            className="merch-item__link"
            rel="noopener"
            target="_blank"
          >
            <StaticImage
              src="../images/burn-tshirt.jpg"
              alt="An image of a t-shirt containing Sven's 'Burn' artwork"
              placeholder="blurred"
              className="merch-item__image"
            />
          </Link>
        </div>

        <div className="merch__list-item merch-item">
          <Link
            to="https://svenmusic.bigcartel.com/"
            className="merch-item__link"
            rel="noopener"
            target="_blank"
          >
            <StaticImage
              src="../images/burn-tshirt.jpg"
              alt="An image of a t-shirt containing Sven's 'Burn' artwork"
              placeholder="blurred"
              className="merch-item__image"
            />
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default Merch
