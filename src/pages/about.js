import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head'

const About = ()=> {
  return (
    <Layout>
      <Head title="about" />
      <h1>This is about me page.</h1>
      <p>Some texts.</p>
      <p>Need a developper? <Link to ="/contact">Contact Me</Link></p>
    </Layout>
  )
}

export default About;