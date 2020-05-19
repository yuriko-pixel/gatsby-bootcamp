import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head'
import aboutModule from '../styles/about.module.scss'

const About = ()=> {
  return (
    <Layout>
      <Head title="about" />
        <div className={aboutModule.container}>
          <ol className={aboutModule.flex}>
          <Link to="/profile">
          <div className={aboutModule.iconContainer}>
              <div className={aboutModule.meicon}></div>
              <li>Profile</li>
            </div>
          </Link>
          <Link to="/work">
            <div className={aboutModule.iconContainer}>
              <div className={aboutModule.workicon}></div>
              <li>Work</li>
            </div>
          </Link>
          <Link to="/skill">
          <div className={aboutModule.iconContainer}>
            <div className={aboutModule.skillicon}></div>
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
       
    </Layout>
  )
}

export default About;