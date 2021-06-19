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
          <form  name="contact" className="form-container" method="POST" data-netlify="true">
            <h3 className="form-text">
              <label>Your Name or @: <input type="text" name="name" /></label>   
            </h3>
            <h3 className="form-text">
              <label>Your Email (optional): <input type="email" name="email" /></label>
            </h3>
            <h3 className="form-text">
              <label>Message: <textarea name="message"></textarea></label>
            </h3>
              <button onClick={() => console.log('thank you!')}  className="submit-btn" type="submit">Submit</button>
          </form>
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