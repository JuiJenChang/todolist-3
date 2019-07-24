import React, { Component } from 'react';
import './App.css'

class DataList extends Component {

  render() {
    return (
      <div>
        <div className="title">
          <h4>Name</h4><h4>Height</h4><h4>Weight</h4>
        </div>
        <input
          value={this.props.name}
          onChange={this.props.nameHandleInput}
        />
        <input
          value={this.props.height}
          onChange={this.props.heightHandleInput}
          placeholder='cm'
        />
        <input
          value={this.props.weight}
          onChange={this.props.weightHandleInput}
          placeholder='kg'
        />
        <button onClick={this.props.addItems}>+</button>
      </div>
    );
  }
}

export default DataList;