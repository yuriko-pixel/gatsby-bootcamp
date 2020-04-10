import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Head from '../components/head'

const NotFoundPage = () => (
  <Layout>
    <Head title="404" />
    <SEO title="404: Page Not found" />
    <p><Link to="/">Head to Home</Link></p>
  </Layout>
)

export default NotFoundPage
