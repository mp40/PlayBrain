import React from "react";
import Vote from './Vote'
import "./App.css";
 
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            //TO DO
        };
    }

    render(){
        return (
            <div>
                <Vote/>
            </div>
        )
    }
}

export default App;
