import React, { Component } from 'react';
import DataList from './DataList';
import DataItems from './DataItems';

class App extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
      data: {
        name: '',
        height: '',
        weight: '',
      }
    }
  }

  nameHandleInput = e => {
    const itemText = e.target.value
    this.setState({
      data: {
        ...this.state.data,
        name: itemText,
      }
    })
  }

  heightHandleInput = e => {
    const itemText2 = e.target.value
    this.setState({
      data: {
        ...this.state.data,
        height: itemText2,
      }
    })
  }

  weightHandleInput = e => {
    const itemText3 = e.target.value
    this.setState({
      data: {
        ...this.state.data,
        weight: itemText3,
      }
    })
  }

  addItems = e => {
    e.preventDefault()
    const newItem = this.state.data
    if (newItem.name !== '' && newItem.height !== '' && newItem.weight !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        data: {
          name: '',
          height: '',
          weight: '',
        }
      })
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter((item, i) => {
      return i !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  render() {
    return (
      <div>
        <DataList
          nameHandleInput={this.nameHandleInput}
          heightHandleInput={this.heightHandleInput}
          weightHandleInput={this.weightHandleInput}
          addItems={this.addItems}
          name={this.state.data.name}
          height={this.state.data.height}
          weight={this.state.data.weight}
        />
        <DataItems
          arr={this.state.items}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}
export default App;


/* for(var i = 0; i<this.state.items.length; i++ ){
      if(this.state.items[i] === target) {
        this.state.items.splice(i, 1);
        this.setState({
          items: this.state.items,
        })
      }
    }
    console.log(this.state.items)*/