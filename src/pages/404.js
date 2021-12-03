import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />

    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404 – Not Found</h1>
        <p className="not-found__content">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
