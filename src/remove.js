import React, { Component } from 'react';

class Removeitems extends Component {
    createTasks = item => {
        return (
            <div>
                <li key={item.key}>
                    {item.year}{item.month}{item.amount}
                    <button onClick={() => this.props.removeItems(item.key)}> X </button>
                </li>
            </div>
        )
    }
    render() {
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTasks)
        return (
        <ul>{listItems}</ul>
        )
    }
}

export default Removeitems;