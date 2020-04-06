import React from 'react';

class PhraseGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {phrase: null, gameId: props.gameId}

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  
  async handleClick(event) {
    fetch(`https://charades-api.rita.workers.dev/games/${this.state.gameId}/phrase`, {method: 'GET'})
    .then(response => response.text())
    .then(data => this.setState({ phrase: data }));
    event.preventDefault();
  }

  render() {
      if(this.state.phrase == null) {
        return (
            <div class="flex flex-col items-center w-64 border-seafoam bg-pink m-2 border-2 h-48">
                <button onClick={this.handleClick} class="flex-initial hover:bg-red hover:text-pink">
                    Draw phrase! 🔖
                </button>
                <div>
                </div>
            </div>
        )
      } else {
          return (
              <div class="flex w-64 border-seafoam items-center flex-col bg-pink h-48">
                <button onClick={this.handleClick} class="hover:bg-red hover:text-pink m-2"> 
                    Draw phrase! 🔖
                </button>
                <div>
                  <h1 class="text-xl py-2 px-4 m-2 text-red">{this.state.phrase}</h1>
                </div>
              </div>
          )
      }
  }

}
export default PhraseGenerator