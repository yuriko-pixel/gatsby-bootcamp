import React from 'react';
import {Link, useStaticQuery} from 'gatsby';
import '../styles/header.scss';

const Header = ()=> {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }`)

  return (
    <div className = "header">
      <h1 className="header"><Link to="/">{data.site.siteMetadata.title}</Link></h1>
      <ul className="nav-ul">
        <li ><Link to="/" className="nav-list">Home</Link></li>
        <li><Link to="/about" className="nav-list">About</Link></li>
        <li><Link to="/blog" className="nav-list">Blog</Link></li>
        <li><Link to="/contact" className="nav-list">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header;