import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SongDetails.css'

class SongDetails extends Component {
    render() {
        let index = this.props.match.params.songId
        return (
            <div className="detail">
                <div>
                    <h1>{this.props.songs[index].title}</h1>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => { this.props.listPlay(index) }}>
                        <i className="fa fa-play">
                        </i>
                    </button>
                </div>
                <p>{this.props.songs[index].description}</p>
                <Link to="/">
                    <button className="btn btn-warning">
                        <i className="fa fa-home">
                        </i>
                    </button>
                </Link>
            </div>
        )
    }
}

export default SongDetails