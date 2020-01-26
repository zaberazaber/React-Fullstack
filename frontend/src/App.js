import React from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios')

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',          
      email:'',
      // resume:''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handleResumeChange = this.handleResumeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
 }

//  handleResumeChange(event) {
//     this.setState({resume: event.target.value});
//  }

 handleSubmit(event) {
  console.log('A name was submitted: ' ,this.state);
  event.preventDefault();
}

axios({
  url: '/submit-form:5000',
  method: 'post',
  data: {
    name: 'faisal',
  }
})

 
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          basic <code>CRUD</code> operation
        </p>
       <form onSubmit={this.handleSubmit}>
         <div className="username">
         <p>username:</p>
         <input type="text" value={this.state.name.value} onChange={this.handleNameChange}></input>
         </div>
         <div className="password"> 
           <p>Email:</p>
           <input type="text" value={this.state.email.value} onChange={this.handleEmailChange} ></input>
         </div>
         {/* <div className="resume">
           <p>Resume:</p>
           <input type="file" value={this.state.resume.value} onChange={this.handleResumeChange}></input>
         </div> */}
         <input type="submit" value="submit"></input>
       </form>
      </header>
    </div>
  );
}
}


export default App;
