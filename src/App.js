import React, { Component } from 'react';
import Card from './components/Card';
import ClickIn from './ClickIn';
import './App.css';

class App extends Component {
  state = {
    colors: ["skyblue", "red", "teal", "yellow", "darkorange", "aquamarine", "springgreen", "purple", "pink", "coral"],
    cardHash: {1: '',2: '',3: '',4: '',5: '',6: '',7: '',8: '',9: '', 10:'',11: '',12: ''},
    flippedCards: [],
    started: false
  }

  start = () => {
    console.log("got there")
    this.setState({started: true})
  }

  flip = (id, color) => {
    if(this.state.cardHash[id] === ''){
      let el = document.getElementById(id)
      el.style.backgroundColor = color
      let newArr = this.state.flippedCards.slice()
      newArr.push(id)
      this.setState({flippedCards: newArr})
      this.checkMatch(id)
    }
    else {
      let newArr = this.state.flippedCards.slice()
      newArr.push(id)
      console.log("added card to the flipped cards array", newArr)
      this.setState({flippedCards: newArr})
      this.checkMatch(id)
    }
  }

  checkMatch = (id) => {
    if(this.state.flippedCards.length === 1){
      let cardHash = this.state.cardHash
      let secondCard = document.getElementById(id)
      console.log( "first card:", this.state.cardHash[this.state.flippedCards[0]], "second card:", secondCard.style.backgroundColor)
      debugger;
      if(this.state.cardHash[this.state.flippedCards[0]] === secondCard.style.backgroundColor){
        console.log("It's a match dog!")
      }
      else {
        console.log("not a match, dog.")
      }
    }
  }

  matchedPair = () => {
    console.log("inside matchedPair")
    let todo = this.state.flippedCards
    console.log(todo)
  }

  render() {
    return (
      <div className="App">
        {this.state.started?
        Object.keys(this.state.cardHash).map(num=>{
          return <Card num={num} color={this.state.cardHash[num]}flip={this.flip}/>
        })
        :
        <ClickIn start={this.start}/>
        }
        </div>
    );
  }
}

export default App;