import React, {Component} from 'react';
import './App.css'

class DataItems extends Component {
    
    render() {
        const listItems = this.props.arr.map((item, i) => 
        <li key={i}>
            {item}
        <button onClick={this.props.deleteItem}>x</button>
        </li>
        );
        return  <ul>{listItems}</ul>
    }
}

export default DataItems;
