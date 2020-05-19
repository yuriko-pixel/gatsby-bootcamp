import React from "react"
import Layout from "../components/layout";
import Head from '../components/head';
import aboutModule from '../styles/about.module.scss'
import {Link} from 'gatsby'
import cat from '../images/whitecat.png'
import proModule from '../styles/profile.module.scss'


class Profile extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="about" />
          <div className={aboutModule.container}>
            <ol className={aboutModule.flex}>
            <Link to="/profile">
            <div className={aboutModule.iconContainer}>
              <div className={aboutModule.iconContainer_}>
                <div className={aboutModule.meicon_}></div>
                <li>Profile</li>
              </div>
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
        
          <div className={proModule.container2}>
          <div className={proModule.container3}>
            <div className={proModule.flex1}>
              <img src={cat} className={proModule.cat}/>
              <div className={proModule.title}>Yuriko Darragh</div>
            </div>
            <div className={proModule.content}>
              Yuriko is enthsiast, multitalented Full-Stuck Developper based in Tokyo.
              <br />
              <br />
              Find me on...
              </div>
                <div className={proModule.iconcontainer}>
                  <a className={proModule.twitter_icon} href="https://twitter.com">
                    <i className="fa fa-twitter fa-2x fa-fw"></i>
                    </a>
                  <a className={proModule.github_icon} href="https://twitter.com">
                    <i className="fa fa-github fa-2x fa-fw"></i>
                  </a>
                  <a className={proModule.linkedin_icon} href="https://twitter.com">
                    <i className="fa fa-linkedin fa-2x fa-fw"></i>
                  </a>
                </div>
              </div>
       </div>
       </div>
      </Layout>
    )
  }
}
export default Profile;