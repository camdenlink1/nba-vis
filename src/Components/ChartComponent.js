import React, { Component } from 'react';

class ChartComponent extends Component {

  getPPGMax(){
    return this.props.ppg[0];
  }

  render() {
    return (
        <div className="chartArea">
          <h1>{this.getPPGMax()}</h1>
        </div>
    );
  }
}

export default ChartComponent;
