import React, { Component } from 'react';
import Card from './components/Card'
import './App.css';

class App extends Component {
  state = {
    colors: ["skyblue", "red", "teal", "yellow", "darkorange", "aquamarine", "springgreen", "purple", "pink", "coral"],
    cards: {1: '',2: '',3: '',4: '',5: '',6: '',7: '',8: '',9: ''},
    flippedCards: []
  }

  flip = (id) => {
    if(this.state.cards[id] === ''){
      let ran = this.state.colors[Math.floor(Math.random()*9)]
      let el = document.getElementById(id)
      el.style.backgroundColor = ran
      let newHash = Object.assign({}, this.state.cards)
      newHash[id] = ran
      let newArr = this.state.flippedCards.slice()
      newArr.push(id)
      this.setState({flippedCards: newArr, cards: newHash})
      this.checkMatch(id)
    }
    else {
      let newArr = this.state.flippedCards.slice()
      newArr.push(id)
      this.setState({flippedCards: newArr})
      this.checkMatch(id)
    }
  }

  checkMatch = (id) => {
    if(this.state.flippedCards.length === 1){
      let cards = this.state.cards
      let secondCard = document.getElementById(id)
      console.log( "first card:", this.state.cards[this.state.flippedCards[0]], "second card:", secondCard.style.backgroundColor)
      debugger;
      if(this.state.cards[this.state.flippedCards[0]] === secondCard.style.backgroundColor){
        console.log("It's a match dog!")
      }
      else {
        console.log("not a match, dog.")
      }
    }
  }

  // if(this.state.flippedCards.length === 1){
  //   if(this.state.cards[this.state.flippedCards[0]] === this.state.cards[this.state.flippedCards[1]]){
  //     this.matchedPair()
  //   }
  // }
  // else if(this.state.flippedCards.length === 2){
  //   console.log("length is two")
  // }
  //   else {
  //     let el1 = document.getElementById(this.state.flippedCards[1])
  //     let el2 = document.getElementById(this.state.flippedCards[0])
  //     el1.style.color= 'black'
  //     el2.style.color= 'black'
  //   }
  // }

  matchedPair = () => {
    console.log("inside matchedPair")
    let todo = this.state.flippedCards
    console.log(todo)
    debugger;
  }


  render() {
    return (
      <div className="App">
        {Object.keys(this.state.cards).map(num=>{
          return <Card num={num} flip={this.flip}/>
        })}
        <h1>match 'em</h1>
      </div>
    );
  }
}

export default App;