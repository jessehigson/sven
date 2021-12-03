import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Banner from '../components/banner'
import TourDates from '../components/tour-dates'

const IndexPage = () => (
  <Layout>
    <Seo />
    <Banner />
    <TourDates />
  </Layout>
)

export default IndexPage
