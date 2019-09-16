// your ImageSlider code here!
import React, { Component } from 'react';


export default class ImageSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSlideIndex: 0
        }
    }

    incrementSlide = () => {
        // const slideNum = ''
        this.setState({
            currentSlideIndex: this.state.currentSlideIndex + 1
        })
    }
    render() {
        return (
            <div className="slide" onClick={this.incrementSlide}>
                I am on slide {this.state.currentSlideIndex}
            </div>
        )
    }

}