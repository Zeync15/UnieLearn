import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mr-5">
        <li><NavLink to="/create" className="nav-link text-white">New Project</NavLink></li>
        <li><NavLink to="/" className="nav-link text-white">Message</NavLink></li>
        <li><NavLink to="/" className="nav-link text-white">LogOut</NavLink></li>
        <li>
          <button type="button" className="btn btn-primary rounded-circle mx-2">
            ZY
          </button>
        </li>
      </ul>
    </div>
  )
}

export default SignedInLinks
