// eslint-disable-next-line
import React, {Component} from "react";
import './Vote.css'

const {dekkiOrange} = require('./helperFunctions')

class Vote extends Component {

    msgPlayerVote = 'Click up to 3 Players to place your votes.'
    msgValidRegion = 'The remainder of your votes must be for'

    render () {
        const availablePlayers = this.props.availablePlayers
        const votedPlayers = this.props.votedPlayers
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
                <button className='regionButton' id='selectJapan' onClick={this.props.resetRegion.bind(this,'Japan')} style={{backgroundColor: this.props.selectedRegion === "Japan" ? `rgb(${dekkiOrange})` : 'lightgrey'}}>
                    Japan
                </button>
                <button className='regionButton' id='selectTaiwan' onClick={this.props.resetRegion.bind(this,'Taiwan')} style={{backgroundColor: this.props.selectedRegion === "Taiwan" ? `rgb(${dekkiOrange})` : 'lightgrey'}}>
                    Taiwan
                </button>
                <button className='regionButton' id='selectHongKong' onClick={this.props.resetRegion.bind(this,'Hong Kong')} style={{backgroundColor: this.props.selectedRegion === "Hong Kong" ? `rgb(${dekkiOrange})` : 'lightgrey'}}>
                    Hong Kong
                </button>
                <button className='regionButton' id='selectSouthEastAsia' onClick={this.props.resetRegion.bind(this,'South East Asia')} style={{backgroundColor: this.props.selectedRegion === "South East Asia" ? `rgb(${dekkiOrange})` : 'lightgrey'}}>
                    South East Asia
                </button>
                <p className="details">
                    {this.props.selectedRegion ? 
                    `${this.msgPlayerVote} `:
                    null}
                    <span className='fadedText'>
                        {this.props.selectedRegion ? `${this.props.votesRmaining} votes remaining`: null}
                    </span>
                </p>
                <p className="details">
                    {this.props.selectedRegion ? 
                    `${this.msgValidRegion} ${this.props.selectedRegion}` :
                    null}
                </p>
                <div className="playerContainer">
                {availablePlayers.map((player, index)=>{
                    return <div className="playerCard" key={index}>
                    <div className='imageContainer'>
                        <img
                        id = {"img" + index}
                        src={player.avatarUrl}
                        alt=""
                        className={votedPlayers.includes(player) ? 
                            'selectedImg' : 
                            this.props.votesRmaining > 0 ? 'unselectedImg' : 'finalSelection'}
                        onClick={this.props.selectPlayer.bind(this, player)}
                        />
                        <div className = 'yourSelection'>
                            {votedPlayers.includes(player) ?
                            'Your selection' :
                            null
                            }
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
                {this.props.admin ? 
                <button className="simulate" id='adminCloseVote' onClick={this.props.toggleView.bind(this, "Results")}>
                    Close Votation
                </button> :
                null
                }
            </div>
        )
    }
}
export default Vote;