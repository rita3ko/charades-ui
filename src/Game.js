import React from 'react';
import PhraseGenerator from './components/PhraseGenerator'
import PhraseSubimitter from './components/PhraseSubmitter'
import { Redirect } from 'react-router';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {gameId: null};
    if(this.props.match.params) {
      this.state.gameId = this.props.match.params.id
    }

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
  }

  async handleClick() {
    fetch("https://charades-api.rita.workers.dev/games", {method: 'POST'})
    .then(response => response.json())
    .then(data => {
        this.props.history.push(`/${data.id}`);
        this.setState({ gameId: data.id});
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleJoin() {
    let gameId = this.state.value
    this.props.history.push(`/${gameId}`);
    this.setState({gameId: this.state.value});
  }


  render() {
    if (this.state.gameId == null) {
      return (
        <div class="flex flex-col pt-12 mx-auto m-6 max-w-md">
          <div class="flex-1 bg-pink border-seafoam border-2  m-5">
            <div class="flex flex-col items-center m-2 p-4 ">
              <div class="flex-1 m-2">
                <p class="text-red font-black text-2xl">Start a new game</p>
              </div>
              <div class="flex-1 p-2">
                <button onClick={this.handleClick} class="hover:bg-red hover:text-pink text-center">
                    ✨ New game!
                </button>
              </div>
            </div>
          </div>
          <div class="flex-1 bg-pink border-seafoam border-2  m-5">
            <div class="flex flex-col items-center m-2 p-2 ">
              <div class="flex-1 m-2 text-center ">
                <h2 class="text-red font-black font-sans text-2xl">Join game</h2>
              </div>
              <div class="flex-1 text-red items-center text-center px-4 py-2 m-2">
                <label class="block text-red text-sm font-bold ">
                  Game ID: 
                  </label>
                  <input type="text" value={this.state.value} onChange={this.handleChange} class="shadow bg-seafoam appearance-none border-2 rounded py-2 px-4 leading-tight focus:outline-none focus:shadow-outline"></input>
                  <button class="hover:bg-red hover:text-pink m-2" onClick={this.handleJoin}>🙋🏻‍♀️ Join</button>
              </div>
            </div>
          </div>
        </div>
      )
      
    } else {
      return (
        <div class="flex justify-center flex-col items-center">
          <div class="flex bg-pink text-center content-center m-2  border-seafoam border-2">
            <div class="flex-1  m-2 p-1 text-red text-md font-bold">
              <h2 >Game ID:</h2>
            </div>
            <div class="flex-1 m-2 p-1" >
              <h2 class="text-md text-red ">{this.state.gameId}</h2>
            </div>
          </div>
          <div class="flex">
            <div class="flex-auto p-2">
              <PhraseSubimitter gameId={this.state.gameId}/>
            </div>
            <div class="flex-1 p-2">
              <PhraseGenerator gameId={this.state.gameId}/>
            </div>
          </div>
        </div>
      )
    }
  }

}

export default Game;