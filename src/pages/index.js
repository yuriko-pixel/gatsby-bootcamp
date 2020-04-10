import React from "react"
import Layout from "../components/layout";
import Head from '../components/head';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="home" />
        <p>Hello</p>
      </Layout>
    )
  }
}
export default Home;
