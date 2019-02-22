// eslint-disable-next-line
import React, {Component} from "react";
import './Results.css'
import './Vote.css'

const {dekkiOrange} = require('./helperFunctions')

class Results extends Component {

    render () {
        const availablePlayers = this.props.availablePlayers
        const votedPlayers = this.props.votedPlayers
        return (
            <div className="resultsContainer">
                <h2>
                    Results for voting in each region
                </h2>
                <p className='details'>
                    Select your region to browse players
                </p>
                <button className='regionButton' id='viewJapan' onClick={this.props.changeRegion.bind(this,'Japan')} style={{backgroundColor: this.props.viewRegion === "Japan" ? `rgb(${dekkiOrange})` : 'lightgrey'}}>
                    Japan
                </button>
                <button className='regionButton' id='viewTaiwan' onClick={this.props.changeRegion.bind(this,'Taiwan')} style={{backgroundColor: this.props.viewRegion === "Taiwan" ? `rgb(${dekkiOrange})` : 'lightgrey'}}>
                    Taiwan
                </button>
                <button className='regionButton' id='viewHongKong' onClick={this.props.changeRegion.bind(this,'Hong Kong')} style={{backgroundColor: this.props.viewRegion === "Hong Kong" ? `rgb(${dekkiOrange})` : 'lightgrey'}}>
                    Hong Kong
                </button>
                <button className='regionButton' id='viewSouthEastAsia' onClick={this.props.changeRegion.bind(this,'South East Asia')} style={{backgroundColor: this.props.viewRegion === "South East Asia" ? `rgb(${dekkiOrange})` : 'lightgrey'}}>
                    South East Asia
                </button>
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
                            'unselectedImg'
                        }
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
        </div>
        )
    }
}



export default Results;