import React, { Component } from 'react';

class Counter extends Component {

    componentDidUpdate(prevProps,preStates,snapShort) {
        console.log("prevProps",prevProps);
    }

    componentWillUnmount() {
        console.log('Counter-Unmount', this.props.counter.id);
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0? "Zero" : value;
    }
    render() { 
        console.log('Counter-rendered')
        // in class component desctructing works in render() function
        const { id , value } = this.props.counter;
        const { onDelete } = this.props;

        return (
        <React.Fragment>
            <h4>Counter No.{id}</h4>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => onDelete(id)} className="btn btn-danger m-2 btn-sm">Delete</button>
        </React.Fragment>
        );
    }

}
 
export default Counter;