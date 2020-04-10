import React from 'react';
import {Link, useStaticQuery} from 'gatsby';
import footerStyles from './footer.module.scss';

const Footer = ()=> {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }`)

  return (
    <div>
      <footer className={footerStyles.footer}>
        <p>Created by {data.site.siteMetadata.author}, ©︎2020</p>
      </footer>
    </div>
  )
}

export default Footer;