import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'
import conModule from '../styles/con.module.scss'
import caticon from '../images/catbum.png';
import {useState} from 'react'
import axios from 'axios'
import MaterialIcon from 'material-icons-react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const gglsiteKey = process.env.gglSiteKey;

const Contact = () => {

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();

    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: process.env.GETFORM_URL,
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, 
        (<div className={conModule.messagecon}>
          <div className={conModule.success}>
            <i className="fa fa-check-circle success"></i>
          </div>
            <span className={conModule.sucmessage}>Message sent successfully</span>
            <span className={conModule.sucmessage}>I will reply as soon as possible.</span>
        </div>), 
        form);
        
      })
      .catch(r => {
        handleServerResponse(false, 
          (<div className={conModule.messagecon}>
            <MaterialIcon icon="error" color='#dc143c' size={100} />
            <div className={conModule.errmsg}>Opps! Something went wrong.</div>
            <div className={conModule.errmsg}>Please try again.</div>
          </div>), 
          form);
        
      });
  };

  return (
  <GoogleReCaptchaProvider
    reCaptchaKey={gglsiteKey}
    useRecaptchaNet="true"
  >
    <Layout>
      <Head title="contact" />
      <div className={conModule.container}>
        <div className={conModule.flex}>
          <img src={caticon} className={conModule.icon} />
          <div className={conModule.title}>Contact</div>
        </div>
        <form onSubmit={handleOnSubmit}>
          <div className={conModule.box}>
            <div className={conModule.flex}>
              <div className={conModule.namebox}>
                <label for="firstname" className={conModule.label}>First Name</label>
                <input type="text" name="name" className={conModule.input_box} id="firstname" placeholder="Enter your name" required="required" />
              </div>
              <div className={conModule.namebox}>
                <label for="lastname" className={conModule.label}>Last Name</label>
                <input type="text" name="name" className={conModule.input_box} id="lastname" placeholder="Enter your name" required="required"/>
              </div>
            </div>
          </div>

          <div className={conModule.box}>
            <div className={conModule.flex}>
                <label for="emailtype" required="required" className={conModule.label}>Email address</label>
                <input type="email" name="email" className={conModule.input_box} id="emailtype" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div> 
          </div>
            
          <div className={conModule.box}>
            <label for="website" className={conModule.label1}>Website URL</label>
            <input placeholder="Type Your Website URL (optional)" type="text" id="website" className={conModule.input_box}/>
          </div>

          <div className={conModule.box}>
            <label for="subject" className={conModule.label}>Subject</label>
            <input placeholder="Type Subject" type="text" id="subject" className={conModule.input_box} />
          </div>

          <div className={conModule.box}>
            <label for="message" className={conModule.label}>Message</label>
            <textarea placeholder="Type Your Message Here..." type="text" id="message" className={conModule.input_box2}/>
          </div>

          <button type="submit" className={conModule.btn} disabled={serverState.submitting}>
            Submit
          </button>
            {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
                </p>
            )}
            </form>
          </div>
        </Layout>
      </GoogleReCaptchaProvider>
  );
};

export default Contact;