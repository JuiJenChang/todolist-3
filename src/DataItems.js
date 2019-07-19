import React, {Component} from 'react';
import './App.css'

class DataItems extends Component {
    
    render() {
        const listItems = this.props.arr.map((item, index) => 
        <li key={index}>
            {item.text}
        </li>
        );
        return  <ul>{listItems}</ul>
    }
}

export default DataItems;
