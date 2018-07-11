import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Spotify.css'
import SpotifyInfo from './SpotifyInfo'

class Spotify extends Component {
  state = {
    artist: '',
  }

  handleChange = ev => {
    this.setState({ artist: ev.target.value })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.history.push(`/spotify/${this.state.artist}`)
  }

  render() {
    return (
      <div className="Spotify">
        <h1>Artist</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              required
              autoFocus
              type="text"
              value={this.state.artist}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">
              Look up a Spotify Artist
            </button>
          </div>
        </form>

        <Route
          path="/spotify/:artist"
          component={SpotifyInfo}
        />
      </div>
    )
  } 
}

export default Spotify