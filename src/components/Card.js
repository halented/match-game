import React, { Component } from 'react'

class Card extends Component {
    render(){
        return (
            <div className='card' 
            id={this.props.num} style={{backgroundColor: 'black'}}  
            onClick={() => this.props.flip(this.props.num, this.props.color)}></div>
        )
    }
}

export default Card;