import { PureComponent } from "react";

export default class PureCounterComponent extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            toggleStatus: false,
        }
    }

    handleInc = () => {
        if(!this.state.toggleStatus){this.setState({...this.state,count: this.state.count + 1})}else{this.setState({...this.state, count: this.state.count})}
    }

    handleToggle = () => {
        this.setState({...this.state, toggleStatus: !this.state.toggleStatus})
    }

    render(){
        console.log("This is Pure component")

        return <>
            <div>
                <h2>Pure Component</h2>
                <h3>{this.state.count}</h3>
            </div>
            <div>
                <button onClick={this.handleToggle}>Set toggle</button>
                <button onClick={this.handleInc}>Counter</button>
            </div>
        </>
    }
}