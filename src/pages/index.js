import React from "react"
import Layout from "../components/layout";
import Head from '../components/head';
import indexModule from '../styles/index.module.scss'
import propic from '../images/propic.png'

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="home" />
        <div className={indexModule.container}>
          <div className={indexModule.flex}>
            <img src={propic} className={indexModule.propic}/>
            <div className={indexModule.procomment}>
              <div className={indexModule.title}>Welcome to my website!</div>
                <br />
              <div className={indexModule.comment}>
                Multitalented front-end developper Yuriko's Portfolio page.
                </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default Home;
