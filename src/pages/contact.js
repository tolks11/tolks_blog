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
          <p>Let's talk, the future is so bright ! &rarr;</p>
        </div>
        {/* <div className="text-container">
            <p>toelkeerik@gmail.com</p>
            <p>@tolks1189</p> <FaTwitter/>
        </div> */}
        <div>
          {/* <form className="form-container" action="https://sendmail.w3layouts.com/SubmitContactForm" method="post">
            <div>
              <label htmlFor="w3lName">Name</label>
              <input type="text" name="w3lName" id="w3lName"/>
            </div>
            <div>
              <label htmlFor="w3lSender">Email</label>
              <input type="email" name="w3lSender" id="w3lSender"/>
            </div>
            <div>
              <label htmlFor="w3lSubject">Subject</label>
              <input type="text" name="w3lSubject" id="w3lSubject"/>
            </div>
            <div>
              <label htmlFor="w3lMessage">Message</label>
              <textarea name="w3lMessage" id="w3lMessage"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form> */}
<form className="form-container" name="responses" method="POST" data-netlify="true" netlify>
  <h3 className="form-text">
    <label>Your Name: <input type="text" name="name" /></label>   
  </h3>
  <h3 className="form-text">
    <label>Your Email: <input type="email" name="email" /></label>
  </h3>
  
  <h3 className="form-text">
    <label>Message: <textarea name="message"></textarea></label>
  </h3>
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