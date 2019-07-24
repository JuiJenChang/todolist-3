import React, { Component } from 'react';
import { GoTrashcan } from 'react-icons/go';
import './App.css'

class DataItems extends Component {

    render() {
        const listItems = this.props.arr.map(({ name, height, weight }, i) =>
                <li key={i}>
                <span className="listspan">Name:</span>{name}
                <span className="listspan">Height:</span>{height}<span>cm</span>
                <span className="listspan">Weight:</span>{weight}<span>kg</span>
                <GoTrashcan onClick={this.props.deleteItem}/>
                </li>
        );
        return <ul className="thelist">{listItems}</ul>
    }
}

export default DataItems;
