import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/index.module.scss';
import layoutModule from '../styles/layout.module.scss';

const Layout = (props)=> {
  return (
    <div className={layoutModule.container}>
      <div className={layoutModule.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;