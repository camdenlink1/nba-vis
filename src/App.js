import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import HeaderBar from './Components/HeaderBar';
import SearchBar from './Components/SearchBar';
import Axios from 'axios';
import ChartComponent from './Components/ChartComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: [],
    }
  }
  /*
  * Retrieves the per game data for given player
  * Currently hardcoded to LeBron on Server Side
  */
  getSinglePlayerData(playerName) {
      var ppgData = {};
      var apgData = {};
      var rpgData = {};
      Axios.get('http://localhost:8081/per_game')
        .then(function(response) {
          console.log(response.data);
          window.data = response.data;
          for (var key in response.data.seasons) {

            ppgData[key] = response.data.seasons[key]['pts_per_g'];
            apgData[key] = response.data.seasons[key]['ast_per_g'];
            rpgData[key] = response.data.seasons[key]['trb_per_g'];
          	// for (var stat in response.data.seasons[key]) {
          	// 	console.log(key + " " + stat);
            // }
          }

          console.log(ppgData);
          console.log(apgData);
          console.log(rpgData);
        })
        .catch(function(error) {
          console.log(error);
        });
  }

  parseData(data) {

  }

  handleAddPlayer(player) {
    console.log(player);
    let players = this.state.players;
    players.push(player);
    this.setState({
      players: players
    });
    this.state.players.map(player => this.getSinglePlayerData(player.name));
  }

  render() {
    return (
      <MuiThemeProvider>
        <HeaderBar />
        <SearchBar addPlayer={this.handleAddPlayer.bind(this)}/>
        <ChartComponent />
      </MuiThemeProvider>
    );
  }
}

export default App;
