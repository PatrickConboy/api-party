import React, { Component } from 'react'

class SpotifyInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      artist: {},
      error: null,
    }

    this.fetchSpotifyInfo()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.artist !== this.props.match.params.artist) {
      this.fetchSpotifyInfo()
    }
  }

  fetchSpotifyInfo = () => {
    const { artist } = this.props.match.params
    fetch(`https://api.spotify.com/v1/${artist}/`)
      .then(response => response.json())
      .then(artist => this.setState({ artist }))
  }

  render() {
    return (
      <div className="SpotifyInfo">
        <h2>{this.state.artist.name}</h2>

      </div>
    )
  }
}

export default SpotifyInfo