import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project'
import Gallery from '../components/gallery'
import Portfolio from '../components/portfolio'

const IndexPage = ({ data }) => (
  <Layout colour="blue">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome</h1>
    <p>
      I'm a penultimate year CS student at the University of St Andrews in
      Scotland, interning as a Full Stack developer at{' '}
      <a
        target="_blank"
        rel="noopener"
        href="https://transferwise.com"
        className="transferwise"
      >
        TransferWise
      </a>{' '}
      this summer.
    </p>
    <h2>Latest Projects</h2>
    <Portfolio projects={data.projects} />
    <h2>Latest Photos</h2>
    <Gallery photos={data.photos} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    photos: allContentfulAsset(limit: 4) {
      edges {
        node {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
          title
        }
      }
    }
    projects: allContentfulProject(
      limit: 2
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
          description
          link
          event
          award
          issuer
          competition
        }
      }
    }
  }
`
