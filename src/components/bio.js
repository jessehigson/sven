import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

const Bio = () => (
  <section className="bio">
    <div className="bio__container">
      <div className="bio__column bio__column--content">
        <p>
          Sven are an Alternative/Emo band made up of Steve, Jesse, Luke and
          George, they formed in Portsmouth, UK in 2017.
        </p>
        <p>
          Their first EP ‘Seventeen’ was self released in February of 2018 and
          since then they’ve played with established acts including Touché
          Amoré, Nothing and The Dangerous Summer. ‘Seventeen’ has since been
          reissued on cassette through Blindreader Records (UK) and Mourning
          Records (USA).
        </p>
        <p>
          Sven’s newest single ‘Disdain’ was released via Blindreader Records
          (UK) on November 2nd 2018.
        </p>
      </div>

      <div className="bio__column bio__column--image">
        <StaticImage
          src="../images/bio.jpg"
          alt="A promotional shot of the Alternative/Emo band Sven"
          placeholder="blurred"
          className="bio__image"
          sizes="(min-width: 63.75em) 50vw, 100vw"
        />
      </div>
    </div>
  </section>
)

export default Bio
