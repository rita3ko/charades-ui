import React from 'react';

class PhraseGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {gameId: props.gameId, value: ''}


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    fetch(`https://charades-api.rita.workers.dev/games/${this.state.gameId}/phrase`, {method: 'POST', body: `phrase=${this.state.value}`})
    .then(response => response.text())
    .then(data => this.setState({ value: '' }));
    event.preventDefault();
  }

  render() {
    return (
        <div class="flex justify-between flex-col border-2 p-2 border-seafoam bg-pink max-w-md">
          <div class="flex-1 m-2 text-red text-md text-light whitespace-normal">Add some phrases to the bucket for your friends to draw from and act out.</div>
            <form onSubmit={this.handleSubmit}>
              <div class="flex-1 m-2">
                <label class="block text-red text-md font-bold">
                  Enter phrase:
                </label>
              </div>
              <div class="flex-1 m-2">
                <input type="text" value={this.state.value} onChange={this.handleChange} class="shadow bg-seafoam appearance-none border-2 rounded py-2 px-4 leading-tight focus:outline-none focus:shadow-outline border-red text-red"/>
              </div>
              <div class="flex-1 m-2">
                <input type="submit" value="Submit phrase! 📨" class="hover:bg-red hover:text-pink bg-pink text-red border-2 border-red font-bold py-2 px-4 rounded"/>
              </div>
            </form>
            <div class="flex-1 m-2 text-red text-md text-light whitespace-normal">💡 <b>Some ideas to get you started:</b> think of your favorite books, movies, characters, writers, podcasts, places you visited! </div>
        </div>
    )
  }

}
export default PhraseGenerator