// eslint-disable-next-line
import React, {Component} from "react";
import './Vote.css'

class Vote extends Component {
    constructor(){
        super()
        this.state = {
            selectedRegion: undefined
        }
    }

    dekkiOrange = '255,125,8'

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
            </div>
        )
    }
}
export default Vote;