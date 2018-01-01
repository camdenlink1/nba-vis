import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import HeaderBar from './Components/HeaderBar';
import SearchBar from './Components/SearchBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
  }

  handleAddPlayer(player) {
    console.log(player);
    let players = this.state.players;
    players.push(player);
    this.setState({
      players: players
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <HeaderBar />
        <SearchBar addPlayer={this.handleAddPlayer.bind(this)}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
