import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SongsList from '../SongsList/SongsList.jsx'
import SongDetails from '../SongDetails/SongDetails.jsx'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      songs: [{}],
      currentSong: 0,
      isPlaying: false,
      duration: '0:00',
      currentTime: '0:00'
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/')
      .then((response) => {
        this.setState({
          songs: response.data,
        })
      })
  }

  play = (id) => {

    if (this.state.isPlaying) {
      this.setState({
        isPlaying: false,
      }, () => this.player.pause())
    } else {
      this.setState({
        currentSong: id,
        isPlaying: true,
      }, () => this.player.play())
    }
  }

  stop = () => {
    this.player.currentTime = 0
    this.setState({
      isPlaying: false
    }, () => {
      this.player.pause()
    })
  }

  duration = () => {
    let duration = Math.floor(this.player.duration);
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;

    this.setState({
      duration: minutes + ':' + seconds
    })
  }

  timeUpdate = () => {
    let currentTime = Math.floor(this.player.currentTime)
    let minutes = Math.floor(currentTime / 60)
    let seconds = currentTime % 60 < 10 ? '0' + (currentTime % 60) : currentTime % 60

    this.setState({
      currentTime: minutes + ':' + seconds
    })
  }

  next = () => {
    this.setState({
      currentSong: this.state.currentSong + 1,
    }, () => {
      this.player.load()
      this.state.isPlaying ? this.player.play() : this.player.pause()
    })
  }

  previous = () => {
    this.setState({
      currentSong: this.state.currentSong - 1,
    }, () => {
      this.player.load()
      this.state.isPlaying ? this.player.play() : this.player.pause()
    })
  }

  listPlay = (id) => {
    this.player.currentTime = 0
    this.setState({
      currentSong: id,
      isPlaying: true
    }, () => this.player.play())
  }

  render() {
    return (
      <div className="container text-center">
        <header className="jumbotron">
          <h1 className="display-4">Audio Player</h1>
        </header>
        <p className="lead">{this.state.songs[this.state.currentSong].title} {this.state.currentTime}/{this.state.duration}</p>
        <div className="row">
          <div className="col-3 col-sm-3 col-md-3 col-lg-3">
            <button className="btn btn-danger btn-width" type="button" disabled={(this.state.currentSong === 0)} onClick={this.previous}>
              <i className="fa fa-step-backward"></i>
            </button>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3">
            <button
              className={(this.state.isPlaying) ? "btn btn-warning btn-width" : "btn btn-success btn-width"}
              type="button"
              onClick={() => { this.play(this.state.currentSong) }
              }>
              <i className={(this.state.isPlaying) ? "fa fa-pause" : "fa fa-play"}></i>
            </button>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3">
            <button className="btn btn-danger btn-width" type="button" onClick={this.stop}>
              <i className="fa fa-stop"></i>
            </button>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3">
            <button className="btn btn-danger btn-width" type="button" disabled={(this.state.currentSong === this.state.songs.length - 1)} onClick={this.next}>
              <i className="fa fa-step-forward"></i>
            </button>
          </div>
        </div>
        <audio onLoadedData={this.duration} onTimeUpdate={this.timeUpdate} src={this.state.songs[this.state.currentSong].source} ref={(self) => { this.player = self }} />

        <Route exact path="/" render={() => <SongsList 
          songs={this.state.songs} 
          currentSong={this.state.currentSong} 
          listPlay={this.listPlay} />} 
          isPlaying={this.state.isPlaying}
        />
        <Route path='/:songId' render={(props) => <SongDetails
          songs={this.state.songs}
          listPlay={this.listPlay}
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          {...props} />}
        />
      </div >
    )
  }
}

export default App
