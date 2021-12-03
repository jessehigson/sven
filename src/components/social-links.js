import * as React from 'react'
import { Link } from 'gatsby'
import FacebookIcon from '../images/icons/facebook.svg'
import InstagramIcon from '../images/icons/instagram.svg'
import TwitterIcon from '../images/icons/twitter.svg'
import SpotifyIcon from '../images/icons/spotify.svg'
import AppleMusicIcon from '../images/icons/apple-music.svg'
import YoutubeIcon from '../images/icons/youtube.svg'
import BandcampIcon from '../images/icons/bandcamp.svg'

const SocialLinks = () => (
  <div className="social-links">
    <ul className="social-links__list">
      <li className="social-links__list-item">
        <Link
          to="https://www.facebook.com/svenmusicuk"
          className="social-links__link"
          rel="noopener"
          target="_blank"
          title="Facebook"
        >
          <FacebookIcon />
          <span className="screenreader-text">Facebook</span>
        </Link>
      </li>

      <li className="social-links__list-item">
        <Link
          to="https://twitter.com/svenmusicuk"
          className="social-links__link"
          rel="noopener"
          target="_blank"
          title="Twitter"
        >
          <TwitterIcon />
          <span className="screenreader-text">Twitter</span>
        </Link>
      </li>

      <li className="social-links__list-item">
        <Link
          to="https://www.instagram.com/svenmusicuk/"
          className="social-links__link"
          rel="noopener"
          target="_blank"
          title="Instagram"
        >
          <InstagramIcon />
          <span className="screenreader-text">Instagram</span>
        </Link>
      </li>

      <li className="social-links__list-item">
        <Link
          to="https://svenuk.bandcamp.com/"
          className="social-links__link"
          rel="noopener"
          target="_blank"
          title="Bandcamp"
        >
          <BandcampIcon />
          <span className="screenreader-text">Bandcamp</span>
        </Link>
      </li>

      <li className="social-links__list-item">
        <Link
          to="https://open.spotify.com/artist/13LJ8aNAUxVSmEHKsaMDaf?si=pu0Eog6kQ_e5U9SXyfouOg"
          className="social-links__link"
          rel="noopener"
          target="_blank"
          title="Spotify"
        >
          <SpotifyIcon />
          <span className="screenreader-text">Spotify</span>
        </Link>
      </li>

      <li className="social-links__list-item">
        <Link
          to="https://music.apple.com/gb/artist/sven/251435926"
          className="social-links__link"
          rel="noopener"
          target="_blank"
          title="Apple Music"
        >
          <AppleMusicIcon />
          <span className="screenreader-text">Apple Music</span>
        </Link>
      </li>

      <li className="social-links__list-item">
        <Link
          to="https://www.youtube.com/channel/UCDPyOqv8uXv9JkBeKblxpNw"
          className="social-links__link"
          rel="noopener"
          target="_blank"
          title="YouTube"
        >
          <YoutubeIcon />
          <span className="screenreader-text">Youtube</span>
        </Link>
      </li>
    </ul>
  </div>
)

export default SocialLinks
