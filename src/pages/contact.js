import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head'
import conModule from '../styles/con.module.scss'
import caticon from '../images/catbum.png';
import {useState} from 'react'
import axios from "axios";


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
//     <Layout>
//       <Head title="contact" />
//       <form name="contactf" className={conModule.container} method="post" id="contactform" data-netlify="true"
//         action="https://getform.io/f/152c2e4c-93c6-4f5f-b5d1-018dafb5f701">
//         <input type="hidden" name="form-name" value="contactf" />
//         <div className={conModule.flex}>
//           <img src={caticon} className={conModule.icon} />
//           <div className={conModule.title}>Contact</div>
//         </div>
//         <div className={conModule.box}>
//           <div className={conModule.flex}>
//             <div className={conModule.namebox}>
//               <label for="firstname" className={conModule.namelabel}>First Name</label>
//               <input placeholder="Type Your Full Name" type="text" id="firstname" className={conModule.name} id="fname" 
//                 onChange={(e) => setfName(e.target.value)}/>
//             </div>
//             <div className={conModule.namebox}>
//               <label for="lastname" className={conModule.namelabel}>Last Name</label>
//               <input placeholder="Type Your Full Name" type="text" id="lastname" className={conModule.name}
//                 onChange={(e) => setlName(e.target.value)}/>
//             </div>
//           </div>
//         </div>

//         <div className={conModule.box}>
//           <div className={conModule.flex}>
//             <label for="mail" className={conModule.label}>E-mail Address</label>
//             <input placeholder="Type Your E-mail Addres" type="text" id="mail" className={conModule.input_box} 
//               onChange={(e) => setEmail(e.target.value)}/>
//           </div>
//         </div>

//         <div className={conModule.box}>
//           <label for="name" className={conModule.label1}>Website URL</label>
//           <input placeholder="Type Your Website URL (optional)" type="text" id="website" className={conModule.input_box}
//             onChange={(e) => setWebsite(e.target.value)}/>
//         </div>

//         <div className={conModule.box}>
//          <label for="name" className={conModule.label}>Subject</label>
//           <input placeholder="Type Subject" type="text" id="subject" className={conModule.input_box}
//             onChange={(e) => setSubject(e.target.value)}/>
//         </div>

//         <div className={conModule.box}>
//           <label for="name" className={conModule.label}>Message</label>
//           <textarea placeholder="Type Your Message Here..." type="text" id="message" className={conModule.input_box2}
//             onChange={(e) => setMessage(e.target.value)}/>
//         </div>
        
//         <button type="button" className={conModule.btn} onClick={e=>handleSubmit(e)}>Send</button>
//       </form>
//     </Layout>
//   )
// }

// export default Contact;

const MyForm = () => {
    
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
      url: "https://getform.io/f/152c2e4c-93c6-4f5f-b5d1-018dafb5f701",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
      <Layout>
  
  <div>
       <div className="col-md-8 mt-5">
          <h3>Getform.io Gatsby Form Example</h3>
          <form onSubmit={handleOnSubmit}>
          <div className="form-group">
              <label for="exampleInputEmail1" required="required">Email address</label>
              <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div> 
          <div className="form-group">
              <label for="exampleInputName">Name</label>
              <input type="text" name="name" className="form-control" id="exampleInputName" placeholder="Enter your name" required="required"/>
          </div>
          <div className="form-group">
              <label for="exampleFormControlSelect1">Favourite Platform</label>
              <select className="form-control" id="exampleFormControlSelect1" name="platform" required="required">
              <option>Github</option>
              <option>Gitlab</option>
              <option>Bitbucket</option>
              </select>
          </div>
          <button type="submit" className="btn btn-primary"  disabled={serverState.submitting}>
              Submit
          </button>
          {serverState.status && (
              <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
              </p>
          )}
          </form>
      </div>
    </div>  
  
</Layout>
   
  );
};

export default MyForm;