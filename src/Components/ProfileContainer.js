import React, { Component } from 'react'
import data from '../data.js'
import Profile from './Profile.js'

class ProfileContainer extends Component {
  constructor() {
    super()

    this.state = {
      currentIndex: 0
    }

    this.displayNextPerson = this.displayNextPerson.bind(this)
    this.displayPreviousPerson = this.displayPreviousPerson.bind(this)
  }

  displayNextPerson() {
    if (this.state.currentIndex >= data.length - 1) {
      this.setState({
        currentIndex: 0
      })
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    }
  }

  displayPreviousPerson() {
    if (this.state.currentIndex <= 0) {
      this.setState({
        currentIndex: data.length - 1
      })
    } else {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      })
    }
  }

  render() {

    return (
      <div className="background-box">
        <div className="profile-container">
          <Profile currentIndex={this.state.currentIndex} />
          <div className="page-counter">1/25</div>
        </div>

        <div className="button-container">
          <button className="previous-button" onClick={this.displayPreviousPerson}>	{"< "}Previous</button>
          <button className="next-button" onClick={this.displayNextPerson}>Next{" >"}</button>
        </div>
      </div>
    )
  }
}



export default ProfileContainer