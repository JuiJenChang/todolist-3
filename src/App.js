import React, { Component } from 'react';
import Overpaymants from './overpaymant';
import Removeitems from './remove';

class App extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
      monthly: {
        year: '',
        month: '1',
        amount: '',
      }
    }
  }

  overpaymantsYear = e => {
    const itemtext = e.target.value
    const monthly = { year: itemtext }
    this.setState({
      monthly,
    })
  }

  overpaymantsMonth = e => {
    const itemtext = e.target.value
    const monthly = { month: itemtext }
    this.setState({
      monthly,
    })
  }

  overpaymantsAmount = e => {
    const itemtext = e.target.value
    const monthly = { amount: itemtext }
    this.setState({
      monthly,
    })
  }

  addOverpaymants = e => {
    e.preventDefault()
    const newItem = this.state.monthly
    if (newItem.year !== '') {
      if (newItem.month !== '1') {
        if (newItem.amount !== '') {
          const items = [...this.state.items, newItem]
          this.setState({
            items: items,
            monthly: {
              year: '',
              month: '1',
              amount: '',
            }
          })
        }
      }
    }
  }

  removeItems = key => {
    const newList = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: newList,
    })
  }

  render() {
    return (
      <div>
        <Overpaymants
          overpaymantsYear={this.overpaymantsYear}
          overpaymantsMonth={this.overpaymantsMonth}
          overpaymantsAmount={this.overpaymantsAmount}
          monthly={this.state.monthly}
          addOverpaymants={this.addOverpaymants} />
        <Removeitems
          entries={this.state.items}
          removeItems={this.removeItems} />
      </div>
    );
  }
}
export default App;
