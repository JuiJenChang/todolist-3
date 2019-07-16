import React, { Component } from 'react';

class Removeitems extends Component {
    render() {
        const nameList = this.props.addList.map((item, i) =>
          <li key={i}>{item}</li>
        )
        console.log(nameList);
        return (
            <div>
                <ul>{nameList}</ul>
            </div>
        );
    }
}
export default Removeitems;