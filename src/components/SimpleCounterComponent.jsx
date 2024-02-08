import { Component } from "react";

export default class SimpleCounterComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            toggleStatus: false,
        }
    }

    handleInc = () => {
        if(!this.state.toggleStatus)
        {this.setState({...this.state,count: this.state.count + 1})
    }else{
        this.setState({...this.state,count: this.state.count})
    }
    }

    handleToggle = () => {
        this.setState({...this.state, toggleStatus: !this.state.toggleStatus})
    }

    render(){
        console.log("This is simple component")

        return <>
            <div>
                <h2>Simple component</h2>
                <h3>{this.state.count}</h3>
            </div>
            <div>
                <button onClick={this.handleToggle}>Set toggle</button>
                <button onClick={this.handleInc}>Counter</button>
            </div>
        </>
    }
}