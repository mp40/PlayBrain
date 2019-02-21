// eslint-disable-next-line
import React, {Component} from "react";
import './Results.css'

const playersMock = require('./playersMock')
const {filterByRegion} = require('./helperFunctions')

class Results extends Component {
    constructor(){
        super()
        this.state = {
            viewRegion: undefined,
            players: playersMock,
            availablePlayers: []
        }
    }

    dekkiOrange = '255,125,8'

    viewRegion = region => {
        const players = this.state.players
        this.setState({
            viewRegion: region,
            players: playersMock,
            availablePlayers: filterByRegion(players, region)
        })
    }

    render () {
        const availablePlayers = this.state.availablePlayers
        return (
            <div className="resultsContainer">
                <h2>
                    Results for voting in each region
                </h2>
                <p className='details'>
                    Select your region to browse players
                </p>
                <button className='regionButton' id='viewJapan' onClick={this.viewRegion.bind(this,'Japan')} style={{backgroundColor: this.state.viewRegion === "Japan" ? `rgb(${this.dekkiOrange})` : 'lightgrey'}}>
                    Japan
                </button>
                <button className='regionButton' id='viewTaiwan' onClick={this.viewRegion.bind(this,'Taiwan')} style={{backgroundColor: this.state.viewRegion === "Taiwan" ? `rgb(${this.dekkiOrange})` : 'lightgrey'}}>
                    Taiwan
                </button>
                <button className='regionButton' id='viewHongKong' onClick={this.viewRegion.bind(this,'Hong Kong')} style={{backgroundColor: this.state.viewRegion === "Hong Kong" ? `rgb(${this.dekkiOrange})` : 'lightgrey'}}>
                    Hong Kong
                </button>
                <button className='regionButton' id='viewSouthEastAsia' onClick={this.viewRegion.bind(this,'South East Asia')} style={{backgroundColor: this.state.viewRegion === "South East Asia" ? `rgb(${this.dekkiOrange})` : 'lightgrey'}}>
                    South East Asia
                </button>
                <div className="playerContainer">
                {availablePlayers.map((player, index)=>{
                    return <div className="playerCard" key={index}>
                    <div className='imageContainer'>
                        <img
                        id = {"img" + index}
                        src={player.avatarUrl}
                        />
                        <div className = 'yourSelection'>
                            {/* {votedPlayers.includes(player) ?
                            'Your selection' :
                            null
                            } */}
                        </div>
                    </div>
                    <h4>
                        {player.nickname}
                    </h4>
                        <div className="playerMsg">
                            {player.message}
                        </div>
                    </div>
                })}
                </div>
        </div>
        )
    }
}



export default Results;