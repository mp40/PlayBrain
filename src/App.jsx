import React, {Component} from "react";
import Vote from './Vote';
import Results from './Results';
import "./App.css";

const {filterByRegion} = require('./helperFunctions')
const playersMock = require('./playersMock')
 
class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            admin: false,
            user: true,
            toggleView: 'Vote',
            selectedRegion: null,
            votesRmaining: 3,
            votedPlayers:[],
            players: playersMock,
            availablePlayers: []
        };
    }

    toggleView(page) {
        this.setState({toggleView: page})
    }

    resetRegion(region){
        const players = this.state.players
        this.setState({
            votedPlayers: [],
            votesRmaining: 3,
            selectedRegion: region,
            availablePlayers: filterByRegion(players, region)
        })
    }

    changeRegion(region){
        const players = this.state.players
        this.setState({
            selectedRegion: region,
            availablePlayers: filterByRegion(players, region)
        })
    }

    selectPlayer(player){
        const votedPlayers = this.state.votedPlayers
        if(votedPlayers.includes(player)){
            return
        } else {
            votedPlayers.push(player)
        }
        if(this.state.votesRmaining > 0){
            this.setState({
                votesRmaining: this.state.votesRmaining -1,
                votedPlayers: votedPlayers
            })
        }
    }

    render(){
        return (
            <div>
                {this.state.toggleView === "Vote" ?
                <Vote 
                    admin={this.state.admin}
                    toggleView={this.toggleView.bind(this)}
                    selectPlayer={this.selectPlayer.bind(this)}  
                    votedPlayers={this.state.votedPlayers}
                    votesRmaining={this.state.votesRmaining}
                    resetRegion={this.resetRegion.bind(this)}
                    selectedRegion={this.state.selectedRegion}
                    availablePlayers={this.state.availablePlayers}
                /> :
                null}
                {this.state.toggleView === "Results" ?
                <Results
                    changeRegion={this.changeRegion.bind(this)}
                    viewRegion={this.state.selectedRegion}
                    availablePlayers={this.state.availablePlayers}
                    votedPlayers={this.state.votedPlayers}
                /> :
                null}
            </div>
        )
    }
}

export default App;
