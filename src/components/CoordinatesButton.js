import React, { Component } from 'react'

class CoordinatesButton extends Component {

    

    handleOnClick = (e) => {
        let arr = [ e.clientX, e.clientY ]
        this.props.onReceiveCoordinates(arr)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOnClick}> </button>
            </div>
        )
    }
}

export default CoordinatesButton