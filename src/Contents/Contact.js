import React, { Component } from 'react';
import axios from 'axios';
class Contact extends Component {
    
        constructor(props) {
          super(props);
          this.state = {
            name: '',
            email: '',
            message: ''
          }
        }
        resetForm(){
          this.setState({name: '', email: '', message: ''})
        }
    
          
render() {
return (
<div className="condiv">
<h1 className="subtopic">Contact Me</h1>
<h3>Email  :   Deebiga15@gmail.com</h3>
<h3>LinkedIn   : https://www.linkedin.com/in/deebi/  </h3>
< h1>Message here</h1>

<form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label input-type= "name"><b>Name: </b></label><br></br>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1"><b>Email address:</b> </label>
           <br></br> <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
            <label input-type="message"><b>Message:</b></label>
            <br></br>
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
  
    axios({
      method: "POST", 
      url:"http://localhost:3000/Contact", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }   
      
      
  }

export default Contact

