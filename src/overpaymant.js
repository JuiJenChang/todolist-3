import React, { Component } from 'react';
import './App.css';

class Overpaymants extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Overpaymants</h2>
        </div>
        <div>
          <label>Year</label>
          <label>Month</label>
          <label>Amount</label>
        </div>
        <form onSubmit={this.props.addOverpaymants}>
            <input
              type="text"
              value={this.props.monthly.year}
              onChange={this.props.overpaymantsYear}
            />
            <input
              type="number"
              value={this.props.monthly.month}
              onChange={this.props.overpaymantsMonth}
            />
            <input
              type="text"
              value={this.props.monthly.amount}
              onChange={this.props.overpaymantsAmount}
            />
            <button type="submit"> + </button>
          </form>
      </div>
    )
  }
}

export default Overpaymants;