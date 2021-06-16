import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostLink from "../components/post-link"

const Blogs = ({
    data: {
        site, allMarkdownRemark: {edges}
    }
    }) => {
    const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
        
    return (
        <Layout>
            <h2 className="blogs">ALL POSTS</h2>
            <div className="grids">
                {Posts}
            </div>
        </Layout>
    )
}

export default Blogs
export const query = graphql`
{
  site {
    siteMetadata {
      title
      description
    }
  }
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
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
