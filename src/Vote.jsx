// eslint-disable-next-line
import React, {Component} from "react";
import './Vote.css'

const filterByRegion = require('./helperFunctions')
const playersMock = require('./playersMock')

class Vote extends Component {
    constructor(){
        super()
        this.state = {
            selectedRegion: null,
            votesRmaining: 3,
            players: playersMock,
            availablePlayers: []
        }
    }

    dekkiOrange = '255,125,8'
    msgPlayerVote = 'Click up to 3 Players to place your votes.'
    msgValidRegion = 'The remainder of your votes must be for'

    selectRegion =region =>{
        const players = this.state.players
        this.setState({
            selectedRegion: region,
            availablePlayers: filterByRegion(players, region)
        })
    }

    render () {
        const availablePlayers = this.state.availablePlayers
        return (
            <div className='voteContainer'>
                <h2>
                    Vote for players to represent your region's team
                </h2>
                <p className='details'>
                    Select your region to browse players
                </p>
                <p className='details'>
                    NOTE: You may only vote for one region
                </p>
                <button className='regionButton' id='selectJapan' onClick={this.selectRegion.bind(this,'Japan')} style={{backgroundColor: this.state.selectedRegion === "Japan" ? `rgb(${this.dekkiOrange})` : 'lightgrey'}}>
                    Japan
                </button>
                <button className='regionButton' id='selectTaiwan' onClick={this.selectRegion.bind(this,'Taiwan')} style={{backgroundColor: this.state.selectedRegion === "Taiwan" ? `rgb(${this.dekkiOrange})` : 'lightgrey'}}>
                    Taiwan
                </button>
                <button className='regionButton' id='selectHongKong' onClick={this.selectRegion.bind(this,'Hong Kong')} style={{backgroundColor: this.state.selectedRegion === "Hong Kong" ? `rgb(${this.dekkiOrange})` : 'lightgrey'}}>
                    Hong Kong
                </button>
                <button className='regionButton' id='selectSouthEastAsia' onClick={this.selectRegion.bind(this,'South East Asia')} style={{backgroundColor: this.state.selectedRegion === "South East Asia" ? `rgb(${this.dekkiOrange})` : 'lightgrey'}}>
                    South East Asia
                </button>
                <p className="details">
                    {this.state.selectedRegion ? 
                    `${this.msgPlayerVote} `:
                    null}
                    <span className='fadedText'>
                        {this.state.selectedRegion ? `${this.state.votesRmaining} votes remaining`: null}
                    </span>
                </p>
                <p className="details">
                    {this.state.selectedRegion ? 
                    `${this.msgValidRegion} ${this.state.selectedRegion}` :
                    null}
                </p>
                <div>
                {availablePlayers.map((player, index)=>{
                    return <div className="playerCard" key={index}>{player.nickname}</div>
                })}
                </div>
            </div>
        )
    }
}
export default Vote;