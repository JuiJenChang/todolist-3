import React, { Component } from 'react';

class Removeitems extends Component {
    createTasks = item => {
        return (
            <div> 
                <li key={item.key}>
                {item.text}
                <button onClick={() => this.props.deleteItem(item.key)}>x</button>
                </li>
            </div>
        )
    }

    render() {
        const listItem = this.props.addList
        const nameList = listItem.map(this.createTasks)
        return (
            <div>
                <ul>{nameList}</ul>
            </div>
        );
    }
}

export default Removeitems;