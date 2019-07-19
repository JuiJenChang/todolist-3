import React, {Component} from 'react';

class DataList extends Component {
    
    render() {
        return (
            <div>
                    <input 
                      value={this.props.name}
                      onChange={this.props.nameHandleInput}
                    />
                    <input 
                      value={this.props.height}
                      onChange={this.props.heightHandleInput}
                    />
                    <input 
                      value={this.props.weight}
                      onChange={this.props.weightHandleInput}
                    />
                <button onClick={this.props.addItems}>+</button>
            </div>
        );
    }  
}

export default DataList;