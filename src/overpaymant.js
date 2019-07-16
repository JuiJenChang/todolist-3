import React, { Component } from 'react';
import './App.css';

class Overpaymants extends Component {
  render() {
    return (
      <div>
          <input
            value={this.props.person.name}
            onChange={this.props.handleInput}
          />
          <button onClick={() => this.props.addItems}>+</button>
      </div>
    )
  }
}

export default Overpaymants;