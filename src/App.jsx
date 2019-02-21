import React from "react";
import Vote from './Vote';
import Results from './Results';
import "./App.css";
 
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            admin: false,
            user: true,
            toggleView: 'Vote'
        };
    }

    toggleView(page) {
        this.setState({toggleView: page})
    }

    render(){
        return (
            <div>
                {this.state.toggleView === "Vote" ?
                <Vote 
                    admin={this.state.admin}
                    toggleView={this.toggleView.bind(this)}  
                /> :
                null}
                {this.state.toggleView === "Results" ?
                <Results/> :
                null}
            </div>
        )
    }
}

export default App;
