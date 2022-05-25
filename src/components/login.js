import React, { Component } from 'react'
import App from '../App';

export default class Login extends Component {

    state = {
      userName: "",
      pass: "",
      admin:{userName:"admin",pass:"0000"},
    //   error: false,
      isAdmin:false
    };
    
    eventHandler = (e) => {
        this.setState({
        [e.target.name]: e.target.value
    })
  }

  check = (e) =>{
    e.preventDefault()
    // console.log(this.state)
    if(this.state.userName === this.state.admin.userName && this.state.pass === this.state.admin.pass){
        sessionStorage.setItem('role','admin')
        this.setState({
            isAdmin: true,
            // error: false
        })
        // this.props.isAdmin()
        // this.props.history.push("/home")
    }else{
        // this.setState({
        //     error:true
        // })
        alert("incorrect username or password");
    }
  }

  render() {
      if( this.state.isAdmin === false){
    return (
      <div className='container'>
          <h1 className='text-center'>Login Page</h1>
        <form className='d-flex flex-column justify-content-center align-items-center' onSubmit={this.check}>
          <input type={"text"} className="form-control" placeholder='UserName' name="userName" value={this.state.userName} onChange={this.eventHandler} ></input>
          <input type={"text"} className="form-control" placeholder='Password' name="pass" value={this.state.pass} onChange={this.eventHandler} ></input>
          <input type={"submit"} className="btn btn-primary my-2 " value={"Login"}  ></input>
        </form>
      </div>
    );
      }else {
        return(
            <App></App>
        )
      }
    //   else {
    //       return (
    //   <div className='container'>
    //       <h1 className='text-center'>Login Page</h1>
    //     <form className='d-flex flex-column justify-content-center align-items-center' onSubmit={this.check}>
    //       <input type={"text"} className="form-control" placeholder='UserName' name="userName" value={this.state.userName} onChange={this.eventHandler} ></input>
    //       <input type={"text"} className="form-control" placeholder='Password' name="pass" value={this.state.pass} onChange={this.eventHandler} ></input>
    //       <h3  className='bg-danger' > incorrect username or password</h3>
    //       <input type={"submit"} className="btn btn-primary my-2 " value={"Login"} ></input>
    //     </form>
    //   </div>
    // );
    //   }
  }
}
