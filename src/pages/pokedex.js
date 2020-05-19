import React from 'react';
import {Link} from 'gatsby'
import Layout from '../components/layout';
import Head from '../components/head'
import aboutModule from '../styles/about.module.scss'
import pokeModule from '../styles/poke.module.scss'
import pokemockup from '../images/poke_chrome.png'
import reacticon from '../images/react.svg'
import jsicon from '../images/javascript.svg'
import styled from 'styled-components'

const FDF84A = styled.div`
  width: 100px;
  height: 30px;
  margin: 20px 20px 0 300px;
  background: #FDF84A;
`;

const EC6755 = styled.div`
  width: 100px;
  height: 30px;
  margin: 20px;
  background: #EC6755;
`;

const EA412C = styled.div`
  width: 100px;
  height: 30px;
  margin: 20px 0;
  background: #EA412C;
`;

const Mockup2 = ()=> {
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

          <div className={pokeModule.container}>
            
          <div className={pokeModule.titlecon}>
              <div className={pokeModule.title}>
                Pokedex
            </div>
          </div>
            <img src={pokemockup} className={pokeModule.mockupimg} />

            <div className={pokeModule.category}>
              <div className={pokeModule.title1}>Overview</div>
              
            </div>
              <div className={pokeModule.content}>
                Pokedex (which is the illusterated reference guide to almost all of the Pokemon) web app which you can find your pokemon and its detailed movements and types. 
              </div>

            <div className={pokeModule.category}>
              <div className={pokeModule.title1}>Framework</div>
            </div>

            <div className={pokeModule.flex}>
              <img src={reacticon} className={pokeModule.icon1} />
              <img src={jsicon} className={pokeModule.icon} />
            </div>

            <div className={pokeModule.category}>
              <div className={pokeModule.title1}>Color Scheme</div>
            </div>

            <div className={pokeModule.flex}>
              
              <FDF84A>&#35;FDF84A</FDF84A>
              <EC6755>&#35;EC6755</EC6755>
              <EA412C>&#35;EA412C</EA412C>
            </div>
            
            {/* <div className={pokeModule.category}>
              <div className={pokeModule.title1}>Font Style</div>
            </div> */}

          </div>
        </div>
   </Layout>         
  )
}

export default Mockup2;