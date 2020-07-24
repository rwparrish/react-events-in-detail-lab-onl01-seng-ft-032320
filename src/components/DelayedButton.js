import React, { Component } from 'react'

class DelayedButton extends Component {

    handleOnClick = (e) => {
        e.persist()
        setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleOnClick} ></button>
            </div>
        )
    }
}

export default DelayedButton