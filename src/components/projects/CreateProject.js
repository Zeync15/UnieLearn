import React, { Component } from 'react'
import firebase from '../../config/firebase'

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
    image: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  addAnnouncements = async (e) => {
    e.preventDefault();
    console.log(this.state);

    const db = await firebase.firestore();
    db.collection('announcements').add({
      title: this.state.title,
      content: this.state.content,
      image: this.state.image,
      created: new Date().toString()
    })
    this.setState({
      title: '',
      content: '',
      image: ''
    })
  }

  render() {
    return (
      <div className="container border mt-5 py-4 px-5 shadow-lg">
        <h1>Create New Announcements</h1>

        <form onSubmit={this.addAnnouncements}>
          <div className="form-group">
            <input type="text" className="form-control" id='title' placeholder="Title" onChange={this.handleChange} value={this.state.title} />
          </div>
          <div className="form-group">
            <textarea className="form-control" id='content' placeholder="Content" onChange={this.handleChange} value={this.state.content}></textarea>
          </div>
          <div className="form-group">
            <input type="file" className="form-control-file" id="image" onChange={this.handleChange} value={this.state.image} />
          </div>
          <button type="submit" className="btn btn-danger">Create</button>

        </form>
      </div>
    )
  }
}

export default CreateProject
