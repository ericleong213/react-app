import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value,
    };

 
    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    };

    render() { 
        // in class component desctructing works in render() function
        const { id , value } = this.props.counter;
        const { onDelete } = this.props;

        return (
        <React.Fragment>
            <h4>Counter No.{id}</h4>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement}
            className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => onDelete(id)} className="btn btn-danger m-2 btn-sm">Delete</button>
        </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.state;
        return count === 0? "Zero" : count;
    }
}
 
export default Counter;