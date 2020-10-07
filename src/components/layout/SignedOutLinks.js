import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mr-5">
        <li><NavLink to="/signup" className="nav-link text-white">SignUp</NavLink></li>
        <li><NavLink to="/signin" className="nav-link text-white">Login</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks
