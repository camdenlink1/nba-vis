import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

class SearchBar extends Component {

  constructor(){
    super();
    this.state = {
      newPlayer: {}
    }
  }

  handleSubmit(e) {
      if (this.refs.name.value === "") {
        alert("no name submitted");
      } else {
        this.setState({
          newPlayer: {
            name: this.refs.name.value,
            data: {},
            uuid: uuidv4()
          }
        }, function() {
          //console.log(this.state);
          this.props.addPlayer(this.state.newPlayer)
        });
      }
      e.preventDefault();
  }

  render() {

    return (
        <div className="searchClass">
          <h3>Search</h3>
          <br />
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              Player Name:&nbsp;
              <input type="text" ref="name"/>
            </label>
            &nbsp;
            <input type="submit" value="Submit" />
          </form>
        </div>
    );
  }
}

export default SearchBar;
