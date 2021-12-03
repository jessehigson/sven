import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Banner from '../components/banner'

const IndexPage = () => (
  <Layout>
    <Seo />
    <Banner />
  </Layout>
)

export default IndexPage
