import React from 'react'
import Head from '../components/head'
import aboutModule from '../styles/about.module.scss'
import {Link} from 'gatsby';

const Menu = ()=> {
  return (
    <div >
      <ol className={aboutModule.flex}>
      <Link to="/profile">
        <div className={aboutModule.iconContainer}>
          <div className={aboutModule.meicon}></div>
          <li className={aboutModule.title}>Profile</li>
        </div>
      </Link>
      <Link to="/work">
        <div className={aboutModule.iconContainer}>
          <div className={aboutModule.workicon}></div>
          <li>Work</li>
        </div>
      </Link>
      <Link to="/skill">
        <div className={aboutModule.iconContainer_}>
          <div className={aboutModule.skillicon_}></div>
          <li>Skill</li>
        </div>
      </Link>
      <Link to="/experience">
        <div className={aboutModule.iconContainer}>
          <div className={aboutModule.expicon}></div>
          <li>Experience</li>
        </div>
      </Link>
      </ol>
    </div>
  )
}

export default Menu;