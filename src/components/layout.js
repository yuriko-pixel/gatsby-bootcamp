import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/index.scss';
import '../styles/layout.scss';

const Layout = (props)=> {
  return (
    <div className="container">
      <div className="content">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;