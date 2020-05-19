import React from 'react';
import {Link, useStaticQuery} from 'gatsby';
import headerStyles from '../styles/header.module.scss';
import caticon from '../images/peekingcat.png'

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
    <div className = {headerStyles.headcontainer}>
      <img src={caticon} className={headerStyles.caticon}/>
      <div className={headerStyles.listcontainer}>
        <div className={headerStyles.titlecontainer}>
          <div className={headerStyles.title}>Yuriko Darragh</div>
        </div>
        <ul className={headerStyles.flex}>
          <li ><Link to="/" className="nav-list">Home</Link></li>
          <li><Link to="/about" className="nav-list">About</Link></li>
          <li><Link to="/blog" className="nav-list">Blog</Link></li>
          <li><Link to="/contact" className="nav-list">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;