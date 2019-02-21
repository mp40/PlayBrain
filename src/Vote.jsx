// eslint-disable-next-line
import React, {Component} from "react";
import './Vote.css'

class Vote extends Component {
    constructor(){
        super()
        this.state = {
            selectedRegion: null
        }
    }

    dekkiOrange = '255,125,8'
    msgPlayerVote = 'Click up to 3 Players to place your votes. (3 votes remaining)'
    msgValidRegion = 'The reaminder of your votes must be for'

    selectRegion(region){
        this.setState({selectedRegion: region})
    }

    render () {
        return (
            <div>
                <div>
                    Vote for players to represent your region's team
                </div>
                <p>
                    Select your region to browse players
                </p>
                <p>
                    NOTE: You may only vote for one region
                </p>
                <button id='selectJapan' onClick={this.selectRegion.bind(this,'Japan')} style={{backgroundColor: this.state.selectedRegion === "Japan" ? `rgb(${this.dekkiOrange})` : 'lightgrey'}}>
                    Japan
                </button>
                <button id='selectTaiwan' onClick={this.selectRegion.bind(this,'Taiwan')} style={{backgroundColor: this.state.selectedRegion === "Taiwan" ? `rgb(${this.dekkiOrange})` : 'lightgrey'}}>
                    Taiwan
                </button>
                <button id='selectHongKong' onClick={this.selectRegion.bind(this,'Hong Kong')} style={{backgroundColor: this.state.selectedRegion === "Hong Kong" ? `rgb(${this.dekkiOrange})` : 'lightgrey'}}>
                    Hong Kong
                </button>
                <button id='selectSouthEastAsia' onClick={this.selectRegion.bind(this,'South East Asia')} style={{backgroundColor: this.state.selectedRegion === "South East Asia" ? `rgb(${this.dekkiOrange})` : 'lightgrey'}}>
                    South East Asia
                </button>
                <p>
                    {this.state.selectedRegion ? 
                    this.msgPlayerVote :
                    null}
                </p>    
            </div>
        )
    }
}
export default Vote;