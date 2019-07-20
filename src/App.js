import React, { Component } from 'react';
import DataList from './DataList';
import DataItems from './DataItems';

class App extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
      name: '',
      height: '',
      weight: '',
      key: '',
    }
  }

  nameHandleInput = e => {
    const itemText = e.target.value
    this.setState({
        name: itemText,
        key: Date.now()
    })
    //console.log(this.state.name)
  }

  heightHandleInput = e => {
    const itemText2 = e.target.value
    this.setState({
        height: itemText2, 
        key: Date.now()
    })
    //console.log(this.state.height)
  }

  weightHandleInput = e => {
    const itemText3 = e.target.value
    this.setState({
        weight: itemText3, 
        key: Date.now()
    })
    //console.log(this.state.weight)
  }
  
  addItems = e => {
    e.preventDefault()
    const newItem = this.state.name
    const newItem2 = this.state.height
    const newItem3 = this.state.weight
    if(newItem !== ''&& newItem2 !=='' && newItem3 !== '') {
      const items = [...this.state.items, newItem, newItem2, newItem3]
      this.setState({
          items: items,
          name: '',
          height: '',
          weight: '',
          key: '',
      })
    }
    console.log(this.state.items)
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
        <DataList 
          nameHandleInput={this.nameHandleInput}
          heightHandleInput={this.heightHandleInput}
          weightHandleInput={this.weightHandleInput}
          addItems={this.addItems}
          name={this.state.name}
          height={this.state.height}
          weight={this.state.weight}
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
