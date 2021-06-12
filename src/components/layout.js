import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';



export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <div className="site-widgets">
          <a href="https://twitter.com/tolks1189" target="_blank" rel="noopener noreferrer"><img src="/assets/twitter.png" alt="twitter link" /></a>
          <a href="https://github.com/tolks11" target="_blank" rel="noopener noreferrer"><img  src="/assets/github.png" alt="github link" /></a>
          <img src="/assets/gmail.png" alt="gmail link" />
          <img src="/assets/dandr.png" alt="dandr link" />
        </div>
        <p>&copy; {new Date().getFullYear()} tolks </p>
      </footer>
    </div>
  )
}
