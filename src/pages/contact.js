import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'
import conModule from '../styles/con.module.scss'
import caticon from '../images/catbum.png';

const Contact = ()=> {
  return (
    <Layout>
      <Head title="contact" />
      <form className={conModule.container} method="post" action="https://yuriko-darragh.netlify.app/contact">
        <div className={conModule.flex}>
          <img src={caticon} className={conModule.icon} />
          <div className={conModule.title}>Contact</div>
        </div>
       

        <div className={conModule.box}>
          <div className={conModule.flex}>
            <div className={conModule.namebox}>
              <label for="firstname" className={conModule.namelabel}>First Name</label>
              <input placeholder="Type Your Full Name" type="text" id="firstname" className={conModule.name}/>
            </div>

            <div className={conModule.namebox}>
              <label for="lastname" className={conModule.namelabel}>Last Name</label>
              <input placeholder="Type Your Full Name" type="text" id="lastname" className={conModule.name}/>
            </div>
          </div>
        </div>

        <div className={conModule.box}>
          <div className={conModule.flex}>
            <label for="mail" className={conModule.label}>E-mail Address</label>
            <input placeholder="Type Your E-mail Addres" type="text" id="mail" className={conModule.input_box} />
          </div>
        </div>

        <div className={conModule.box}>
          <label for="name" className={conModule.label1}>Website URL</label>
          <input placeholder="Type Your Website URL (optional)" type="text" id="website" className={conModule.input_box}/>
        </div>

        <div className={conModule.box}>
         <label for="name" className={conModule.label}>Subject</label>
          <input placeholder="Type Subject" type="text" id="subject" className={conModule.input_box}/>
        </div>

        <div className={conModule.box}>
          <label for="name" className={conModule.label}>Message</label>
          <textarea placeholder="Type Your Message Here..." type="text" id="message" className={conModule.input_box2}/>
        </div>
        
        <button type="button" className={conModule.btn}>Send</button>
      </form>
    </Layout>
  )
}

export default Contact;