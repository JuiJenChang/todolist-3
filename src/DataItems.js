import React, {Component} from 'react';
import './App.css'

class DataItems extends Component {
    
    render() {
        const listItems = this.props.arr.map(({name, height, weight}, i) => 
        <li key={i}>
            {name}{height}{weight}
        <button onClick={this.props.deleteItem}>x</button>
        </li>
        );
        return  <ul>{listItems}</ul>
    }
}

export default DataItems;
