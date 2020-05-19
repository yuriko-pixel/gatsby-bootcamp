import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head'
import aboutModule from '../styles/about.module.scss'
import skillModule from '../styles/skill.module.scss'
import witchcat from '../images/witchcat.png'
import reduxicon from '../images/redux.svg'
import reacticon from '../images/react.svg'
import javaicon from '../images/java.svg'
import postgresqlicon from '../images/postgresql.svg'
import oracleicon from '../images/oracle.svg'
import jsicon from '../images/javascript.svg'
import nekoicon from '../images/cat2.png'
import Menu from '../components/menu'

const Skill = ()=> {
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
            <div className={aboutModule.iconContainer_}>
              <div className={aboutModule.skillicon_}></div>
              <li>Skill</li>
            </div>
          </div>
          </Link>
          <Link to="/experience">
          <div className={aboutModule.iconContainer}>
              <div className={aboutModule.expicon}></div>
              <li>Experience</li>
            </div>
          </Link>
          </ol>

          <div className={skillModule.container}>
            <div className={skillModule.flex}>
              <img src={nekoicon} className={skillModule.neko} />
              <div className={skillModule.title}>Skill Set</div>
            </div>
              <div className={skillModule.flex}>
                <div className={skillModule.iconContainer}>
                <div className={skillModule.flex}>
                  <img src={reduxicon} className={skillModule.skillicon} />
                  <div className={skillModule.icontitle}>Redux</div>
                  </div>
                </div>
              
                <div className={skillModule.iconContainer}>
                <div className={skillModule.flex}>
                  <img src={reacticon} className={skillModule.skillicon} />
                  <div className={skillModule.icontitle}>React</div>
                </div>
                </div>

                <div className={skillModule.iconContainer}>
                  <div className={skillModule.flex}>
                    <img src={jsicon} className={skillModule.skillicon} />
                    <div className={skillModule.icontitle}>Javascript</div>
                  </div>
                </div>

                <div className={skillModule.iconContainer}>
                <div className={skillModule.flex}>
                  <img src={javaicon} className={skillModule.skillicon} />
                  <div className={skillModule.icontitle}>Java</div>
                </div>
                </div>
                
                <div className={skillModule.iconContainer}>
                  <div className={skillModule.flex}>
                    <img src={postgresqlicon} className={skillModule.skillicon} />
                    <div className={skillModule.icontitle}>Postgre SQL</div>
                  </div>
                </div>

                <div className={skillModule.iconContainer}>
                  <div className={skillModule.flex}>
                    <img src={oracleicon} className={skillModule.skillicon} />
                    <div className={skillModule.icontitle}>Oracle SQL</div>
                  </div>
                </div>

              </div>
          </div>
        </div>
    </Layout>
  )
}

export default Skill;