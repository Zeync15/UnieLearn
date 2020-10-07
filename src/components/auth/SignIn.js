import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
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
      <div className="container" style={{ paddingTop: "10rem" }}>
        <div className="row">
          <div className="col-lg-6 pt-4">
            <h1 style={{ color: "#f87c0a" }} className="display-1 font-weight-bold">eLearn</h1>
            <h4>Connection between lecturers and students.</h4>
            <br />
          </div>
          <div className="col-lg-6  text-center">
            <div className="border rounded shadow-lg w-75">
              <form className="p-4" onSubmit={this.handleSubmit} >
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email address" id="email" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password" id="password" onChange={this.handleChange} />
                </div>
                <button className="btn btn-primary btn-lg w-100">Log In</button>
                <br />
                {/* <a href="#">Forgotten Password?</a> */}
                <hr />
                <button type="submit" className="btn btn-success">Create New Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn
