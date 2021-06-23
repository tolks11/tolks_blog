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
        <meta name="description" content={site.siteMetadata.description} />
        <h3>Hi, I'm tolks!</h3>
        <p>deeply interested in crypto assets and blockchain technology and their future impact, so expect periodic blogs about that here.</p>
        <p>working with python, react, javascript and writing smart contracts with solidity and hardhat.</p>
        <p>you can follow me and reach out on twitter <a className="twit-link" href="https://twitter.com/tolks1189" target="_blank" rel="noopener noreferrer" >here</a>, or send an email via the contact page!</p>
        <p>please don't hesitant to reach out and tell me how stupid I am or to start a geniune conversation!</p>
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
query indexPageQuery {
  site {
    siteMetadata {
      title
      description
    }
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
