import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {

  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/metaverse.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">wagmi</h1>
          <h2>Let's talk, the future is so bright!</h2>
        </div>
        <div className="form-container">
          <form  name="contact"  method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>Your Name or @: <input type="text" name="name" /></label>   
            </p>
              <label>Your Email (optional): <input type="email" name="email" /></label>
              <label>Message: <textarea name="message"></textarea></label>
              <button onClick={() => console.log('thank you!')}  className="submit-btn" type="submit">Submit</button>
          </form>
          </div>
     </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`