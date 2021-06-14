import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/cincy-crypto">Cincy Crypto</Link>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)