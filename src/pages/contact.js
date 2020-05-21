import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'
import conModule from '../styles/con.module.scss'
import caticon from '../images/catbum.png';
import {useState} from 'react'



// const Contact = ()=> {
//   const [fname, setfName] = useState('');
//   const [lname, setlName] = useState('');
//   const [email, setEmail] = useState('');
//   const [website, setWebsite] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit= (e)=> {
//     let data = 
//       {firstname: fname,
//        lastname: lname,
//        Email: email,
//        website,
//        subject,
//        message
//       };
      
//       const encode = (data) => {
//         return Object.keys(data)
//             .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//             .join("&");
//       }

//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({"form-name": 'Yuriko'})
//     })
//       .then(res=>{if(res.ok){console.log("success")}})
//       .catch(error => alert(error));

//     e.preventDefault();
//      setfName('');
//     setlName('');
//     setEmail('');
//     setWebsite('');
//     setSubject('');
//     setMessage('');
//   }

//   return (
    {/* <Layout>
      <Head title="contact" />
      <form name="contactf" className={conModule.container} method="post" id="contactform" data-netlify="true">
        <input type="hidden" name="form-name" value="contactf" />
        <div className={conModule.flex}>
          <img src={caticon} className={conModule.icon} />
          <div className={conModule.title}>Contact</div>
        </div>
        <div className={conModule.box}>
          <div className={conModule.flex}>
            <div className={conModule.namebox}>
              <label for="firstname" className={conModule.namelabel}>First Name</label>
              <input placeholder="Type Your Full Name" type="text" id="firstname" className={conModule.name} id="fname" 
                onChange={(e) => setfName(e.target.value)}/>
            </div>
            <div className={conModule.namebox}>
              <label for="lastname" className={conModule.namelabel}>Last Name</label>
              <input placeholder="Type Your Full Name" type="text" id="lastname" className={conModule.name}
                onChange={(e) => setlName(e.target.value)}/>
            </div>
          </div>
        </div>

        <div className={conModule.box}>
          <div className={conModule.flex}>
            <label for="mail" className={conModule.label}>E-mail Address</label>
            <input placeholder="Type Your E-mail Addres" type="text" id="mail" className={conModule.input_box} 
              onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </div>

        <div className={conModule.box}>
          <label for="name" className={conModule.label1}>Website URL</label>
          <input placeholder="Type Your Website URL (optional)" type="text" id="website" className={conModule.input_box}
            onChange={(e) => setWebsite(e.target.value)}/>
        </div>

        <div className={conModule.box}>
         <label for="name" className={conModule.label}>Subject</label>
          <input placeholder="Type Subject" type="text" id="subject" className={conModule.input_box}
            onChange={(e) => setSubject(e.target.value)}/>
        </div>

        <div className={conModule.box}>
          <label for="name" className={conModule.label}>Message</label>
          <textarea placeholder="Type Your Message Here..." type="text" id="message" className={conModule.input_box2}
            onChange={(e) => setMessage(e.target.value)}/>
        </div>
        
        <button type="button" className={conModule.btn} onClick={e=>handleSubmit(e)}>Send</button>
      </form>
    </Layout> */}
//   )
// }

// export default Contact;

const Contact = ()=> {


    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact" })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });
    

    return (
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" value={message} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit" onClick={e=> handleSubmit(e)}>Send</button>
          </p>
        </form>
      );
    
}

{/* <Layout>
      <Head title="contact" />
      <form name="contactf" className={conModule.container} method="post" id="contactform" data-netlify="true">
        <input type="hidden" name="form-name" value="contactf" />
        <div className={conModule.flex}>
          <img src={caticon} className={conModule.icon} />
          <div className={conModule.title}>Contact</div>
        </div>
        <div className={conModule.box}>
          <div className={conModule.flex}>
            <div className={conModule.namebox}>
              <label for="firstname" className={conModule.namelabel}>First Name</label>
              <input placeholder="Type Your Full Name" type="text" id="firstname" className={conModule.name} id="fname" 
                onChange={(e) => setfName(e.target.value)}/>
            </div>
            <div className={conModule.namebox}>
              <label for="lastname" className={conModule.namelabel}>Last Name</label>
              <input placeholder="Type Your Full Name" type="text" id="lastname" className={conModule.name}
                onChange={(e) => setlName(e.target.value)}/>
            </div>
          </div>
        </div>

        <div className={conModule.box}>
          <div className={conModule.flex}>
            <label for="mail" className={conModule.label}>E-mail Address</label>
            <input placeholder="Type Your E-mail Addres" type="text" id="mail" className={conModule.input_box} 
              onChange={(e) => setEmail(e.target.value)}/>
          </div>
        </div>

        <div className={conModule.box}>
          <label for="name" className={conModule.label1}>Website URL</label>
          <input placeholder="Type Your Website URL (optional)" type="text" id="website" className={conModule.input_box}
            onChange={(e) => setWebsite(e.target.value)}/>
        </div>

        <div className={conModule.box}>
         <label for="name" className={conModule.label}>Subject</label>
          <input placeholder="Type Subject" type="text" id="subject" className={conModule.input_box}
            onChange={(e) => setSubject(e.target.value)}/>
        </div>

        <div className={conModule.box}>
          <label for="name" className={conModule.label}>Message</label>
          <textarea placeholder="Type Your Message Here..." type="text" id="message" className={conModule.input_box2}
            onChange={(e) => setMessage(e.target.value)}/>
        </div>
        
        <button type="button" className={conModule.btn} onClick={e=>handleSubmit(e)}>Send</button>
      </form>
    </Layout> */}