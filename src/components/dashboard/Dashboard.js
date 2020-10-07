import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

class Dashboard extends Component {
  render() {
    return (
      <div className="container mt-3" >
        <div className="row">

          <div className="col-8">
            <ProjectList />
          </div>

          <div className="col-4">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard