import React, { Component } from 'react'
import data from '../data'

class Profile extends Component {
  constructor(props) {
    super()

    this.state = {

    }
  }


  render() {
    const person = data[this.props.currentIndex]
    return (
      <div className='complete-profile'>
        <p className='profile-name'>{person.name.first} {person.name.last}</p>
        <br />
        <p className='where-from'>From:{person.city}, {person.country}</p>
        <p className='employer'>Employer: {person.employer}</p>
        <p className='job-title'>Title:{person.title}</p>
        <p className='favorite-movies'>Favorite Movies
          <li>{person.favoriteMovies[0]}</li>
          <li>{person.favoriteMovies[1]}</li>
          <li>{person.favoriteMovies[2]}</li>
        </p>

      </div>
    )
  }
}
export default Profile