import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: "5rem" }}>
        <div className="row">
          <div className="col-3">{/*just create for spacing*/}</div>
          <div className="col-6 text-center">
            <div className="border rounded shadow-lg w-100">

              <form className="p-3 pb-4" onSubmit={this.handleSubmit} >
                <h2 className="p-2">Personal Information</h2>
                <div className="form-group px-3 pt-1">
                  <input type="email" className="form-control" placeholder="Email address" id="email" onChange={this.handleChange} />
                </div>
                <div className="form-group px-3 pt-1">
                  <input type="password" className="form-control" placeholder="Password" id="password" onChange={this.handleChange} />
                </div>
                <div className="form-group px-3 pt-1">
                  <input type="text" className="form-control" placeholder="First Name" id="firstName" onChange={this.handleChange} />
                </div>
                <div className="form-group px-3 pt-1">
                  <input type="text" className="form-control" placeholder="Last Name" id="lastName" onChange={this.handleChange} />
                </div>
                <button className="btn btn-primary btn-lg w-75">Create Account</button>
              </form>
            </div>
          </div>
          <div className="col-3">{/*just create for spacing*/}</div>
        </div>
      </div>
    )
  }
}

export default SignUp
