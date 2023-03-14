import React, { Component } from 'react';

class Child2 extends Component {
    constructor(){
        super()
        this.state = {
            number: 0
        }
    }
    clickHandler = () => {
        this.setState(prevState => ({
            number: this.state.number +1,
        }))
    }


    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Plus one</button>
                <h3>number of products are {this.state.number}</h3>
            </div>
        );
    }
}

export default Child2;