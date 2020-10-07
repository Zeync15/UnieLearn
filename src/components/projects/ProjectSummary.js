import React, { Component } from 'react'
import { db } from '../../config/firebase'

class ProjectSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announces: []
    }
  }

  componentDidMount() {
    db.collection('announcements')
      .orderBy("created", "desc")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data())
        console.log(data);
        this.setState({ announces: data })
      })
  }

  render() {
    const { announces } = this.state;
    return (
      <div className="project">
        {announces.map(announce => (
          <div key={announce.uid} className="card border-0 mb-3">
            <div className="card-body">
              <h2 className="card-title">{announce.title}</h2>
              <p className="card-text">{announce.content}</p>
              <p>Posted by Prof. Choncc</p>
              <p>Created at: {announce.created}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}




export default ProjectSummary
