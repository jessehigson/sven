import { StaticImage } from 'gatsby-plugin-image'
import React, { createRef } from 'react'
import { bind, debounce } from 'decko'

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
            <span>Out now</span>
          </h3>
        </div>

        <div className="banner__image-container">
          <figure
            className="banner__image"
            style={{ transform: `translateY(${position * 30}%)` }}
          >
            <StaticImage
              src="../images/banner.jpg"
              alt="A promotional shot of the Alternative/Emo band Sven"
              placeholder="blurred"
              sizes="100vw"
            />
          </figure>
        </div>
      </section>
    )
  }
}
