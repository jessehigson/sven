import * as React from 'react'
import { Helmet } from 'react-helmet'

const TourDates = () => (
  <section className="tour-dates">
    <div className="tour-dates__container">
      <h4 className="tour-dates__title">Tour Dates</h4>

      <a
        href="https://www.songkick.com/artists/27184"
        class="songkick-widget"
        data-theme="dark"
        data-track-button="on"
        data-detect-style="true"
        data-font-color="#ffffff"
        data-background-color="transparent"
        data-locale="en"
      ></a>

      <Helmet>
        <script src="//widget.songkick.com/27184/widget.js"></script>
      </Helmet>
    </div>
  </section>
)

export default TourDates
