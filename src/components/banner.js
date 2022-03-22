import { StaticImage } from 'gatsby-plugin-image'
import React, { createRef } from 'react'
import { bind } from 'decko'
import { Link } from 'gatsby'

export default class Banner extends React.Component {
  /**
   * @type {object}
   */
  state = {
    position: 0,
  }

  containerRef = createRef()

  componentDidMount() {
    window.addEventListener('scroll', this.setScrollPosition, {
      passive: false,
    })
    this.setScrollPosition()
  }

  @bind
  setScrollPosition() {
    if (!this.containerRef) {
      return
    }

    requestAnimationFrame(() => {
      const bounds = this.containerRef.getBoundingClientRect()
      const position = bounds.top / window.innerHeight
      this.setState({
        position,
      })
    })
  }

  @bind
  setContainerRef(ref) {
    this.containerRef = ref
  }

  @bind
  render() {
    const { position } = this.state

    return (
      <section className="banner" ref={this.setContainerRef}>
        <div className="banner__container">
          <h2 className="banner__title">
            <span>Burn</span>
          </h2>

          <h3 className="banner__sub-title">
            <span>Out Now</span>
          </h3>

          <Link
            to="https://ditto.fm/burn-sven"
            className="banner__link"
            rel="noopener"
            target="_blank"
          >
            <span aria-hidden="true">Stream</span>
            <span className="screenreader-text">
              Stream the Alternative/Emo band Sven's latest single 'Burn'
            </span>
          </Link>

          <Link
            to="https://youtu.be/fk2j5e6vyZY"
            className="banner__link"
            rel="noopener"
            target="_blank"
          >
            <span aria-hidden="true">Watch Video</span>
            <span className="screenreader-text">
              Watch the video for the Alternative/Emo band Sven's latest single
              'Burn'
            </span>
          </Link>
        </div>

        <div className="banner__image-container">
          <figure
            className="banner__image"
            style={{ transform: `translateY(${position * 20}%)` }}
          >
            <StaticImage
              src="../images/banner.jpg"
              alt="A promotional shot of the Alternative/Emo band Sven"
              placeholder="blurred"
              sizes="(min-width: 45em) 120vw, 200vw"
            />
          </figure>
        </div>
      </section>
    )
  }
}
