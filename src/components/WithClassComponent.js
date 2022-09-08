import React from "react";
import "../../src/App.css";

class WithClassComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
          <div className="Clock">
            <h1 className="title">Realtime Clock</h1>
            <hr/>
            <h1>{this.state.date.toLocaleTimeString()}</h1>
          </div>
        )
    }
}

export default WithClassComponent;