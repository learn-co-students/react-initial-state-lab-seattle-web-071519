// your Bomb code here!
import React, {Component} from 'react'

export default class Bomb extends Component{
    constructor(props) {
        super() 
        setInterval(this.decrementTime,1000)
        this.state = {
        secondsLeft: props.initialCount
        }
    }

    decrementTime = () => {

        this.setState({secondsLeft: this.state.secondsLeft-1})
        console.log(this.state.secondsLeft)
        // this.state = (prevState => {secondsLeft: prevState.secondsLeft-1})
        
        this.render
    }

    render(){
        if (this.state.secondsLeft > 0){
        return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        }
        return <h3>Boom!</h3>
    }
}