import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

const TourDates = () => (
  <section className="tour-dates">
    <div className="tour-dates__container">
      <a
        href="https://www.songkick.com/artists/27184"
        class="songkick-widget"
        data-theme="dark"
        data-track-button="on"
        data-detect-style="true"
        data-font-color="#FFFFFF"
        data-background-color="transparent"
        data-locale="en"
      >
        Tour dates
      </a>
      <script src="//widget.songkick.com/27184/widget.js"></script>
    </div>
  </section>
)

export default TourDates
