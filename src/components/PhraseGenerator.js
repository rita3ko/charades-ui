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
    return (
      <div class="flex max-w-md border-seafoam items-center flex-col bg-pink align-middle p-2 border-2">
        <button onClick={this.handleClick} class="hover:bg-red hover:text-pink m-2"> 
            Draw phrase! 🔖
        </button>
        <div class="bg-seafoam m-4 border-2 border-red">
          {this.state.phrase == null &&
            <h3 class="py-2 px-4 m-2 text-red">Your phrase will appear here! 🤪</h3>
          }
          
          <h2 class="py-2 px-4 m-2 text-red">{this.state.phrase}</h2>
        </div>
      </div>
    )
  }

}
export default PhraseGenerator