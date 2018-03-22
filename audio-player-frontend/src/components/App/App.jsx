import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
// // import SongsList from '../SongsList/SongsList.jsx'
// // import SongDetails from '../SongDetails/SongDetails.jsx'
import axios from 'axios'
import './App.css'
import MapContainer from '../MapContainer'
import AudioPlayer from '../AudioPlayer/AudioPlayer.jsx'
// import Map from '../Map'

class App extends Component {
  constructor() {
    super()
    this.state = {
      songs:[{}],
      venues: []
    }
  }

  updateSong = (id) => {
    axios.post('http://localhost:8080/',{artist: this.state.songs[id].artist})
    .then((response) => {
      let venues = response.data.map((item)=>{
        return item
      })
      this.setState({
        venues
      })
    })
  }

  componentDidMount() {
    axios.get('http://localhost:8080/')
      .then((response) => {
        this.setState({
          songs: response.data,
        })
      })
  }

 

  render() {
    return (
      <div className="container text-center">
        <header className="jumbotron">
          <h1 className="display-4">VenuePlayer</h1>
        </header>
        <AudioPlayer updateSong={this.updateSong} songs={this.state.songs}/>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12" id="map">
            <MapContainer venues={this.state.venues} dateTime={this.state.dateTime}/>
          </div>
        </div>
          {/* <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12" id="map">
            <Map
            
              isMarkerShown 
              venues={this.state.venues}
              containerElement={<div style={{height:100+'%'}}/>}
              mapElement={<div style={{ height: 100 + '%' }} />}
            /> */}
{/*           
            </div>
            </div> */}
        </div>
 
    )
  }
}

export default App
