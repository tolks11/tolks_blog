import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
        </div>
    )
}

export default Header
