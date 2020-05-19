import React from 'react';
import {Link} from 'gatsby'
import Layout from '../components/layout';
import Head from '../components/head'
import aboutModule from '../styles/about.module.scss'
import workModule from '../styles/work.module.scss'
import cat from '../images/sittingcat.png'
import mockup1 from '../images/mockup1.png'
import mockup2 from '../images/mockup2.png'

const Work = ()=> {
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
              <div className={aboutModule.iconContainer_}>
                <div className={aboutModule.workicon_}></div>
                <li>Work</li>
              </div>
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

          <div className={workModule.container}>
            <div className={workModule.flex}>
              <img src={cat} className={workModule.cat} />
              <div className={workModule.title}>Work</div>
            </div>
            <Link to="/magicalmemnisse" className={workModule.flex}>
              <img src={mockup1} className={workModule.mockup1} />
              <div className={workModule.text1}>Magical Meminisse</div>
            </Link>
            
            <Link to="/pokedex" className={workModule.flex}>
              <div className={workModule.text2}>Pokedex</div>
              <img src={mockup2} className={workModule.mockup2} />
            </Link>

          </div>
        </div>
       
    </Layout>
  )
}

export default Work;