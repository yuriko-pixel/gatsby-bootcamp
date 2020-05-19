import React from 'react';
import {Link} from 'gatsby'
import Layout from '../components/layout';
import Head from '../components/head'
import aboutModule from '../styles/about.module.scss'
import mockup2 from '../images/mocukup2_browser.png'
import reacticon from '../images/react.svg'
import jsicon from '../images/javascript.svg'
import reduxicon from '../images/redux.svg'
import styled from 'styled-components'
import magiModule from '../styles/magical.module.scss'

const DDC19C = styled.div`
  width: 100px;
  height: 30px;
  margin: 20px 20px 0 350px;
  background: #DDC19C;
`;

const A811F13 = styled.div`
  width: 100px;
  height: 30px;
  margin: 20px;
  background: #811F13;
`;


const Mockup1 =()=> {
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

          <div className={magiModule.container}>
            
            <div className={magiModule.titlecon}>
                <div className={magiModule.title}>
                  Magical Meminisse
              </div>
            </div>
              <img src={mockup2} className={magiModule.mockupimg} />
  
              <div className={magiModule.category}>
                <div className={magiModule.title1}>Overview</div>
                
              </div>
                <div className={magiModule.content}>
                  Pokedex (which is the illusterated reference guide to almost all of the Pokemon) web app which you can find your pokemon and its detailed movements and types. 
                </div>
  
              <div className={magiModule.category}>
                <div className={magiModule.title1}>Framework</div>
              </div>
  
              <div className={magiModule.flex}>
                <img src={reacticon} className={magiModule.icon1} />
                <img src={jsicon} className={magiModule.icon} />
                <img src={reduxicon} className={magiModule.icon} />
              </div>
  
              <div className={magiModule.category}>
                <div className={magiModule.title1}>Color Scheme</div>
              </div>
  
              <div className={magiModule.flex}>
                
                <DDC19C>&#35;DDC19C</DDC19C>
                <A811F13>&#35;811F13</A811F13>
              </div>
              
              {/* <div className={magiModule.category}>
                <div className={magiModule.title1}>Font Style</div>
              </div> */}
  
            </div>
          </div>
    </Layout>
  )
}

export default Mockup1