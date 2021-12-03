import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Banner from '../components/banner'
import TourDates from '../components/tour-dates'
import Bio from '../components/bio'

const IndexPage = () => (
  <Layout>
    <Seo />
    <Banner />
    <Bio />
    {/* <TourDates /> */}
  </Layout>
)

export default IndexPage
