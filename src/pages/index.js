import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <h1>deeply interested in</h1>
      </Helmet>
      <HeroHeader/>
      <h2>Recent Posts &darr;</h2>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
{
  site {
    siteMetadata {
      title
      description
    }
  }
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}, limit: 3) {
    edges {
      node {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          date(formatString: "MMM DD, YYYY")
          path
          title
          thumbnail
        }
      }
    }
  }
}
`
