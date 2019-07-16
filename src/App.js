import React, { Component } from 'react';
import Overpaymants from './overpaymant';
import Removeitems from './remove';

class App extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
      person: {
        name: '',
      }
    }

    this.handleInput = this.handleInput.bind(this);
    this.addItems = this.addItems.bind(this);
  }

  handleInput(e) {
    this.setState({
      person: {
        name: e.target.value,
      }
    })
    //console.log(this.state.person)
  }

  addItems() {
    const newItem = this.state.person
    if (newItem.name !== '') {
      const task = this.state.items.push(this.state.person);
      this.setState({
        items: task,
        person: {
          name: '',
        }
      })
    }
    //console.log(this.state.items)
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  render() {
    return (
      <div>
        <Overpaymants
          person={this.state.person}
          handleInput={this.handleInput}
          addItems={this.addItems}
        />
        <Removeitems
          addList={this.state.items}
        />
      </div>
    );
  }
}
export default App;
