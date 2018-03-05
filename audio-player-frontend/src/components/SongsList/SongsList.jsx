import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SongList.css'

const divStyle = {
    marginRight:'5px'  
};

class SongsList extends Component {
    render() {
        let songsList = this.props.songs.map((song,i) => {
            return (<li key={i} className="list-group-item d-flex" >
                        <button 
                            style={divStyle} 
                            className="btn btn-success"  
                            type="button" 
                            onClick={() => { this.props.listPlay(song.id) }}>
                            <i className="fa fa-play">
                            </i>
                        </button>
                        <Link to={`/${song.id}`}>{song.title}</Link>
                    </li>
            )
        })
        return <ul className="list-group">{songsList}</ul>
    }
}

export default SongsList