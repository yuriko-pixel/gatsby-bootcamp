import React, { useState }  from "react"
import axios from "axios";
import { Link } from "gatsby"
import Layout from "../components/layout"
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
        url: "https://getform.io/f/4113f349-e99f-495a-b529-18c2cb40e11c",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, (
          <div className={conModule.messagecon}>
           <div className={conModule.success}>
             <i className="fa fa-check-circle success"></i>
           </div>
             <span className={conModule.sucmessage}>Message sent successfully</span>
             <span className={conModule.sucmessage}>I will reply as soon as possible.</span>
         </div>
          ), form);
        })
        .catch(r => {
          handleServerResponse(false, 
                               (<div className={conModule.messagecon}>
             <MaterialIcon icon="error" color='#dc143c' size={100} />
             <div className={conModule.errmsg}>Opps! Something went wrong.</div>
             <div className={conModule.errmsg}>Please try again.</div>
           </div>), form);
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
