import React from 'react';
import Layout from '../components/layout';
import expModule from '../styles/exp.module.scss'
import {Link} from 'gatsby'
import aboutModule from '../styles/about.module.scss'
import cat from '../images/sleepingcat.png'

const Experience = ()=> {
  return (
    <Layout>
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
              <div className={aboutModule.iconContainer_}>
                <div className={aboutModule.expicon_}></div>
                <li>Experience</li>
              </div>
              </div>
            </Link>
            </ol>
            
          <div className={expModule.container}>
            <div className={expModule.flex}>
              <img src ={cat} className={expModule.cat} />
              <div class={expModule.title}>Experience</div>
            </div>
           
            <div className={expModule.circle} />
              
            <div className={expModule.flex}>

            <div className={expModule.flex}>
              <div className={expModule.container1}>
                <div className={expModule.border3} />
                  <div className={expModule.title1}>Sophia University</div>
                  <div className={expModule.term}>2010 Apr - 2014 Mar</div>
                  <div className={expModule.detail}>Majored English Listerature</div>
              </div>
              <div className={expModule.border1} />
            </div>

              <div>
                <div className={expModule.border} />
              </div>
              
              <div className={expModule.flex}>
                <div className={expModule.border2} />
                <div className={expModule.container2}>
                  <div className={expModule.border3} />
                  <div　className={expModule.title1}>Mitsubishi UFJ Morgan Stanley</div>
                  <div className={expModule.term}>2014 Apr - 2016 Sep</div>
                  <div className={expModule.detail}>Settlement and Accounting in Derivative Products</div>
                </div>
              </div>

              <div className={expModule.flex}>
                <div className={expModule.container1}>
                  <div className={expModule.border3} />
                    <div　className={expModule.title1}>Barclays Securities Japan</div>
                    <div className={expModule.term}>2016 Sep - 2015 May</div>
                    <div className={expModule.detail}>Settlement and Accounting in Fixed Income Products</div>
                </div>
                <div className={expModule.border1} />
              </div>

              <div>
                <div className={expModule.border} />
              </div>
            
                <div className={expModule.flex}>
                  <div className={expModule.border2} />
                  <div className={expModule.container2}>
                    <div className={expModule.border3} />
                      <div　className={expModule.title1}>Zenith co., ltd</div>
                      <div　className={expModule.term}>2016 Jun - Current</div>
                      <div className={expModule.detail}>Market Data Consulting and System Engineering Consulting</div>
                  </div>
                </div>
            </div>
          </div>
            
      </div>
    </Layout>
  )
}

export default Experience;