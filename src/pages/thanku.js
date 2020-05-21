import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head'
import thanksm  from '../styles/thanku.module.scss'

const Thanks = ()=> {
  return (
    <Layout>
      <Head title="thanku" />
      <div  className={thanksm.container}>
        <Head title="contact" />
      </div>
    </Layout>
  )
}

export default Thanks;