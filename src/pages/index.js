import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"

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
      <Helmet >
      <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-207772477-2"></script>
      </head>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div className="main">
      <h1>Hi, I'm tolks!</h1>
        <p>deeply interested in all things crypto, web3</p>
        <p>python, react, javascript and built <a calassName="dandr-link" href="https://dandrpromotions.com" target = "_blank" rel="noopener noreferrer">D&R</a></p>
        <p>follow me and reach out on <a className="twit-link" href="https://twitter.com/tolks1189" target="_blank" rel="noopener noreferrer" >twitter</a>, or send an email via the contact page!</p>
        <p>please don't hesitant to reach out and start a genuine conversation or tell me how stupid I am!</p>
      <button href="https://tolks.me/contact" className="button -primary">Get in touch! &rarr;</button> 
      </div>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] })  {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`
