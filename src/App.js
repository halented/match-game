import React, { Component } from 'react';
import Card from './components/Card'
import './App.css';

class App extends Component {
  state = {
    colors: ["skyblue", "red", "teal", "yellow", "darkorange", "aquamarine", "springgreen", "purple", "pink", "coral"],
    cardHash: {1: '',2: '',3: '',4: '',5: '',6: '',7: '',8: '',9: ''},
    flippedCards: []
  }

  flip = (id, color) => {
    if(this.state.cardHash[id] === ''){
      let el = document.getElementById(id)
      el.style.backgroundColor = color
      let newArr = this.state.flippedCards.slice()
      newArr.push(id)
      this.setState({flippedCards: newArr, cardHash: newHash})
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
    debugger;
  }


  render() {
    return (
      <div className="App">
        {/* {Object.keys(this.state.cardHash).map(num=>{
          return <Card num={num} color={this.state.colors[Math.floor(Math.random()*9)]} flip={this.flip}/>
        })} */}
        <h1>match 'em</h1>
      </div>
    );
  }
}

export default App;