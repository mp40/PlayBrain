import React, {Component} from "react";
import Vote from './Vote';
import Results from './Results';
import "./App.css";

const {filterByRegion, totalLikes} = require('./helperFunctions')
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
            availablePlayers: [],
            totalVotes: undefined
        };
    }

    toggleAdmin(){
        this.setState({admin: !this.state.admin})
    }

    reset(){
        this.setState({
            admin: false,
            user: true,
            toggleView: 'Vote',
            selectedRegion: null,
            votesRmaining: 3,
            votedPlayers:[],
            players: playersMock,
            availablePlayers: [],
            totalVotes: undefined
        })
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
        const playerList = filterByRegion(players, region)
        this.setState({
            selectedRegion: region,
            availablePlayers: playerList,
            totalVotes: totalLikes(playerList)
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
                <button className="simulate" onClick={this.toggleAdmin.bind(this)}>
                    simulate {this.state.admin === false ? 'admim' : 'user'}
                </button>
                <button className="simulate" onClick={this.reset.bind(this)}>
                    reset
                </button>
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
                    totalVotes={this.state.totalVotes}
                /> :
                null}
            </div>
        )
    }
}

export default App;
