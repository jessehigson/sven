import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

const Bio = () => (
  <section className="bio">
    <div className="bio__container">
      <div className="bio__column bio__column--content">
        <p>
          Sven are a four-piece Alternative/Emo band hailing from Portsmouth,
          UK.
        </p>
        <p>
          They combine a mix of melancholy lyrics with powerful guitar led
          melodies to deliver an emotive sound reminiscent of 90’s alt-rock,
          whilst drawing influence from shoegaze and the modern emo revival.
        </p>
        <p>
          Since bursting onto the scene with their self released EP ‘Seventeen’
          in 2017, they have played across the UK with a variety of bands
          including established international acts such as Touché Amoré, Nothing
          and The Dangerous Summer. In late 2018, Sven released a two-track
          titled ‘Disdain’ via Blindreader Records.
        </p>
        <p>
          Post pandemic, Sven are back and ready to reach new heights,
          delivering their long awaited third release ‘Burn’, produced by Ben
          Sansom (Lower Than Atlantis).
        </p>
      </div>

      <div className="bio__column bio__column--image">
        <StaticImage
          src="../images/burn-recording.jpg"
          alt="A promotional shot of the Alternative/Emo band Sven"
          placeholder="blurred"
          className="bio__image"
        />
      </div>
    </div>
  </section>
)

export default Bio
