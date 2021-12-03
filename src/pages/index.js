import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Banner from '../components/banner'
import TourDates from '../components/tour-dates'
import Bio from '../components/bio'
import Merch from '../components/merch'

const IndexPage = () => (
  <Layout>
    <Seo />
    <Banner />
    <Bio />
    <TourDates />
    <Merch />
  </Layout>
)

export default IndexPage
