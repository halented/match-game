import React, { Component } from 'react'

export default class Clickin extends Component {

    render(){
        return (
            <div id='clickin' onClick={this.props.start}>Match game rules: keep matching until every tile is white! Click me to get started.</div>
        )
    } 
}