import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import logo from '../images/logo.jpg'
import { FaTwitter, FaGithub, FaTshirt, FaEnvelopeOpen } from "react-icons/fa";



export default ({ children }) => {
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/"><img className="logo" src={logo} alt="custom logo"/></Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <div className="site-widgets">
          <a href="https://twitter.com/tolks1189" target="_blank" rel="noopener noreferrer"><FaTwitter size="2.25rem" color="#33F0FF"/></a>
          <a href="https://github.com/tolks11" target="_blank" rel="noopener noreferrer"><FaGithub size="2.25rem" color="#FF33FA"/></a>
          <a href="https://dandrpromotions.com" target="_blank" rel="noopener noreferrer"><FaTshirt size="2.25rem" color="#FF9833 "/></a>
          <a href="https://tolks.me/contact" target="_blank" rel="noopener noreferrer"><FaEnvelopeOpen size="2.25rem" /></a>
        </div>
        <p className="year">&copy; {new Date().getFullYear()} tolks </p>
      </footer>
    </div>
  )
}
